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

const VideoDiv = styled.div`
  width: 100%;
  box-shadow: 10px 10px 10px rgba(0,0,0, .6);
  `
const VideoDiv2 = styled.div`
  position: relative;
  padding-top: 0rem;
  /* height: 0; */
  /* box-shadow: 6px 6px 10px rgba(0,0,0,.7); */
  overflow: hidden;
  height: 22rem;
  @media only screen and (max-width: 700px) {
    margin-bottom: 2.5rem;
  }
`

const BackgroundBanner = styled.div`
    background-image: url(${props => props.imageUrl}); 
    background-size: cover; 
    background-repeat: no-repeat;
    background-attachment: fixed; 
    background-position: top center;
    height: 32rem;
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

function GreyRockAdventureTours({ openModal, setOpenModal }) {
  const handleUrl = () => {
    window.open('https://daily-worshipper.netlify.app/', '_blank');
  }

    return (
      <ContentContainer>
      <CloseButton setOpenModal={setOpenModal} />
      <div>
      <BackgroundBanner imageUrl="/img/projects/grey-rock-adventure-tours/preview-main.jpg"/>

      <div style={{padding: '0 2rem', textAlign: 'center', fontStyle: 'italic', lineHeight: '10%', maxWidth: '760px', margin: '1rem auto 0 auto'}}>
            <p style={{marginBottom: '1rem'}}><span style={{fontWeight: 900}}>Grey Rock Adventure Tours</span> is a tour company offering snowmobile, ATV and Side by Side guided tours packages to groups with different experience levels.</p>

            <iframe style={{width: "100%", maxWidth: '900px', height: 415 }} src="https://www.youtube.com/embed/lXYtpizG7nI?si=RTrnvjEknOFaXokW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p style={{marginTop: '1rem'}}><span style={{fontWeight: 800}}>More information:</span> <br/><a target="_blank" href="https://www.tourismedmundston.com/en-ca/things-to-do/grey-rock-adventure-tours/">https://www.tourismedmundston.com/en-ca/things-to-do/grey-rock-adventure-tours/</a></p>
      </div>
      </div>
      <p className='bottom-madewith' style={{textAlign: 'left', color: 'blue', margin: '1rem', fontStyle: 'italic', fontWeight: 400, paddingBottom: '1rem'}}>Project was made using <b>Adobe Premiere.</b></p>
      </ContentContainer>
    )
}

export default GreyRockAdventureTours;