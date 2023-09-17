import React, { useState, useRef, useEffect, Suspense } from 'react'
import { styled } from 'styled-components'
import { Canvas, useFrame, useLoader, useThree, extend  } from '@react-three/fiber'
import { Church } from './threejsscripts/Church'
import { OrbitControls, Html, Environment, Sky, PerspectiveCamera, Circle, useEnvironment, shaderMaterial, useProgress  } from '@react-three/drei';
import { Euler, Vector3  } from 'three';
import * as THREE from "three";
import gsap from 'gsap';


const Container = styled.div`
    background-color: brown;
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
    <Container ref={myRef}>
      {showComponent && 
      (
        <Canvas style={{width: '100%', height: '100%', backgroundColor: '#c8f9ff'}} camera={{fov: 95, far: 1000, near: 0.1, 
          position: [0, 82, 35]}} 
          gl={{ antialias: false }} // Disable antialiasing for performance
          pixelRatio={0.0} // Set the pixel ratio to half (adjust as needed)
         >
             <Suspense fallback={<Loader />}>
              <ambientLight color='white' intensity={3} />
              {/* <directionalLight intensity={2}  castShadow  position={[-100, 30, 50]} /> */}
              {/* <directionalLight intensity={2}  castShadow position={[62, 40, -20]} /> */}
              <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
              {/* <Sky /> */}
              <Church />
              <CameraConsole showComponent={showComponent} />
            </Suspense>
        </Canvas>
      )}
    </Container>
  )
}

function CameraConsole({ showComponent }) {
  let targetPosition = new Vector3(0, 30, 0);
  const { camera } = useThree();

  useEffect(() => {
    if (!showComponent) return;
    // Create a GSAP tween to animate the camera's position
    gsap.to(camera.position, {
      x: 0, // New X position
      y: 8, // New Y position
      z: 35, // New Z position
      duration: 3,
    });

  }, [showComponent]);

  useFrame((state) => {
    state.camera.lookAt(targetPosition)
    // state.camera.position.set(0, 82, 35); //8

    // gsap.to(state.camera.position, {
    //   x: 10, //new
    //   y: 20, 
    //   z: -5,
    //   duration: 3,
    // });

    // gsap.to(targetPosition, {
    //   x: 10, //new
    //   y: 20, 
    //   z: -5,
    //   duration: 3,
    //   onUpdate: () => {
    //     // Update the camera's target position based on the tweened values
    //     state.camera.lookAt(targetPosition)
    //   },
    // });


    // state.camera.fov = 95;
    // state.camera.rotation.setFromRotationMatrix(
    //   new THREE.Matrix4().lookAt(
    //     state.camera.position, // Camera position
    //     targetPosition,        // Target position
    //     state.camera.up        // Up vector (usually (0, 1, 0))
    //   )
    // );
  })
  return null;
}

function Loader() {
  const { progress } = useProgress()
  return <Html center>
    <div style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',  margin: 'auto'}}>
    <p style={{textAlign: 'center', fontSize: '2.2rem'}}>{progress} % Loaded</p>
    </div>
    </Html>
}

export default Contact