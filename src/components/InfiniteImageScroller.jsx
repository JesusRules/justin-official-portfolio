import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useDrag } from 'react-use-gesture';
import { TextureLoader } from 'three';


const InfiniteImageScroller = ({ images }) => {
    const groupRef1 = useRef();
    const groupRef2 = useRef();
    const groupRef3 = useRef();
    const groupRef4 = useRef();
    const scrollContainerRef = useRef();
  
    // Calculate the width of a single image based on the image dimensions
    const imageWidth = 3; // Adjust to your image dimensions
    const numImages = images.length;

    useEffect(() => {
        groupRef1.current.position.x = 0;
        groupRef2.current.position.x = imageWidth * numImages;
        groupRef3.current.position.x = (imageWidth * numImages) * 2;
        groupRef4.current.position.x = (imageWidth * numImages) * 3;
    }, [])
    
    useFrame(() => {
        groupRef1.current.position.x -= 0.05;
        groupRef2.current.position.x -= 0.05;
        groupRef3.current.position.x -= 0.05;
        groupRef4.current.position.x -= 0.05;

        // Reset positions when an image goes out of view
        if (groupRef1.current.position.x <= 0 - (imageWidth * numImages) * 2) {
            groupRef1.current.position.x = (imageWidth * numImages) * 2;
        }
        if (groupRef2.current.position.x <= 0 - (imageWidth * numImages) * 2) {
            groupRef2.current.position.x = (imageWidth * numImages) * 2;
        }
        if (groupRef3.current.position.x <= 0 - (imageWidth * numImages) * 2) {
            groupRef3.current.position.x = (imageWidth * numImages) * 2;
        }
        if (groupRef4.current.position.x <= 0 - (imageWidth * numImages) * 2) {
            groupRef4.current.position.x = (imageWidth * numImages) * 2;
        }
    });

    const bind = useDrag(({ offset: [x], vxvy: [vx], down }) => {
        if (down) {
            groupRef1.current.position.x += x / window.innerWidth;
        }
      });
  
    return (
    <group ref={scrollContainerRef} >
      <group ref={groupRef1} {...bind()}>
        {images.map((image, index) => (
          <mesh
            key={index}
            position={[(index * imageWidth), 0, 0]}
          >
            <planeGeometry args={[imageWidth, 1]} />
            <meshBasicMaterial transparent map={new TextureLoader().load(image)} />
          </mesh>
        ))}
      </group>
      <group ref={groupRef2} >
        {images.map((image, index) => (
            <mesh
            key={index}
            position={[(index * imageWidth), 0, 0]}
            >
            <planeGeometry args={[imageWidth, 1]} />
            <meshBasicMaterial transparent map={new TextureLoader().load(image)} />
            </mesh>
        ))}
        </group>
        <group ref={groupRef3} >
        {images.map((image, index) => (
            <mesh
            key={index}
            position={[(index * imageWidth), 0, 0]}
            >
            <planeGeometry args={[imageWidth, 1]} />
            <meshBasicMaterial transparent map={new TextureLoader().load(image)} />
            </mesh>
        ))}
        </group>
        <group ref={groupRef4} >
        {images.map((image, index) => (
            <mesh
            key={index}
            position={[(index * imageWidth), 0, 0]}
            >
            <planeGeometry args={[imageWidth, 1]} />
            <meshBasicMaterial transparent map={new TextureLoader().load(image)} />
            </mesh>
        ))}
        </group>
    </group>
    );
  };
  

export default InfiniteImageScroller;