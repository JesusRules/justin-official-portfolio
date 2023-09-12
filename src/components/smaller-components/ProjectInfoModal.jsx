import React, { useState, useEffect, useRef } from 'react'
import { styled, keyframes  } from 'styled-components'
import gsap from 'gsap';

import PokiTheDog from './projects-modal/PokiTheDog';
import Portfolio_Old from './projects-modal/Portfolio_Old';
import OttawaRecSports from './projects-modal/OttawaRecSports';
import DailyWorshipper from './projects-modal/DailyWorshipper';
import Memories from './projects-modal/Memories';
import SocialPup from './projects-modal/SocialPup';

const ProjectInfoModalDiv = styled.div`
  height: 92%;
  width: 92%;
  max-width: 900px;
  margin: auto;
  border-radius: 15px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  box-shadow: 5px 5px 5px black;
  z-index: 10010;
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
    /* transition: transform 0.3s ease, opacity 0.3s ease; */
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

function ProjectInfoModal(props) {
    const { currentProject, openModal, setOpenModal} = props;
    const projectModalRef = useRef();
    const closeButtonRef = useRef();

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
                },
                onComplete: () => {
                    projectModalRef.current.style.pointerEvents = 'auto';
                    projectModalRef.current.style.userSelect = 'auto';
                }
              });
        }
        if (!openModal) {
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
                    projectModalRef.current.style.display = 'none';
                },
              });
        }
    }, [openModal])

  return (
    <>
    <DarkBG ref={closeButtonRef} onClick={() => setOpenModal(false)} />
    
    <ProjectInfoModalDiv ref={projectModalRef}>
        {/* Close Button */}
          <a onClick={() => setOpenModal(false)} className="close-button">
          <div className="in">
          <div className="close-button-block"></div>
          <div className="close-button-block"></div>
          </div>
          <div className="out">
          <div className="close-button-block"></div>
          <div className="close-button-block"></div>
          </div>
          </a>

        {currentProject.id === "pokithedog" && <PokiTheDog openModal={openModal} /> }
        {currentProject.id === "my-portfolio-old" && <Portfolio_Old openModal={openModal} /> }
        {currentProject.id === "ottawa-rec-sports" && <OttawaRecSports openModal={openModal} /> }
        {currentProject.id === "daily-worshipper" && <DailyWorshipper openModal={openModal} /> }
        {currentProject.id === "memories" && <Memories openModal={openModal} /> }
        {currentProject.id === "socialpup" && <SocialPup openModal={openModal} /> }

    </ProjectInfoModalDiv>
    </>
  )
}

export default ProjectInfoModal
