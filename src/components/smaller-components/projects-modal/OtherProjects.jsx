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

    height: 5rem;
    padding: 0.5rem;
  }
`;

const ProjectDiv = styled.div`
  display: flex;
  padding: 1rem 4rem;
  justify-content: center;
  gap: 1rem;
  margin-bottom: .8rem;
  @media only screen and (max-width: 700px) {
  }
  
  .image {
    width: 50%;
    display: flex;
    img {
      width: 100%;
      cursor: pointer;
      border: 1px solid black;
      box-shadow: 4px 4px 4px rgba(0,0,0,0.3);
    }
  }
  .image-right {
    justify-content: start;
  }
  .image-left {
    justify-content: end;
  }
  
  .info {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    bottom: 2.25rem;
    h3 {
      margin-bottom: 1.33rem;
      cursor: pointer;
      color: blue;
      text-decoration: underline;
      font-style: italic;
    }
  }
  .text-left {
    text-align: right;
  }
  .text-right {
    text-align: left;
  }
`

const images = [
  '/img/projects/pokithedog/preview-1.jpg',
  '/img/projects/pokithedog/preview-2.jpg',
  '/img/projects/pokithedog/preview-3.jpg',
  '/img/projects/pokithedog/preview-4.jpg',
  '/img/projects/pokithedog/preview-5.jpg',
  '/img/projects/pokithedog/preview-6.jpg',
];

function OtherProjects({ openModal, setOpenModal }) {

  const handleUrl = (stringLink) => {
    window.open(stringLink, '_blank');
  }

    return (
      <ContentContainer>
      <CloseButton setOpenModal={setOpenModal} />
      <div>
        <h2>Other Projects (Links)</h2>
        {/* <img className='title' src='/img/projects/pokithedog/pokithedog-logo.png'/> */}

        {/* METHOD 3 */}
        {/* <HorizontalImageLoopProjects _images={images} _isReversed={false} openModal={openModal} _uniqueClassName={"images4"} /> */}

      {/* METHOD 2 */}
        {/* <BackgroundBanner imageUrl="/img/projects/pokithedog/pokithedog-2.png">
        </BackgroundBanner> */}

        {/* <div style={{textAlign: 'center', margin: '1rem'}}>
            <h4 style={{fontWeight: 800, marginBottom: '.26rem'}}>Try it out!</h4>
            <div style={{display: 'flex', alignItems: 'start', gap: '0.2rem', justifyContent: 'center'}}>
              <img onClick={(e) => handleUrl()} style={{width: '28%', maxWidth: '170px', cursor: 'pointer'}} src="/img/projects/misc/web-link.png"/>
            </div>
        </div> */}

      <div style={{padding: '0 1rem', marginBottom: '2rem', textAlign: 'center', fontStyle: 'italic', marginTop: '1.35rem'}}>
            <p>Here are some other projects I did at school or following YouTube tutorials.</p>
            <p>They range in different 
              technologies I was interested in. Check them out!</p>
      </div>

        <ProjectDiv>
          <div className='image image-left'>
            <img src="/img/projects/other-projects/polished+.jpg" 
                onClick={(e) => handleUrl("https://gleaming-kulfi-440d07.netlify.app/")}/>
          </div>
          <div className='info text-right'>
            <div className='info-container'>
              <h3 onClick={(e) => handleUrl("https://gleaming-kulfi-440d07.netlify.app/")}>Polished+</h3>
              <p>Beginning of college assignment I did, learning the fundamentals of HTML and CSS.</p>
            </div>
          </div>
        </ProjectDiv>
        
        <ProjectDiv>
          <div className='info text-left'>
            <div className='info-container'>
              <h3 onClick={(e) => handleUrl("https://gleaming-kulfi-440d07.netlify.app/")}>Polished+</h3>
              <p>Beginning of college assignment I did, learning the fundamentals of HTML and CSS.</p>
            </div>          </div>
          <div className='image image-right'>
            <img src="/img/projects/other-projects/polished+.jpg" 
                onClick={(e) => handleUrl("https://gleaming-kulfi-440d07.netlify.app/")}/>
          </div>
        </ProjectDiv>

      </div>

      <div >
        {/* <img style={{display: 'flex', padding: '1.5rem', width: '260px', margin: 'auto auto'}} src="img/projects/pokithedog/pokithedog-logo.png"/> */}
      </div>

      <p className='bottom-madewith' style={{textAlign: 'left', color: 'blue', margin: '1rem', fontStyle: 'italic', fontWeight: 400}}>Project was made using vanilla <b>JavaScript, CSS and HTML.</b></p>
      </ContentContainer>
    )
}

export default OtherProjects;