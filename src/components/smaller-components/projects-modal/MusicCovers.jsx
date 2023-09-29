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
  overflow-x: hidden;
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
  display: grid;
  margin: 0 auto;
  width: 99%;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  row-gap: 4rem;
  align-items: center;
  grid-template-areas: 
    'one two' 
    'three four'
    'five six'
    'seven eight'
    'nine ten'
    'eleven twelve'
    'thirteen fourteen'
    'fifteen sixteen'
    'seventeen eighteen'
    'nineteen twenty'
    ;

  margin-bottom: 1rem;
  
  .grid-item {
    h3 {
      font-style: italic;
      cursor: pointer;
      margin-bottom: 1rem;
    }
    iframe {
      width: 100%;
      height: 22rem;
    }
    .info {
      /* background-color: red; */
      width: 20.7rem;
      position: relative;
      bottom: 1rem;
      // NEW
    }
    .left {
      text-align: right;
    }
    iframe {
      border: 1px solid black;
      box-shadow: 5px 5px 5px rgba(0,0,0, 0.3);
      cursor: pointer;
    }

  }

  // IMAGE 2
  .grid-second-image { 
    transform: translateX(-18.55rem);
  }
  // TEXT 2
  .left {
    transform: translateX(0rem);
  }


  @media only screen and (max-width: 700px) {
    row-gap: 1rem;
    grid-template-columns: 1fr;
    grid-template-areas: 
    'two'
    'one'
    'three'
    'four'
    'six'
    'five'
    'seven'
    'eight'
    'ten'
    'nine'
    'eleven'
    'twelve'
    'fourteen'
    'thirteen'
    'fifteen'
    'sixteen'
    'eighteen'
    'seventeen'
    'nineteen'
    'twenty';
    
    .grid-item {
      width: 100%;
      transform: translateX(0);
      iframe {
        width: 100%;
        margin-bottom: 2.5rem;
      }
      .info {
        width: 100%;
        h3 {
          margin: 0 auto;
          text-align: center;
        }
        text-align: left;
        bottom: 0rem;
      }
      .grid-second-image {
      }
    }
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

function MusicCovers({ openModal, setOpenModal }) {
  const handleUrl = (stringLink) => {
    window.open(stringLink, '_blank');
  }

    return (
      <ContentContainer>
      <CloseButton setOpenModal={setOpenModal} />
      <div>
        <h2>Music Covers</h2>
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
            <p>Here are some songs I've covered on guitar.</p>
            <p>It goes in chronological order (from oldest to latest)</p>
            <p>I love live music! I aspire to be a live performer one day!</p>
      </div>

        <ProjectDiv>
          {/* Polished+ */}
          <div className='grid-item' style={{ gridArea: 'one' }}>
              <iframe src="https://www.youtube.com/embed/0QHEDCigeBw?si=3JZyK1nJkpJ29QOc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className='grid-item' style={{ gridArea: 'two' }}>
            <div className='info'>
              <h3 onClick={(e) => handleUrl("https://polished-plus.netlify.app/")}>Soundgarden<br/> - Beyond The Wheel</h3>
              {/* <p>Beginning of college assignment I did, learning the fundamentals of HTML and CSS.</p> */}
            </div>
          </div>
        

          {/* YouTube Clone */}
          <div className='grid-item' style={{ gridArea: 'three' }}>
            <div className='info left'>
              <h3 onClick={(e) => handleUrl("https://justins-youtube-clone.netlify.app/")}>YouTube Clone</h3>
            </div>          
          </div>
          <div className='grid-item grid-second-image' style={{ gridArea: 'four' }}>
              <iframe src="https://www.youtube.com/embed/0QHEDCigeBw?si=3JZyK1nJkpJ29QOc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>


          

        </ProjectDiv>

      </div>
      </ContentContainer>
    )
}

export default MusicCovers;