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
  width: 100%;
  .title {
    display: flex;
    margin: 0 auto;
    text-align: center;

    height: 6rem;
    padding: 0.5rem;
  }
`;


const TitleDiv = styled.div`
    position: relative;
    img {
      width: 3rem;
      z-index: 100;
      position: absolute;
    }
    #mario {
      transform: translateX(-8rem);
    }
    #pikachu {
      transform: translateX(8rem);
    }
  @media only screen and (max-width: 500px) {
    h2 {
      font-size: 2rem;
    }
    img {
      /* display: none; */
    }
  }
`

const images = [
  '/img/projects/mama-mia/preview-1.jpg',
  '/img/projects/mama-mia/preview-2.jpg',
  '/img/projects/mama-mia/preview-3.jpg',
  '/img/projects/mama-mia/preview-5.jpg',
  '/img/projects/mama-mia/preview-4.jpg',
  '/img/projects/mama-mia/preview-6.jpg',
  '/img/projects/mama-mia/preview-7.jpg',
];

function MamaMia({ openModal, setOpenModal }) {
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
          if (swiperRef.current) swiperRef.current.style.display = 'none';
          setTimeout(() => {
            if (swiperRef.current) swiperRef.current.style.display = 'block';
          }, 50)
        }, 50)
        setInitialized(true);
      }
    }, [openModal]);

    const handleItchIO = () => {
      window.open('https://jesusrules.itch.io/mama-mia', '_blank');
    }

    return (
      <ContentContainer>
      <CloseButton setOpenModal={setOpenModal} color="white" />
      <div >
      <TitleDiv style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
          <img id="mario" src="/img/projects/mama-mia/mario.png"/>
           <h2>Mama Mia</h2>
          <img id="pikachu" src="/img/projects/mama-mia/pikachu.png"/>
           {/* <img style={{width: '60px', height: '60px'}} src="/img/projects/portfolio-old/Justin-Icon.png" /> */}
        </TitleDiv>

      <HorizontalImageLoopProjects _images={images} _isReversed={false} openModal={openModal} _uniqueClassName={"images5"} />

      <div style={{textAlign: 'center', margin: '1rem'}}>
            <h4 style={{fontWeight: 800, marginBottom: '.26rem'}}>Try it out!</h4>
            <div style={{display: 'flex', alignItems: 'start', gap: '0.2rem', justifyContent: 'center'}}>
              <img onClick={(e) => handleItchIO()} style={{borderRadius: '5px', width: '32%', maxWidth: '250px', cursor: 'pointer'}} src="/img/projects/misc/itch-logo.jpg"/>
            </div>
        </div>

      <div style={{textAlign: 'center', fontStyle: 'italic', marginTop: '1.35rem', display: 'flex',
                  flexDirection: 'column', gap: '1rem', alignItems: 'center', }}>
            <p style={{fontWeight: 800, transform: 'translateY(-13px)'}}>(2+ Players Required, Windows only, LOCAL only available)</p>
            
            <p style={{padding: '0 2rem'}}>Mama Mia is a free to play game where Marios must chase down and destroy Pikachus.</p>
            
            <p style={{padding: '0 2rem'}}>Right now there is currently <span style={{fontWeight: '900'}}>NO online internet available.</span> You must play with friends/people over your LAN connection!</p>

            <p style={{marginBottom: '1.5rem'}}><span style={{fontWeight: 800}}>For more information:</span><br/><a href='https://pokithedog.com/mamamia-game.html' target='_blank'>https://pokithedog.com/mamamia-game.html</a></p>

            <p style={{fontWeight: 800}}>Check out these YouTube videos for gameplay:</p>

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
                 <iframe width="560" height="315" src="https://www.youtube.com/embed/J2RQklrT4V8?si=zHTlzC7hCXbo_11o&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </SwiperSlide>
              <SwiperSlide>
                 <iframe width="560" height="315" src="https://www.youtube.com/embed/XnlxRLnJp48?si=tPFCXBEBStJyMYqD&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
      </div>
      </div>

      <p className='bottom-madewith' style={{textAlign: 'left', color: 'blue',  fontStyle: 'italic', fontWeight: 400, padding: '1rem'}}>Project was made using <b>Unity and Mirror (Multiplayer Solution)</b></p>
      </ContentContainer>
    )
}

export default MamaMia;