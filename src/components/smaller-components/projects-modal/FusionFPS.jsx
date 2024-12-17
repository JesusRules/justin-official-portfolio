import React, { useState, useEffect, useRef } from 'react'
import { styled, keyframes  } from 'styled-components'
import gsap from 'gsap';
import { HorizontalImageLoopProjects } from '../../../utils';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import CloseButton from '../CloseButton';

const ContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


const TitleDiv = styled.div`
 h2 {
  border: 0px;
 }
  @media only screen and (max-width: 500px) {
    h2 {
      font-size: 2rem;
    }
    img {
      display: none;
    }
  }
`

const images = [
  '/img/projects/fusion-fps/preview-2.jpg',
  '/img/projects/fusion-fps/preview-3.jpg',
  '/img/projects/fusion-fps/preview-4.jpg',
  '/img/projects/fusion-fps/preview-5.jpg',
  '/img/projects/fusion-fps/preview-6.jpg',
  '/img/projects/fusion-fps/preview-7.jpg',
];

function FusionFPS({ openModal, setOpenModal }) {
  const handleItchIO_1 = () => {
    window.open('https://jesusrules.itch.io/justins-st-joes-model', '_blank');
  }
  const handleItchIO_2 = () => {
    window.open('https://jesusrules.itch.io/time-attack-st-joes-model', '_blank');
  }

    return (
      <ContentContainer>
      <CloseButton setOpenModal={setOpenModal} />
      <div>
      <TitleDiv style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
           <h2>Fusion FPS</h2>
      </TitleDiv>

        <HorizontalImageLoopProjects _images={images} _isReversed={false} openModal={openModal} _uniqueClassName={"images5"} />

        <div style={{textAlign: 'center', margin: '1rem'}}>
            <div style={{display: 'flex', alignItems: 'start', gap: '0.2rem', justifyContent: 'center'}}>
              <p style={{fontWeight: 800, transform: 'translateY(-13px)', marginTop: '0.5rem'}}>There is currently no playable demo available.</p>
            </div>
      </div>

      <div style={{padding: '0 1rem', textAlign: 'center', fontStyle: 'italic', marginTop: '0rem', display: 'flex',
                  flexDirection: 'column', gap: '1rem', alignItems: 'center'}}>
            <p>This project was my learning attempt at using Photon's Fusion 2 (multiplayer solution) with Unity.</p>
            <p>It went good! And I highly recommend anyone coming from Photon's PUN2 to adapt to either Fusion 2 or Quantum 3.</p>
            <a href="https://doc.photonengine.com/fusion/current/fusion-intro" target="_blank" rel="noopener noreferrer">
              https://doc.photonengine.com/fusion/current/fusion-intro
          </a>
      </div>
      </div>

      <p className='bottom-madewith' style={{textAlign: 'left', color: 'blue', margin: '1rem 1rem 1rem 1rem', fontStyle: 'italic', fontWeight: 400, paddingBottom: '1rem'}}>Projects were made using <b>Unity and Photon Fusion 2</b></p>
      </ContentContainer>
    )
}

export default FusionFPS;