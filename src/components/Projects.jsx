import React, { useRef, useEffect, useState, Suspense } from 'react'
import { styled, keyframes  } from 'styled-components'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Html, Environment, Sky, PerspectiveCamera, Circle, useEnvironment } from '@react-three/drei';
import { MiniJesus } from './threejsscripts/MiniJesus';
import * as THREE from "three";
import gsap from 'gsap';
import ProjectInfoModal from './smaller-components/ProjectInfoModal';
import { PortfolioEnvironment } from './threejsscripts/PortfolioEnvironment';
import { FBXLoader } from 'three/addons/loaders/FBXLoader';
import Skybox from './threejsscripts/Skybox';
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'

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
  z-index: 1000;
  pointer-events: none;
    user-select: none;
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
  top: 16vh;
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
  user-select: none;
  font-family: 'Poppins', sans-serif;
  
  &:hover,
  &:focus {
    transition-timing-function: cubic-bezier(0.6, 4, 0.3, 0.8);
    animation: ${gelatineAnimation} 0.5s 1;
  }
`;


// var contentTitlesArray = [
//   "",
//   "PokiTheDog", 
//   "My Portfolio (Older)", 
//   "Ottawa Rec Sports",
//   "Daily Worshipper",
//   "Memories",
//   "SocialPup",
//   "My Weather App",
//   "Other Projects (Links)",

//   "Church Party",
//   "Saviour - The Final Frontier",
//   "Ultimate Jesus Game",
//   "Mama Mia",
//   "Stellar Fever",
//   "Graveyard Smash",
//   "St. Joseph Model Games",
//   "Fusion FPS",
//   "SaySike Project",

//   "GuitarKing (Design)",
//   "Justin's Spotify App",
//   "My Music Player",
//   "Live Performances (Bluesfest)",
//   "YouTube Guitar Covers",
//   "SoundCloud Songs",

//   "Grey Rock Adventure Tour",
//   "Spirit Video 2009",
//   "Nesquik Neighborhood (Entry Video)",
//   "MiniDoom 2 Trailer"
// ];

var contentTitlesArray = [
  { name: "", description: "", id: '' },
  { name: "PokiTheDog", description: "A game company startup website featuring some games I’ve made.", id: 'pokithedog' },
  { name: "My Portfolio (Old)", description: "A website made to promote me and some early apps I’ve done.", id: 'my-portfolio-old' },
  { name: "Ottawa Rec Sports", description: "An award winning website intended to improve the currently existing Ottawa Rec Sports.", id: 'ottawa-rec-sports' },
  { name: "Daily Worshipper", description: "An app that can search the entire Bible.", id: 'daily-worshipper' },
  { name: "Memories", description: "A sharing, picture-posting blogging website.", id: 'memories' },
  { name: "SocialPup", description: "A social media clone.", id: 'socialpup' },
  { name: "My Weather App", description: "An app that can determine the weather anywhere in the world.", id: 'my-weather=app' },
  { name: "Other Projects (Links)", description: "Other YouTube videos and app prototypes I've done.", id: 'other-projects' },

  { name: "Church Party", description: "A 5 player mini-game extravaganza.", id: 'church-party' },
  { name: "Saviour - The Final Frontier", description: "A single player 2D adventure game.", id: 'saviour-tff' },
  { name: "Ultimate Jesus Game", description: "A single player 3D adventure game.", id: 'ultimate-jesus-game' },
  { name: "Mama Mia", description: "A multiplayer mayhem of cat vs mice gameplay.", id: 'mama-mia' },
  { name: "Stellar Fever", description: "A 4 player co-op action game.", id: 'stellar-fever' },
  { name: "Graveyard Smash", description: "A single player shoot-em-up styled game.", id: 'graveyard-smash' },
  { name: "St. Joseph Model Games", description: "The 3d model of my entire high school (I made) which can be played in.", id: 'stjoes-games' },
  { name: "Fusion FPS", description: "Game project made for learning the multiplayer solution Photon Fusion.", id: 'fusion-fps' },
  { name: "SaySike Project", description: "Game prototype that was made in college.", id: 'saysike-project' },

  { name: "GuitarKing (Design)", description: "An Adobe XD design of a guitar playing app.", id: 'guitarking' },
  { name: "Justin's Spotify App", description: "A Spotify clone I made for mobile.", id: 'my-spotify-app' },
  { name: "My Music Player", description: "A music player featuring songs I like.", id: 'my-music-player' },
  { name: "Live Performances (Bluesfest)", description: "Live performances of me playing on stage.", id: 'bluesfest' },
  { name: "YouTube Guitar Covers", description: "Videos of guitar song covers.", id: 'guitar-covers' },
  { name: "SoundCloud Songs", description: "Music I’ve made with friends and I.", id: 'soundcloud-songs' },

  { name: "Grey Rock Adventure Tour", description: "A commercial video I made for Grey Rock Adventure Tours.", id: 'greyrock-video' },
  { name: "Spirit Video 2009", description: "An annual end-of-the-year video I was assigned to make that the whole school watched.", id: 'spirit-video' },
  { name: "Nesquik Neighborhood (Entry Video)", description: "A silly video entry I did with my friends for a video contest.", id: 'nesquik-video' },
  { name: "MiniDoom 2 Trailer", description: "A video trailer I made in college.", id: 'minidoom2-video' },
]


function Projects({ myRef, scrollYGlobal }) {
  const [animIndex, setAnimIndex] = useState(3); //IDLE
  const playerRef = useRef();
  const speechBubbleRef = useRef();
  const projectRef = useRef();
  const learnButtonRef = useRef();

  const [showBubbleOnce, setShowBubbleOnce] = useState(false);
  const [currentProject, setCurrentProject] = useState("");
  const [withinProject, setWithinProject] = useState(false);
  
  const radius = 140;
  const [objectPoints, setObjectPoints] = useState([]);
  const [idleStance, setIdleStance] = useState(true);

  const [openModal, setOpenModal] = useState(false);
  const envMap = useEnvironment({ files: '/sunflowers_puresky_1k.hdr'});
  envMap.intensity = 2;
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

      <ProjectPopup ref={projectRef}>
          {/* <img src="/img/projects/ultimate-jesus-game-display.png"/> */}
          <div className='content'>
            <h2>{currentProject.name}</h2>
            <p>{currentProject.description}</p>
          </div>
          <StyledButton ref={learnButtonRef} style={{cursor: withinProject ? 'pointer' : 'grab'}} onClick={() => clickProject()}>Learn More</StyledButton>
      </ProjectPopup>
      
      <ProjectInfoModal currentProject={currentProject} openModal={openModal} setOpenModal={setOpenModal} />

      <SpeechBubble ref={speechBubbleRef} src="/img/speech-bubble-portfolio.png"/>
      <Canvas shadows camera={{fov: 58, far: 1000, near: 0.1, position: [0, 1.75, 5]}}>
                <group>
                  <Suspense fallback={null}>
                    <MiniJesus scale={37} animIndex={animIndex} setAnimIndex={setAnimIndex} playerRef={playerRef} canvasRef={myRef} speechBubbleRef={speechBubbleRef} touchObjects={objectPoints} setCurrentProject={setCurrentProject} setWithinProject={setWithinProject} 
                    idleStance={idleStance} setIdleStance={setIdleStance}/>
                  </Suspense>
                </group>
                <mesh position={[0, .5, 0]}>
                  <boxGeometry args={[1, 1, 1]} />
                  <meshStandardMaterial />
                </mesh>
                {/* <OrbitControls /> */}
                <OrbitControls
                  enablePan={false}
                  enableDamping
                  dampingFactor={0.07} // Adjust to control rotation speed (0 - 1)
                  enableZoom={false}
                  minPolarAngle={1.48353} // Minimum rotation angle (85.5 degPrees) // TOP
                  maxPolarAngle={1.53589} // Maximum rotation angle (88 degrees) // BOTTOM
                  rotateSpeed={0.145}
                  target={[0, 0, 0]} // Lock the camera to the center
                />
                <Environment map={envMap} background={envMap} />
                {/* ade4ff */}
                <ambientLight color='white' intensity={3} />
                <directionalLight intensity={1.2}  shadow-mapSize={1024} position={[0, 30, 50]} />
                <directionalLight intensity={2.2}  shadow-mapSize={1024} position={[-52, 30, -10]} />
                
                {/* <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
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
                </mesh> */}
                <MyFbxModel scale={0.369} rotation={[0, 0, 0]}/>
                {/* <PortfolioEnvironment scale={18.2} rotation={[0, 0, 0]}/> */}'
                <Skybox /> 
                {objectPoints}
                <EffectComposer>
                {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} /> */}
                <Bloom luminanceThreshold={0} luminanceSmoothing={2.4} height={300} />
                <Noise opacity={0.02} />
                {/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
              </EffectComposer>
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
      <meshPhongMaterial color="#ff0000" opacity={0.0} transparent />
    </mesh>
  );
}

function MyFbxModel(props) {
  const fbx = useLoader(FBXLoader, '/models/portfolio-environment.fbx');
  return <primitive shadows castShadow  {...props} object={fbx} />;
}



export default Projects
