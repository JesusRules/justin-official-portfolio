import React, { useState, useEffect, useRef } from 'react'
import { styled, keyframes  } from 'styled-components'
import gsap from 'gsap';

const ProjectInfoModalDiv = styled.div`
  height: 85%;
  width: 92%;
  max-width: 900px;
  margin: auto;
  border-radius: 15px;
  position: absolute;
  left: 0;
  right: 0;
  top: 2.2rem;
  bottom: 0;
  box-shadow: 5px 5px 5px black;
  z-index: 9995;
  cursor: auto;
  background-color: #e6fbff;
  color: black;

  h2 {
    padding: 1rem;
    text-align: center;
    border-bottom: 1px solid black;
  }
`;

const DarkBG = styled.div`
    z-index: 9970;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.56);
    cursor: pointer;
    position: absolute;
    display:  none;
    /* transition: transform 0.3s ease, opacity 0.3s ease; */
`

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
                x: 0, // Final x position (center)
                opacity: 1, // Final opacity
                duration: 0.5, // Animation duration in seconds
                ease: '"elastic.out(1, 0.3)"', // Easing function (you can choose a different one)
              });
        }
        if (!openModal) {
            closeButtonRef.current.style.display = 'none';
            gsap.to(projectModalRef.current, {
                x: '-100%', // Final x position (outside the viewport to the right)
                opacity: 0, // Final opacity
                duration: 0.5, // Animation duration in seconds
                ease: 'power1.in', // Easing function (you can choose a different one)
                onComplete: () => {
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

        <h2>{currentProject}</h2>
        <p>JESUS!</p>
    </ProjectInfoModalDiv>
    </>
  )
}

export default ProjectInfoModal
