import React from 'react'
import { styled } from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html, Environment, Sky } from '@react-three/drei';
import { MiniJesus } from './threejsscripts/MiniJesus';

const Container = styled.div`
    background-color: lightblue;
    height: 100vh;
    scroll-snap-align: start;
`

function Projects({ myRef }) {
  return (
    <Container ref={myRef}>
      <Canvas shadows camera={{fov: 45, far: 1000, near: 0.1, position: [0, 5, 5]}}>
                <mesh rotation={[-Math.PI / 2, 0, 0]}>
                  <planeGeometry args={[10, 10, 10]} />
                  <meshStandardMaterial color="green" />
                </mesh>
                <group>
                  <MiniJesus scale={10} />
                </group>
                <OrbitControls />
                <Sky />
                <Environment preset="city"/>
                <ambientLight intensity={1} />
                <directionalLight position={[1, 2, 3]} />
            </Canvas>
    </Container>
  )
}

export default Projects
