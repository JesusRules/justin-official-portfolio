import React, { useRef, useEffect, useState, Suspense } from 'react'
import { styled } from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html, Environment, Sky } from '@react-three/drei';
import { MiniJesus } from './threejsscripts/MiniJesus';
import * as THREE from "three";

const Container = styled.div`
    background-color: lightblue;
    height: 100vh;
    scroll-snap-align: start;
`

function Projects({ myRef }) {
  // const canvasRef = useRef(null);
  const [swipeDirection, setSwipeDirection] = useState(null);
  // const [startX, setStartX] = useState();
  let startX;
  const [animation, setAnimation] = useState("Standing");

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
    };
    
    const handleTouchMove = (event) => {
      if (startX !== null) {
        const currentX = event.touches[0].clientX;
        const deltaX = currentX - startX;
        if (deltaX > 0) {
          console.log('right');
          setSwipeDirection("right");
        } else if (deltaX < 0) {
          console.log('left');
          setSwipeDirection("left");
        }
        startX = currentX;
      }
    };

    const handleTouchEnd = () => {
      startX = null;
      setSwipeDirection(null);
    };

  return (
    <Container ref={myRef}>
      <Canvas shadows camera={{fov: 45, far: 1000, near: 0.1, position: [0, 1.75, 5]}}>
                <group>
                  <Suspense fallback={null}>
                    <MiniJesus scale={10} />
                  </Suspense>
                </group>
                {/* <OrbitControls /> */}
                <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
                <Environment preset="city"/>
                <ambientLight intensity={1} />
                <directionalLight castShadow shadow-mapSize={1024} position={[-5, 5, 5]} />
                <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
                  <planeGeometry args={[10, 10, 10]} />
                  <meshStandardMaterial color="green" />
                </mesh>
            </Canvas>
    </Container>
  )
}

export default Projects
