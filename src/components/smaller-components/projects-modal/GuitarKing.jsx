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
  background-color: #44281e;
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
    background-color: #44281e;
    width: 100%;
    max-width: 1000px;
    background-image: url(${props => props.imageUrl}); 
    background-size: cover; 
    background-repeat: no-repeat;
    background-attachment: fixed; 
    background-position: top center;
    height: 39rem;

    img {
      position: absolute;
      left: 50%;
      top: 2rem;
      transform: translateX(-50%);
      max-width: 25rem;
      width: 90%;
    }
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

function GuitarKing({ openModal, setOpenModal }) {

  const handleUrl = () => {
    window.open('https://xd.adobe.com/view/c77bf35c-f0cc-4359-8de7-ca17dca781c7-9228/', '_blank');
  }

    return (
      <ContentContainer>
      <CloseButton color='white' setOpenModal={setOpenModal} />
      <div style={{backgroundColor: '#44281e'}}>
        <BackgroundBanner imageUrl="/img/projects/guitarking/main-background.jpg">
          <img draggable={false} src="/img/projects/guitarking/gk-title.png"/>
        </BackgroundBanner>
        {/* <HorizontalImageLoopProjects _images={images} _isReversed={false} openModal={openModal} _uniqueClassName={"images5"} /> */}
      
      <div style={{transform: 'translateY(-8rem)'}}>
      <div style={{color: '#f4cea0', textAlign: 'center', margin: '1rem'}}>
          <h4 style={{fontWeight: 800, marginBottom: '.26rem'}}>Try it out!</h4>
          <div style={{display: 'flex', alignItems: 'start', gap: '0.2rem', justifyContent: 'center'}}>
            <img onClick={(e) => handleUrl()} style={{width: '28%', maxWidth: '170px', cursor: 'pointer'}} src="/img/projects/misc/web-link.png"/>
          </div>
      </div>
      <div style={{color: 'white', backgroundColor: '#44281e', padding: '0 0rem', textAlign: 'center', fontStyle: 'italic', lineHeight: '10%', maxWidth: '760px', margin: '0 auto'}}>
            <p>Guitar<span style={{color: '#f4cea0'}}>KING</span> is a prototype design of a guitar app I developed in college.</p>
            <img style={{paddingTop: '1rem'}} src="/img/projects/guitarking/gk-svg.gif"/>
      </div>
      </div>

      </div>
      <p className='bottom-madewith' style={{backgroundColor: '#44281e', textAlign: 'left', color: '#f4cea0', padding: '1rem', fontStyle: 'italic', fontWeight: 400, paddingBottom: '1rem'}}>Project was made using <b>Adobe XD, Illustrator and Photoshop</b></p>
      </ContentContainer>
    )
}

export default GuitarKing;