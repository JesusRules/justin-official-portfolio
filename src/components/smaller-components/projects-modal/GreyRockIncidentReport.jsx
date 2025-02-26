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

function GreyRockIncidentReport({ openModal, setOpenModal }) {
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
        setTimeout(() => {
          swiperRef.current.style.width = '100%';
        }, 60)
      }, 60)
      setInitialized(true);
    }
  }, [openModal]);


  const handleUrl = () => {
    window.open('https://greyrockvip.com', '_blank');
  }
    return (
      <ContentContainer>
      <CloseButton setOpenModal={setOpenModal} />
      <div>
      <TitleDiv style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
           <h2>Incident Report App</h2>
           <img style={{height: '60px'}} src="/img/projects/grey-rock-vip/greyrock-eagle.png" />
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
        className="swiper_container2-greyrockvip"
      >
        <SwiperSlide>
          <img style={{height: '300px', width: '550px'}} src="/img/projects/grey-rock-incident-report/preview-2.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{height: '300px', width: '510px'}} src="/img/projects/grey-rock-incident-report/preview-1.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{height: '300px', width: '510px'}} src="/img/projects/grey-rock-incident-report/preview-3.jpg" alt="slide_image" />
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

      {/* <div style={{textAlign: 'center', margin: '1rem'}}>
            <h4 style={{fontWeight: 800, marginBottom: '.26rem'}}>Only VIP clients can login</h4>
            <div style={{display: 'flex', alignItems: 'start', gap: '0.2rem', justifyContent: 'center'}}>
              <img onClick={(e) => handleUrl()} draggable={false} style={{width: '28%', maxWidth: '170px', opacity: 1, cursor: 'pointer'}} src="/img/projects/misc/web-link.png"/>
            </div>
        </div> */}

        <div style={{padding: '0 1rem', textAlign: 'center', fontStyle: 'italic', marginTop: '1.35rem'}}>
            <p style={{marginBottom: '1rem'}}>This app was created in conjunction with the <a href='https://www.greyrockcasino.com/' target="_blank" rel="noopener noreferrer">Grey Rock Casino</a>.</p>
            
            <p style={{marginBottom: '0rem'}}>This app was built for creating incident reports that can be modified, searched, and sent to the government (via PDF).</p>
            
            <p style={{marginBottom: '1rem'}}><span style={{fontWeight: '800'}}><br/>It is not available to the public.</span></p>
      </div>

      </div>
      
      <p className='bottom-madewith' style={{textAlign: 'left', color: 'blue', margin: '1rem', fontStyle: 'italic', fontWeight: 400, paddingBottom: '1rem', paddingTop: '2rem'}}>Project was made using the <b>NextJS, Mantine, TailwindCSS.</b></p>
      </ContentContainer>
    )
}

export default GreyRockIncidentReport;