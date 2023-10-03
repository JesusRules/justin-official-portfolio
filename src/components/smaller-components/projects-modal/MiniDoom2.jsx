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
  background-color: #632c18;
  color: #ffd39e;
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
    background-position: top center;
    height: 22rem;
    width: 100%;
    border-bottom: 1px solid black;
    box-shadow: 8px 8px 8px rgba(0,0,0, .1);
`;

// const images = [
//   '/img/projects/daily-worshipper/preview-1.jpg',
//   '/img/projects/daily-worshipper/preview-2.jpg',
//   '/img/projects/daily-worshipper/preview-3.jpg',
//   '/img/projects/daily-worshipper/preview-5.jpg',
//   '/img/projects/daily-worshipper/preview-4.jpg',
//   '/img/projects/daily-worshipper/preview-6.jpg',
//   '/img/projects/daily-worshipper/preview-7.jpg',
// ];

function MiniDoom2({ openModal, setOpenModal }) {
  const handleItchIO = () => {
    window.open('https://calaverastudio.itch.io/minidoom2', '_blank');
  }

    return (
      <ContentContainer>
      <CloseButton color='white' setOpenModal={setOpenModal} />
      <div style={{backgroundColor: '#632c18'}}>
        <BackgroundBanner imageUrl="/img/projects/minidoom2-video/main-banner.jpg"/>
      <div style={{textAlign: 'center', margin: '1rem', backgroundColor: '#632c18'}}>
            <h4 style={{color: 'white', fontWeight: 800, marginBottom: '.26rem'}}>Play game here!</h4>
            <div style={{display: 'flex', alignItems: 'start', gap: '0.2rem', justifyContent: 'center'}}>
              <img onClick={(e) => handleItchIO()} style={{borderRadius: '5px', width: '32%', maxWidth: '250px', cursor: 'pointer'}} src="/img/projects/misc/itch-logo.jpg"/>
            </div>
            <p style={{color: 'white', marginTop: '.25rem', fontStyle: 'italic', fontWeight: 800}}>Note: I did NOT make this game.</p>
        </div>
        
        {/* <HorizontalImageLoopProjects _images={images} _isReversed={false} openModal={openModal} _uniqueClassName={"images5"} /> */}

        <div style={{backgroundColor: '#632c18', padding: '0 2rem', textAlign: 'center', fontStyle: 'italic', lineHeight: '10%', maxWidth: '760px', margin: '2rem auto 0 auto'}}>
            <p>Here's the video trailer I made for MiniDoom2 in college.</p>
            <p style={{marginBottom: '1rem'}}>It is not an offical trailer but a fanmade one.</p>
            <iframe style={{width: "100%", maxWidth: '700px', height: 415 }} src="https://www.youtube.com/embed/-EfTKhpe2K0?si=CFhxtrJmV7kAQdnb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      </div>
      <p className='bottom-madewith' style={{textAlign: 'left', color: '#ffe4c6', padding: '1rem', fontStyle: 'italic', fontWeight: 400, paddingBottom: '1rem', backgroundColor: '#632c18'}}>Project was made using <b>Adobe Premiere.</b></p>
      </ContentContainer>
    )
}

export default MiniDoom2;