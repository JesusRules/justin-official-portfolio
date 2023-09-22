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
  '/img/projects/memories/preview-1.jpg',
  '/img/projects/memories/preview-1.jpg',
  '/img/projects/memories/preview-1.jpg',
  '/img/projects/memories/preview-1.jpg',
  '/img/projects/memories/preview-1.jpg',
  '/img/projects/memories/preview-1.jpg',
];


function UltimateJesusGame({ openModal, setOpenModal }) {
  const handleItchIO = () => {
    window.open('https://p0rtal.itch.io/stellar-fever', '_blank');
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
            <p style={{fontWeight: 800, transform: 'translateY(-13px)', color: '#f29c32'}}>(Windows only)</p>
            <p>Stellar Fever was a final year project developed by 6 people during college.</p>
            <p>My job was to program the behaviour of enemy AI.</p>
            <p>The game is a 4-player co-op experience (via online). Each player chooses a unique player class.</p>
            <p>The game is also playable alone!</p>

            <p style={{marginTop: '1.5rem', marginBottom: '.5rem', fontStyle:'italic'}}>Check out this game trailer:</p>
            <iframe style={{width: "100%", maxWidth: '560px', height: 315 }}  src="https://www.youtube.com/embed/HygPgY9TVno?si=YO4bBQm7u5Zz6NkG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <p style={{marginTop: '2.5rem', marginBottom: '.5rem', fontStyle:'italic'}}>Here's some gameplay featuring 1 player:</p>
            <iframe style={{width: "100%", maxWidth: '600px', height: 315 }} src="https://www.youtube.com/embed/Rw1wA3txT_U?si=2v0vqLWD668lfpkw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      </div>
      <p className='bottom-madewith' style={{textAlign: 'left', color: 'blue', padding: '1rem', fontStyle: 'italic', fontWeight: 400}}>Project was made using <b>Unreal Engine 4.</b></p>
      </ContentContainer>
    )
}

export default UltimateJesusGame;