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

const ContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const images = [
  '/img/projects/portfolio-old/preview-1.jpg',
  '/img/projects/portfolio-old/preview-2.jpg',
  '/img/projects/portfolio-old/preview-3.jpg',
  '/img/projects/portfolio-old/preview-5.jpg',
  '/img/projects/portfolio-old/preview-4.jpg',
  '/img/projects/portfolio-old/preview-6.jpg',
];

function Portfolio_Old({ openModal }) {
    return (
      <ContentContainer>
      <div>
        <h2>My Portfolio (Old)</h2>
        <HorizontalImageLoopProjects _images={images} _isReversed={false} openModal={openModal} _uniqueClassName={"images5"} />
        
        <div style={{textAlign: 'center', margin: '1rem'}}>
            {/* <h4 style={{fontWeight: 800}}>Try it out!</h4> */}
            <a style={{fontSize: '1.2rem'}} href='https://bern0241.github.io/portfolio-website/' target="_blank">https://bern0241.github.io/portfolio-website/</a>
        </div>

      <div style={{padding: '0 1rem', textAlign: 'center', fontStyle: 'italic', marginTop: '1.35rem'}}>
            <p>This was a school assignment designed when I was learning the basics of web development!</p>
            <p>It features some early websites/apps I did in school!</p>
      </div>
      </div>

      <div >
        <img style={{display: 'flex', padding: '1.5rem', width: '120px', margin: 'auto auto'}} src="img/projects/portfolio-old/Justin-Icon.png"/>
      </div>

      <p style={{textAlign: 'left', color: 'blue', margin: '1rem', fontStyle: 'italic', fontWeight: 400}}>Project was made using vanilla <b>JavaScript, CSS and HTML.</b></p>
      </ContentContainer>
    )
}

export default Portfolio_Old;