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

function DailyWorshipper({ openModal }) {

  const handleAppleStore = () => {
    window.open('https://apps.apple.com/us/app/daily-worshipper/id6451055173', '_blank');
  }
  const handleGooglePlayStore = () => {
    window.open('https://play.google.com/store/apps/details?id=com.praisejesus.dailyworshipper2&pli=1', '_blank');
  }
  const handleUrl = () => {
    window.open('https://daily-worshipper.netlify.app/', '_blank');
  }

    return (
      <ContentContainer>
      <div>
        <TitleDiv style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
           <h2>Daily Worshipper</h2>
           {/* <img style={{width: '60px', height: '60px'}} src="/img/projects/ottawarecsports/ORS-Logo.png" /> */}
        </TitleDiv>
        <HorizontalImageLoopProjects _images={images} _isReversed={false} openModal={openModal} _uniqueClassName={"images5"} />
        
        <div style={{textAlign: 'center', margin: '1rem'}}>
            <h4 style={{fontWeight: 800}}>Try it out!</h4>
            <div style={{display: 'flex', alignItems: 'start', gap: '0.2rem', justifyContent: 'center'}}>
              <img onClick={(e) => handleAppleStore()} style={{width: '32%', maxWidth: '250px', cursor: 'pointer'}} src="/img/projects/misc/apple-store.png"/>
              <img onClick={(e) => handleGooglePlayStore()} style={{width: '32%', maxWidth: '250px', cursor: 'pointer'}} src="/img/projects/misc/google-store.png"/>
              <img onClick={(e) => handleUrl()} style={{width: '32%', maxWidth: '250px', cursor: 'pointer'}} src="/img/projects/misc/web-link.png"/>
            </div>
        </div>

      <div style={{padding: '0 2rem', textAlign: 'center', fontStyle: 'italic', lineHeight: '10%', maxWidth: '760px', margin: '0 auto'}}>
            <p>Daily Worshipper is a mobile/web app that features an API <a target="_blank" href="https://scripture.api.bible/">(API.Bible)</a> that can access bible content on the fly!</p>
           
            {/* <div style={{margin: '1rem 0', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <div>
                <img style={{maxWidth: '300px', width: '100%', objectFit: 'cover'}} src="/img/projects/ottawarecsports/justin-award.jpg" />
                <img style={{maxWidth: '250px', width: '1s00%'}} src="/img/projects/ottawarecsports/excellence-paper-reaction.jpg" />
              </div>
              <div>
                <img style={{minWidth: '320px', width: '100%', maxWidth: '550px', }} src="/img/projects/ottawarecsports/group-stage.jpg" />
              </div>
            </div> */}
      </div>
      </div>
      <p style={{textAlign: 'left', color: 'blue', margin: '1rem', fontStyle: 'italic', fontWeight: 400, paddingBottom: '1rem'}}>Project was made using <b>React Native, Expo.</b></p>
      </ContentContainer>
    )
}

export default DailyWorshipper;