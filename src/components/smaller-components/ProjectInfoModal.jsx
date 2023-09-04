import React, { useState, useEffect, useRef } from 'react'
import { styled, keyframes  } from 'styled-components'
import gsap from 'gsap';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const ProjectInfoModalDiv = styled.div`
  height: 85%;
  width: 92%;
  max-width: 900px;
  margin: auto;
  border-radius: 15px;
  position: absolute;
  left: 0;
  right: 0;
  top: 2.2rem;
  bottom: 0;
  box-shadow: 5px 5px 5px black;
  z-index: 9995;
  cursor: auto;
  background-color: #e6fbff;
  color: black;
  overflow-y: auto;

  h2 {
    border-bottom: 1px solid black;
    padding: 1rem;
    text-align: center;
    margin-bottom: 1rem;
  }
`;

const DarkBG = styled.div`
    z-index: 9970;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.56);
    cursor: pointer;
    position: absolute;
    display:  none;
    /* transition: transform 0.3s ease, opacity 0.3s ease; */
`

const BackgroundBanner = styled.div`
    background-image: url('/img/projects/pokithedog/pokithedog-2.png'); 
    background-size: cover; 
    background-repeat: no-repeat;
    background-attachment: fixed; 
    background-position: center center;
    height: 17rem;
    border: 1px solid black;
`;

function ProjectInfoModal(props) {
    const { currentProject, openModal, setOpenModal} = props;
    const projectModalRef = useRef();
    const closeButtonRef = useRef();

    useEffect(() => {
        gsap.set(projectModalRef.current, { x: '0%', opacity: 1 });
    }, [])

    useEffect(() => {
        if (openModal) {
            closeButtonRef.current.style.display = 'block';
            gsap.to(projectModalRef.current, {
                x: '0%', // Final x position (center)
                opacity: 1, // Final opacity
                duration: 0.5, // Animation duration in seconds
                ease: '"elastic.out(1, 0.3)"', // Easing function (you can choose a different one)
                onStart: () => {
                    projectModalRef.current.style.display = 'block';
                },
                onComplete: () => {
                    projectModalRef.current.style.pointerEvents = 'auto';
                    projectModalRef.current.style.userSelect = 'auto';
                }
              });
        }
        if (!openModal) {
            closeButtonRef.current.style.display = 'none';
            gsap.to(projectModalRef.current, {
                x: '-100%', // Final x position (outside the viewport to the right)
                opacity: 0, // Final opacity
                duration: 0.5, // Animation duration in seconds
                ease: 'power1.in', // Easing function (you can choose a different one)
                onStart: () => {
                    projectModalRef.current.style.pointerEvents = 'none';
                    projectModalRef.current.style.userSelect = 'none';
                },
                onComplete: () => {
                    projectModalRef.current.style.display = 'none';
                },
              });
        }
    }, [openModal])

  return (
    <>
    <DarkBG ref={closeButtonRef} onClick={() => setOpenModal(false)} />
    
    <ProjectInfoModalDiv ref={projectModalRef}>
        {/* Close Button */}
        <a onClick={() => setOpenModal(false)} className="close-button">
        <div className="in">
        <div className="close-button-block"></div>
        <div className="close-button-block"></div>
        </div>
        <div className="out">
        <div className="close-button-block"></div>
        <div className="close-button-block"></div>
        </div>
        </a>

        <PokiTheDog/>

    </ProjectInfoModalDiv>
    </>
  )
}



// import slide_image_1 from '/img/sky/sky-back.jpg';
// import slide_image_2 from '/img/sky/sky-down.jpg';
// import slide_image_3 from '/img/projects/ultimate-jesus-game-display.png';
// import slide_image_4 from '/img/projects/pokithedog/pokithedog-2.png';
// import slide_image_5 from '/img/sky/sky-right.jpg';
// import slide_image_6 from '/img/sky/sky-up.jpg';

import slide_image_1 from '/img/projects/pokithedog/pokithedog-2.png';
import slide_image_2 from '/img/projects/pokithedog/pokithedog-2.png';
import slide_image_3 from '/img/projects/pokithedog/pokithedog-2.png';
import slide_image_4 from '/img/projects/pokithedog/pokithedog-2.png';
import slide_image_5 from '/img/projects/pokithedog/pokithedog-2.png';
import slide_image_6 from '/img/projects/pokithedog/pokithedog-2.png';

function PokiTheDog() {
    return (
        <>
        <h2>PokiTheDog</h2>
        <div style={{textAlign: 'center'}}>
            <p>This website was designed to practice and promote my development abilities!</p>
            <p>It features some early games I've designed!</p>
        </div>
        <div style={{textAlign: 'center', margin: '1rem'}}>
            <a style={{fontSize: '1.2rem'}} href='https://pokithedog.com/' target="_blank">https://pokithedog.com/</a>
        </div>
        
        {/* <BackgroundBanner></BackgroundBanner> */}
        <div className='swiper_container1'>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'4'}
        coverflowEffect={{
          rotate: 0,
          stretch: -55,
          depth: 130,
          modifier: 6, //2.5
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
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
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
                {/* <div className="swiper-button-prev slider-arrow">
                    <img className='arrow-svg' src="/svg/arrow-left.svg" />
                </div>
                <div className="swiper-button-next slider-arrow">
                    <img className='arrow-svg' src="/svg/arrow-right.svg" />
                </div> */}
                <div className="swiper-pagination"></div>
            </div>
      </Swiper>
        </div>
        <p style={{textAlign: 'center', color: 'blue', margin: '0.5rem .8rem', fontStyle: 'italic', fontWeight: 400}}>Website was made using vanilla <b>JavaScript, CSS and HTML.</b></p>
        </>
    )
}

export default ProjectInfoModal
