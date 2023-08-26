/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.12 MiniJesus.gltf --transform 
Files: MiniJesus.gltf [6.85MB] > MiniJesus-transformed.glb [358.58KB] (95%)
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations, useFBX } from '@react-three/drei'

export function MiniJesus(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/mini-jesus/MiniJesus-transformed.glb')
  const { animations: runningAnim } = useFBX("/models/mini-jesus/MiniJesusRun.fbx");
  runningAnim[0].name = "Running";

  const { actions } = useAnimations(runningAnim, group)
  // const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions["Running"].setDuration(0.6);
    actions["Running"].reset().play();
  }, [])

  return (
    <group rotation-x={-Math.PI / 2}>

    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.Hip_J} />
        </group>
        <group name="Mini_Jesus" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh name="Mesh" geometry={nodes.Mesh.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Mesh.skeleton} />
          <skinnedMesh name="Mesh_1" geometry={nodes.Mesh_1.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Mesh_1.skeleton} />
          <skinnedMesh name="Mesh_2" geometry={nodes.Mesh_2.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Mesh_2.skeleton} />
          <skinnedMesh name="Mesh_3" geometry={nodes.Mesh_3.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Mesh_3.skeleton} />
          <skinnedMesh name="Mesh_4" geometry={nodes.Mesh_4.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Mesh_4.skeleton} />
          <skinnedMesh name="Mesh_5" geometry={nodes.Mesh_5.geometry} material={materials.PaletteMaterial001} skeleton={nodes.Mesh_5.skeleton} />
        </group>
      </group>
    </group>

    </group>
  )
}

useGLTF.preload('/models/mini-jesus/MiniJesus-transformed.glb')
