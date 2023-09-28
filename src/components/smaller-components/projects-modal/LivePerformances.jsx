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
  
  background-image: url('/img/projects/live-performances/seamless-sand-texture.jpg');
  background-repeat: repeat;
  background-size: 330px 330px; 
  background-position: center center;
  background-color: #fff;

  .title {
    display: flex;
    margin: 0 auto;
    text-align: center;

    height: 5rem;
    padding: 0.5rem;
  }
`;

const TopLights = styled.img`
  width: 100%;
  min-width: 50rem;
  margin: 0 auto;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  `;

const TopBanner = styled.img`
  width: 92%;
  max-width: 41rem;
  left: 50%;
  top: .3rem;
  position: relative;
  transform: translateX(-50%);
`

const BlackDivider = styled.img`
  width: 92%;
  max-width: 70rem;
  height: 1.25rem;
  /* min-width: 42rem; */
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: .5rem;
  margin-bottom: .5rem;
`

const IntroDiv = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 820px;
  margin: 0rem auto 0 auto;
  #intro-content {
    gap: .75rem;
    padding-left: .9rem;
    display: flex;
    flex-direction: column;
    p {
      font-size: 1.05rem;
    }
  }
  #band-pic {
    width: 24rem;
  }

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    #intro-content {
      margin-top: 1rem;
      text-align: center;
    }
    #band-pic {
      width: 100%;
      align-self: center;
      max-width: 25rem;
    }
  }
`
const YearSign = styled.img`
 position: absolute; 
 left: 0;
 right: 0;
 margin: 0 auto;
 width: 12.2rem;
 transform: translateY(-1rem)
`

const BottomBanner = styled.img`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 0;
  opacity: 12%;
`

const images = [
  '/img/projects/pokithedog/preview-1.jpg',
  '/img/projects/pokithedog/preview-2.jpg',
  '/img/projects/pokithedog/preview-3.jpg',
  '/img/projects/pokithedog/preview-4.jpg',
  '/img/projects/pokithedog/preview-5.jpg',
  '/img/projects/pokithedog/preview-6.jpg',
];

function LivePerformances({ openModal, setOpenModal }) {
  const handleUrl = () => {
    window.open('https://pokithedog.com/', '_blank');
  }
    return (
      <ContentContainer>
      <BottomBanner src="/img/projects/live-performances/drummer.jpg"/>
      <CloseButton setOpenModal={setOpenModal} />
      
      <div style={{zIndex: 1}}>
        <TopLights draggable={false} src="/img/projects/live-performances/lights-1.jpg"/>
        <TopBanner draggable={false} src="/img/projects/live-performances/bluesfest-banner.png"/>
        
        <BlackDivider src="/img/projects/live-performances/black-divider.png" />

        <IntroDiv>
          <img id="band-pic" src="/img/projects/live-performances/slothpit_beintheband.jpg"/>
          <div id="intro-content">
            <p>Hey guys! Welcome to the live performances' section of the website!</p>
            <p>I was in the <span style={{fontWeight: 900}}>Be In The Band</span> program at the Royal Ottawa for 4 years!</p>
            <p>I played drums, bass and guitar. Sometimes all 3 in 1 year!</p>
          </div>
        </IntroDiv>

        <BlackDivider src="/img/projects/live-performances/black-divider.png" />
        <YearSign src="/img/projects/live-performances/2017.png"/>

        {/* METHOD 3 */}
        {/* <HorizontalImageLoopProjects _images={images} _isReversed={false} openModal={openModal} _uniqueClassName={"images4"} /> */}

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

        {/* <div style={{textAlign: 'center', margin: '1rem'}}>
            <h4 style={{fontWeight: 800, marginBottom: '.26rem'}}>Try it out!</h4>
            <div style={{display: 'flex', alignItems: 'start', gap: '0.2rem', justifyContent: 'center'}}>
              <img onClick={(e) => handleUrl()} style={{width: '28%', maxWidth: '170px', cursor: 'pointer'}} src="/img/projects/misc/web-link.png"/>
            </div>
        </div> */}

      {/* <div style={{padding: '0 1rem', textAlign: 'center', fontStyle: 'italic', marginTop: '1.35rem'}}>
            <p>This website was designed to practice and promote my development abilities!</p>
            <p>It features some early games I've designed!</p>
      </div> */}
      </div>

      <div >
        {/* <img style={{display: 'flex', padding: '1.5rem', width: '260px', margin: 'auto auto'}} src="img/projects/pokithedog/pokithedog-logo.png"/> */}
      </div>

      {/* <p className='bottom-madewith' style={{textAlign: 'left', color: 'blue', padding: '1rem', fontStyle: 'italic', fontWeight: 400}}>Project was made using vanilla <b>JavaScript, CSS and HTML.</b></p> */}
      </ContentContainer>
    )
}

export default LivePerformances;