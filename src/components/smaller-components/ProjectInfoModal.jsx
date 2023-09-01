import React, { useState, useEffect, useRef } from 'react'
import { styled, keyframes  } from 'styled-components'

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
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    position: absolute;
    /* transition: transform 0.3s ease, opacity 0.3s ease; */
`

function ProjectInfoModal(props) {
    const { openModal, setOpenModal} = props;
    const closeButtonRef = useRef();

    useEffect(() => {
        return () => {
      };
    }, [])

  return (
    <>
    <DarkBG onClick={() => setOpenModal(false)} />
    <ProjectInfoModalDiv>

        {/* CLOSE BUTTON */}
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

        <h2>Ultimate Jesus Game</h2>
    </ProjectInfoModalDiv>
    </>
  )
}

export default ProjectInfoModal
