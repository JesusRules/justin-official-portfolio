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
  @media only screen and (max-width: 500px) {
    h2 {
      font-size: 2rem;
    }
    img {
      display: none;
    }
  }
`

const images = [
  '/img/projects/church-party/preview-1.jpg',
  '/img/projects/church-party/preview-2.jpg',
  '/img/projects/church-party/preview-3.jpg',
  '/img/projects/church-party/preview-5.jpg',
  '/img/projects/church-party/preview-4.jpg',
  '/img/projects/church-party/preview-6.jpg',
  '/img/projects/church-party/preview-7.jpg',
  '/img/projects/church-party/preview-8.jpg',
  '/img/projects/church-party/preview-9.jpg',
];

function ChurchParty({ openModal, setOpenModal }) {
  const handleUrl = () => {
    window.open('https://bern0241.github.io/portfolio-website/', '_blank');
  }
    return (
      <ContentContainer>
      <CloseButton setOpenModal={setOpenModal} />
      <div>
      <TitleDiv style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
           <h2>Church Party</h2>
           {/* <img style={{width: '60px', height: '60px'}} src="/img/projects/portfolio-old/Justin-Icon.png" /> */}
        </TitleDiv>
        <HorizontalImageLoopProjects _images={images} _isReversed={false} openModal={openModal} _uniqueClassName={"images5"} />

        <div style={{textAlign: 'center', margin: '1rem'}}>
            <h4 style={{fontWeight: 800, marginBottom: '.26rem'}}>Game is not available for download :(</h4>
            {/* <div style={{display: 'flex', alignItems: 'start', gap: '0.2rem', justifyContent: 'center'}}>
              <img onClick={(e) => handleUrl()} style={{width: '28%', maxWidth: '170px', cursor: 'pointer'}} src="/img/projects/misc/web-link.png"/>
            </div> */}
        </div>

      <div style={{padding: '0 1rem', textAlign: 'center', fontStyle: 'italic', marginTop: '1.35rem', display: 'flex',
                  flexDirection: 'column', gap: '1rem', alignItems: 'center'}}>
            <p>Church Party is a 5 player, cross-platform mobile game, Mario Party influenced experience.</p>
            <p>The game is mean't to be played with friends, or with people all around the world.</p>
            <p style={{fontWeight: 800}}>Check out this game demo:</p>

            <iframe style={{width: "100%", maxWidth: '600px', height: 315 }} src="https://www.youtube.com/embed/cDhWRSwDhlA?si=lbVmGOEb_zaSL7Fn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      </div>

      <p className='bottom-madewith' style={{textAlign: 'left', color: 'blue', margin: '1rem 1rem 1rem 1rem', fontStyle: 'italic', fontWeight: 400, paddingBottom: '1rem'}}>Project was made using <b>Unity and Photon PUN2.</b></p>
      </ContentContainer>
    )
}

export default ChurchParty;