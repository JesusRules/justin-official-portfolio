import React, { useRef, useEffect, useState, Suspense } from 'react'
import { styled } from 'styled-components'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html, Environment, Sky, PerspectiveCamera, Circle } from '@react-three/drei';
import { MiniJesus } from './threejsscripts/MiniJesus';
import * as THREE from "three";
import gsap from 'gsap';

const Container = styled.div`
    background-color: lightblue;
    height: 100vh;
    scroll-snap-align: start;
    cursor: grab;
    position: relative;
`

const SpeechBubble = styled.img`
  position: absolute;
  width: 30rem;
  left: 0;
  right: 0;
  margin: auto;
  opacity: 0;
  transform: translateY(-30px);
`;

const ProjectPopup = styled.div`
  position: absolute;
  display: flex;
  margin: auto;
  justify-content: center;
  left: 0;
  right: 0;
  font-size: 32px;
  font-weight: bold;
  top: 10rem;
`;

var contentTitlesArray = [
  "",
  "PokiTheDog", 
  "My Portfolio (Older)", 
  "Ottawa Rec Sports",
  "Daily Worshipper",
  "Memories",
  "SocialPup",
  "My Weather App",
  "Other Projects (Links)",

  "Church Party",
  "Saviour - The Final Frontier",
  "Ultimate Jesus Game",
  "Mama Mia",
  "Stellar Fever",
  "Graveyard Smash",
  "St. Joseph Model Games",
  "Fusion FPS",
  "SaySike Project",

  "GuitarKing (Design)",
  "Justin's Spotify App",
  "My Music Player",
  "Live Performances (Bluesfest)",
  "YouTube Guitar Covers",
  "SoundCloud Songs",

  "Grey Rock Adventure Tour",
  "Spirit Video 2009",
  "Nesquik Neighborhood (Entry Video)",
  "MiniDoom 2 Trailer"
];


function Projects({ myRef, scrollYGlobal }) {
  const [animIndex, setAnimIndex] = useState(3); //IDLE
  const playerRef = useRef();
  const speechBubbleRef = useRef();
  const [showBubbleOnce, setShowBubbleOnce] = useState(false);
  const [displayContentTxt, setDisplayContentTxt] = useState("");
  
  const radius = 60;
  const [objectPoints, setObjectPoints] = useState([]);

  // SCROLLING
    useEffect(() => {
      
      const divElement = myRef.current;
      const halfwayPoint = divElement.scrollHeight / 5;
      if (scrollYGlobal >= divElement.offsetTop) {
        if (!showBubbleOnce) {
          setShowBubbleOnce(true);
          gsap.to(speechBubbleRef.current, {
            duration:0.66,
            opacity: 1,
                transform: 'translateY(0px)',
          });
        }

        setAnimIndex(2); //7 alt Jumping happy
      }

  }, [scrollYGlobal])

    useEffect(() => {
      setupPositionSpots();
      // Your Three.js scene setup
      // myRef.current.addEventListener("touchstart", handleTouchStart);
      // myRef.current.addEventListener("touchmove", handleTouchMove);
      // myRef.current.addEventListener("touchend", handleTouchEnd);

      return () => {
        // myRef.current.removeEventListener("touchstart", handleTouchStart);
        // myRef.current.removeEventListener("touchmove", handleTouchMove);
        // myRef.current.removeEventListener("touchend", handleTouchEnd);
      };
    }, []);

    const setupPositionSpots = () => {
      for (let i = 0; i < contentTitlesArray.length; i++) {
        const angle = (i / contentTitlesArray.length) * Math.PI * 2;
        const x = Math.cos(-angle) * radius;
        const z = Math.sin(-angle) * radius;
        const newObj = <CircleObject content={contentTitlesArray[i]} key={i} position={[x, 0.1, z]} />; 
        // setObjectPoints(objectPoints => [...objectPoints, newObj]);
        setObjectPoints(objectPoints => {
          return uniqueByKey([...objectPoints, newObj]);
        });
      }
    }

    const uniqueByKey = (items) => {
      const set = new Set();
      return items.filter((item) => {
        const isDuplicate = set.has(item?.key);
        set.add(item?.key);
        return !isDuplicate;
      })
    }


  return (
    <>

    <Container ref={myRef}>

      <ProjectPopup>
          {displayContentTxt}
      </ProjectPopup>

      <SpeechBubble ref={speechBubbleRef} src="/img/speech-bubble-portfolio.png"/>
      <Canvas shadows camera={{fov: 58, far: 1000, near: 0.1, position: [0, 1.75, 5]}}>
                <group>
                  <Suspense fallback={null}>
                    <MiniJesus scale={34} animIndex={animIndex} setAnimIndex={setAnimIndex} playerRef={playerRef} canvasRef={myRef} speechBubbleRef={speechBubbleRef} touchObjects={objectPoints} setDisplayContentTxt={setDisplayContentTxt} />
                  </Suspense>
                </group>
                <mesh position={[0, .5, 0]}>
                  <boxGeometry args={[1, 1, 1]} />
                  <meshStandardMaterial />
                </mesh>
                {/* <OrbitControls /> */}
                <OrbitControls
                  enableDamping
                  dampingFactor={0.07} // Adjust to control rotation speed (0 - 1)
                  enableZoom={false}
                  minPolarAngle={1.3962634} // Minimum rotation angle (80 degrees) // TOP
                  maxPolarAngle={1.5097098} // Maximum rotation angle (86.5 degrees) // BOTTOM
                  rotateSpeed={0.16}
                  target={[0, 0, 0]} // Lock the camera to the center
                />
                <Environment preset="city"/>
                <ambientLight intensity={1} />
                <directionalLight castShadow shadow-mapSize={1024} position={[-5, 5, 5]} />
                <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
                  <planeGeometry args={[164, 164, 164]} />
                  <meshStandardMaterial color="blue" />
                </mesh>
                <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                  <circleGeometry args={[radius, radius, radius]} />
                  <meshStandardMaterial color="red" />
                </mesh>
                <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                  <circleGeometry args={[radius - 1, radius - 1, radius - 1]} />
                  <meshStandardMaterial color="blue" />
                </mesh>
                {objectPoints}
            </Canvas>
    </Container>
    </>
  )
}

const CircleObject = ({ position }) => {
  return (
    <mesh position={position}>
      {/* Your object's geometry and appearance */}
      <sphereGeometry args={[1, 16, 16]} />
      <meshBasicMaterial color="red" />
    </mesh>
  );
}



export default Projects
