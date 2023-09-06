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
  '/img/projects/pokithedog/preview-1.jpg',
  '/img/projects/pokithedog/preview-2.jpg',
  '/img/projects/pokithedog/preview-3.jpg',
  '/img/projects/pokithedog/preview-4.jpg',
  '/img/projects/pokithedog/preview-5.jpg',
  '/img/projects/pokithedog/preview-6.jpg',
];

function PokiTheDog({ openModal }) {
    return (
      <ContentContainer>
      <div>
        <h2>PokiTheDog</h2>

        {/* METHOD 3 */}
        <HorizontalImageLoopProjects _images={images} _isReversed={false} openModal={openModal} _uniqueClassName={"images4"} />

      {/* METHOD 2 */}
        {/* <BackgroundBanner imageUrl="/img/projects/pokithedog/pokithedog-2.png">
        </BackgroundBanner> */}

      {/* METHOD 1 */}
        {/* <div className='swiper_container1'>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={'4'}
        coverflowEffect={{
          rotate: 0,
          stretch: -55,
          depth: 130,
          modifier: 6, //2.5
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.arrow-projects-right',
          prevEl: '.arrow-projects-left',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container2"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <iframe src="https://www.youtube.com/embed/gD_hHXYEsxc?si=TaAz-pDpn8OzYUf2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <div className="slider-controler">
              <div className="swiper-pagination"></div>
          </div>
      </Swiper>
      <div className='arrows'>
        <div className='arrow-projects-left'>
          <img src="/img/projects/misc/left-arrow.png" />
        </div>
        <div className='arrow-projects-right' >
          <img src="/img/projects/misc/right-arrow.png" />
        </div>
      </div>
      </div> */}


        
        <div style={{textAlign: 'center', margin: '1rem'}}>
            {/* <h4 style={{fontWeight: 800}}>Try it out!</h4> */}
            <a style={{fontSize: '1.2rem'}} href='https://pokithedog.com/' target="_blank">https://pokithedog.com/</a>
        </div>

      <div style={{padding: '0 1rem', textAlign: 'center', fontStyle: 'italic', marginTop: '1.35rem'}}>
            <p>This website was designed to practice and promote my development abilities!</p>
            <p>It features some early games I've designed!</p>
      </div>
      </div>

      <div >
        <img style={{display: 'flex', padding: '1.5rem', width: '260px', margin: 'auto auto'}} src="img/projects/pokithedog/pokithedog-logo.png"/>
      </div>

      <p style={{textAlign: 'left', color: 'blue', margin: '1rem', fontStyle: 'italic', fontWeight: 400}}>Project was made using vanilla <b>JavaScript, CSS and HTML.</b></p>
      </ContentContainer>
    )
}

export default PokiTheDog;