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

const images = [
  '/img/projects/memories/preview-1.jpg',
  '/img/projects/memories/preview-1.jpg',
  '/img/projects/memories/preview-1.jpg',
  '/img/projects/memories/preview-1.jpg',
  '/img/projects/memories/preview-1.jpg',
  '/img/projects/memories/preview-1.jpg',
];

function Memories({ openModal }) {
  const swiperRef = useRef();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (initialized) return;
    if (openModal) {
      setTimeout(() => {
        if (swiperRef.current) swiperRef.current.style.display = 'none';
      }, 100)
      setTimeout(() => {
        if (swiperRef.current) swiperRef.current.style.display = 'block';
      }, 200)
      setInitialized(true);
    }
  }, [openModal]);

  const handleUrl = () => {
    window.open('https://snazzy-sunburst-e79220.netlify.app/', '_blank');
  }
    return (
      <ContentContainer>
      <div>
        <TitleDiv style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
           <h2>Memories</h2>
           <img style={{width: '60px', height: '60px'}} src="/img/projects/ottawarecsports/ORS-Logo.png" />
        </TitleDiv>
        {/* <HorizontalImageLoopProjects _images={images} _isReversed={false} openModal={openModal} _uniqueClassName={"images5"} /> */}
        
        <div ref={swiperRef} className='swiper_container1'>
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
          <img src="/img/projects/memories/preview-1.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/projects/memories/preview-1.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/projects/memories/preview-1.jpg" alt="slide_image" />
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
      </div>

        <div style={{textAlign: 'center', margin: '1rem'}}>
            <h4 style={{fontWeight: 800, marginBottom: '.26rem'}}>Try it out!</h4>
            <div style={{display: 'flex', alignItems: 'start', gap: '0.2rem', justifyContent: 'center'}}>
              <img onClick={(e) => handleUrl()} style={{width: '28%', maxWidth: '170px', cursor: 'pointer'}} src="/img/projects/misc/web-link.png"/>
            </div>
        </div>

      <div style={{padding: '0 2rem', textAlign: 'center', fontStyle: 'italic', lineHeight: '10%'}}>
            <p>In our final semester (of the Algonquin MADD program), me and 5 other students were assigned a client project to improve the existing <a target="_blank" href="https://ottawarecsports.com/">Ottawa Rec Sports.</a></p>
            <p><br/>Miraculously, our project came <span style={{color: 'blue'}}>third place</span> in the annual Algonquin RE/ACTION showcase!</p>
           
            <div style={{margin: '1rem 0', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <div>
                <img style={{maxWidth: '260px', width: '100%', objectFit: 'cover'}} src="/img/projects/ottawarecsports/justin-award.jpg" />
                <img style={{maxWidth: '215px', width: '100%'}} src="/img/projects/ottawarecsports/excellence-paper-reaction.jpg" />
              </div>
              <div>
                <img style={{minWidth: '320px', width: '100%', maxWidth: '550px', }} src="/img/projects/ottawarecsports/group-stage.jpg" />
              </div>
            </div>
      </div>
      </div>
      <p style={{textAlign: 'center', marginBottom: '1.5rem'}}>Thanks to our hard working team for a great semester!</p>
      <p className='bottom-madewith' style={{textAlign: 'left', color: 'blue', margin: '1rem', fontStyle: 'italic', fontWeight: 400, paddingBottom: '1rem'}}>Project was made using <b>React, NextJS, Tailwind CSS, AWS Services (Amplify, GraphQL, SES, Cognito, DynamoDB, S3).</b></p>
      </ContentContainer>
    )
}

export default Memories;