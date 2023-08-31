import React, { useRef, useEffect, useState, Suspense } from 'react'
import { styled } from 'styled-components'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html, Environment, Sky, PerspectiveCamera, Circle } from '@react-three/drei';
import { MiniJesus } from './threejsscripts/MiniJesus';
import * as THREE from "three";
import gsap from 'gsap';

const Container = styled.div`
    background-color: lightblue;
    height: 100vh;
    scroll-snap-align: start;
    cursor: grab;
`

const SpeechBubble = styled.img`
  position: absolute;
  width: 30rem;
  left: 0;
  right: 0;
  margin: auto;
  opacity: 0;
  transform: translateY(-30px);
`;


function Projects({ myRef, scrollYGlobal }) {
  const [animIndex, setAnimIndex] = useState(3); //IDLE
  const playerRef = useRef();
  const speechBubbleRef = useRef();
  const [showBubbleOnce, setShowBubbleOnce] = useState(false);
  
  const circleRadius = 32;
  const numObjects = 27;
  const objects = [];

  for (let i = 0; i < numObjects; i++) {
    const angle = (i / numObjects) * Math.PI * 2;
    const x = Math.cos(angle) * circleRadius;
    const z = Math.sin(angle) * circleRadius;
    objects.push(<CircleObject key={i} position={[x, 0.1, z]} />);
  }

  // SCROLLING
    useEffect(() => {
      const divElement = myRef.current;
      const halfwayPoint = divElement.scrollHeight / 5;
      if (scrollYGlobal >= divElement.offsetTop) {
        if (!showBubbleOnce) {
          setShowBubbleOnce(true);
          gsap.to(speechBubbleRef.current, {
            duration:0.66,
            opacity: 1,
                transform: 'translateY(0px)',
          });
        }

        setAnimIndex(2); //7 alt Jumping happy
      }

  }, [scrollYGlobal])

    useEffect(() => {
      // Your Three.js scene setup
      // myRef.current.addEventListener("touchstart", handleTouchStart);
      // myRef.current.addEventListener("touchmove", handleTouchMove);
      // myRef.current.addEventListener("touchend", handleTouchEnd);

      return () => {
        // myRef.current.removeEventListener("touchstart", handleTouchStart);
        // myRef.current.removeEventListener("touchmove", handleTouchMove);
        // myRef.current.removeEventListener("touchend", handleTouchEnd);
      };
    }, []);


  return (
    <Container ref={myRef}>
      <SpeechBubble ref={speechBubbleRef} src="/img/speech-bubble-portfolio.png"/>
      <Canvas shadows camera={{fov: 45, far: 1000, near: 0.1, position: [0, 1.75, 5]}}>
                <group>
                  <Suspense fallback={null}>
                    <MiniJesus scale={20} animIndex={animIndex} setAnimIndex={setAnimIndex} playerRef={playerRef} canvasRef={myRef} speechBubbleRef={speechBubbleRef} touchObjects={objects} />
                  </Suspense>
                </group>
                <mesh position={[0, .5, 0]}>
                  <boxGeometry args={[1, 1, 1]} />
                  <meshStandardMaterial />
                </mesh>
                {/* <OrbitControls /> */}
                <OrbitControls
                  enableDamping
                  dampingFactor={0.05} // Adjust to control rotation speed (0 - 1)
                  enableZoom={false}
                  minPolarAngle={1.3962634} // Minimum rotation angle (80 degrees) // TOP
                  maxPolarAngle={1.50098316} // Maximum rotation angle (86 degrees) // BOTTOM
                  rotateSpeed={0.2}
                  target={[0, 0, 0]} // Lock the camera to the center
                />
                <Environment preset="city"/>
                <ambientLight intensity={1} />
                <directionalLight castShadow shadow-mapSize={1024} position={[-5, 5, 5]} />
                <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
                  <planeGeometry args={[64, 64, 64]} />
                  <meshStandardMaterial color="blue" />
                </mesh>
                <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                  <circleGeometry args={[32, 32, 32]} />
                  <meshStandardMaterial color="red" />
                </mesh>
                <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                  <circleGeometry args={[31, 31, 31]} />
                  <meshStandardMaterial color="blue" />
                </mesh>
                {objects}
            </Canvas>
    </Container>
  )
}

const CircleObject = ({ position }) => {
  return (
    <mesh position={position}>
      {/* Your object's geometry and appearance */}
      <sphereGeometry args={[1, 16, 16]} />
      <meshBasicMaterial color="red" />
    </mesh>
  );
}



export default Projects
