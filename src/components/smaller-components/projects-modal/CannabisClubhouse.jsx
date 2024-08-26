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

const BackgroundDiv = styled.div`
  background-image: url('/img/projects/cannabis-clubhouse/cover-white.jpg');
  background-repeat: repeat;
  /* background-size: 330px 330px;  */
  background-position: center center;
  background-color: #fff;
  background-attachment: fixed;
  height: 100%;
`

const ContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .title {
    display: flex;
    margin: 0 auto;
    text-align: center;

    height: 8rem;
    padding: 0.5rem;
  }
`;

const images = [
  '/img/projects/cannabis-clubhouse/preview-1.jpg',
  '/img/projects/cannabis-clubhouse/preview-2.jpg',
  '/img/projects/cannabis-clubhouse/preview-3.jpg',
  '/img/projects/cannabis-clubhouse/preview-4.jpg',
  '/img/projects/cannabis-clubhouse/preview-5.jpg',
  '/img/projects/cannabis-clubhouse/preview-6.jpg',
];

function CannabisClubhouse({ openModal, setOpenModal }) {
  const handleUrl = () => {
    window.open('https://cannabisclubhouse.ca/', '_blank');
  }
    return (
      <BackgroundDiv>

      <ContentContainer>
      <CloseButton setOpenModal={setOpenModal} />
      <div>
        <img className='title' src='/img/projects/cannabis-clubhouse/cc-logo-black.png'/>

        <HorizontalImageLoopProjects _images={images} _isReversed={false} openModal={openModal} _uniqueClassName={"images4"} />

        <div style={{textAlign: 'center', margin: '1rem'}}>
            {/* <h4 style={{fontWeight: 800, marginBottom: '.26rem'}}>Try it out!</h4> */}
            <h4 style={{fontWeight: 800, marginBottom: '.26rem'}}>Website currently not active.</h4>
            <div style={{display: 'flex', alignItems: 'start', gap: '0.2rem', justifyContent: 'center'}}>
              {/* <img onClick={(e) => handleUrl()} style={{width: '28%', maxWidth: '170px', cursor: 'pointer'}} src="/img/projects/misc/web-link.png"/> */}
              <img  style={{width: '28%', maxWidth: '170px', opacity: 0.5, cursor: 'not-allowed'}} src="/img/projects/misc/web-link.png"/>
            </div>
        </div>

      <div style={{padding: '0 1rem', textAlign: 'center', fontStyle: 'italic', marginTop: '1.35rem'}}>
            <p style={{marginBottom: '1rem'}}><span style={{fontWeight: '800'}}>Cannabis Clubhouse</span> was designed to execute deliveries of marijuanna products on a securely located reserve.</p>
            
            <p style={{marginBottom: '1rem'}}>Admin have the abilities to add products, classifications, and ban people using a secure mobile app built in React Native.</p>
            
            <p style={{marginBottom: '1rem'}}>The project is currently not in production at the moment.</p>
      </div>
      </div>

      <p className='bottom-madewith' style={{textAlign: 'left', color: '#004600', margin: '1rem', fontStyle: 'italic', fontWeight: 400}}>Project was made using <b>NextJS, React Native, Paypal, Cloudinary and MongoDB.</b></p>
      </ContentContainer>

      </BackgroundDiv>

    )
}

export default CannabisClubhouse;