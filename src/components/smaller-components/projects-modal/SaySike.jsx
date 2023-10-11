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
  display: grid;
  margin: 0 auto;
  width: 89%;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  /* row-gap: 4rem; */
  align-items: center;
  /* grid-template-areas: 
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
    ; */

  margin-bottom: 1rem;

  .grid-item {
    img {
      width: 100%;
    }
    h3 {
      color: blue;
      font-style: italic;
      text-decoration: underline;
      cursor: pointer;
      margin-bottom: 1rem;
    }
  }
  .info {
    position: relative;
    bottom: 1rem;
  }
  .left {
    text-align: right;
    h3 {
      text-align: right;
    }
  }
  img {
    border: 1px solid black;
    box-shadow: 5px 5px 5px rgba(0,0,0, 0.3);
    cursor: pointer;
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

    
    .info {
      h3 {
        text-align: center;
      }
      text-align: left;
      bottom: 0rem;
    }
    img {
      margin-bottom: 2.5rem;
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

function SaySike({ openModal, setOpenModal, hideVideos }) {

  const handleUrl = (stringLink) => {
    window.open(stringLink, '_blank');
  }

    return (
      <ContentContainer>
      <CloseButton setOpenModal={setOpenModal} />
      <div>
        <h2>SaySike Project</h2>

      <div style={{padding: '0 1rem', marginBottom: '2rem', textAlign: 'center', fontStyle: 'italic', marginTop: '1.35rem'}}>
            <p>This was a game prototype where Aliens need to destroy all Humans before the timer runs out.</p>
            <p>Aliens are disguised as humans.</p>
            <iframe style={{margin: '.5rem 0 .5rem 0',width: "100%", maxWidth: '700px', height: 415 }} src="https://www.youtube.com/embed/kVHVqMXbQus?si=EFOD-mKomQK1N-zV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <p>There is currently no playable demo available.</p>
      </div>
      </div>
      <p className='bottom-madewith' style={{textAlign: 'left', color: 'blue', margin: '1rem', fontStyle: 'italic', fontWeight: 400}}>Project was made using <b>Unreal Engine 4.</b></p>
      </ContentContainer>
    )
}

export default SaySike;