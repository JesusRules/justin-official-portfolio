import React, { useState, useRef, useEffect } from 'react'
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
      console.log(divElement.offsetTop - innerHeight);
      if (Math.round(scrollYGlobal) >= (3001)) {
        setShowComponent(true);
      }
      if (Math.round(scrollYGlobal) < (3001)) {
        setShowComponent(false);
      }

  }, [scrollYGlobal])


  return (
    <Container ref={myRef}>
      {showComponent && 
      (
        <Canvas camera={{fov: 95, far: 1000, near: 0.1, 
           position: [0, 8, 35]}} >
          <ambientLight color='white' intensity={3} />
          <directionalLight intensity={2}  castShadow  position={[-100, 30, 50]} />
          <directionalLight intensity={2}  castShadow position={[62, 40, -20]} />
          <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
          <Sky />
          <Church />
          <CameraConsole />
        </Canvas>
      )}
    </Container>
  )
}

function CameraConsole() {
  const targetPosition = new Vector3(0, 30, 0);

  useFrame((state) => {
    // state.camera.position.set(0, 8, 35);
    // state.camera.fov = 95;
    const direction = new Vector3().subVectors(targetPosition, state.camera.position);
    state.camera.rotation.setFromRotationMatrix(
      new THREE.Matrix4().lookAt(
        state.camera.position, // Camera position
        targetPosition,        // Target position
        state.camera.up        // Up vector (usually (0, 1, 0))
      )
    );
  })
  return null;
}

export default Contact
