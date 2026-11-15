import React, { useRef, useEffect, useState, Suspense, useMemo, useCallback } from 'react'
import { styled, keyframes  } from 'styled-components'
import { Canvas, useFrame, useLoader, useThree, extend  } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from "three";
import gsap from 'gsap';
import ProjectInfoModal from './smaller-components/ProjectInfoModal';
// import { PortfolioEnvironment } from './threejsscripts/PortfolioEnvironment';
import ReadyFBXLoader from './threejsscripts/ReadyFBXLoader';
import SceneReady from './threejsscripts/SceneReady';
import Skybox from './threejsscripts/Skybox';
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import { Water } from 'three-stdlib';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
import { MiniJesusFBX } from './threejsscripts/MiniJesusFBX';
import { useSectionActivity } from '../hooks/useSectionActivity';

extend({ Water })

const Container = styled.div`
    background-color: lightblue;
    scroll-snap-align: start;
    cursor: grab;
    position: relative;
    background-image: url('/img/projects/misc/background.jpg'); 
    background-size: cover; 
    background-repeat: no-repeat;
    background-position: center center;
    height: 100vh;
    width: 100%;
    overflow: hidden;
`

const SpeechBubble = styled.img`
  position: absolute;
  max-width: 24rem;
  width: 100%;
  top: 10%;
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
  display: none;
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
  opacity: 0;

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
  .content-levels {
    position: relative;
    bottom: 0.8rem;
    background-color: rgba(0, 0, 0, 0.66);
    border-radius: 5px;
    margin: 0.5rem auto;
    padding: 0.5rem;
    pointer-events: none;
    user-select: none;
    width: 55%;
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

const StyledButtonLevels = styled.button`
  border: none;
  outline: none;
  color: #fefefe;
  background-color: #00a9b9;
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

const UnavailableButton = styled.button`
  border: none;
  outline: none;
  color: #fefefe;
  background-color: #7e712adc;
  border-radius: 3px;
  padding: .7rem 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  user-select: none;
  font-family: 'Poppins', sans-serif;
`

const Arrows = styled.div`
  position: absolute;
  margin: 0 auto;
  top: 0;
  bottom: 0;
  z-index: 1000;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  opacity: 0.82;
  cursor: pointer;
  img {
    width: 2.3rem;
    height: 2.3rem;
  }
  #arrow-bottom {
    transform: scaleY(-1);
  }
  @media only screen and (min-width: 700px) {
    /* display: none; */
  }
  `;

  const QualityToggle = styled.div`
  position: absolute;
  height: 3rem;
  /* bottom: 0rem; */
  bottom: 5.5rem;
  display: flex;
  pointer-event: none;
  align-items: center;
  left: 0;
  /* right: 0; */
  justify-content: center;
  z-index: 10001;
  transform: scale(0.8);
  opacity: 0.9;
  `;
  
  const BackgroundImage = styled.img`
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: absolute;
    z-index: 1111; //111
  `

  const BlackOverlayFade = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    opacity: 0;
    pointer-events: none; /* Prevent it from blocking other elements */
    transition: opacity 1s ease-in-out;
    z-index: 9999; /* Ensure it is on top of everything */
  `


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

var contentTitlesArray1 = [
  { name: "", description: "", id: '' },
  { name: "PokiTheDog", description: "A game company startup website featuring some games I’ve made.", id: 'pokithedog' },
  { name: "My Portfolio (Old)", description: "A website made to promote me and some early apps I’ve done.", id: 'my-portfolio-old' },
  { name: "Ottawa Rec Sports", description: "An award winning website intended to improve the currently existing Ottawa Rec Sports.", id: 'ottawa-rec-sports' },
  { name: "Daily Worshipper", description: "An app that can search the entire Bible.", id: 'daily-worshipper' },
  { name: "Other Projects (Links)", description: "Other YouTube videos and app prototypes I've done.", id: 'other-projects' },
  { name: "Memories", description: "A sharing, picture-posting blogging website.", id: 'memories' },
  { name: "SocialPup", description: "A social media clone.", id: 'socialpup' },
  { name: "My Weather App", description: "An app that can determine the weather anywhere in the world.", id: 'my-weather-app' },
  
  { name: "", description: "", id: '' },
  { name: "Grey Rock Adventure Tours", description: "A website and commercial video I made for Grey Rock Adventure Tours.", id: 'greyrock-video' },
  { name: "Spirit Video 2009", description: "An annual end-of-the-year video I was assigned to make.", id: 'spirit-video' },
  { name: "Other Videos (Links)", description: "Other videos I've done.", id: 'other-videos' },
  { name: "MiniDoom 2 Trailer", description: "A video trailer I made in college.", id: 'minidoom2-video' },

  { name: "", description: "", id: '' },
  { name: "Justin's Spotify Clone", description: "A Spotify clone I made for mobile.", id: 'my-spotify-clone' },
  { name: "Songs I've Made", description: "I made this section because I aspire to produce more music.", id: 'my-songs' },
  { name: "Live Performances (Bluesfest)", description: "Live performances of me playing on stage.", id: 'live-performances' },
  { name: "My Music Player", description: "A music player featuring songs I like.", id: 'my-music-player' },
  { name: "Music Covers", description: "Videos of me covering songs/improvising.", id: 'music-covers' },
  { name: "GuitarKing (Design)", description: "An Adobe XD design of a guitar playing app.", id: 'guitarking' },

  { name: "Go to Level 2", description: "", id: 'level-2' },
  { name: "Graveyard Smash", description: "A single player shoot-em-up styled game.", id: 'graveyard-smash' },
  { name: "St. Joseph High School (Model)", description: "The 3d model of my entire high school (I made) which can be played in.", id: 'stjoes-games' },
  { name: "Stellar Fever", description: "A 4 player co-op action game.", id: 'stellar-fever' },
  { name: "SaySike Project", description: "Game prototype that was made in college.", id: 'saysike-project' },
  // { name: "Fusion FPS", description: "Game project made for learning the multiplayer solution Photon Fusion.", id: 'fusion-fps', status: 'unavailable' },
  { name: "Fusion FPS", description: "Game project made for learning the multiplayer solution Photon Fusion 2.", id: 'fusion-fps' },

  { name: "Mama Mia", description: "A multiplayer mayhem shooter with Mario and Pikachus.", id: 'mama-mia' },
  { name: "The Ultimate Jesus Game", description: "A single player 3D adventure game.", id: 'ultimate-jesus-game' },
  { name: "Saviour - The Final Frontier", description: "A single player 2D adventure game.", id: 'saviour-tff' },
  { name: "Church Party", description: "A 5 player mini-game extravaganza.", id: 'church-party' },
]

var contentTitlesArray2 = [
  { name: "", description: "", id: '' },
  { name: "", description: "", id: '' },
  { name: "", description: "", id: '' },
  { name: "", description: "", id: '' },
  { name: "", description: "", id: '' },
  { name: "", description: "", id: '' },
  { name: "", description: "", id: '' },
  { name: "", description: "", id: '' },
  { name: "", description: "", id: '' },
  
  { name: "", description: "", id: '' },
  { name: "", description: "", id: '' },
  { name: "", description: "", id: '' },
  { name: "", description: "", id: '' },
  { name: "", description: "", id: '' },

  { name: "", description: "", id: '' },
  { name: "", description: "", id: '' },
  { name: "", description: "", id: '' },
  { name: "", description: "", id: '' },
  { name: "", description: "", id: '' },
  { name: "", description: "", id: '' },
  { name: "", description: "", id: '' },

  { name: "Go to Level 1", description: "", id: 'level-1' },
  { name: "Cannabis Clubhouse", description: "An e-commerce website/app I made.", id: 'cannabis-clubhouse' },
  { name: "Grey Rock VIP", description: "An immersive calendar app that allows discounted reservations at the Grey Rock Casino.", id: 'grey-rock-vip' },
  // { name: "Incident Report App", description: "A secure app built for generating incidental flash reports at the Grey Rock Casino", id: 'incident-report-app' },
  // { name: "Band Council Resolution System", description: "A centralized system for managing Band Council Resolutions, enabling secure creation, tracking, and digital signing through integrated tools like DocuSign.", id: 'bcr-app' },
  // { name: "MMFN Registry App", description: "A registry system built for my native reserve, and deployed at the band's office.", id: 'mmfn-app' },
  // { name: "Grey Rock Academy", description: "An academy learning system built for the Grey Rock Casino.", id: 'greyrock-academy' },
  { name: "", description: "", id: '' }, // Delete
  { name: "", description: "", id: '' }, // Delete
  { name: "", description: "", id: '' }, // Delete
  { name: "", description: "", id: '' }, // Delete
  { name: "", description: "", id: '' },
  { name: "", description: "", id: '' },
  { name: "", description: "", id: '' },
]


function Projects({ myRef, menuVisible, scrollYGlobal, scrollToSkills, scrollToEducation, setHideOverflow,
                    scrollToPortfolio, setRefReached, onReady }) {
  const { isVisible } = useSectionActivity(myRef);
  const [animIndex, setAnimIndex] = useState(3); //IDLE
  const playerRef = useRef();
  const speechBubbleRef = useRef();
  const projectRef = useRef();
  const learnButtonRef = useRef();

  const [showBubbleOnce, setShowBubbleOnce] = useState(false);
  const [currentProject, setCurrentProject] = useState("");
  const [withinProject, setWithinProject] = useState(false);
  
  const radius = 170;
  const [objectPoints, setObjectPoints] = useState([]); //Level 1
  const [idleStance, setIdleStance] = useState(true);

  const [openModal, setOpenModal] = useState(false);
  // const envMap = useEnvironment({ files: 'hdri/sunflowers_puresky_1k.hdr'});
  // envMap.intensity = 2;

  const [isLoaded, setIsLoaded] = useState(false);
  // Camera movement changes every frame and does not need a React render.
  const cameraPositionRef = useRef([1, 2, 1]);
  const [qualityCheck, setQualityCheck] = useState(false);
  
  const [readyLevel, setReadyLevel] = useState(null);

  // Transitioning to levels stuff
  const blackOverlayRef = useRef(null);
  const [levelState, setLevelState] = useState(1);
  const sceneReady = readyLevel === levelState;
  const [rotateSpeed, setRotateSpeed] = useState(0.145);
  const [transitioning, setTransitioning] = useState(false);
  const levelTimer = useRef();
  const [skyboxImages, setSkyboxImages] = useState([
    '/img/sky/level-1/sky-left.jpg', 
    '/img/sky/level-1/sky-right.jpg', 
    '/img/sky/level-1/sky-down.jpg',
    '/img/sky/level-1/sky-up.jpg',
    '/img/sky/level-1/sky-back.jpg',
    '/img/sky/level-1/sky-front.jpg'
  ]);

  const handleSceneReady = useCallback(() => {
    setReadyLevel(levelState);
    setRotateSpeed(0.145);
    setTransitioning(false);
    blackOverlayRef.current.style.opacity = 0;
  }, [levelState]);

  useEffect(() => { onReady?.(sceneReady); }, [sceneReady, onReady]);
  useEffect(() => () => clearTimeout(levelTimer.current), []);

  // SCROLLING
    useEffect(() => {
      const divElement = myRef.current;
      const halfwayPoint = divElement.scrollHeight / 5;
      if (Math.round(scrollYGlobal) == divElement.offsetTop) {
        setRefReached(true);
        // if (!showBubbleOnce) {
        //   setShowBubbleOnce(true);
        //   gsap.to(speechBubbleRef.current, {
        //     duration:0.66,
        //     opacity: 1,
        //     transform: 'translateY(0px)',
        //   });
        //   setAnimIndex(2); //7 alt Jumping happy
        // }
      }
  }, [scrollYGlobal])

  useEffect(() => {
    if (!isLoaded || !sceneReady || !isVisible || showBubbleOnce) return;
    const timer = setTimeout(() => {
      setAnimIndex(4); //FBX Jesus
      // setAnimIndex(2); //7 alt Jumping happy
      if (!showBubbleOnce) {
        setShowBubbleOnce(true);
        gsap.to(speechBubbleRef.current, {
          duration:0.66,
          opacity: 1,
          transform: 'translateY(0px)',
        });
      }
    }, 330);
    return () => clearTimeout(timer);
  }, [isLoaded, sceneReady, isVisible, showBubbleOnce])

    useEffect(() => {
      setupPositionSpots(contentTitlesArray1); //LEVEL 1
    }, []);

    const setupPositionSpots = (content) => {
      setObjectPoints(content.map((project, i) => {
        const angle = (i / content.length) * Math.PI * 2;
        const x = Math.cos(-angle) * radius;
        const z = Math.sin(-angle) * radius;
        return <CircleObject content={project} key={i} position={[x, 0.1, z]} />;
      }));
    }


    useEffect(() => {
      if (withinProject === false) {
        gsap.to(projectRef.current, {
          opacity: 0,       // Fade out
          duration: 0.3,
          onComplete: () => {
            if (learnButtonRef.current) learnButtonRef.current.style.pointerEvents = "none";
          }
        });
      } else {
        projectRef.current.style.display = 'block'; // Show before fading in
        gsap.to(projectRef.current, {
          opacity: 1,       // Fade in
          duration: 0.3,
          onComplete: () => {
            if (learnButtonRef.current) learnButtonRef.current.style.pointerEvents = 'auto';
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
        projectRef.current.style.display = 'block'; // Show before fading in
        gsap.to(projectRef.current, {
          opacity: 1,       // Fade in
          duration: 0.3,
        });
      }
      if (openModal) {
        setHideOverflow(true); // Outside to App.jsx
        // myRef.current.style.overflow = "hidden";
      } else {
        setHideOverflow(false);
        if (isLoaded) {
          scrollToPortfolio();
        }
        // myRef.current.style.overflow = "auto";
      }
    }, [openModal])

    useEffect(() => {
      if (!isVisible) {
        if (projectRef.current) {
          projectRef.current.style.display = "none";
        }
      }
      if (isVisible && withinProject) {
        if (projectRef.current) {
          projectRef.current.style.display = "block";
        }
      }
      if (!isVisible && showBubbleOnce) //move screen
      {
        if (speechBubbleRef.current) {
          speechBubbleRef.current.style.opacity = 0;
        }
      }
    }, [isVisible, withinProject, showBubbleOnce])

    const clickProject = () => {
      if (idleStance && withinProject) {
        setOpenModal(true);
      }
    }

    const onToggleChange = (e) => {
      setQualityCheck(e.target.checked);
    };

    const handleUpArrow = () => {
      scrollToSkills();
    }
    const handleDownArrow = () => {
      scrollToEducation();
    }

    //LEVELS SCRIPTS

    const goLevel1 = () => {
      // Fade in
      setTransitioning(true);
      setAnimIndex(3);
      setRotateSpeed(0); //cam
      blackOverlayRef.current.style.opacity = 1;

      // Perform your action after the fade-in
      clearTimeout(levelTimer.current);
      levelTimer.current = setTimeout(() => {
        // Do something, e.g., change the scene
        setLevelState(1);
        setSkyboxImages([
          '/img/sky/level-1/sky-left.jpg', 
          '/img/sky/level-1/sky-right.jpg', 
          '/img/sky/level-1/sky-up.jpg',
          '/img/sky/level-1/sky-down.jpg',
          '/img/sky/level-1/sky-front.jpg',
          '/img/sky/level-1/sky-back.jpg',
        ]);
        setupPositionSpots(contentTitlesArray1); //LEVEL 1
        setAnimIndex(2);
      }, 1000); // Wait 1 second for the fade-in to complete
    }

    const goLevel2 = () => {
      // Fade in
      setTransitioning(true);
      setAnimIndex(3);
      setRotateSpeed(0); //cam
      blackOverlayRef.current.style.opacity = 1;

      // Perform your action after the fade-in
      clearTimeout(levelTimer.current);
      levelTimer.current = setTimeout(() => {
        // Do something, e.g., change the scene
        setLevelState(2);
        setSkyboxImages([
          '/img/sky/level-2/sky-left.jpg', 
          '/img/sky/level-2/sky-right.jpg', 
          '/img/sky/level-2/sky-up.jpg',
          '/img/sky/level-2/sky-down.jpg',
          '/img/sky/level-2/sky-front.jpg',
          '/img/sky/level-2/sky-back.jpg',
        ]);
        setupPositionSpots(contentTitlesArray2); //LEVEL 2
        setAnimIndex(2);
      }, 1000); // Wait 1 second for the fade-in to complete
    }
    
  return (
    <>  
    {/* Black overlay (transitioning levels) */}
    <BlackOverlayFade ref={blackOverlayRef} />

    <Container id='div4' ref={myRef} className='main-div'>
      <Arrows>
        <img draggable={false} onClick={handleUpArrow} id='arrow-top' src="/img/projects/misc/short-arrow.png"/>
        <img draggable={false} onClick={handleDownArrow} id='arrow-bottom' src="/img/projects/misc/short-arrow.png"/>
      </Arrows>
      <QualityToggle>
      <label className="toggle-wrap">
        {/* <div>Label</div> */}
        <input
          type="checkbox"
          checked={qualityCheck}
          onChange={onToggleChange}
        />
        <div className="toggle-el"></div>
    </label>
      </QualityToggle>

        {currentProject.id === 'level-1' ? (
          <ProjectPopup ref={projectRef}>
              <div className='content-levels'>
                <h2>{currentProject.name}</h2>
              </div>
              {currentProject.status !== "unavailable" ? (
                <StyledButtonLevels ref={learnButtonRef} style={{cursor: withinProject ? 'pointer' : 'grab'}} onClick={() => goLevel1()}>Go Jesus Go!</StyledButtonLevels>
                ) : (
                <UnavailableButton ref={learnButtonRef} disabled >Currently Unavailable</UnavailableButton>
              )}
          </ProjectPopup>
        ) : currentProject.id === 'level-2' ? (
          <ProjectPopup ref={projectRef}>
              <div className='content-levels'>
                <h2>{currentProject.name}</h2>
              </div>
              {currentProject.status !== "unavailable" ? (
                <StyledButtonLevels ref={learnButtonRef} style={{cursor: withinProject ? 'pointer' : 'grab'}} onClick={() => goLevel2()}>Go Jesus Go!</StyledButtonLevels>
                ) : (
                <UnavailableButton ref={learnButtonRef} disabled >Currently Unavailable</UnavailableButton>
              )}
          </ProjectPopup>
        ) : (
          <ProjectPopup ref={projectRef}>
              <div className='content'>
                <h2>{currentProject.name}</h2>
                <p>{currentProject.description}</p>
              </div>
              {currentProject.status !== "unavailable" ? (
                <StyledButton ref={learnButtonRef} style={{cursor: withinProject ? 'pointer' : 'grab'}} onClick={() => clickProject()}>Learn More</StyledButton>
                ) : (
                <UnavailableButton ref={learnButtonRef} disabled >Currently Unavailable</UnavailableButton>
              )}
          </ProjectPopup>
        )}
        
        <ProjectInfoModal menuVisible={menuVisible} currentProject={currentProject} openModal={openModal} setOpenModal={setOpenModal} />

        <SpeechBubble ref={speechBubbleRef} src="/img/projects/misc/speech-bubble-portfolio.png"/>
        
        <Canvas dpr={[1, 1.5]} frameloop={isVisible || !sceneReady ? 'always' : 'never'}
                camera={{fov: 58, far: 1000, near: 0.1, position: [0, 1.75, 5]}}
                  style={{  zIndex: 116,
                            visibility: sceneReady ? undefined : 'hidden',
                            overflow: 'hidden',
                            height: '100vh',
                            maxHeight: '100vh',
                            background: 'lightblue', 
                            backgroundImage: 'url(/img/projects/misc/background.jpg)' ,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',
                  }} 
                  gl={{
                    outputColorSpace: THREE.SRGBColorSpace,
                    // outputColorSpace: THREE.SRGBColorSpace,
                    toneMapping: THREE.ACESFilmicToneMapping,
                    toneMappingExposure: 1, // Adjust this value
                    encoding: THREE.sRGBEncoding
                  }}
                  // devicePixelRatio={window.devicePixelRatio / 10}
                  // pixelRatio={window.devicePixelRatio / 10}
                  >
                    <Suspense fallback={null}>
                      <MiniJesusFBX scale={37} 
                        animIndex={animIndex} 
                        setAnimIndex={setAnimIndex} 
                        playerRef={playerRef} 
                        canvasRef={myRef} 
                        speechBubbleRef={speechBubbleRef} 
                        touchObjects={objectPoints} 
                        setCurrentProject={setCurrentProject} 
                        setWithinProject={setWithinProject} 
                        idscroleStance={idleStance} 
                        setIdleStance={setIdleStance} 
                        cameraPositionRef={cameraPositionRef}
                        setIsLoaded={setIsLoaded}
                        transitioning={transitioning}
                        />
                    {/* WAS HERE */}
                    <OrbitControls
                      enablePan={false}
                      enableDamping
                      dampingFactor={0.07} // Adjust to control rotation speed (0 - 1)
                      enableZoom={false}
                      minPolarAngle={1.53589} // 1.45735 // TOP
                      maxPolarAngle={1.53589} // 1.53589 // BOTTOM
                      rotateSpeed={rotateSpeed} //0.145
                      target={[0, 0, 0]} // Lock the camera to the center
                      />
                    
                    {levelState === 1 && (
                      <>
                      <Ocean />
                      {/* <MarioGuitar rotation={[0,-1,0]} position={[-116.586, 0, 82]} scale={1.2} /> */}
                      </>
                    )}
                    {levelState === 1 && <EnvFBX1 scale={0.369} rotation={[0, 0, 0]} />}
                    
                    <ambientLight color='white' intensity={4} />
                    <directionalLight intensity={2}  castShadow  position={[-100, 30, 50]} />
                    <directionalLight intensity={2}  castShadow position={[62, 40, -20]} />
                    
                    {/* GOOD STILL */}
                    <Skybox imagePaths={skyboxImages} />
                    {/* <Environment map={envMap} /> */}
                    <Environment files="hdri/sunflowers_puresky_1k.hdr" intensity={2} />
                    {/* CHANGE WITH LEVEL STATE */}
                    {/* {levelState === 1 && (
                      <>
                      <EnvFBX1 scale={0.369} rotation={[0, 0, 0]}/>
                      <Ocean />
                      </>
                    )} */}
                    
                    {levelState === 2 && (
                      <></>
                    )}
                    {levelState === 2 && <EnvFBX2 scale={0.369} rotation={[0, 0, 0]} />}

                    {objectPoints}
                    <SceneReady key={levelState} onReady={handleSceneReady} />
                    
                    {qualityCheck && (
                      <>
                      <EffectComposer>
                        {/* 3.3 */}
                        {/* 6 */}
                      <Bloom luminanceThreshold={110} luminanceSmoothing={36} height={0} />
                      </EffectComposer>
                      </>
                    )}
                  {/* WAS HERE */}
                    </Suspense>
              </Canvas>
    </Container>
        {/* <Sky /> */}
        {/* <Noise opacity={0.02} /> */}
    </>
  )
}

const CircleObject = ({ position }) => {
  return (
    <mesh position={position} visible={false}>
      {/* Your object's geometry and appearance */}
      <sphereGeometry args={[1, 16, 16]} />
      <meshPhongMaterial color="#ff0000" opacity={0.0} transparent />
    </mesh>
  );
}

function EnvFBX1(props) {
  const fbx = useLoader(ReadyFBXLoader, '/models/portfolio-environment.fbx');
  return <primitive {...props} object={fbx} />;
}

function EnvFBX2(props) {
  const fbx = useLoader(ReadyFBXLoader, '/models/portfolio-environment-2.fbx');
  return <primitive {...props} object={fbx} />;
}
function Ocean() {
  const ref = useRef();
  const gl = useThree((state) => state.gl);
  const waterNormals = useLoader(THREE.TextureLoader, '/img/projects/misc/waternormals.jpg')
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const geom = useMemo(() => new THREE.PlaneGeometry(400, 400), []);
  const config = useMemo(
    () => ({
      textureWidth: 256, //512
      textureHeight: 256, //512s
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x00acf0, //001e0f
      distortionScale: 0.7, //3.7
      fog: false,
      format: gl.encoding
    }),
    [waterNormals]
  )
  useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta))
  return <water ref={ref} args={[geom, config]} position={[0, 0.01, 0]} rotation-x={-Math.PI / 2} />
}

// function HDRIBackground() {
//   const { scene, gl } = useThree(); // Access the scene from the three.js context
  
//   useEffect(() => {
//     gl.outputColorSpace = THREE.SRGBColorSpace;
//   }, [gl]);

//   const hdrTextureURL = '/hdri/sunflowers_puresky_1k.hdr';
//   const loader = new RGBELoader();
//   loader.load(hdrTextureURL, function (texture) {
//     texture.mapping = THREE.EquirectangularReflectionMapping;
//     scene.background = texture;
//     scene.environment = texture;
//   });
//   return null;
// }

export default Projects;
