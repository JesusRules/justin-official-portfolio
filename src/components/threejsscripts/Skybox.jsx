import React, { useEffect } from 'react'
import { useThree } from "@react-three/fiber";
// import { CubeTextureLoader, MeshBasicMaterial, DoubleSide, BoxGeometry, Mesh, AmbientLight } from 'three';
import * as THREE from 'three';

function Skybox() {
    const skyboxSize = 111; // Adjust the size as needed
    const { scene } = useThree();
  
    // Load your skybox texture
  const loader = new THREE.CubeTextureLoader();
  const texture = loader.load([
    '/img/sky/Daylight Box_Right.jpg',
    '/img/sky/Daylight Box_Left.jpg',
    '/img/sky/Daylight Box_Top.jpg',
    '/img/sky/Daylight Box_Bottom.jpg',
    '/img/sky/Daylight Box_Front.jpg',
    '/img/sky/Daylight Box_Back.jpg',
  ]);
  
    return (
        <mesh>
          {/* Create a box geometry */}
          <boxGeometry args={[skyboxSize, skyboxSize, skyboxSize]} />
          <ambientLight intensity={0.5} />
      <directionalLight position={[1, 2, 3]} />
          {/* Apply the skybox texture as a material */}
          <meshBasicMaterial color={'purple'} map={texture} side={THREE.DoubleSide} />
        </mesh>
      );
  }

export default Skybox
