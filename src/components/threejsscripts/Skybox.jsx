import { useLayoutEffect, useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

export default function Skybox({ imagePaths }) {
  const skyboxRef = useRef();
  // Suspend with the model until every face is decoded, avoiding a black sky.
  const textures = useLoader(THREE.TextureLoader, imagePaths);

  useLayoutEffect(() => {
    textures.forEach(texture => {
      texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
      texture.minFilter = texture.magFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;
      // Match the original imperatively created sky materials. R3F otherwise
      // assigns sRGB to JSX texture maps and changes the authored sky colors.
      texture.colorSpace = THREE.NoColorSpace;
      texture.needsUpdate = true;
    });
  }, [textures]);

  useLayoutEffect(() => {
    const geometry = skyboxRef.current.geometry;
    if (geometry.userData.uvInset) return;
    geometry.userData.uvInset = true;
    const uv = geometry.attributes.uv;
    for (let i = 0; i < uv.count; i++) {
      uv.setXY(i, uv.getX(i) * 0.98 + 0.01, uv.getY(i) * 0.98 + 0.01);
    }
    uv.needsUpdate = true;
  }, []);

  useFrame(() => { skyboxRef.current.rotation.y += 0.0001; });

  // R3F disposes its geometry/materials. Cached loader textures remain reusable.
  return (
    <mesh ref={skyboxRef}>
      <boxGeometry args={[1000, 1000, 1000]} />
      {textures.map((texture, index) => (
        <meshBasicMaterial key={index} attach={`material-${index}`} map={texture} side={THREE.BackSide} />
      ))}
    </mesh>
  );
}
