import React, { useState, useEffect, useRef } from 'react'
import { styled, keyframes  } from 'styled-components'
import gsap from 'gsap';
import { HorizontalImageLoopProjects } from '../../../utils';
import CloseButton from '../CloseButton';

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

  .title {
    display: flex;
    margin: 0 auto;
    text-align: center;

    height: 3rem;
    padding: 0.5rem;
  }
`;

const TitleDiv = styled.div`
  background-color: #54b9d1;
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

function SocialPup({ openModal, setOpenModal }) {
  const swiperRef = useRef();
  const [initialized, setInitialized] = useState(false);
  const actualSwiperRef = useRef();
  const [slidesPerView, setSlidesPerView] = useState(window.innerWidth < 700 ? 1 : 4);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth < 700 ? 1 : 4);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (initialized) return;
    if (openModal) {
      setTimeout(() => {
        swiperRef.current.style.width = '10%';
        setTimeout(() => {
          swiperRef.current.style.width = '100%';
        }, 10)
      }, 10)
      setInitialized(true);
    }
  }, [openModal]);

  const handleUrl = () => {
    window.open('https://socialape-14d54.web.app/', '_blank');
  }
    return (
      <ContentContainer>
        <CloseButton color="white" setOpenModal={setOpenModal} />
      <div>
      <TitleDiv style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
        <img className='title' src='/img/projects/socialpup/socialpup-banner-small.jpg'/>
      </TitleDiv>

        {/* <HorizontalImageLoopProjects _images={images} _isReversed={false} openModal={openModal} _uniqueClassName={"images5"} /> */}
        
        <div ref={swiperRef} className='swiper_container1'>
        <Swiper
        effect={'coverflow'}
        initialSlide={1}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={slidesPerView}
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
          <img src="/img/projects/socialpup/preview-2.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/projects/socialpup/preview-1.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/projects/socialpup/preview-3.jpg" alt="slide_image" />
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

      <div style={{padding: '0 2rem', textAlign: 'center', fontStyle: 'italic', lineHeight: '10%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem'}}>
            <p>SocialPup (originally SocialApe) was a 12 hour long YouTube video covering technologies with old style React, Redux and Google's Firebase.</p>
            <iframe width="370" height="200" src="https://www.youtube.com/embed/m_u6P5k0vP0?si=DKYHsakt5ilpKU7C&amp;start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <p>It took a while to finish, but it was very helpful!</p>
        </div>
      </div>

      <p className='bottom-madewith' style={{textAlign: 'left', color: 'blue', margin: '1rem', fontStyle: 'italic', fontWeight: 400, paddingBottom: '1rem', paddingTop: '2rem'}}>Project was made using <b>React, Redux, Axios, DayJS, JWT-Decode, and Firebase</b></p>
      </ContentContainer>
    )
}

export default SocialPup;