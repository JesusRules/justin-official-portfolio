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
  background-color: #fbfbfb;

  .title {
    display: flex;
    margin: 0 auto;
    text-align: center;

    height: 3rem;
    padding: 0.5rem;
  }
`;

const TitleDiv = styled.div`
  color: white;
  background-color: #181413;
  h2 {
     font-weight: 600;
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

function SpotifyClone({ openModal, setOpenModal }) {
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

  const handleGooglePlayStore = () => {
    window.open('https://play.google.com/store/apps/details?id=com.praisejesus.spotifyclone', '_blank');
  }
    return (
      <ContentContainer>
        <CloseButton color="white" setOpenModal={setOpenModal} />
      <div style={{backgroundColor: '#fff3f4'}}>
      <TitleDiv style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
           <h2>Justin's Spotify Clone</h2>
           <img style={{width: '60px', height: '60px'}} src="/img/projects/spotify-clone/justins-spotify-icon.jpg" />
      </TitleDiv>

        {/* <HorizontalImageLoopProjects _images={images} _isReversed={false} openModal={openModal} _uniqueClassName={"images5"} /> */}
        
        <div ref={swiperRef} className='swiper_container1'>
        <Swiper
        effect={'coverflow'}
        initialSlide={0}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={slidesPerView}
        coverflowEffect={{
          rotate: 0,
          stretch: -25,
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
        className="swiper_container2-spotify"
      >
        <SwiperSlide>
          <img id="spotify-preview-img" style={{width: '18rem', transform: 'translate(-50%, 1rem)'}} src="/img/projects/spotify-clone/preview-1.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img id="spotify-preview-img" style={{width: '18rem', transform: 'translate(-50%, 1rem)'}} src="/img/projects/spotify-clone/preview-2.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img id="spotify-preview-img" style={{width: '18rem', transform: 'translate(-50%, 1rem)'}} src="/img/projects/spotify-clone/preview-3.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img id="spotify-preview-img" style={{width: '18rem', transform: 'translate(-50%, 1rem)'}} src="/img/projects/spotify-clone/preview-4.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img id="spotify-preview-img" style={{width: '18rem', transform: 'translate(-50%, 1rem)'}} src="/img/projects/spotify-clone/preview-5.jpg" alt="slide_image" />
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

      <div style={{textAlign: 'center', margin: '1rem', backgroundColor: '#fff3f4'}}>
            <h4 style={{fontWeight: 800, marginBottom: '1.25rem'}}>Try it out!</h4>
            <div style={{display: 'flex', alignItems: 'center', transform: 'translateY(-.5rem)', gap: '0.2rem', justifyContent: 'center'}}>
              <img onClick={(e) => handleGooglePlayStore()} style={{width: '32%', maxWidth: '250px', cursor: 'pointer'}} src="/img/projects/misc/google-store.png"/>
            </div>
        </div>

      <div style={{backgroundColor: '#fff3f4', padding: '0 2rem', textAlign: 'center', fontStyle: 'italic', lineHeight: '10%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem'}}>
            <p>Justin's Spotify Clone was a college assignment that we had to choose to make.</p>
            <p>I chose using Spotify's official API and making my own Spotify clone.</p>
        </div>
      </div>

      <p className='bottom-madewith' style={{backgroundColor: '#fff3f4', textAlign: 'left', color: 'blue', padding: '1rem', fontStyle: 'italic', fontWeight: 400, paddingBottom: '1rem', paddingTop: '2rem'}}>Project was made using <b>React Native and Spotify's Official API</b></p>
      </ContentContainer>
    )
}

export default SpotifyClone;