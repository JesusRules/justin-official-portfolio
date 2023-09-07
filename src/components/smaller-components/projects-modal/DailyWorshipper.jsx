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
    h2 {s
      font-size: 2rem;
    }
    img {
      display: none;
    }
  }
`

const BackgroundBanner = styled.div`
    background-image: url(${props => props.imageUrl}); 
    background-size: cover; 
    background-repeat: no-repeat;
    background-attachment: fixed; 
    background-position: top center;
    height: 15rem;
    border-bottom: 1px solid black;
    box-shadow: 8px 8px 8px rgba(0,0,0, .1);
`;

// const images = [
//   '/img/projects/daily-worshipper/preview-1.jpg',
//   '/img/projects/daily-worshipper/preview-2.jpg',
//   '/img/projects/daily-worshipper/preview-3.jpg',
//   '/img/projects/daily-worshipper/preview-5.jpg',
//   '/img/projects/daily-worshipper/preview-4.jpg',
//   '/img/projects/daily-worshipper/preview-6.jpg',
//   '/img/projects/daily-worshipper/preview-7.jpg',
// ];

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
        {/* <TitleDiv style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
           <h2>Daily Worshipper</h2>
           <img style={{width: '60px', height: '60px', borderRadius: '10px', boxShadow: '3px 3px 3px rgba(0,0,0,0.7)'}} src="/img/projects/daily-worshipper/jesus-icon.jpg" />
        </TitleDiv> */}
        <BackgroundBanner imageUrl="/img/projects/daily-worshipper/preview-main.jpg"/>
        {/* <HorizontalImageLoopProjects _images={images} _isReversed={false} openModal={openModal} _uniqueClassName={"images5"} /> */}
        
        <div style={{textAlign: 'center', margin: '1rem'}}>
            <h4 style={{fontWeight: 800, marginBottom: '.26rem'}}>Try it out!</h4>
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