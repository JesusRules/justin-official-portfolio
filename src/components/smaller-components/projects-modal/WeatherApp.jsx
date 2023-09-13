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
    height: 23rem;
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

function WeatherApp({ openModal, setOpenModal }) {

  const handleUrl = () => {
    window.open('https://bern0241.github.io/mad9135-a2-react-routing/#/', '_blank');
  }

    return (
      <ContentContainer>
      <CloseButton setOpenModal={setOpenModal} />
      <div>
        {/* <TitleDiv style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
           <h2>Daily Worshipper</h2>
           <img style={{width: '60px', height: '60px', borderRadius: '10px', boxShadow: '3px 3px 3px rgba(0,0,0,0.7)'}} src="/img/projects/daily-worshipper/jesus-icon.jpg" />
        </TitleDiv> */}
        <BackgroundBanner imageUrl="/img/projects/weather-app/preview-main.jpg"/>
        {/* <HorizontalImageLoopProjects _images={images} _isReversed={false} openModal={openModal} _uniqueClassName={"images5"} /> */}
        
        <div style={{textAlign: 'center', margin: '1rem'}}>
            <h4 style={{fontWeight: 800, marginBottom: '.26rem'}}>Try it out!</h4>
            <div style={{display: 'flex', alignItems: 'start', gap: '0.2rem', justifyContent: 'center'}}>
              <img onClick={(e) => handleUrl()} style={{width: '28%', maxWidth: '170px', cursor: 'pointer'}} src="/img/projects/misc/web-link.png"/>
            </div>
        </div>

      <div style={{padding: '0 2rem', textAlign: 'center', fontStyle: 'italic', lineHeight: '10%', maxWidth: '760px', margin: '0 auto'}}>
            <p>Justin's Weather App was a school assignment that we had to make using an API of our choice.</p>
              <p style={{marginTop: '1rem'}}>The API I decided to go with was <a target="_blank" href="https://openweathermap.org/api">OpenWeather's One Call API 3.0 </a>
              This API allows you to make calls, receiving various data like weather predictions and weather archived information. </p>
            <p style={{marginTop: '1rem'}}>The app also tracks your geolocation and can determine the weather forecast of where you are!</p>
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
      <p className='bottom-madewith' style={{textAlign: 'left', color: 'blue', margin: '1rem', fontStyle: 'italic', fontWeight: 400, paddingBottom: '1rem'}}>Project was made using <b>React, React DOM, GoogleMaps, and GoogleAPIs</b></p>
      </ContentContainer>
    )
}

export default WeatherApp;