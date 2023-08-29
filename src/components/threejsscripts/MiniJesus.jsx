/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.12 MiniJesus.gltf --transform 
Files: MiniJesus.gltf [8.25MB] > MiniJesus-transformed.glb [499.31KB] (94%)
*/

import React, { useRef, useState, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Vector3, Quaternion, MathUtils  } from 'three';
import { GLTFLoader } from 'three-stdlib'
import gsap from 'gsap';

export function MiniJesus(props) {
  const { playerRef, canvasRef } = props;
  const modelRef = useRef();
  const { nodes, materials, animations } = useGLTF('/models/MiniJesus-transformed.glb')
  const { actions, names, ref, mixer } = useAnimations(animations, playerRef)
  
  //MINE
  const { animIndex, setAnimIndex } = props;
  const [keyDown, setKeyDown] = useState(false);
  const [moveDir, setMoveDir] = useState(false);
  const [moveDelta, setMoveDelta] = useState(0);
  const [hovered, setHovered] = useState(false);
  let cameraPosition;
  const [startUpCam, setStartUpCam] = useState(false);
  const [targetPosition, setTargetPosition] = useState(new Vector3(0, 0, 5));
  // const gltf = useLoader(GLTFLoader, '/models/MiniJesus-transformed.glb');
  // const mixer = new THREE.AnimationMixer();

  // MOUSE MOVE STUFF CAMERA
  let dragging = false;
  const [initialMouseY, setInitialMouseY] = useState(0);
  const [initialCameraY, setInitialCameraY] = useState(0);
  const [cameraYPos, setCameraYPos] = useState(1.75);


  useEffect(() => {
    actions['FirstPlaceWin'].setDuration(1.8);
    actions['Walk'].setDuration(1.1);
    actions['Run'].setDuration(.6);

    actions['FirstPlaceWin'].loop = THREE.LoopOnce;
    actions['Win'].loop = THREE.LoopOnce;
    console.log("ANIMATIONS", animations);

    actions['FirstPlaceWin'].clampWhenFinished = true;
    actions['Win'].clampWhenFinished = true;

    mixer.addEventListener('finished', (e) => {
      if (e.action._clip.name === "FirstPlaceWin") {
        // setIndex(3); //idle
      }
      if (e.action._clip.name === "Win") {
        setIndex(3); //idle
      }
    });

    //Control keys
    document.addEventListener('keydown', handleKeyDown, false);
    document.addEventListener('keyup', handleKeyUp, false);

    // canvasRef.current.addEventListener('mousedown', handleMouseDown);
    // canvasRef.current.addEventListener('mousemove', handleMouseMove);
    // canvasRef.current.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);

      // canvasRef.current.removeEventListener('mousedown', handleMouseDown);
      // canvasRef.current.removeEventListener('mousemove', handleMouseMove);
      // canvasRef.current.removeEventListener('mouseup', handleMouseUp);
    };
  }, [])


  const handleKeyDown = (event) => {
    if (event.shiftKey) {
      //TOGGLE
    } else {
      if (event.key.toLowerCase() === 'a') {
        setKeyDown(true);
        setMoveDir('left');
        // gsap.to(model.current.rotation, {duration: .25, repeat: 0, y: -Math.PI / 2});
      }
      if (event.key.toLowerCase() === 'd') {
        setKeyDown(true);
        setMoveDir('right');
        // gsap.to(model.current.rotation, {duration: .25, repeat: 0, y: Math.PI / 2});
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


  // MOUSE INPUT

  // const handleMouseDown = (event) => {
  //   dragging = true;
  //   setInitialMouseY(event.clientY);
  //   setInitialCameraY(cameraPosition.y);
  //   console.log("DOEN");
  // };
  
  // const handleMouseMove = (event) => {
  //   if (dragging) 
  //   {
  //     const deltaY = event.clientY - initialMouseY;
  //     console.log(deltaY);
  //     const newCameraY = initialCameraY - deltaY * 0.01; // Adjust the factor for sensitivity
  //     setCameraYPos(newCameraY);
  //   }
  // };
  
  // const handleMouseUp = () => {
  //   console.log("UP");
  //   dragging = false;
  // };



  
  useFrame((state, delta ) => {
    // if (!startUpCam) 
    {
      // setStartUpCam(true);
      setTargetPosition(new Vector3(state.camera.position.x, 0, state.camera.position.z));
    }

    const radius = 18; // Adjust the radius of the circle
    let angle;
    
    if (keyDown) {
      if (moveDir === 'left') {
        setMoveDelta(moveDelta + delta);
        faceMovementDir(1.5, state.camera, angle, radius);
      }
      if (moveDir === 'right') {
        setMoveDelta(moveDelta - delta);
        faceMovementDir(-1.5, state.camera, angle, radius);
      };
      // if (moveDir === 'left') playerRef.current.translateX(-0.082);
    }

    cameraPosition = state.camera.position;
    const playerPosition = playerRef.current.position;

    //MISC
    angle = moveDelta * 1.00;
    // const angle = Date.now() * 0.001 * 1;

    // Update the player's position
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    playerRef.current.position.x = x;
    playerRef.current.position.z = z;

    //LERPING
    // Calculate the direction from the model to the target
    const lookAtDirection = new Vector3().subVectors(targetPosition, playerRef.current.position).normalize();
    // Calculate the quaternion rotation to look at the target
    const targetQuaternion = new Quaternion().setFromUnitVectors(new Vector3(0, 0, 1), lookAtDirection);
    // Interpolate the current rotation towards the target rotation
    const lerpFactor = 0.1; // Adjust the lerp factor for desired smoothness
    playerRef.current.quaternion.slerp(targetQuaternion, lerpFactor);


    // 2 - Cam Spinner
    const cameraX = playerPosition.x + Math.cos(angle) * radius / 2;
    const cameraZ = playerPosition.z + Math.sin(angle) * radius / 2;
    // state.camera.position.set(cameraX, 1.75, cameraZ);
    state.camera.position.x = cameraX;
    state.camera.position.z = cameraZ;

    state.camera.lookAt(0, 0, 0);
  })



  const faceMovementDir = (offsetDistance, camera, angle, radius) => {
    const cameraX2 = playerRef.current.position.x + Math.cos(angle) * radius;
    const cameraZ2 = playerRef.current.position.z + Math.sin(angle) * radius;
    // camera.position.set(cameraX2, 1.75, cameraZ2);
    camera.position.x = cameraX2;
    camera.position.z = cameraZ2;

    // Calculate the rotation angle based on player's rotation
    const playerRotation = Math.atan2(playerRef.current.position.z, playerRef.current.position.x);

    // Calculate the offset direction by adding 90 degrees (pi/2 radians) to the player's rotation
    const offsetDirection = playerRotation + Math.PI / 2;

    // Calculate the offset position based on the offset direction and distance
    const offsetX = playerRef.current.position.x + Math.cos(offsetDirection) * offsetDistance;
    const offsetZ = playerRef.current.position.z + Math.sin(offsetDirection) * offsetDistance;
    setTargetPosition(new Vector3(offsetX, 0, offsetZ));
  }
  


  const clickedJesus = () => {
    if (keyDown) return;
    setAnimIndex(7); //2 alt
    setTargetPosition(new Vector3(cameraPosition.x, 0, cameraPosition.z));
    // gsap.to(modelRef.current, {duration: .5, repeat: 0, lookAt: (cameraPosition.x, 0, cameraPosition.z)});
    // model.current.lookAt(cameraPos.x, 0, cameraPos.z);
  }

  return (
    <group ref={playerRef} {...props} dispose={null} position={[0,0,0]}>
      <group ref={modelRef} name="Scene">
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
