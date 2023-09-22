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
  @media only screen and (max-width: 500px) {
    h2 {
      font-size: 2rem;
    }
    img {
      display: none;
    }
  }
`

const BackgroundBanner = styled.div`
    background-image: url(${props => props.imageUrl}); 
    background-size: cover; 
    background-repeat: no-repeat;
    background-attachment: fixed; 
    background-position: bottom center;
    height: 30rem; //16
    border-bottom: 1px solid black;
    box-shadow: 8px 8px 8px rgba(0,0,0, .1);
    position: relative;
    
    img {
      position: absolute;
      bottom: 3vh;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
    }
    p {
      display: none;
      color: #d4a251;
      padding: 0;
      margin: 0;
      font-size: 6.5vw;
      position: absolute;
      bottom: 3vh;
      left: 50%;
      text-align: center;
      transform: translateX(-50%);
      width: 100%;
      border: 1px solid rgba(0,0,0,0.3);
    }
`;


const images = [
  '/img/projects/ultimate-jesus-game/preview-2.jpg',
  '/img/projects/ultimate-jesus-game/preview-3.jpg',
  '/img/projects/ultimate-jesus-game/preview-4.jpg',
  '/img/projects/ultimate-jesus-game/preview-5.jpg',
  '/img/projects/ultimate-jesus-game/preview-6.jpg',
  '/img/projects/ultimate-jesus-game/preview-11.jpg',
  '/img/projects/ultimate-jesus-game/preview-12.jpg',
  '/img/projects/ultimate-jesus-game/preview-8.jpg',
  '/img/projects/ultimate-jesus-game/preview-9.jpg',
  '/img/projects/ultimate-jesus-game/preview-7.jpg',
  '/img/projects/ultimate-jesus-game/preview-1.jpg',
];


function UltimateJesusGame({ openModal, setOpenModal }) {
  const handleItchIO = () => {
    window.open('https://jesusrules.itch.io/the-ultimate-jesus-game', '_blank');
  }

    return (
      <ContentContainer>
      <CloseButton setOpenModal={setOpenModal} />
      <div >
        {/* <TitleDiv style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
           <h2>Daily Worshipper</h2>
           <img style={{width: '60px', height: '60px', borderRadius: '10px', boxShadow: '3px 3px 3px rgba(0,0,0,0.7)'}} src="/img/projects/daily-worshipper/jesus-icon.jpg" />
        </TitleDiv> */}
        <BackgroundBanner imageUrl="/img/projects/ultimate-jesus-game/ultimate-jesus-banner.jpg">
          <img src="/img/projects/ultimate-jesus-game/ultimate-jesus-text.png"/>
          <p>The Ultimate Jesus Game</p>
        </BackgroundBanner>
        <HorizontalImageLoopProjects _images={images} _isReversed={false} openModal={openModal} _uniqueClassName={"images5"} />
        
        <div style={{ textAlign: 'center', margin: '1rem'}}>
            <h4 style={{fontWeight: 800, marginBottom: '.26rem'}}>Try it out!</h4>
            <div style={{display: 'flex', alignItems: 'start', gap: '0.2rem', justifyContent: 'center'}}>
              <img onClick={(e) => handleItchIO()} style={{borderRadius: '5px', width: '32%', maxWidth: '250px', cursor: 'pointer'}} src="/img/projects/misc/itch-logo.jpg"/>
            </div>
        </div>

      <div style={{padding: '0 2rem', textAlign: 'center', fontStyle: 'italic', lineHeight: '10%', maxWidth: '760px', margin: '0 auto'}}>
            <p style={{fontWeight: 800, transform: 'translateY(-13px)'}}>(Windows only)</p>
            <p>The Ultimate Jesus Game is a 3D platformer prototype I developed as a side-project. It features some levels that show off some mechanics and gameplay features I implemented.</p>

            <p style={{margin: '1.5rem'}}>The project is not done, but a crucial learning step in my game development endeavours.</p>

            <p style={{marginBottom: '1.5rem'}}><span style={{fontWeight: 800}}>For more information:</span><br/><a href='https://pokithedog.com/ultimate-jesus-game.html' target='_blank'>https://pokithedog.com/ultimate-jesus-game.html</a></p>


            <p style={{marginTop: '1.5rem', marginBottom: '.5rem', fontStyle:'italic', fontWeight: 800}}>Check out this game demonstration:</p>
            <iframe style={{width: "100%", maxWidth: '600px', height: 315 }} src="https://www.youtube.com/embed/I5lIdJ137m0?si=IfU3VrIQn1GKhCBL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      </div>
      <p className='bottom-madewith' style={{textAlign: 'left', color: 'blue', padding: '1rem', fontStyle: 'italic', fontWeight: 400}}>Project was made using <b>Unreal Engine 4-5.</b></p>
      </ContentContainer>
    )
}

export default UltimateJesusGame;