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
    background-color: brown;
    width: 100vw;
    height: 100vh;
    scroll-snap-align: start;
`

function Contact({ myRef, scrollYGlobal, educationRef }) {
  const [showComponent, setShowComponent] = useState(false);

  //SCROLLING
    useEffect(() => {
      const divElement = myRef.current;
      const halfwayPoint = divElement.scrollHeight / 5;
      if (Math.round(scrollYGlobal) > (3001)) {
        setShowComponent(true);
      }
      if (Math.round(scrollYGlobal) <= (3001)) {
        setShowComponent(false);
      }

  }, [scrollYGlobal])

  return (
    <>
    <Container ref={myRef}>
      <ContactForm />
      {showComponent && 
      (
       <>
        <Canvas camera={{fov: 95, far: 1000, near: 0.1, 
          position: [0, 150, 35]}} 
          gl={{ antialias: false }} // Disable antialiasing for performance
          pixelRatio={0.0} // Set the pixel ratio to half (adjust as needed)
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
              {/* <Html >
                <ContactForm />
              </Html> */}
            </Suspense>
        </Canvas>
        </>
      )}
    </Container>
    </>
  )
}

function CameraConsole({ showComponent }) {
  let targetPosition = new Vector3(0, 110, 0);
  const { camera } = useThree();

  useEffect(() => {
    if (!showComponent) return;
    // gsap.to(camera.position, {
    //   x: 0,
    //   y: 8, 
    //   z: 35,
    //   duration: 3,
    // });
    
  }, [showComponent]);
  
  useFrame((state) => {
    state.camera.lookAt(targetPosition)
    gsap.to(targetPosition, {
      x: 0,
      y: 30,
      z: 0,
      duration: 2,
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
    <p style={{textAlign: 'center', color: 'white', fontSize: '2.2rem'}}>{progress} % Loaded</p>
    </div>
    </Html>
}

export default Contact