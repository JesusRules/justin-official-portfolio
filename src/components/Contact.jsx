import React, { useState, useRef, useEffect, useLayoutEffect, Suspense } from 'react'
import { styled } from 'styled-components'
import { Canvas, useThree } from '@react-three/fiber'
import { Church } from './threejsscripts/Church'
import { Environment, Sky } from '@react-three/drei';
import { Vector3 } from 'three';
import gsap from 'gsap';
import ContactForm from './smaller-components/ContactForm';
import { useSectionActivity } from '../hooks/useSectionActivity';
import SceneReady from './threejsscripts/SceneReady';
import { imagesReady, preloadImage } from '../utils/imageReady';

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

function Contact({ myRef, scrollYGlobal, setRefReached, onReady }) {
  const { isVisible } = useSectionActivity(myRef);
  const [showComponent, setShowComponent] = useState(false);
  const [ticked, setTicked] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  const [sceneReady, setSceneReady] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const ready = imagesLoaded && (isMobile || sceneReady || ticked);
  const contactForm = useRef();
  const footer1Ref = useRef();
  const footer2Ref = useRef();

  useEffect(() => {
    const query = window.matchMedia('(max-width: 767px)');
    const update = () => {
      if (query.matches) setSceneReady(false);
      setIsMobile(query.matches);
    };
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    let cancelled = false;
    Promise.all([
      imagesReady(myRef.current),
      preloadImage('/img/contact/image-done.jpg'),
      preloadImage('/img/contact/image-done-2.jpg'),
    ]).then(() => { if (!cancelled) setImagesLoaded(true); });
    return () => { cancelled = true; };
  }, [myRef]);

  useEffect(() => { onReady?.(ready); }, [ready, onReady]);

  useEffect(() => {
    if (!ready) return;
    const atSection = Math.abs(scrollYGlobal - myRef.current.offsetTop) <= 1;
    if (atSection) {
      setShowComponent(true);
      setRefReached(true);
    } else if (showComponent) {
      setTicked(true);
    }
  }, [ready, scrollYGlobal, myRef, showComponent, setRefReached]);

  useEffect(() => {
    if (!showComponent) return;
    const context = gsap.context(() => {
      gsap.set(contactForm.current, { pointerEvents: 'none' });
      gsap.to([contactForm.current, footer1Ref.current, footer2Ref.current], {
        opacity: 1,
        duration: 1,
        delay: isMobile ? 0.75 : 2,
        onStart: () => { contactForm.current.style.pointerEvents = 'all'; },
      });
    }, myRef);
    return () => context.revert();
  }, [showComponent, isMobile, myRef]);

  return (
    <Container id="div6" ref={myRef} className="main-div">
      <Footer ref={footer1Ref}/>
      <SVGContent ref={footer2Ref}>
        <p>By Justin Bernard</p>
        <div className="svg-images">
          <a target="_blank" title="Facebook" href="https://www.facebook.com/justin.bernard320"><img src="/svg/footer/facebook-foot.svg"/></a>
          <a target="_blank" title="GitHub" href="https://github.com/bern0241"><img src="/svg/footer/github-foot.svg"/></a>
          <a target="_blank" title="LinkedIn" href="https://www.linkedin.com/in/justin-bernard32/"><img src="/svg/footer/linkedin-foot.svg"/></a>
          <a target="_blank" title="YouTube" href="https://www.youtube.com/channel/UCx8Il9AsAJZnIs9BwXY_M7g"><img src="/svg/footer/youtube-foot.svg"/></a>
          <a target="_blank" title="Instagram" href="https://www.instagram.com/justin.bernard320/"><img src="/svg/footer/instagram-foot.svg"/></a>
        </div>
      </SVGContent>
      <ContactForm contactForm={contactForm} />
      {!isMobile && !ticked ? (
        <Canvas dpr={[1, 1.5]} frameloop={!sceneReady ? 'always' : isVisible ? 'demand' : 'never'}
          camera={{ fov: 95, far: 1000, near: 0.1, position: [0, 150, 35] }}
          gl={{ antialias: false }}
          style={{ width: '100%', height: '100%', visibility: sceneReady ? undefined : 'hidden' }}>
          <Suspense fallback={null}>
            <ambientLight color="white" intensity={3} />
            <Sky />
            <Environment preset="night" />
            <Church />
            <CameraConsole active={showComponent} />
            <SceneReady onReady={setSceneReady} />
          </Suspense>
        </Canvas>
      ) : (
        <div style={{ width: '100%', height: '100%',
          backgroundImage: `url(/img/contact/${isMobile ? 'image-done-2' : 'image-done'}.jpg)`,
          backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
        }}/>
      )}
    </Container>
  );
}

function CameraConsole({ active }) {
  const { camera, invalidate } = useThree();
  const target = useRef(new Vector3(0, 110, 0));

  useLayoutEffect(() => {
    camera.lookAt(target.current);
    invalidate();
  }, [camera, invalidate]);

  useEffect(() => {
    if (!active) return;
    const animation = gsap.timeline({
      onUpdate: () => {
        camera.lookAt(target.current);
        invalidate();
      },
    });
    animation.to(target.current, { y: 30, duration: 2 }, 0);
    animation.to(camera.position, { x: 0, y: 8, z: 35, duration: 2 }, 0);
    return () => animation.kill();
  }, [active, camera, invalidate]);

  return null;
}

export default Contact;
