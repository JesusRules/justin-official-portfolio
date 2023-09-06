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

const images = [
  '/img/projects/ottawarecsports/preview-1.jpg',
  '/img/projects/ottawarecsports/preview-2.jpg',
  '/img/projects/ottawarecsports/preview-3.jpg',
  '/img/projects/ottawarecsports/preview-5.jpg',
  '/img/projects/ottawarecsports/preview-4.jpg',
  '/img/projects/ottawarecsports/preview-6.jpg',
];

function OttawaRecSports({ openModal }) {
    return (
      <ContentContainer>
      <div>
        <h2>Ottawa Rec Sports</h2>
        <HorizontalImageLoopProjects _images={images} _isReversed={false} openModal={openModal} _uniqueClassName={"images5"} />
        
        <div style={{textAlign: 'center', margin: '1rem'}}>
            {/* <h4 style={{fontWeight: 800}}>Try it out!</h4> */}
            <a style={{fontSize: '1.2rem'}} href='https://snazzy-sunburst-e79220.netlify.app/' target="_blank">Test Our Ottawa Rec Sports!</a>
        </div>

      <div style={{padding: '0 3rem', textAlign: 'center', fontStyle: 'italic', marginTop: '1.35rem', lineHeight: '10%'}}>
            <p>In our final semester (of the Algonquin MADD program), me and 5 other students were assigned a client project to improve the existing <a target="_blank" href="https://ottawarecsports.com/">Ottawa Rec Sports.</a></p>
            <p><br/>Miraculously, our project came <span style={{color: 'blue'}}>third place</span> in the annual Algonquin RE/ACTION showcase!</p>
           
            <div style={{margin: '1rem 0', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <div>
                <img style={{maxWidth: '300px', width: '100%', objectFit: 'cover'}} src="/img/projects/ottawarecsports/justin-award.jpg" />
                <img style={{maxWidth: '250px', width: '100%'}} src="/img/projects/ottawarecsports/excellence-paper-reaction.jpg" />
              </div>
              <div>
                <img style={{minWidth: '320px', width: '100%', maxWidth: '550px', }} src="/img/projects/ottawarecsports/group-stage.jpg" />
              </div>
            </div>
      </div>
      </div>
      <p style={{textAlign: 'center'}}>Thanks to our hard working team for a great semester!</p>
      <p style={{textAlign: 'left', color: 'blue', margin: '1rem', fontStyle: 'italic', fontWeight: 400, paddingBottom: '1rem'}}>Project was made using <b>React, NextJS, Tailwind CSS, AWS Services (Amplify, GraphQL, SES, Cognito, DynamoDB, S3).</b></p>
      </ContentContainer>
    )
}

export default OttawaRecSports;