import React, { useState, useRef, useEffect, Suspense } from 'react'
import { styled } from 'styled-components'
import { Canvas, useFrame, useLoader, useThree, extend  } from '@react-three/fiber'
import { Church } from './threejsscripts/Church'
import { OrbitControls, Html, Environment, Sky, PerspectiveCamera, Circle, useEnvironment, shaderMaterial, useProgress  } from '@react-three/drei';
import { Euler, Vector3  } from 'three';
import * as THREE from "three";
import gsap from 'gsap';
import ContactForm from './smaller-components/ContactForm';

const Container = styled.div`
   position: relative;
    width: 100vw;
    height: 100vh;
    scroll-snap-align: start;
`

const Footer = styled.div`
scroll-snap-type: none; 
  width: 100vw;
  position: fixed;
  height: 2rem;
  background-color: #00000079;
  position: absolute;
  bottom: 0;
  z-index: 10000;
  pointer-events: none;
  opacity: 0;
  @media only screen and (max-width: 426px) { //mobile 425 large
    display: none;
  }
`;

const SVGContent = styled.div`
scroll-snap-type: none; 
    opacity: 0;
    width: 94%;
    height: 2rem;
    position: absolute;
    bottom: 0;
    z-index: 100000;
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
    margin: 0 auto;
    left: 0;
    right: 0;
    align-items: center;
    p {
      color: white;
      font-weight: 500;
    }
    img {
      cursor: pointer;
      width: 1.5rem;
      height: 1.5rem;
      object-fit: cover;
      z-index: 10000;
    }
    .svg-images {
      display: flex;
      gap: 5px;
      align-items: center;
    }
    @media only screen and (max-width: 426px) { //mobile 425 large
    display: none;
  }
`;

const BackgroundImage = styled.img`
width: 100vw;
height: 100vh;
object-fit: cover;
position: absolute;
z-index: 1111; //111
`

function Contact({ myRef, scrollYGlobal, educationRef, scrollToContact, setRefReached }) {
  const [showComponent, setShowComponent] = useState(false);
  const [ticked, setTicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const contactForm = useRef();
  const footer1Ref = useRef();
  const footer2Ref = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth < 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };
    handleResize();
        
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //SCROLLING
    useEffect(() => {
      const divElement = myRef.current;
      // console.log(divElement.offsetTop - divElement.scrollHeight + 100);
      // if (Math.round(scrollYGlobal) > (divElement.offsetTop - divElement.scrollHeight + 100)) { //- 3008 very top
      //   setShowComponent(true);
      // }
      // if (Math.round(scrollYGlobal) <= (divElement.offsetTop - divElement.scrollHeight + 100)) {
      //   if (showComponent) {
      //     setTicked(true);
      //   }
      // }
      // if (Math.round(scrollYGlobal) == divElement.offsetTop) {
      // }
      
      if (Math.round(scrollYGlobal) == divElement.offsetTop) {
        scrollToContact();
        setShowComponent(true);
        setRefReached(true);
      }
      if (Math.round(scrollYGlobal) > divElement.offsetTop || Math.round(scrollYGlobal) < divElement.offsetTop) {
        if (showComponent) {
          setTicked(true);
        }
      }
  }, [scrollYGlobal])


  // NON-MOBILE!
  useEffect(() => {
    if (showComponent && !isMobile) {
      contactForm.current.style.pointerEvents = 'none';
      gsap.to(contactForm.current, {
        opacity: 1,
        duration: 1,
        delay: 2,
        onStart: () => {
          contactForm.current.style.pointerEvents = 'all';
        }
      })
      gsap.to(footer1Ref.current, {
        opacity: 1,
        duration: 1,
        delay: 2
      })
      gsap.to(footer2Ref.current, {
        opacity: 1,
        duration: 1,
        delay: 2
      })
    }
  }, [showComponent, isMobile])

  //MOBILE!
  useEffect(() => {
    if (showComponent && isMobile) {
      contactForm.current.style.pointerEvents = 'none';
      gsap.to(contactForm.current, {
        opacity: 1,
        duration: 1,
        delay: .75,
        onStart: () => {
          contactForm.current.style.pointerEvents = 'all';
        }
      })
      gsap.to(footer1Ref.current, {
        opacity: 1,
        duration: 1,
        delay: .75
      })
      gsap.to(footer2Ref.current, {
        opacity: 1,
        duration: 1,
        delay: .75
      })
    }
  }, [showComponent, isMobile])

  return (
    <>
    {(!showComponent && !isMobile) && (
      <BackgroundImage src="/img/contact/contact-background-blur.jpg" alt="Background Image" />
    )}

    <Container id='div6' ref={myRef} className='main-div'>
      <Footer ref={footer1Ref}/>
      <SVGContent ref={footer2Ref}>
          <p>By Justin Bernard</p>
          <div className='svg-images'>
          <a target="_blank" title="Facebook" href="https://www.facebook.com/justin.bernard320"><img src="/svg/footer/facebook-foot.svg"/></a>
          <a target="_blank" title="GitHub" href="https://github.com/bern0241"><img src="/svg/footer/github-foot.svg"/></a>
          <a target="_blank" title="LinkedIn" href="https://www.linkedin.com/in/justin-bernard32/"><img src="/svg/footer/linkedin-foot.svg"/></a>
          <a target="_blank" title="YouTube" href="https://www.youtube.com/channel/UCx8Il9AsAJZnIs9BwXY_M7g"><img src="/svg/footer/youtube-foot.svg"/></a>
          <a target="_blank" title="Instagram" href="https://www.instagram.com/justin.bernard320/"><img src="/svg/footer/instagram-foot.svg"/></a>
          </div>
      </SVGContent>

      {!isMobile && (
        <>
        <ContactForm contactForm={contactForm} />
        {(showComponent && !ticked) && 
        (
        <>
          <Canvas ref={canvasRef} camera={{fov: 95, far: 1000, near: 0.1, 
            position: [0, 150, 35]}} 
            gl={{ antialias: false }} // Disable antialiasing for performance
            // pixelRatio={0.5} // Set the pixel ratio to half (adjust as needed)
            style={{width: '100%', height: '100%', backgroundColor: '#c8f9ff', 
            backgroundImage: 'url(/img/contact/contact-background-blur.jpg)' ,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'}} 
          >
              <Suspense fallback={<Loader />}>
                <ambientLight color='white' intensity={3} />
                {/* <directionalLight intensity={2}  castShadow  position={[-100, 30, 50]} /> */}
                {/* <directionalLight intensity={2}  castShadow position={[62, 40, -20]} /> */}
                <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
                <Sky />
                <Environment preset="night" />
                <Church />
                <CameraConsole showComponent={showComponent} />
              </Suspense>
          </Canvas>
          </>
        )}
        {(showComponent && ticked) && 
        (
          <>
          <div style={{width: '100vw', height: '100vh', 
                backgroundImage: 'url(/img/contact/image-done.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'cover'}}/>
          </>
        )}
        </>
      )}
      {isMobile && (
        <>
        <ContactForm contactForm={contactForm} />
          <div style={{width: '100vw', height: '100vh', 
                backgroundImage: 'url(/img/contact/image-done-2.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'cover'}}/>
        </>
      )}
    </Container>
    </>
  )
}

function CameraConsole({ showComponent }) {
  let targetPosition = new Vector3(0, 110, 0);
  const { camera } = useThree();

  useFrame((state) => {
    state.camera.lookAt(targetPosition);
    gsap.to(targetPosition, {
      x: 0,
      y: 30,
      z: 0,
      duration: 2,
      onComplete: () => {
        // setShowOnce2(true);
      }
    });
    gsap.to(camera.position, {
        x: 0,
        y: 8, 
        z: 35,
        duration: 2,
    });
  })

  return null;
}

function Loader() {
  const { progress } = useProgress()
  return <Html center>
    <div style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',  margin: 'auto'}}>
    <p style={{textAlign: 'center', color: 'white', fontSize: '2.2rem'}}>{parseInt(progress)} % Loaded</p>
    </div>
    </Html>
}

export default Contact