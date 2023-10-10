import React, { useState, useEffect, useRef } from 'react'
import { styled, keyframes  } from 'styled-components'
import gsap from 'gsap';

import PokiTheDog from './projects-modal/PokiTheDog';
import Portfolio_Old from './projects-modal/Portfolio_Old';
import OttawaRecSports from './projects-modal/OttawaRecSports';
import DailyWorshipper from './projects-modal/DailyWorshipper';
import Memories from './projects-modal/Memories';
import SocialPup from './projects-modal/SocialPup';
import WeatherApp from './projects-modal/WeatherApp';
import OtherProjects from './projects-modal/OtherProjects';
import ChurchParty from './projects-modal/ChurchParty';
import SaviourTFF from './projects-modal/SaviourTFF';
import MamaMia from './projects-modal/MamaMia';
import StellarFever from './projects-modal/StellarFever';
import GraveyardSmash from './projects-modal/GraveyardSmash';
import UltimateJesusGame from './projects-modal/UltimateJesusGame';
import StJoesGames from './projects-modal/StJoesGames';
import GuitarKing from './projects-modal/GuitarKing';
import SpotifyClone from './projects-modal/SpotifyClone';
import MyMusicPlayer from './projects-modal/MyMusicPlayer';
import LivePerformances from './projects-modal/LivePerformances';
import MusicCovers from './projects-modal/MusicCovers';
import MySongs from './projects-modal/MySongs';
import GreyRockAdventureTours from './projects-modal/GreyRockAdventureTours';
import SpiritVideo from './projects-modal/SpiritVideo';
import MiniDoom2 from './projects-modal/MiniDoom2';
import OtherVideos from './projects-modal/OtherVideos';
import SaySike from './projects-modal/SaySike';

const ProjectInfoContainer = styled.div`
  position: relative;
  height: 100vh;
  z-index: 111110;
`;

const ProjectInfoModalDiv = styled.div`
  height: 100%; //88
  width: 92%;
  max-width: 1000px;
  /* margin: auto; */
  margin: auto;
  border-radius: 15px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  /* bottom: 2.2rem; */
  box-shadow: 5px 5px 5px black;
  z-index: 10010;//scroll-snap-type
  cursor: auto;
  background-color: #e6fbff;
  color: black;
  overflow-y: auto;
  display: none;

  h2 {
    border-bottom: 1px solid black;
    padding: 1rem;
    text-align: center;
  }
`;

const DarkBG = styled.div`
    z-index: 10005;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.56);
    cursor: pointer;
    position: absolute;
    display:  none;
    overflow-y: hidden;

`

const BackgroundBanner = styled.div`
    background-image: url(${props => props.imageUrl}); 
    background-size: cover; 
    background-repeat: no-repeat;
    background-attachment: fixed; 
    background-position: center center;
    height: 15rem;
    border: 1px solid black;
`;

const GoToTopDiv = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  max-width: 970px;
  height: 96%;
  background-color: transparent;
  margin: 0 auto;
  z-index: 100000;
  `

const GoToTopButton = styled.button`
  cursor: pointer;
  z-index: 100000;
  position: absolute;
  /* bottom: 0; */
  bottom: 3.9rem;
  display: flex;
  right: 0;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background-color: red;
  color: white;
  border: 0px;
`

function ProjectInfoModal(props) {
    const { currentProject, openModal, setOpenModal} = props;
    const projectModalRef = useRef();
    const closeButtonRef = useRef();
    const [hideVideos, setHideVideos] = useState(true);

    useEffect(() => {
        gsap.set(projectModalRef.current, { x: '0%', opacity: 1 });
    }, [])

    useEffect(() => {
      if (openModal) {
        closeButtonRef.current.style.display = 'block';
        gsap.to(projectModalRef.current, {
          x: '0%', // Final x position (center)
          opacity: 1, // Final opacity
          duration: 0.5, // Animation duration in seconds
                ease: '"elastic.out(1, 0.3)"', // Easing function (you can choose a different one)
                onStart: () => {
                  projectModalRef.current.style.display = 'block';
                  setHideVideos(false);
                },
                onComplete: () => {
                  projectModalRef.current.style.pointerEvents = 'auto';
                    projectModalRef.current.style.userSelect = 'auto';
                }
              });
            }
            if (!openModal) {
              // projectModalRef.current.scrollTop = 0; //scroll to top
              closeButtonRef.current.style.display = 'none';
            gsap.to(projectModalRef.current, {
                x: '-100%', // Final x position (outside the viewport to the right)
                opacity: 0, // Final opacity
                duration: 0.5, // Animation duration in seconds
                ease: 'power1.in', // Easing function (you can choose a different one)
                onStart: () => {
                    projectModalRef.current.style.pointerEvents = 'none';
                    projectModalRef.current.style.userSelect = 'none';
                },
                onComplete: () => {
                    projectModalRef.current.scrollTop = 0
                    projectModalRef.current.style.display = 'none';
                    setHideVideos(true);
                    //Stop videos NOT lazy
                    const videos = document.querySelectorAll('iframe');
                    videos.forEach(i => {
                      const source = i.src
                      i.src = ''
                      i.src = source
                   })
                },
              });
        }
    }, [openModal])

    const scrollToTop = () => {
      // projectModalRef.current.scrollTop = 0;
      projectModalRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

  return (
    <>
    <DarkBG ref={closeButtonRef} onClick={() => setOpenModal(false)} />
    
    {/* <ProjectInfoContainer> */}
    {/* <GoToTopDiv> */}
    {/* </GoToTopDiv> */}

    {openModal &&
      (currentProject.id === "live-performances" ||
      currentProject.id === "other-projects" || 
      currentProject.id === "music-covers" ||
      currentProject.id === "my-songs" || 
      currentProject.id === "other-videos") && (
        <GoToTopButton onClick={scrollToTop}>Top</GoToTopButton>
        )}
    <ProjectInfoModalDiv ref={projectModalRef}>
        {currentProject.id === "pokithedog" && <PokiTheDog openModal={openModal} setOpenModal={setOpenModal} /> }
        {currentProject.id === "my-portfolio-old" && <Portfolio_Old openModal={openModal} setOpenModal={setOpenModal} /> }
        {currentProject.id === "ottawa-rec-sports" && <OttawaRecSports openModal={openModal} setOpenModal={setOpenModal} /> }
        {currentProject.id === "daily-worshipper" && <DailyWorshipper openModal={openModal} setOpenModal={setOpenModal} /> }
        {currentProject.id === "memories" && <Memories openModal={openModal} setOpenModal={setOpenModal} /> }
        {currentProject.id === "socialpup" && <SocialPup openModal={openModal} setOpenModal={setOpenModal} /> }
        {currentProject.id === "my-weather-app" && <WeatherApp openModal={openModal} setOpenModal={setOpenModal} /> }
        {currentProject.id === "other-projects" && <OtherProjects openModal={openModal} setOpenModal={setOpenModal} /> }
        
        {currentProject.id === "greyrock-video" && <GreyRockAdventureTours openModal={openModal} setOpenModal={setOpenModal} /> }
        {currentProject.id === "spirit-video" && <SpiritVideo openModal={openModal} setOpenModal={setOpenModal} /> }
        {currentProject.id === "minidoom2-video" && <MiniDoom2 openModal={openModal} setOpenModal={setOpenModal} /> }
        {currentProject.id === "other-videos" && <OtherVideos openModal={openModal} setOpenModal={setOpenModal} hideVideos={hideVideos} /> }
        
        {currentProject.id === "guitarking" && <GuitarKing openModal={openModal} setOpenModal={setOpenModal} /> }
        {currentProject.id === "my-spotify-clone" && <SpotifyClone openModal={openModal} setOpenModal={setOpenModal} /> }
        {currentProject.id === "my-music-player" && <MyMusicPlayer openModal={openModal} setOpenModal={setOpenModal} /> }
        {currentProject.id === "live-performances" && <LivePerformances openModal={openModal} setOpenModal={setOpenModal} hideVideos={hideVideos} /> }
        {currentProject.id === "music-covers" && <MusicCovers openModal={openModal} setOpenModal={setOpenModal} hideVideos={hideVideos} /> }
        {currentProject.id === "my-songs" && <MySongs openModal={openModal} setOpenModal={setOpenModal} hideVideos={hideVideos} /> }
        
        {currentProject.id === "church-party" && <ChurchParty openModal={openModal} setOpenModal={setOpenModal} /> }
        {currentProject.id === "saviour-tff" && <SaviourTFF openModal={openModal} setOpenModal={setOpenModal} /> }
        {currentProject.id === "ultimate-jesus-game" && <UltimateJesusGame openModal={openModal} setOpenModal={setOpenModal} /> }
        {currentProject.id === "mama-mia" && <MamaMia openModal={openModal} setOpenModal={setOpenModal} /> }
        {currentProject.id === "stellar-fever" && <StellarFever openModal={openModal} setOpenModal={setOpenModal} /> }
        {currentProject.id === "graveyard-smash" && <GraveyardSmash openModal={openModal} setOpenModal={setOpenModal} /> }
        {currentProject.id === "stjoes-games" && <StJoesGames openModal={openModal} setOpenModal={setOpenModal} /> }
        {currentProject.id === "saysike-project" && <SaySike openModal={openModal} setOpenModal={setOpenModal} /> }
    </ProjectInfoModalDiv>
    {/* </ProjectInfoContainer> */}
    </>
  )
}

export default ProjectInfoModal
