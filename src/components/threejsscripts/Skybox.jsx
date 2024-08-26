import React, { useEffect, useRef } from 'react'
import { useThree, useFrame } from "@react-three/fiber";
// import { CubeTextureLoader, MeshBasicMaterial, DoubleSide, BoxGeometry, Mesh, AmbientLight } from 'three';
import * as THREE from 'three';
import { useEnvironment } from '@react-three/drei';

function Skybox({ imagePaths }) {
    const { scene } = useThree();
    let camera, renderer, skyboxGeo, skybox;
    const skyboxRef = useRef();

    //GOOD
    // useEffect(() => {
    //   const materialArray = createMaterialArray(imagePaths);
    //   const skyboxGeo = new THREE.BoxGeometry(1000, 1000, 1000);
    //   const skybox = new THREE.Mesh(skyboxGeo, materialArray);
    //   scene.add(skybox);
    //   skyboxRef.current = skybox;
    //   return () => {
    //     scene.remove(skybox);
    //   };
    // }, [imagePaths]);

    // function createMaterialArray(paths) {
    //   return paths.map(image => {
    //     let texture = new THREE.TextureLoader().load(image);
    //     texture.wrapS = THREE.ClampToEdgeWrapping;
    //     texture.wrapT = THREE.ClampToEdgeWrapping;
    //     texture.minFilter = THREE.LinearFilter;
    //     texture.magFilter = THREE.LinearFilter;
    //     texture.generateMipmaps = false;
    //     return new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });
    //   });
    // }
    //BAD
    function createMaterialArray(paths) {
      return paths.map(image => {
        let texture = new THREE.TextureLoader().load(image);
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.generateMipmaps = false;
        return new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });
      });
    }
    function adjustUVs(geometry) {
      const uv = geometry.attributes.uv;
      for (let i = 0; i < uv.count; i++) {
        const u = uv.getX(i);
        const v = uv.getY(i);
        
        // Adjust UV coordinates by a small amount to overlap
        uv.setXY(i, u * 0.98 + 0.01, v * 0.98 + 0.01); // Adjust these values as needed
      }
      uv.needsUpdate = true;
    }

    useEffect(() => {
      const materialArray = createMaterialArray(imagePaths);
      const skyboxGeo = new THREE.BoxGeometry(1000, 1000, 1000);
      
      // Adjust UVs to slightly overlap textures
      adjustUVs(skyboxGeo);
      
      const skybox = new THREE.Mesh(skyboxGeo, materialArray);
      scene.add(skybox);
      skyboxRef.current = skybox;
    
      // Cleanup on component unmount
      return () => {
        scene.remove(skybox);
      };
    }, [imagePaths]);
    
                          
  useFrame(() => {
    if (skyboxRef.current) {
      skyboxRef.current.rotation.y += 0.0001; // Adjust the rotation speed as needed
    }
  });
  
  return null;
}

export default Skybox
