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
  width: 100%;
  background-color: #c2ccda;
  .title {
    display: flex;
    margin: 0 auto;
    text-align: center;

    height: 6rem;
    padding: 0.5rem;
  }
`;


const TitleDiv = styled.div`
    position: relative;
    background-color: #263142f1;
    color: white;
    img {
      width: 3rem;
      z-index: 100;
      position: absolute;
    }
    #mario {
      transform: translateX(-8rem);
    }
    #pikachu {
      transform: translateX(8rem);
    }
  @media only screen and (max-width: 500px) {
    h2 {
      font-size: 2rem;
    }
    img {
      /* display: none; */
    }
  }
`

const images = [
  '/img/projects/graveyard-smash/preview-1.jpg',
  '/img/projects/graveyard-smash/preview-2.jpg',
  '/img/projects/graveyard-smash/preview-3.jpg',
  '/img/projects/graveyard-smash/preview-5.jpg',
  '/img/projects/graveyard-smash/preview-4.jpg',
  '/img/projects/graveyard-smash/preview-6.jpg',
  '/img/projects/graveyard-smash/preview-7.jpg',
];

function GraveyardSmash({ openModal, setOpenModal }) {
    const handleItchIO = () => {
      window.open('https://jesusrules.itch.io/graveyard-smash', '_blank');
    }

    return (
      <ContentContainer>
      <CloseButton setOpenModal={setOpenModal} color="white"/>
      <div >
      <TitleDiv style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
           <h2>Graveyard Smash</h2>
      </TitleDiv>

      <HorizontalImageLoopProjects _images={images} _isReversed={false} openModal={openModal} _uniqueClassName={"images5"} />

      <div style={{textAlign: 'center', margin: '1rem'}}>
            <h4 style={{fontWeight: 800, marginBottom: '.26rem'}}>Try it out!</h4>
            <div style={{display: 'flex', alignItems: 'start', gap: '0.2rem', justifyContent: 'center'}}>
              <img onClick={(e) => handleItchIO()} style={{borderRadius: '5px', width: '32%', maxWidth: '250px', cursor: 'pointer'}} src="/img/projects/misc/itch-logo.jpg"/>
            </div>
        </div>

      <div style={{textAlign: 'center', fontStyle: 'italic', marginTop: '1.35rem', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#c2ccda' }}>
            <p style={{fontWeight: 800, transform: 'translateY(-13px)'}}>(Windows only)</p>
            
            <p style={{padding: '0 2rem'}}>Graveyard Smash is a single-player, first-person shooter where enemy AI spawn out of gravestones and try to overrun you.</p>
            <p>You must destroy all gravestones before completing each level and being overran by the undead!</p>

            <p style={{fontWeight: 800, marginTop: '1.5rem', marginBottom: '.5rem'}}>Check out this YouTube video for gameplay:</p>
            <iframe style={{width: "100%", maxWidth: '560px', height: 315 }} src="https://www.youtube.com/embed/GTmFF7Z02tE?si=eSynlV-bcEqfOPPH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      </div>

      <p className='bottom-madewith' style={{textAlign: 'left', color: '#002aff',  fontStyle: 'italic', fontWeight: 400, padding: '1rem', backgroundColor: '#c2ccda'}}>Project was made using <b>Unity</b></p>
      </ContentContainer>
    )
}

export default GraveyardSmash;