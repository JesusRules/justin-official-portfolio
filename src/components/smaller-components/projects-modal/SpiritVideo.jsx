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
`;


const TitleDiv = styled.div`
    background-image: url('/img/projects/spirit-video/main-background.jpg'); 
    /* background-image: url(${props => props.imageUrl});  */
    background-size: cover; 
    background-repeat: no-repeat;
    background-attachment: fixed; 
    background-position: center center;
    height: 11rem;
    h2 {
      color: #fffb00;
      font-weight: 700;
      font-size: 2.4rem;
      border: 0px;
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

function SpiritVideo({ openModal, setOpenModal }) {

    return (
      <ContentContainer>
      <CloseButton color="white" setOpenModal={setOpenModal} />
      <div>
      <TitleDiv style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
           <h2>St. Joes Spirit Video 2009</h2>
           {/* <img style={{width: '60px', height: '60px'}} src="/img/projects/portfolio-old/Justin-Icon.png" /> */}
        </TitleDiv>

      <div style={{padding: '0 1rem', textAlign: 'center', fontStyle: 'italic', marginTop: '1.35rem', display: 'flex',
                  flexDirection: 'column', gap: '1rem', alignItems: 'center'}}>
            <p>St. Joes Spirit Video (2009) was that year's official Spirit video that I was given the opportunity to make.</p>
            <p>The video was played in the gymnasium and the whole school saw it.</p>

            <iframe style={{width: "100%", maxWidth: '700px', height: 415 }} src="https://www.youtube.com/embed/ENxWg1qxo2M?si=nmtmhJYUWvDLLhCu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      </div>

      <p className='bottom-madewith' style={{textAlign: 'left', color: 'blue', margin: '1rem 1rem 1rem 1rem', fontStyle: 'italic', fontWeight: 400, paddingBottom: '1rem'}}>Project was made using <b>Adobe Premiere and After Effects.</b></p>
      </ContentContainer>
    )
}

export default SpiritVideo;