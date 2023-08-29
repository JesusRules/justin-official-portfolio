import React, { useRef, useEffect, useState, Suspense } from 'react'
import { styled } from 'styled-components'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html, Environment, Sky, PerspectiveCamera } from '@react-three/drei';
import { MiniJesus } from './threejsscripts/MiniJesus';
import * as THREE from "three";

const Container = styled.div`
    background-color: lightblue;
    height: 100vh;
    scroll-snap-align: start;
`

function Projects({ myRef, scrollYGlobal }) {
  const [animIndex, setAnimIndex] = useState(3); //IDLE
  const [swipeDirection, setSwipeDirection] = useState(null);
  let startX;
  const playerRef = useRef();
  const cameraRef = useRef();

  // SCROLLING
    useEffect(() => {
      const divElement = myRef.current;
      const halfwayPoint = divElement.scrollHeight / 5;
      console.log(scrollYGlobal);
      console.log(divElement.offsetTop)
      if (scrollYGlobal >= divElement.offsetTop) {
        // tl.to(".first-div", {
        //       transform: 'translateY(0)',
        //       opacity: 1,
        //       duration:1,
        //   });
        setAnimIndex(2); //7 alt
        console.log("CALLED")
        console.log(scrollYGlobal);
      }

  }, [scrollYGlobal])

    useEffect(() => {
      // Your Three.js scene setup
      myRef.current.addEventListener("touchstart", handleTouchStart);
      myRef.current.addEventListener("touchmove", handleTouchMove);
      myRef.current.addEventListener("touchend", handleTouchEnd);

      return () => {
        myRef.current.removeEventListener("touchstart", handleTouchStart);
        myRef.current.removeEventListener("touchmove", handleTouchMove);
        myRef.current.removeEventListener("touchend", handleTouchEnd);
      };
    }, []);

    const handleTouchStart = (event) => {
      startX = event.touches[0].clientX;
      cameraRef.current.translateX(-3);
      cameraRef.current.updateMatrixWorld();
    };
    
    const handleTouchMove = (event) => {
      console.log('???', cameraRef.current);
      cameraRef.current.translateY(5);
      cameraRef.current.updateMatrixWorld();

      if (startX !== null) {
        const currentX = event.touches[0].clientX;
        const deltaX = currentX - startX;
        if (deltaX > 0) {
          console.log('right');
          setAnimIndex(6);
        } else if (deltaX < 0) {
          console.log('left');
          setAnimIndex(5);
        }
        startX = currentX;
      }
    };

    const handleTouchEnd = () => {
      startX = null;
      setSwipeDirection(null);
      cameraRef.current.translateX(2);
      cameraRef.current.updateMatrixWorld();
    };


  return (
    <Container ref={myRef}>
      <Canvas shadows camera={{fov: 45, far: 1000, near: 0.1, position: [0, 1.75, 5]}}>
                <group>
                  <Suspense fallback={null}>
                    <MiniJesus scale={20} animIndex={animIndex} setAnimIndex={setAnimIndex} playerRef={playerRef} canvasRef={myRef}/>
                  </Suspense>
                </group>
                <mesh position={[0, .5, 0]}>
                  <boxGeometry args={[1, 1, 1]} />
                  <meshStandardMaterial />
                </mesh>
                {/* <OrbitControls /> */}
                <OrbitControls
                  enableDamping
                  dampingFactor={0.005} // Adjust to control rotation speed (0 - 1)
                  enableZoom={false}
                  minPolarAngle={1.3962634} // Minimum rotation angle (80 degrees) // TOP
                  maxPolarAngle={1.50098316} // Maximum rotation angle (86 degrees) // BOTTOM
                  target={[0, 0, 0]} // Lock the camera to the center
                />
                <Environment preset="city"/>
                <ambientLight intensity={1} />
                <directionalLight castShadow shadow-mapSize={1024} position={[-5, 5, 5]} />
                <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
                  <planeGeometry args={[64, 64, 64]} />
                  <meshStandardMaterial color="green" />
                </mesh>
            </Canvas>
    </Container>
  )
}

export default Projects
