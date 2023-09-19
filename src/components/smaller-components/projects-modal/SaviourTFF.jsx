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
  background-color: #fff1f1;
  .title {
    display: flex;
    margin: 0 auto;
    text-align: center;

    height: 6rem;
    padding: 0.5rem;
  }
`;


const TitleDiv = styled.div`
  background-color: #ab0b0bdc;
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
  '/img/projects/saviour-tff/preview-1.jpg',
  '/img/projects/saviour-tff/preview-2.jpg',
  '/img/projects/saviour-tff/preview-3.jpg',
  '/img/projects/saviour-tff/preview-5.jpg',
  '/img/projects/saviour-tff/preview-4.jpg',
  '/img/projects/saviour-tff/preview-6.jpg',
  '/img/projects/saviour-tff/preview-7.jpg',
  '/img/projects/saviour-tff/preview-8.jpg',
  '/img/projects/saviour-tff/preview-9.jpg',
  '/img/projects/saviour-tff/preview-10.jpg',
];

function SaviourTFF({ openModal, setOpenModal }) {
  const handleAppleStore = () => {
    window.open('https://apps.apple.com/us/app/saviour-the-final-frontier/id1597686380', '_blank');
  }
  const handleGooglePlayStore = () => {
    window.open('https://play.google.com/store/apps/details?id=com.poki.saviour.PokiTheDog.game', '_blank');
  }
  const handleUrl = () => {
    window.open('https://gx.games/games/24sb3z/saviour-the-final-frontier/', '_blank');
  }

    return (
      <ContentContainer>
      <CloseButton setOpenModal={setOpenModal} color="white" />
      <div >
      <TitleDiv style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
        <img className='title' src='/img/projects/saviour-tff/saviour-text.png'/>
      </TitleDiv>

      <HorizontalImageLoopProjects _images={images} _isReversed={false} openModal={openModal} _uniqueClassName={"images5"} />

      <div style={{textAlign: 'center', margin: '1rem'}}>
            <h4 style={{fontWeight: 800, marginBottom: '.26rem'}}>Try it out!</h4>
            <div style={{display: 'flex', alignItems: 'start', gap: '0.2rem', justifyContent: 'center'}}>
              <img onClick={(e) => handleAppleStore()} style={{width: '32%', maxWidth: '250px', cursor: 'pointer'}} src="/img/projects/misc/apple-store.png"/>
              <img onClick={(e) => handleGooglePlayStore()} style={{width: '32%', maxWidth: '250px', cursor: 'pointer'}} src="/img/projects/misc/google-store.png"/>
              <img onClick={(e) => handleUrl()} style={{width: '32%', maxWidth: '250px', cursor: 'pointer'}} src="/img/projects/misc/web-link.png"/>
            </div>
        </div>

      <div style={{padding: '0 2rem', textAlign: 'center', fontStyle: 'italic', marginTop: '1.35rem', display: 'flex',
                  flexDirection: 'column', gap: '1rem', alignItems: 'center', backgroundColor: '#fff1f1'}}>
            <p>Saviour - The Final Frontier is a single player, 2D adventure game where you play as Jesus Christ and need to defeat hell after You were crucified.</p>

            <p style={{marginBottom: '1.5rem'}}><span style={{fontWeight: 800}}>For more information:</span><br/><a href='https://pokithedog.com/saviour-game.html' target='_blank'>https://pokithedog.com/saviour-game.html</a></p>

            <p style={{fontWeight: 800}}>Check out this video for game promo:</p>

            <iframe style={{width: "100%", maxWidth: '600px', height: 315 }} src="https://www.youtube.com/embed/gD_hHXYEsxc?si=CPHl-_Zkq4F-ySs6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      </div>

      <p className='bottom-madewith' style={{backgroundColor: '#fff1f1', textAlign: 'left', color: 'blue',  fontStyle: 'italic', fontWeight: 400, padding: '1rem'}}>Project was made using <b>GameMaker Studio 2</b></p>
      </ContentContainer>
    )
}

export default SaviourTFF;