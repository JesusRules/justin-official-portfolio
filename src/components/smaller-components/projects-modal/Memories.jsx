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

  .title {
    display: flex;
    margin: 0 auto;
    text-align: center;

    height: 3rem;
    padding: 0.5rem;
  }
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

function Memories({ openModal, setOpenModal }) {
  const swiperRef = useRef();
  const [initialized, setInitialized] = useState(false);
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
        // if (swiperRef.current) swiperRef.current.style.display = 'none';
        setTimeout(() => {
          swiperRef.current.style.width = '100%';
          // if (swiperRef.current) swiperRef.current.style.display = 'block';
        }, 10)
      }, 10)
      setInitialized(true);
    }
  }, [openModal]);


  const handleUrl = () => {
    window.open('https://justins-memories.netlify.app/posts', '_blank');
  }
    return (
      <ContentContainer>
      <CloseButton setOpenModal={setOpenModal} />
      <div>
        <img className='title' src='/img/projects/memories/memories-name.png'/>

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
          <img src="/img/projects/memories/preview-2.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/projects/memories/preview-1.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/projects/memories/preview-3.jpg" alt="slide_image" />
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
            <p>Memories was a 7:30 hour long YouTube tutorial I followed during my attendance at college (by JavaScript Mastery).</p>
            <iframe width="370" height="200" src="https://www.youtube.com/embed/VsUzmlZfYNg?si=S1N8D_KPebf07Gh9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p>Great video for anyone looking to learn web development and dealing with databases. </p>
        </div>
      </div>

      <p className='bottom-madewith' style={{textAlign: 'left', color: 'blue', margin: '1rem', fontStyle: 'italic', fontWeight: 400, paddingBottom: '1rem', paddingTop: '2rem'}}>Project was made using the <b>MERN Stack development bundle (MongoDB, Express, React, Node.js)</b></p>
      </ContentContainer>
    )
}

export default Memories;