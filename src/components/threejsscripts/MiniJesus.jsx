/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.12 MiniJesus.gltf --transform 
Files: MiniJesus.gltf [8.25MB] > MiniJesus-transformed.glb [499.31KB] (94%)
*/

import React, { useRef, useState, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib'
import gsap from 'gsap';

export function MiniJesus(props) {
  const { animIndex, setAnimIndex } = props;
  const character = useRef();
  const model = useRef();
  const { nodes, materials, animations } = useGLTF('/models/MiniJesus-transformed.glb')
  const { actions, names, ref, mixer } = useAnimations(animations, character)

  //MINE
  const [keyDown, setKeyDown] = useState(false);
  const [moveDir, setMoveDir] = useState(false);
  const [hovered, setHovered] = useState(false);
  // const gltf = useLoader(GLTFLoader, '/models/MiniJesus-transformed.glb');
  // const mixer = new THREE.AnimationMixer();

  useEffect(() => {
    actions['FirstPlaceWin'].setDuration(1.8);
    actions['Walk'].setDuration(1.1);
    actions['Run'].setDuration(.6);

    actions['FirstPlaceWin'].loop = THREE.LoopOnce;
    console.log("ANIMATIONS", animations);

    actions['FirstPlaceWin'].clampWhenFinished = true;

    mixer.addEventListener('finished', (e) => {
      if (e.action._clip.name === "FirstPlaceWin") {
        // setIndex(3); //idle
      }
    });

    //Control keys
    document.addEventListener('keydown', handleKeyDown, false);
    document.addEventListener('keyup', handleKeyUp, false);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [])

  const handleKeyDown = (event) => {
    if (event.shiftKey) {
      //TOGGLE
    } else {
      if (event.key.toLowerCase() === 'a') {
        setKeyDown(true);
        setMoveDir('left');
        gsap.to(model.current.rotation, {duration: .5, repeat: 0, y: -Math.PI / 2});
      }
      if (event.key.toLowerCase() === 'd') {
        setKeyDown(true);
        setMoveDir('right');
        gsap.to(model.current.rotation, {duration: .5, repeat: 0, y: Math.PI / 2});
      }
      console.log(event.key.toLowerCase());
    }
  }

  const handleKeyUp = (event) => {
    if (event.key.toLowerCase() === 'a' || event.key.toLowerCase() === 'd') {
      setKeyDown(false);
    }
  }

  useEffect(() => {
    if (keyDown) setAnimIndex(5); //RUN
    if (!keyDown) setAnimIndex(3); //IDLE
  }, [keyDown])
  
  useEffect(() => {
    console.log('ACTIONS', actions);
    actions[names[animIndex]].reset().fadeIn(0.5).play();
    return () => actions[names[animIndex]].fadeOut(0.5);
  }, [animIndex, actions, names])
  
  useFrame((state) => {
    if (keyDown) {
      if (moveDir === 'left') character.current.translateX(-0.082);
      if (moveDir === 'right') character.current.translateX(+0.082);
    }
  })
  
  const clickedJesus = () => {
    if (keyDown) return;
    setAnimIndex(2);
    gsap.to(model.current.rotation, {duration: .5, repeat: 0, y: 0});
  }

  return (
    <group ref={character} {...props} dispose={null}>
      <group ref={model} name="Scene">
        <group name="MiniJesus" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.Hip_J} />
        </group>
        <group castShadow name="Mini_Jesus" rotation={[Math.PI / 2, 0, 0]} scale={0.01}
           onPointerOver={() => setHovered(true)} 
           onPointerOut={() => setHovered(false)} 
           onClick={() => clickedJesus()}
          >
          <skinnedMesh name="Mesh" geometry={nodes.Mesh.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Mesh.skeleton} />
          <skinnedMesh name="Mesh_1" geometry={nodes.Mesh_1.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Mesh_1.skeleton} />
          <skinnedMesh name="Mesh_2" geometry={nodes.Mesh_2.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Mesh_2.skeleton} />
          <skinnedMesh name="Mesh_3" geometry={nodes.Mesh_3.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Mesh_3.skeleton} />
          <skinnedMesh name="Mesh_4" geometry={nodes.Mesh_4.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Mesh_4.skeleton} />
          <skinnedMesh name="Mesh_5" geometry={nodes.Mesh_5.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Mesh_5.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/MiniJesus-transformed.glb')
