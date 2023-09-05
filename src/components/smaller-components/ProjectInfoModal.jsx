import React, { useState, useEffect, useRef } from 'react'
import { styled, keyframes  } from 'styled-components'
import gsap from 'gsap';
import { HorizontalImageLoopProjects } from '../../utils';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const ProjectInfoModalDiv = styled.div`
  height: 92%;
  width: 92%;
  max-width: 900px;
  margin: auto;
  border-radius: 15px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  box-shadow: 5px 5px 5px black;
  z-index: 10010;
  cursor: auto;
  background-color: #e6fbff;
  color: black;
  overflow-y: auto;

  h2 {
    border-bottom: 1px solid black;
    padding: 1rem;
    text-align: center;
  }


`;

const DarkBG = styled.div`
    z-index: 10005;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.56);
    cursor: pointer;
    position: absolute;
    display:  none;
    /* transition: transform 0.3s ease, opacity 0.3s ease; */
`

const BackgroundBanner = styled.div`
    background-image: url(${props => props.imageUrl}); 
    background-size: cover; 
    background-repeat: no-repeat;
    background-attachment: fixed; 
    background-position: center center;
    height: 15rem;
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



const ContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// import slide_image_1 from '/img/sky/sky-back.jpg';
// import slide_image_2 from '/img/sky/sky-down.jpg';
// import slide_image_3 from '/img/projects/ultimate-jesus-game-display.png';
// import slide_image_4 from '/img/projects/pokithedog/pokithedog-2.png';
// import slide_image_5 from '/img/sky/sky-right.jpg';
// import slide_image_6 from '/img/sky/sky-up.jpg';

// import slide_image_1 from '/img/projects/pokithedog/pokithedog-2.png';
// import slide_image_2 from '/img/projects/pokithedog/pokithedog-2.png';
// import slide_image_3 from '/img/projects/pokithedog/pokithedog-2.png';
// import slide_image_4 from '/img/projects/pokithedog/pokithedog-2.png';
// import slide_image_5 from '/img/projects/pokithedog/pokithedog-2.png';
// import slide_image_6 from '/img/projects/pokithedog/pokithedog-2.png';

const pokiTheDogImages = [
  '/img/projects/pokithedog/preview-1.jpg',
  '/img/projects/pokithedog/preview-2.jpg',
  '/img/projects/pokithedog/preview-3.jpg',
  '/img/projects/pokithedog/preview-4.jpg',
  '/img/projects/pokithedog/preview-5.jpg',
  '/img/projects/pokithedog/preview-6.jpg',
];

function PokiTheDog() {
    return (
      <ContentContainer>
      <div>
        <h2>PokiTheDog</h2>

        {/* METHOD 3 */}
        <HorizontalImageLoopProjects _images={pokiTheDogImages} _isReversed={false} _uniqueClassName={"images4"} />

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
          <img src="/img/projects/left-arrow.png" />
        </div>
        <div className='arrow-projects-right' >
          <img src="/img/projects/right-arrow.png" />
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

      {/* <img style={{display: 'flex', padding: '1.5rem', width: '160px', margin: '0 auto'}} src="img/projects/pokithedog/me-and-pokes.jpg"/> */}

      </div>
      <p style={{textAlign: 'left', color: 'blue', margin: '1rem', fontStyle: 'italic', fontWeight: 400}}>Project was made using vanilla <b>JavaScript, CSS and HTML.</b></p>
      </ContentContainer>
    )
}

export default ProjectInfoModal
