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
  const { playerRef, canvasRef, speechBubbleRef, touchObjects, setCurrentProject, setWithinProject,
          idleStance, setIdleStance } = props;
  const modelRef = useRef();
  const { nodes, materials, animations } = useGLTF('/models/MiniJesus-transformed.glb')
  const { actions, names, ref, mixer } = useAnimations(animations, playerRef)
  
  //MINE
  const { animIndex, setAnimIndex } = props;
  const radius = 41; // Adjust the radius of the circle

  const [keyDown, setKeyDown] = useState(false);
  const [moveDir, setMoveDir] = useState(false);
  const [moveDelta, setMoveDelta] = useState(0);
  const [camSpeed, setCamSpeed] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState(0);
  let startX;
  let cameraPosition;
  const [startUpCam, setStartUpCam] = useState(false);
  const [targetRotation, setTargetRotation] = useState(-Math.PI);
  const [speedDifference, setSpeedDifference] = useState(10);
  // const [idleStance, setIdleStance] = useState(true); //outside! (Projects)
  // const gltf = useLoader(GLTFLoader, '/models/MiniJesus-transformed.glb');
  // const mixer = new THREE.AnimationMixer();
  
  const [isTouchingAnySphere, setIsTouchingAnySphere] = useState(true);
  //DISTANCE FROM CAM
  const playerPositionNew = new THREE.Vector3();
  //SPEED CAM
  const prevPosition = useRef(0);
  const startTime = useRef(0);


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
        setAnimIndex(3); //idle
      }
      if (e.action._clip.name === "Run") {
        // setTargetRotation(-Math.PI);
      }
    });
    console.log('OBJECT 2', touchObjects); //[0]x,[1]y,[2]z

    //Control keys
    // document.addEventListener('keydown', handleKeyDown, false);
    // document.addEventListener('keyup', handleKeyUp, false);

    canvasRef.current.addEventListener("touchstart", handleTouchStart);
    canvasRef.current.addEventListener("touchmove", handleTouchMove);
    canvasRef.current.addEventListener("touchend", handleTouchEnd);

    canvasRef.current.addEventListener('mousedown', handleMouseDown);
    canvasRef.current.addEventListener('mousemove', handleMouseMove);
    canvasRef.current.addEventListener('mouseup', handleMouseUp);

    return () => {
      // document.removeEventListener('keydown', handleKeyDown);
      // document.removeEventListener('keyup', handleKeyUp);

      canvasRef.current.removeEventListener("touchstart", handleTouchStart);
      canvasRef.current.removeEventListener("touchmove", handleTouchMove);
      canvasRef.current.removeEventListener("touchend", handleTouchEnd);

      canvasRef.current.removeEventListener('mousedown', handleMouseDown);
      canvasRef.current.removeEventListener('mousemove', handleMouseMove);
      canvasRef.current.removeEventListener('mouseup', handleMouseUp);
    };
  }, [])

  // TOUCH

  const handleTouchStart = (event) => {
    startX = event.touches[0].clientX;
  };
  
  const handleTouchMove = (event) => {
    if (startX !== null) {
      const currentX = event.touches[0].clientX;
      const deltaX = currentX - startX;
      if (deltaX > 0) {
        setMoveDir('left');
        setTargetRotation(-4.71239);
      } else if (deltaX < 0) {
        setMoveDir('right');
        setTargetRotation(-1.5708);
      }
      startX = currentX;
    }
  };

  const handleTouchEnd = () => {
    startX = null;
    setSwipeDirection(null);
  };
  

  // MOUSE 

  const handleMouseDown = (event) => {
    startX = event.clientX;
  };
  
  const handleMouseMove = (event) => {
    if (startX !== null) {
      const currentX = event.clientX;
      const deltaX = currentX - startX;
      
      if (deltaX > 0) {
        setMoveDir('left');
        setTargetRotation(-4.71239);
      } else if (deltaX < 0) {
        setMoveDir('right');
        setTargetRotation(-1.5708);
      }
      startX = currentX;
    }
  };
  
  const handleMouseUp = () => {
    startX = null;
    setSwipeDirection(null);
  };

  // const handleKeyDown = (event) => {
  //   if (event.shiftKey) {
  //     //TOGGLE
  //   } else {
  //     if (event.key.toLowerCase() === 'a') {
  //       setKeyDown(true);
  //       setMoveDir('left');
  //     }
  //     if (event.key.toLowerCase() === 'd') {
  //       setKeyDown(true);
  //       setMoveDir('right');
  //     }
  //     console.log(event.key.toLowerCase());
  //   }
  // }

  // const handleKeyUp = (event) => {
  //   if (event.key.toLowerCase() === 'a' || event.key.toLowerCase() === 'd') {
  //     setKeyDown(false);
  //   }
  // }

  // useEffect(() => {
  //   if (keyDown) setAnimIndex(5); //RUN
  //   if (!keyDown) setAnimIndex(3); //IDLE
  // }, [keyDown])

  
  useEffect(() => {
    // console.log('ACTIONS', actions);
    actions[names[animIndex]].reset().fadeIn(0.5).play();
    return () => {
      actions[names[animIndex]].fadeOut(0.5);
    };
  }, [animIndex, actions, names])


  useEffect(() => {
    if (idleStance) setAnimIndex(3);
    if (!idleStance) {
      setAnimIndex(5);
      //Hide bubble
      gsap.to(speechBubbleRef.current, {
        duration:0.5,
        opacity: 0,
        transform: 'translateY(-30px)',
      }); 
    }
  }, [idleStance])


  const camSpeedFunc = (speed) => {
    setSpeedDifference(20 - speed);
    
    if (speedDifference < 0.2) setSpeedDifference(0.2);
    
    actions['Run'].setDuration(speedDifference);
    
    if (speedDifference < 5) {
      setIdleStance(false);
    }
    else if (speedDifference > 14) { //18
      setIdleStance(true);
      if (moveDir === 'left') setTargetRotation(-3.14159);
      if (moveDir === 'right') setTargetRotation(-3.14159);
    }
  }

  useFrame((state, delta ) => {
    let angle;
    
    // KEY DOWN METHOD
    // if (keyDown) {
    //   if (moveDir === 'left') {
    //     setMoveDelta(moveDelta + delta);
    //     faceMovementDir(2.5, state.camera, angle, radius);
    //   }
    //   if (moveDir === 'right') {
    //     setMoveDelta(moveDelta - delta);
    //     faceMovementDir(-2.5, state.camera, angle, radius);
    //   };
    // }
    
    //SPEED CAPTURE
    const currentTime = state.clock.getElapsedTime();
    const currentPosition = state.camera.position.clone();
    const distanceMoved = currentPosition.distanceTo(prevPosition.current);
    const deltaTime = currentTime - startTime.current;
    const speed = distanceMoved / deltaTime;
    camSpeedFunc(speed);
    //update
    prevPosition.current = currentPosition;
    startTime.current = currentTime;



    const lerpFactor = 0.05;
    playerRef.current.lookAt(0, 0, 0); //stays
    const currentRotation = modelRef.current.rotation.y;
    const lerpedRotation = THREE.MathUtils.lerp(currentRotation, targetRotation, lerpFactor);
    modelRef.current.rotation.y = lerpedRotation;
      // -Math.PI = FRONT
      // Math.PI / 2 = LEFT
      // -Math.PI / 2 = RIGHT
      // 0 = BACK

    cameraPosition = state.camera.position;
    const playerPosition = playerRef.current.position;
    
    //MISC
    // angle = moveDelta * 1.00;
    // const angle = Date.now() * 0.001 * 1;

    // Update the player's position
    // const x = Math.cos(angle) * radius;
    // const z = Math.sin(angle) * radius;
    // playerRef.current.position.x = x;
    // playerRef.current.position.z = z;

    // 2 - Cam Spinner
    // const cameraX = playerPosition.x + Math.cos(angle) * radius / 2.2;
    // const cameraZ = playerPosition.z + Math.sin(angle) * radius / 2.2;
    // state.camera.position.set(cameraX, 1.75, cameraZ);
    // state.camera.position.x = cameraX;
    // state.camera.position.z = cameraZ;

    state.camera.lookAt(0, 0, 0);

    let isTouchingAnySphere2 = false;

    // Touch sphere interaction
    touchObjects.forEach(sphere => {
      const distance = playerPosition.distanceTo(new Vector3(sphere.props.position[0], sphere.props.position[1], sphere.props.position[2])); //sphere.position, sphere.content
      // const distance = playerPosition.distanceTo(sphere); //sphere.position, sphere.content
      if (distance < 2) {
        setCurrentProject(sphere.props.content);
        if (sphere.props.content.name !== "") setWithinProject(true);
        isTouchingAnySphere2 = true;
      }
    })

    if (!isTouchingAnySphere2) {
      // setCurrentProject("");
      setWithinProject(false);
    }


    if (!startUpCam) 
    {
      // state.camera.position.set(cameraX, 1.75, cameraZ);
      prevPosition.current = state.camera.position.clone();
      
      const x = Math.cos(0) * radius;
      const z = Math.sin(0) * radius;
      playerRef.current.position.x = x;
      playerRef.current.position.z = z;

      const cameraX = playerRef.current.position.x + Math.cos(0) * radius; //2.2
      const cameraZ = playerRef.current.position.z + Math.sin(0) * radius; //2.2      
      state.camera.position.x = cameraX;
      state.camera.position.z = cameraZ;

      setStartUpCam(true);
      // setTargetPosition(new Vector3(state.camera.position.x, 0, state.camera.position.z));
    }

    const distance = 21.5; // Distance from the camera // 14.5
    playerPositionNew.copy(state.camera.position);
    state.camera.getWorldDirection(playerPositionNew);
    playerPositionNew.multiplyScalar(distance).add(state.camera.position);
    playerPositionNew.y = 0;
    playerRef.current.position.copy(playerPositionNew);
  })

  // const faceMovementDir = (offsetDistance, camera, angle, radius) => {
  //   // const cameraX2 = playerRef.current.position.x + Math.cos(angle) * radius;
  //   // const cameraZ2 = playerRef.current.position.z + Math.sin(angle) * radius;
  //   // // camera.position.set(cameraX2, 1.75, cameraZ2);
  //   // camera.position.x = cameraX2;
  //   // camera.position.z = cameraZ2;

  //   // Calculate the rotation angle based on player's rotation
  //   const playerRotation = Math.atan2(playerRef.current.position.z, playerRef.current.position.x);

  //   // Calculate the offset direction by adding 90 degrees (pi/2 radians) to the player's rotation
  //   const offsetDirection = playerRotation + Math.PI / 2;

  //   // Calculate the offset position based on the offset direction and distance
  //   const offsetX = playerRef.current.position.x + Math.cos(offsetDirection) * offsetDistance;
  //   const offsetZ = playerRef.current.position.z + Math.sin(offsetDirection) * offsetDistance;
  //   setTargetRotation(new Vector3(offsetX, 0, offsetZ));
  // }

  const clickedJesus = () => {
    // if (keyDown) return;
    console.log('OBJECT 2', touchObjects);

    setAnimIndex(7); //2 alt
    if (moveDir === 'left') setTargetRotation(-3.14159);
      if (moveDir === 'right') setTargetRotation(-3.14159);
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
