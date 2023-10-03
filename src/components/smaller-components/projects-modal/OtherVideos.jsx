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


const BackgroundDiv = styled.div`
  background: linear-gradient(rgba(126, 23, 23, 0.562), rgba(126, 23, 23, 0.562)), url("/img/projects/music-covers/CrossBackground.png");
  /* background: linear-gradient(rgba(101, 18, 18, 0.562), rgba(101, 18, 18, 0.562)), url("/img/projects/music-covers/CrossBackground.png"); */
  background-size: cover;
  background-position: center center;
  background-repeat: repeat;
  background-size: 1000px 1000px; 
`

const ContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const VideoDiv = styled.div`
  width: 100%;
  box-shadow: 10px 10px 10px rgba(0,0,0, .6);
  `
const VideoDiv2 = styled.div`
  position: relative;
  padding-top: 0rem;
  /* height: 0; */
  /* box-shadow: 6px 6px 10px rgba(0,0,0,.7); */
  overflow: hidden;
  height: 22rem;
  @media only screen and (max-width: 700px) {
    margin-bottom: 2.5rem;
  }
`
const Video = styled.iframe`
`

const ProjectDiv = styled.div`
// SECTION SPACED
  width: 99.8%;
  display: grid;
  gap: 1rem;
  /* grid-template-rows: repeat(3, 1fr); //3 */
  /* grid-template-columns: 3fr 2fr; */
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  row-gap: 5rem;
  align-items: center;

  margin-bottom: 1rem;
  
  .grid-item {
    h3 {
      font-style: italic;
    }
    iframe {
      width: 100%;
      height: 22rem;
      /* box-shadow: 10px 10px 10px rgba(0,0,0, .6); */
    }
    .info {
      width: 95%;
      /* background-color: red; */
      /* width: 20.7rem; */
      position: relative;
      bottom: 1rem;
      right: 0;
      // NEW
      h3 {
        font-style: italic;
        font-weight: 600;
        font-size: 1.9rem;
      }
    }
    .left {
      text-align: right;
    }
  }

  .grid-item:nth-child(4n+3) {
    text-align: right;
  }

  // WORKS
  .grid-item:nth-child(4n+1) {
    grid-column-start: 1;
    grid-column-end: 4;
    iframe {
      /* border: 1px solid black; */
      /* box-shadow: 10px 10px 10px rgba(0,0,0, .6); */
    }
    /* grid-column-start: 1;
    grid-column-end: 3; */
  }
  .grid-item:nth-child(4n+2) {
    transform: translateX(0.1rem);
    grid-column-start: 4;
    grid-column-end: 6;
    /* grid-column-start: 3;
    grid-column-end: 4; */
  }
  .grid-item:nth-child(4n+3) {
    transform: translateX(1.1rem);
    grid-column-start: 1;
    grid-column-end: 3;
    /* grid-column-start: 0;
    grid-column-end: 2; */
  }
  .grid-item:nth-child(4n+4) {
    grid-column-start: 3;
    grid-column-end: 6;
    iframe {
      /* border: 1px solid black; */
      box-shadow: -10px 10px 10px rgba(0,0,0, .6);
    }
    /* grid-column-start: 2;
    grid-column-end: 4; */
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
    row-gap: .5rem;
    display: flex;
    flex-direction: column;
    grid-template-columns: 1fr;

    // REVERSED
    .grid-item:nth-child(1) {
      order: 2;
    }
    .grid-item:nth-child(2) {
      order: 1;
    }
    // ORDERED
    .grid-item:nth-child(3) {
      order: 3;
    }
    .grid-item:nth-child(4) {
      order: 4;
    }
    // REVERSED
    .grid-item:nth-child(5) {
      order: 6;
    }
    .grid-item:nth-child(6) {
      order: 5;
    }
    // ORDERED
    .grid-item:nth-child(7) {
      order: 7;
    }
    .grid-item:nth-child(8) {
      order: 8;
    }
    // REVERSED
    .grid-item:nth-child(9) {
      order: 10;
    }
    .grid-item:nth-child(10) {
      order: 9;
    }
    // ORDERED
    .grid-item:nth-child(11) {
      order: 11;
    }
    .grid-item:nth-child(12) {
      order: 12;
    }
    // REVERSED
    .grid-item:nth-child(13) {
      order: 14;
    }
    .grid-item:nth-child(14) {
      order: 13;
    }
    // ORDERED
    .grid-item:nth-child(15) {
      order: 15;
    }
    .grid-item:nth-child(16) {
      order: 16;
    }
    // REVERSED
    .grid-item:nth-child(17) {
      order: 18;
    }
    .grid-item:nth-child(18) {
      order: 17;
    }
    // ORDERED
    .grid-item:nth-child(19) {
      order: 19;
    }
    .grid-item:nth-child(20) {
      order: 20;
    }
    // REVERSED
    .grid-item:nth-child(21) {
      order: 22;
    }
    .grid-item:nth-child(22) {
      order: 21;
    }
    // ORDERED
    .grid-item:nth-child(23) {
      order: 23;
    }
    .grid-item:nth-child(24) {
      order: 24;
    }
    // REVERSED
    .grid-item:nth-child(25) {
      order: 26;
    }
    .grid-item:nth-child(26) {
      order: 25;
    }
    // ORDERED
    .grid-item:nth-child(27) {
      order: 27;
    }
    .grid-item:nth-child(28) {
      order: 28;
    }
    // REVERSED
    .grid-item:nth-child(29) {
      order: 30;
    }
    .grid-item:nth-child(30) {
      order: 29;
    }
    // ORDERED
    .grid-item:nth-child(31) {
      order: 31;
    }
    .grid-item:nth-child(32) {
      order: 32;
    }
    // REVERSED
    .grid-item:nth-child(33) {
      order: 34;
    }
    .grid-item:nth-child(34) {
      order: 33;
    }
    // ORDERED
    .grid-item:nth-child(35) {
      order: 35;
    }
    .grid-item:nth-child(36) {
      order: 36;
    }
    // REVERSED
    .grid-item:nth-child(37) {
      order: 38;
    }
    .grid-item:nth-child(38) {
      order: 37;
    }
    // ORDERED
    .grid-item:nth-child(39) {
      order: 39;
    }
    .grid-item:nth-child(40) {
      order: 40;
    }

    // WORKS
  .grid-item:nth-child(4n+1) {
    grid-column-start: 1;
    grid-column-end: 1;
  }
  .grid-item:nth-child(4n+2) { //text 1
    grid-column-start: 1;
    grid-column-end: 1;
    transform: translateX(0rem);
  }
  .grid-item:nth-child(4n+3) { //text 2
    transform: translateX(0rem);
    grid-column-start: 1;
    grid-column-end: 1;
  }
  .grid-item:nth-child(4n+4) {
    grid-column-start: 1;
    grid-column-end: 1;
  }
  width: 99.7%;
    
    .grid-item {
      padding: 0;
      margin: 0;
      width: 100%;
      transform: translateX(0);
      iframe {
        margin-left: 0rem;
        width: 100%;
      }
      .info {
        width: 100%;
        h3 {
          /* background-color: red; */
          margin: 0 auto;
          text-align: center;
        }
        p {
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

function OtherVideos({ openModal, setOpenModal, hideVideos }) {
  
    return (
      // <BackgroundDiv>
        <>
      <ContentContainer>
      <CloseButton setOpenModal={setOpenModal} />
      <div>
        <h2>Other Videos</h2>

      <div style={{padding: '0 1rem', marginBottom: '2rem', textAlign: 'center', fontStyle: 'italic', marginTop: '1.35rem'}}>
            <p style={{fontSize:'1.1rem', fontWeight: 700}}>Over the years I've made many videos (school projects, etc.)</p>
            <p style={{fontSize:'1.1rem', fontWeight: 700}}>Most of them get deleted (accidently), but here are some I managed to keep.</p>
      </div>

        <ProjectDiv>
          {!hideVideos && (
            <>
            {/* Every 2 */}
            <div className='grid-item' 
                    style={{}}>
                <VideoDiv>
                <VideoDiv2>
                  <iframe src="https://www.youtube.com/embed/4DU2bA0uLCU?si=mpYFMtjNhJVMVrYo" srcDoc='
                  <style>*{height:100%;padding:0;margin:0;overflow:hidden;}body,html{height:100%;}img,svg{object-fit:cover;position:absolute;width:100%;top:0;bottom:0;margin:auto;}svg{height:5rem;filter:drop-shadow(1px 1px 10px hsl(206.5,70.7%,8%));transition:all 250ms ease-in-out;}body:hover svg{filter:drop-shadow(1px 1px 10px hsl(206.5,0%,10%));transform:scale(1.2);}</style>
                  <a href="https://www.youtube.com/embed/4DU2bA0uLCU?si=mpYFMtjNhJVMVrYo?autoplay=1">
                      <img src="https://i.ytimg.com/vi/4DU2bA0uLCU/hqdefault.jpg" alt="Performance Video"/>
                      <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                  </a>
                  '
                  loading="lazy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </VideoDiv2>
              </VideoDiv>
            </div>
            <div className='grid-item' style={{}}>
              <div className='info'>
                <h3>Dark Crisp Media Intro</h3>
                <p>Kinda creepy video I made in high school.</p>
              </div>
            </div>

            <div className='grid-item' style={{}}>
              <div className='info'>
                <h3>Nesquik Neighborhood (Entry)</h3>
                <p>A silly entry video I made for the Nesquik Neighborhood contest (2009).</p>
              </div>
            </div>
            <div className='grid-item' style={{}}>
            <VideoDiv>
                <VideoDiv2>
                  <iframe src="https://www.youtube.com/embed/KuT0bdJtqLc?si=ohgdANYC5Yx1vDo8" srcDoc='
                  <style>*{height:100%;padding:0;margin:0;overflow:hidden;}body,html{height:100%;}img,svg{object-fit:cover;position:absolute;width:100%;top:0;bottom:0;margin:auto;}svg{height:5rem;filter:drop-shadow(1px 1px 10px hsl(206.5,70.7%,8%));transition:all 250ms ease-in-out;}body:hover svg{filter:drop-shadow(1px 1px 10px hsl(206.5,0%,10%));transform:scale(1.2);}</style>
                  <a href="https://www.youtube.com/embed/KuT0bdJtqLc?si=ohgdANYC5Yx1vDo8?autoplay=1">
                      <img src="https://i.ytimg.com/vi/KuT0bdJtqLc/hqdefault.jpg" alt="Performance Video"/>
                      <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                  </a>
                  '
                  loading="lazy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </VideoDiv2>
              </VideoDiv>
            </div>


            {/* Every 2 */}
            <div className='grid-item' 
                    style={{}}>
              <VideoDiv>
                <VideoDiv2>
                  <iframe src="https://www.youtube.com/embed/OvIF9MDb4h0?si=NJ1grp-rUncdj8eI" srcDoc='
                  <style>*{height:100%;padding:0;margin:0;overflow:hidden;}body,html{height:100%;}img,svg{object-fit:cover;position:absolute;width:100%;top:0;bottom:0;margin:auto;}svg{height:5rem;filter:drop-shadow(1px 1px 10px hsl(206.5,70.7%,8%));transition:all 250ms ease-in-out;}body:hover svg{filter:drop-shadow(1px 1px 10px hsl(206.5,0%,10%));transform:scale(1.2);}</style>
                  <a href="https://www.youtube.com/embed/OvIF9MDb4h0?si=NJ1grp-rUncdj8eI?autoplay=1">
                      <img src="https://i.ytimg.com/vi/OvIF9MDb4h0/hqdefault.jpg" alt="Performance Video"/>
                      <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                  </a>
                  '
                  loading="lazy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </VideoDiv2>
              </VideoDiv>
            </div>
            <div className='grid-item' style={{}}>
              <div className='info'>
                <h3>Car Chase Edit</h3>
                <p>A video assignment that we had to edit together in college.</p>
              </div>
            </div>

            <div className='grid-item' style={{}}>
              <div className='info'>
                <h3>Woman Dub Scene</h3>
                <p>A video assignment where we put the clips together and added foley sound effects.</p>
              </div>
            </div>
            <div className='grid-item' style={{}}>
              <VideoDiv>
                  <VideoDiv2>
                    <iframe src="https://www.youtube.com/embed/wHcYb1Brfoo?si=FpyUWnWFxqEfJ5qf" srcDoc='
                    <style>*{height:100%;padding:0;margin:0;overflow:hidden;}body,html{height:100%;}img,svg{object-fit:cover;position:absolute;width:100%;top:0;bottom:0;margin:auto;}svg{height:5rem;filter:drop-shadow(1px 1px 10px hsl(206.5,70.7%,8%));transition:all 250ms ease-in-out;}body:hover svg{filter:drop-shadow(1px 1px 10px hsl(206.5,0%,10%));transform:scale(1.2);}</style>
                    <a href="https://www.youtube.com/embed/wHcYb1Brfoo?si=FpyUWnWFxqEfJ5qf?autoplay=1">
                    <img src="https://i.ytimg.com/vi/wHcYb1Brfoo/hqdefault.jpg" alt="Performance Video"/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                    </a>
                    '
                    loading="lazy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </VideoDiv2>
                </VideoDiv>
            </div>


            {/* Every 2 */}
            <div className='grid-item' 
                    style={{}}>
                <VideoDiv>
                  <VideoDiv2>
                    <iframe src="https://www.youtube.com/embed/BveqB8ncv58?si=5WSHAb7UlumB499_" srcDoc='
                    <style>*{height:100%;padding:0;margin:0;overflow:hidden;}body,html{height:100%;}img,svg{object-fit:cover;position:absolute;width:100%;top:0;bottom:0;margin:auto;}svg{height:5rem;filter:drop-shadow(1px 1px 10px hsl(206.5,70.7%,8%));transition:all 250ms ease-in-out;}body:hover svg{filter:drop-shadow(1px 1px 10px hsl(206.5,0%,10%));transform:scale(1.2);}</style>
                    <a href="https://www.youtube.com/embed/BveqB8ncv58?si=5WSHAb7UlumB499_?autoplay=1">
                    <img src="https://i.ytimg.com/vi/BveqB8ncv58/hqdefault.jpg" alt="Performance Video"/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                    </a>
                    '
                    loading="lazy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </VideoDiv2>
                </VideoDiv>
            </div>
            <div className='grid-item' style={{}}>
              <div className='info'>
                <h3>Stick Guitar Intro</h3>
                <p>A little animation I put together back in high school.</p>
              </div>
            </div>
            </>
          )}

        </ProjectDiv>

      </div>
      </ContentContainer>
      {/* </BackgroundDiv> */}
      </>
    )
}

export default OtherVideos;