import { useRef, useEffect, useMemo } from 'react';
import { useAnimations, useFBX } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';

export function MiniJesusFBX({
  playerRef, canvasRef, speechBubbleRef, touchObjects, setCurrentProject,
  setWithinProject, cameraPositionRef, setIsLoaded, transitioning,
  animIndex, setAnimIndex, scale,
}) {
  const modelRef = useRef();
  const fbx = useFBX('/models/MiniJesus.fbx');
  const { actions, names, mixer } = useAnimations(fbx.animations, playerRef);
  const startX = useRef(null);
  const moving = useRef(false);
  const moveDirection = useRef(null);
  const targetRotation = useRef(-Math.PI);
  const cameraInitialized = useRef(false);
  const bubbleHidden = useRef(false);
  const activeProject = useRef(null);
  const playerPosition = useMemo(() => new THREE.Vector3(), []);
  const previousPosition = useMemo(() => new THREE.Vector3(), []);
  const previousBubblePosition = useMemo(() => new THREE.Vector3(), []);
  const projectSpots = useMemo(() => touchObjects.map(object => ({
    position: new THREE.Vector3(...object.props.position),
    content: object.props.content,
  })), [touchObjects]);

  useEffect(() => {
    actions['Armature|FirstPlaceWin'].setDuration(1.8);
    actions['Armature|Walk'].setDuration(1.1);
    actions['Armature|Run'].setDuration(0.6);
    for (const name of ['Armature|FirstPlaceWin', 'Armature|Win']) {
      actions[name].loop = THREE.LoopOnce;
      actions[name].clampWhenFinished = true;
    }

    const onFinished = event => {
      if (event.action._clip.name === 'Armature|Win') setAnimIndex(2);
    };
    mixer.addEventListener('finished', onFinished);
    setIsLoaded(true);
    setAnimIndex(2);

    const element = canvasRef.current;
    const onStart = event => {
      startX.current = event.touches ? event.touches[0].clientX : event.clientX;
    };
    const onMove = event => {
      if (startX.current === null) return;
      const x = event.touches ? event.touches[0].clientX : event.clientX;
      const difference = x - startX.current;
      startX.current = x;
      if (difference === 0) return;
      moveDirection.current = difference > 0 ? 'left' : 'right';
      targetRotation.current = difference > 0 ? -Math.PI * 1.5 : -Math.PI / 2;
      if (!moving.current) {
        moving.current = true;
        setAnimIndex(3);
      }
    };
    const onEnd = () => {
      startX.current = null;
      if (moving.current) {
        moving.current = false;
        setAnimIndex(2);
      }
    };

    element.addEventListener('touchstart', onStart, { passive: true });
    element.addEventListener('touchmove', onMove, { passive: true });
    element.addEventListener('touchend', onEnd);
    element.addEventListener('touchcancel', onEnd);
    element.addEventListener('mousedown', onStart);
    element.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onEnd);
    window.addEventListener('blur', onEnd);
    return () => {
      mixer.removeEventListener('finished', onFinished);
      element.removeEventListener('touchstart', onStart);
      element.removeEventListener('touchmove', onMove);
      element.removeEventListener('touchend', onEnd);
      element.removeEventListener('touchcancel', onEnd);
      element.removeEventListener('mousedown', onStart);
      element.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('blur', onEnd);
    };
  }, [actions, canvasRef, mixer, setAnimIndex, setIsLoaded]);

  useEffect(() => {
    const action = actions[names[animIndex]];
    action?.reset().fadeIn(0.5).play();
    return () => action?.fadeOut(0.5);
  }, [animIndex, actions, names]);

  useFrame((state, delta) => {
    if (!cameraInitialized.current) {
      const position = cameraPositionRef.current;
      state.camera.position.x = position[1] === 2 ? 196 : position[0];
      state.camera.position.z = position[1] === 2 ? 0 : position[2];
      state.camera.lookAt(0, 0, 0);
      previousPosition.copy(state.camera.position);
      previousBubblePosition.copy(state.camera.position);
      cameraInitialized.current = true;
    }

    const speed = state.camera.position.distanceTo(previousPosition) / Math.max(delta, 0.001);
    previousPosition.copy(state.camera.position);
    if (transitioning) {
      targetRotation.current = 0;
    } else if (speed < 4) {
      if (moving.current) {
        moving.current = false;
        setAnimIndex(2);
      }
      if (moveDirection.current) targetRotation.current = -Math.PI;
    }

    state.camera.getWorldDirection(playerPosition);
    playerPosition.multiplyScalar(25.2).add(state.camera.position);
    playerPosition.y = 0;
    playerRef.current.position.copy(playerPosition);
    playerRef.current.lookAt(0, 0, 0);
    modelRef.current.rotation.y = THREE.MathUtils.lerp(
      modelRef.current.rotation.y, targetRotation.current, 0.1,
    );
    state.camera.lookAt(0, 0, 0);

    const spot = projectSpots.find(project => playerPosition.distanceToSquared(project.position) < 9);
    const project = spot?.content ?? null;
    if (project !== activeProject.current) {
      activeProject.current = project;
      if (project) setCurrentProject(project);
      setWithinProject(Boolean(project?.name));
    }

    const cameraTravel = Math.hypot(
      state.camera.position.x - previousBubblePosition.x,
      state.camera.position.z - previousBubblePosition.z,
    );
    if (!bubbleHidden.current && cameraTravel > 1) {
      bubbleHidden.current = true;
      gsap.to(speechBubbleRef.current, {
        duration: 0.5, opacity: 0, transform: 'translateY(-30px)', overwrite: true,
      });
    }
    const savedPosition = cameraPositionRef.current;
    savedPosition[0] = state.camera.position.x;
    savedPosition[1] = 1.75;
    savedPosition[2] = state.camera.position.z;
  });

  const clickedJesus = () => {
    setAnimIndex(1);
    if (moveDirection.current) targetRotation.current = -Math.PI;
  };

  return (
    <group onClick={clickedJesus} ref={playerRef} scale={scale} dispose={null} position={[0, 0, 0]}>
      <primitive ref={modelRef} object={fbx} scale={0.01} rotation={[0, -Math.PI, 0]} />
    </group>
  );
}
