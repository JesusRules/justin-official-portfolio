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
  '/img/projects/ottawarecsports/preview-1.jpg',
  '/img/projects/ottawarecsports/preview-2.jpg',
  '/img/projects/ottawarecsports/preview-3.jpg',
  '/img/projects/ottawarecsports/preview-5.jpg',
  '/img/projects/ottawarecsports/preview-4.jpg',
  '/img/projects/ottawarecsports/preview-6.jpg',
];

function OttawaRecSports({ openModal }) {
  const handleUrl = () => {
    window.open('https://snazzy-sunburst-e79220.netlify.app/', '_blank');
  }
    return (
      <ContentContainer>
      <div>
        <TitleDiv style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
           <h2>Ottawa Rec Sports</h2>
           <img style={{width: '60px', height: '60px'}} src="/img/projects/ottawarecsports/ORS-Logo.png" />
        </TitleDiv>
        <HorizontalImageLoopProjects _images={images} _isReversed={false} openModal={openModal} _uniqueClassName={"images5"} />
        
        {/* <div style={{textAlign: 'center', margin: '1rem'}}>
            <a style={{fontSize: '1.2rem'}} href='https://snazzy-sunburst-e79220.netlify.app/' target="_blank">Test Our Ottawa Rec Sports!</a>
        </div> */}

        <div style={{textAlign: 'center', margin: '1rem'}}>
            <h4 style={{fontWeight: 800, marginBottom: '.26rem'}}>Try it out!</h4>
            <div style={{display: 'flex', alignItems: 'start', gap: '0.2rem', justifyContent: 'center'}}>
              <img onClick={(e) => handleUrl()} style={{width: '28%', maxWidth: '170px', cursor: 'pointer'}} src="/img/projects/misc/web-link.png"/>
            </div>
        </div>

      <div style={{padding: '0 2rem', textAlign: 'center', fontStyle: 'italic', lineHeight: '10%'}}>
            <p>In our final semester (of the Algonquin MADD program), me and 5 other students were assigned a client project to improve the existing <a target="_blank" href="https://ottawarecsports.com/">Ottawa Rec Sports.</a></p>
            <p><br/>Miraculously, our project came <span style={{color: 'blue'}}>third place</span> in the annual Algonquin RE/ACTION showcase!</p>
           
            <div style={{margin: '1rem 0', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <div>
                <img style={{maxWidth: '260px', width: '100%', objectFit: 'cover'}} src="/img/projects/ottawarecsports/justin-award.jpg" />
                <img style={{maxWidth: '215px', width: '100%'}} src="/img/projects/ottawarecsports/excellence-paper-reaction.jpg" />
              </div>
              <div>
                <img style={{minWidth: '320px', width: '100%', maxWidth: '550px', }} src="/img/projects/ottawarecsports/group-stage.jpg" />
              </div>
            </div>
      </div>
      </div>
      <p style={{textAlign: 'center', marginBottom: '1.5rem'}}>Thanks to our hard working team for a great semester!</p>
      <p className='bottom-madewith' style={{textAlign: 'left', color: 'blue', margin: '1rem', fontStyle: 'italic', fontWeight: 400, paddingBottom: '1rem'}}>Project was made using <b>React, NextJS, Tailwind CSS, AWS Services (Amplify, GraphQL, SES, Cognito, DynamoDB, S3).</b></p>
      </ContentContainer>
    )
}

export default OttawaRecSports;