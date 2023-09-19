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
  '/img/projects/mama-mia/preview-1.jpg',
  '/img/projects/mama-mia/preview-2.jpg',
  '/img/projects/mama-mia/preview-3.jpg',
  '/img/projects/mama-mia/preview-5.jpg',
  '/img/projects/mama-mia/preview-4.jpg',
  '/img/projects/mama-mia/preview-6.jpg',
  '/img/projects/mama-mia/preview-7.jpg',
];

function MamaMia({ openModal, setOpenModal }) {
  const handleItchIO = () => {
    window.open('https://jesusrules.itch.io/mama-mia', '_blank');
  }

    return (
      <ContentContainer>
      <CloseButton setOpenModal={setOpenModal} color="white" />
      <div >
      {/* <TitleDiv style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
        <p>Mama Mia</p>
        <img className='title' src='/img/projects/mama-mia/mamamia-logo.png'/>
      </TitleDiv> */}
      <TitleDiv style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
          <img id="mario" src="/img/projects/mama-mia/mario.png"/>
           <h2>Mama Mia</h2>
          <img id="pikachu" src="/img/projects/mama-mia/pikachu.png"/>
           {/* <img style={{width: '60px', height: '60px'}} src="/img/projects/portfolio-old/Justin-Icon.png" /> */}
        </TitleDiv>

      <HorizontalImageLoopProjects _images={images} _isReversed={false} openModal={openModal} _uniqueClassName={"images5"} />

      <div style={{textAlign: 'center', margin: '1rem'}}>
            <h4 style={{fontWeight: 800, marginBottom: '.26rem'}}>Try it out!</h4>
            <div style={{display: 'flex', alignItems: 'start', gap: '0.2rem', justifyContent: 'center'}}>
              <img onClick={(e) => handleItchIO()} style={{borderRadius: '5px', width: '32%', maxWidth: '250px', cursor: 'pointer'}} src="/img/projects/misc/itch-logo.jpg"/>
            </div>
        </div>

      <div style={{padding: '0 2rem', textAlign: 'center', fontStyle: 'italic', marginTop: '1.35rem', display: 'flex',
                  flexDirection: 'column', gap: '1rem', alignItems: 'center', }}>
            <p style={{fontWeight: 800, transform: 'translateY(-13px)'}}>(2+ Players Required, Windows only, LOCAL only available)</p>
            
            <p>Mama Mia is a free to play game where Marios must chase down and destroy Pikachus.</p>
            
            <p style={{marginBottom: '1.5rem'}}>Right now there is currently <span style={{fontWeight: '900'}}>NO online internet available.</span> You must play with friends/people over your LAN connection!</p>

            <p style={{fontWeight: 800}}>Check out these YouTube videos for gameplay:</p>

            <iframe style={{width: "100%", maxWidth: '600px', height: 315 }} src="https://www.youtube.com/embed/gD_hHXYEsxc?si=CPHl-_Zkq4F-ySs6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <p><span style={{fontWeight: 800}}>Check out this link for more information:</span><br/><a href='https://pokithedog.com/mamamia-game.html' target='_blank'>https://pokithedog.com/mamamia-game.html</a></p>
      </div>
      </div>

      <p className='bottom-madewith' style={{textAlign: 'left', color: 'blue',  fontStyle: 'italic', fontWeight: 400, padding: '1rem'}}>Project was made using <b>GameMaker Studio 2</b></p>
      </ContentContainer>
    )
}

export default MamaMia;