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
  '/img/projects/st-joes-model/preview-12.jpg',
  // '/img/projects/st-joes-model/preview-3.jpg',
  '/img/projects/st-joes-model/preview-4.jpg',
  '/img/projects/st-joes-model/preview-5.jpg',
  '/img/projects/st-joes-model/preview-6.jpg',
  '/img/projects/st-joes-model/preview-7.jpg',
  '/img/projects/st-joes-model/preview-8.jpg',
  '/img/projects/st-joes-model/preview-9.jpg',
  '/img/projects/st-joes-model/preview-10.jpg',
  '/img/projects/st-joes-model/preview-11.jpg',
];

function StJoesGames({ openModal, setOpenModal }) {
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
           <h2>St. Joseph High School (Model)</h2>
           <img style={{width: '60px', height: '60px'}} src="/img/projects/st-joes-model/stjoeslogo.png" />
      </TitleDiv>

        <HorizontalImageLoopProjects _images={images} _isReversed={false} openModal={openModal} _uniqueClassName={"images5"} />

        <div style={{textAlign: 'center', margin: '1rem'}}>
            <h4 style={{fontWeight: 800, marginBottom: '.26rem'}}>Try it out!</h4>
            <div style={{display: 'flex', alignItems: 'start', gap: '0.2rem', justifyContent: 'center'}}>
              <img onClick={(e) => handleItchIO_1()} style={{borderRadius: '5px', width: '32%', maxWidth: '250px', cursor: 'pointer'}} src="/img/projects/misc/itch-logo.jpg"/>
            </div>
      </div>

      <div style={{padding: '0 1rem', textAlign: 'center', fontStyle: 'italic', marginTop: '1.35rem', display: 'flex',
                  flexDirection: 'column', gap: '1rem', alignItems: 'center'}}>
                <p style={{fontWeight: 800, transform: 'translateY(-13px)'}}>(Windows only, single or multiplayer)</p>

            <p>St. Joseph High School (Model) was a 3D simulation of the high school I went too (2011 rendering).</p>
            <p>You can experience the school on your own, or with up to 8 people locally OR via internet!</p>

      </div>
      <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
        <p style={{fontWeight: 800, marginBottom: '.5rem'}}>Check out this game demo:</p>
        <iframe style={{width: "100%", maxWidth: '600px', height: 315 }} src="https://www.youtube.com/embed/NNemZpoT6ME?si=YHT5jQhXcrk3W-FU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <div style={{textAlign: 'center', marginTop: '2.5rem', paddingTop: '.5rem', borderTop: '1px solid black'}}>
        <p style={{fontWeight: 800, marginBottom: '.5rem'}}>You can also try the game as a Time Attack racer!</p>
        <iframe style={{width: "100%", maxWidth: '600px', height: 315 }} src="https://www.youtube.com/embed/iMzHR6k7Z10?si=IjvOGnp9xzGVRZ60" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <div style={{textAlign: 'center', margin: '0rem'}}>
              <h4 style={{fontWeight: 800, marginBottom: '.26rem'}}>Try here:</h4>
              <div style={{display: 'flex', alignItems: 'start', gap: '0.2rem', justifyContent: 'center'}}>
                <img onClick={(e) => handleItchIO_2()} style={{borderRadius: '5px', width: '32%', maxWidth: '250px', cursor: 'pointer'}} src="/img/projects/misc/itch-logo.jpg"/>
              </div>
              {/* <p style={{fontWeight: 800}}>(Windows only)</p> */}
        </div>
      </div>
      <div style={{textAlign: 'center', marginTop: '2.5rem', paddingTop: '.5rem', borderTop: '1px solid black'}}>
        <p style={{fontWeight: 800, marginBottom: '.5rem'}}>I also turned the school into a VR experience!</p>
        <iframe style={{width: "100%", maxWidth: '600px', height: 315 }} src="https://www.youtube.com/embed/oxkM8PeOlXI?si=pd3r8rIPCQi6GsZQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <h4 style={{fontWeight: 800, marginBottom: '.26rem'}}>Not Playable Yet :(</h4>
      </div>
      </div>

      <p className='bottom-madewith' style={{textAlign: 'left', color: 'blue', margin: '1rem 1rem 1rem 1rem', fontStyle: 'italic', fontWeight: 400, paddingBottom: '1rem'}}>Projects were made using <b>Unreal Engine 4/5 and Advanced Sessions (Plugin)</b></p>
      </ContentContainer>
    )
}

export default StJoesGames;