import React, { useRef, useEffect, useState, Suspense } from 'react'
import { styled, keyframes  } from 'styled-components'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html, Environment, Sky, PerspectiveCamera, Circle } from '@react-three/drei';
import { MiniJesus } from './threejsscripts/MiniJesus';
import * as THREE from "three";
import gsap from 'gsap';
import ProjectInfoModal from './smaller-components/ProjectInfoModal';

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
  flex-direction: column;
  margin: auto;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  font-size: 32px;
  font-weight: bold;
  top: 6rem;
  z-index: 9990;
  pointer-events: none;
  width: 100%;
  max-width: 30rem;
  text-align: center;

  .content {
    position: relative;
    bottom: 0.8rem;
    background-color: rgba(0, 0, 0, 0.66);
    border-radius: 15px;
    margin: 0.5rem;
    padding: 0.5rem;
    pointer-events: none;
    user-select: none;
  }
  h2 {
    color: #fff;
    margin-bottom: 5px;
  }
  p {
    padding: 1rem;
    color: #fff;
    font-weight: 200;
    font-size: 1.5rem;
  }
  img {
    width: 300px;
    pointer-events: none;
    user-select: none;
  }
`;

const gelatineAnimation = keyframes`
  from, to {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  75% {
    transform: scale(0.95, 1.05);
  }
  from, to {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  75% {
    transform: scale(0.95, 1.05);
  }
`;

const StyledButton = styled.button`
  border: none;
  outline: none;
  color: #fefefe;
  background-color: #b99d00;
  border-radius: 3px;
  padding: .7rem 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  font-family: 'poppins';
  /* pointer-events: auto; */
  user-select: none;
  
  &:hover,
  &:focus {
    transition-timing-function: cubic-bezier(0.6, 4, 0.3, 0.8);
    animation: ${gelatineAnimation} 0.5s 1;
  }
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
  const projectRef = useRef();
  const learnButtonRef = useRef();

  const [showBubbleOnce, setShowBubbleOnce] = useState(false);
  const [currentProject, setCurrentProject] = useState("");
  const [withinProject, setWithinProject] = useState(false);
  
  const radius = 60;
  const [objectPoints, setObjectPoints] = useState([]);
  const [idleStance, setIdleStance] = useState(true);

  const [openModal, setOpenModal] = useState(false);

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


    useEffect(() => {
      const h2Element = projectRef.current.querySelector('h2');
      h2Element.textContent = currentProject;
      if (withinProject === false) {
        gsap.to(projectRef.current, {
          opacity: 0,       // Fade out
          duration: 0.3,
          onComplete: () => {
            learnButtonRef.current.style.pointerEvents = "none";
          }
        });
      } else {
        projectRef.current.style.display = 'inline-block'; // Show before fading in
        gsap.to(projectRef.current, {
          opacity: 1,       // Fade in
          duration: 0.3,
          onComplete: () => {
            learnButtonRef.current.style.pointerEvents = 'auto';
          }
        });
      }
    }, [withinProject, currentProject])

    useEffect(() => {
      if (openModal) {
        gsap.to(projectRef.current, {
          opacity: 0,       // Fade out
          duration: 0.3,
        });
      } 
      if (!openModal && currentProject !== "") {
        projectRef.current.style.display = 'inline-block'; // Show before fading in
        gsap.to(projectRef.current, {
          opacity: 1,       // Fade in
          duration: 0.3,
        });

      }
    }, [openModal])


    const clickProject = () => {
      if (idleStance && withinProject) {
        setOpenModal(true);
      }
    }


  return (
    <>
    <Container ref={myRef}>

      <ProjectInfoModal currentProject={currentProject} openModal={openModal} setOpenModal={setOpenModal} />
      
      <ProjectPopup ref={projectRef}>
          {/* {displayContentTxt} */}
          <img src="/img/projects/ultimate-jesus-game-display.png"/>
          <div className='content'>
            <h2>Ultimate Jesus Game</h2>
            <p>Epic 3D platformer of ultimate proportions!</p>
          </div>
          <StyledButton ref={learnButtonRef} style={{cursor: withinProject ? 'pointer' : 'grab'}} onClick={() => clickProject()}>Learn More</StyledButton>
      </ProjectPopup>

      <SpeechBubble ref={speechBubbleRef} src="/img/speech-bubble-portfolio.png"/>
      <Canvas shadows camera={{fov: 58, far: 1000, near: 0.1, position: [0, 1.75, 5]}}>
                <group>
                  <Suspense fallback={null}>
                    <MiniJesus scale={34} animIndex={animIndex} setAnimIndex={setAnimIndex} playerRef={playerRef} canvasRef={myRef} speechBubbleRef={speechBubbleRef} touchObjects={objectPoints} setCurrentProject={setCurrentProject} setWithinProject={setWithinProject} 
                    idleStance={idleStance} setIdleStance={setIdleStance}/>
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
