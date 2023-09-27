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
  '/img/projects/portfolio-old/preview-1.jpg',
  '/img/projects/portfolio-old/preview-2.jpg',
  '/img/projects/portfolio-old/preview-3.jpg',
  '/img/projects/portfolio-old/preview-5.jpg',
  '/img/projects/portfolio-old/preview-4.jpg',
  '/img/projects/portfolio-old/preview-6.jpg',
];

function Portfolio_Old({ openModal, setOpenModal }) {
  const handleUrl = () => {
    window.open('https://bern0241.github.io/portfolio-website/', '_blank');
  }
    return (
      <ContentContainer>
      <CloseButton setOpenModal={setOpenModal} />
      <div>
      <TitleDiv style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
           <h2>My Portfolio (Old)</h2>
           {/* <img style={{width: '60px', height: '60px'}} src="/img/projects/portfolio-old/Justin-Icon.png" /> */}
        </TitleDiv>
        <HorizontalImageLoopProjects _images={images} _isReversed={false} openModal={openModal} _uniqueClassName={"images5"} />

        <div style={{textAlign: 'center', margin: '1rem'}}>
            <h4 style={{fontWeight: 800, marginBottom: '.26rem'}}>Try it out!</h4>
            <div style={{display: 'flex', alignItems: 'start', gap: '0.2rem', justifyContent: 'center'}}>
              <img onClick={(e) => handleUrl()} style={{width: '28%', maxWidth: '170px', cursor: 'pointer'}} src="/img/projects/misc/web-link.png"/>
            </div>
        </div>

      <div style={{padding: '0 1rem', textAlign: 'center', fontStyle: 'italic', marginTop: '1.35rem'}}>
            <p>This was a school assignment designed when I was learning the basics of web development!</p>
            <p>It features some early websites/apps I did in school!</p>
      </div>
      </div>
{/* 
      <div >
        <img style={{display: 'flex', padding: '1.5rem', width: '120px', margin: 'auto auto'}} src="img/projects/portfolio-old/Justin-Icon.png"/>
      </div> */}

      <p className='bottom-madewith' style={{textAlign: 'left', color: 'blue', margin: '1rem', fontStyle: 'italic', fontWeight: 400}}>Project was made using vanilla <b>JavaScript, CSS and HTML.</b></p>
      </ContentContainer>
    )
}

export default Portfolio_Old;