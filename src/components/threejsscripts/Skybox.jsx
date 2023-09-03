import React, { useEffect, useRef } from 'react'
import { useThree, useFrame } from "@react-three/fiber";
// import { CubeTextureLoader, MeshBasicMaterial, DoubleSide, BoxGeometry, Mesh, AmbientLight } from 'three';
import * as THREE from 'three';
import { useEnvironment } from '@react-three/drei';

function Skybox() {
    const { scene } = useThree();
    let camera, renderer, skyboxGeo, skybox;
    const skyboxRef = useRef();

    useEffect(() => {
      const materialArray = createMaterialArray();
      skyboxGeo = new THREE.BoxGeometry(1000, 1000, 1000);
      skybox = new THREE.Mesh(skyboxGeo, materialArray);
      scene.add(skybox);
      skyboxRef.current = skybox;
    }, [])

    
    const skyboxImagepaths = [
      '/img/sky/sky-left.jpg', // 2
      '/img/sky/sky-right.jpg', // 4
      '/img/sky/sky-down.jpg',
      '/img/sky/sky-up.jpg',
      '/img/sky/sky-back.jpg', // 1
      '/img/sky/sky-front.jpg', // 3
      ]

    function createMaterialArray() {
      const materialArray = skyboxImagepaths.map(image => {
          let texture = new THREE.TextureLoader().load(image);
          return new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, color: 0xffffff }); // <---
      });
      return materialArray;
    }
                          
  useFrame(() => {
    if (skyboxRef.current) {
      skyboxRef.current.rotation.y += 0.0001; // Adjust the rotation speed as needed
    }
  });
  
  return null;
    // return (
    //     <mesh>
    //       {/* Create a box geometry */}
    //       <boxGeometry args={[skyboxSize, skyboxSize, skyboxSize]} />
    //       <ambientLight intensity={0.5} />
    //   <directionalLight position={[1, 2, 3]} />
    //       {/* Apply the skybox texture as a material */}
    //       <meshBasicMaterial color={'purple'} map={texture} side={THREE.DoubleSide} />
    //     </mesh>
    //   );
}

export default Skybox
