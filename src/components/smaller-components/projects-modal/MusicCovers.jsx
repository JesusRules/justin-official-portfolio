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
  /* overflow-x: hidden; */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* background: linear-gradient(rgba(211, 38, 38, 0.39), #500c0cbe), url("/img/projects/music-covers/CrossBackground.png");
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat; */
  /* color: #511a1e; */
  color: white;

  h2 {
    border-bottom: 1px solid black;
    background-color: #511a1e;
    color: white;
    text-shadow: 3px 3px 3px rgba(0,0,0,.6);
    font-weight: 800;
    box-shadow: 10px 10px 10px rgba(0,0,0,.4);
  }

  .title {
    display: flex;
    margin: 0 auto;
    text-align: center;

    height: 5rem;
    padding: 0.5rem;
  }
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
    /* padding-bottom: 58%; */
    /* padding-bottom: 50.5%; */
  }
  `
const Video = styled.iframe`
  /* box-shadow: 6px 6px 10px rgba(0,0,0,.7); */
  /* width: 100%;
  object-fit: cover;
  max-width: 39rem;
  height: 100%; */
  /* max-height: 20rem; */
  /* z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: .3rem auto 0rem auto;
  border: 0; */
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
  /* grid-template-areas:  */
    /* 'one two' 
    'three four'
    'five six'
    'seven eight' */
    
    /* 'nine ten'
    'eleven twelve'
    'thirteen fourteen'
    'fifteen sixteen'
    'seventeen eighteen'
    'nineteen twenty' */
    /* ; */

  margin-bottom: 1rem;
  
  .grid-item {
    h3 {
      font-style: italic;
      margin-bottom: 1rem;
      text-shadow: 5px 5px 5px rgba(0,0,0, .7);
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
        font-weight: 500;
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
  // useEffect(() => {
  // }, [])

  const handleUrl = (stringLink) => {
    // window.open(stringLink, '_blank');
  }
  
    return (
      <BackgroundDiv>
        {/* <FixedGradient /> */}
      <ContentContainer>
      <CloseButton color="white" setOpenModal={setOpenModal} />
      <div>
        <h2>Music Covers</h2>

      <div style={{color: 'white', textShadow: '1px 1px 1px black', padding: '0 1rem', marginBottom: '2rem', textAlign: 'center', fontStyle: 'italic', marginTop: '1.35rem'}}>
            <p style={{fontSize:'1.1rem', fontWeight: 700}}>Here are some songs I've covered on guitar.</p>
            <p style={{fontSize:'1.1rem', fontWeight: 700}}>It goes in chronological order (from oldest to latest)</p>
            <p style={{fontSize:'1.1rem', fontWeight: 700}}>I love live music! I aspire to be a live performer one day!</p>
      </div>

        <ProjectDiv>
          {/* Every 2 */}
          <div className='grid-item' 
                  style={{}}>
              <VideoDiv>
              <VideoDiv2>
                <Video src="https://www.youtube.com/embed/0QHEDCigeBw?si=3JZyK1nJkpJ29QOc" srcDoc='
                <style>
                * {
                height: 100%;
                  padding: 0;
                  margin: 0;
                  overflow: hidden;
                }
                body, html {
                  height: 100%;
                }
                img, svg {
                  object-fit: cover;
                  position: absolute;
                  width: 100%;
                  top: 0;
                  bottom: 0;
                  margin: auto;
                }
                svg {
                  height: 5rem;
                  filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));
                  transition: all 250ms ease-in-out;
                }
                body:hover svg {
                  filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));
                  transform: scale(1.2);
                }
              </style>

                <a href="https://www.youtube.com/embed/0QHEDCigeBw?si=3JZyK1nJkpJ29QOc?autoplay=1">
                    <img src="https://i.ytimg.com/vi/0QHEDCigeBw/hqdefault.jpg" alt="Performance Video"/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                </a>
                '
                loading="lazy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Video>
              </VideoDiv2>
            </VideoDiv>
              {/* <iframe src="https://www.youtube.com/embed/0QHEDCigeBw?si=3JZyK1nJkpJ29QOc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          </div>
          <div className='grid-item' style={{}}>
            <div className='info'>
              <h3>Soundgarden<br/> - Beyond The Wheel</h3>
            </div>
          </div>

          <div className='grid-item' style={{}}>
            <div className='info'>
              <h3>Banjo-Kazooie<br/> - Pause Menu Music</h3>
            </div>
          </div>
          <div className='grid-item' style={{}}>
              <iframe src="https://www.youtube.com/embed/Rg2VJwkkIWY?si=keKW1vw97H1SkP2H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>


          {/* Every 2 */}
          <div className='grid-item' 
                  style={{}}>
              <iframe src="https://www.youtube.com/embed/L9R853DYm7E?si=ETGCEMU6thtJvr8h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className='grid-item' style={{}}>
            <div className='info'>
              <h3>Tool<br/> - Right In Two</h3>
            </div>
          </div>

          <div className='grid-item' style={{}}>
            <div className='info'>
              <h3>Acoustic/Electric Mashup</h3>
            </div>
          </div>
          <div className='grid-item' style={{}}>
              <iframe src="https://www.youtube.com/embed/HoWJtcePjW8?si=-m3pW5rBbvjZz2Vo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>


          {/* Every 2 */}
          <div className='grid-item' 
                  style={{}}>
              <iframe src="https://www.youtube.com/embed/W9h_kRAijDY?si=ZBB40dkUid3hAOQp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className='grid-item' style={{}}>
            <div className='info'>
              <h3>Guns N' Roses<br/> - Don't Cry (Solo)</h3>
            </div>
          </div>


          <div className='grid-item' style={{}}>
            <div className='info'>
              <h3>Alice Cooper<br/> - Poison</h3>
            </div>
          </div>
          <div className='grid-item' style={{}}>
              <iframe src="https://www.youtube.com/embed/6niBt9aws2k?si=yWf1tp1XCbMjrq2C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>



          {/* Every 2 */}
          <div className='grid-item' 
                  style={{}}>
              <iframe src="https://www.youtube.com/embed/S1vznDR9RQw?si=o31zRvfN0KRlLfce" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className='grid-item' style={{}}>
            <div className='info'>
              <h3>Alice in Chains<br/> - Man in the Box</h3>
            </div>
          </div>

          <div className='grid-item' style={{}}>
            <div className='info'>
              <h3>System of a Down<br/> - ATWA</h3>
            </div>
          </div>
          <div className='grid-item' style={{}}>
              <iframe src="https://www.youtube.com/embed/S82YYdGY1Q0?si=8SQo99f-TA68dVTw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>


          {/* Every 2 */}
          <div className='grid-item' 
                  style={{}}>
              <iframe src="https://www.youtube.com/embed/9B01rtS36II?si=48kR7aICmHTXZ_BK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className='grid-item' style={{}}>
            <div className='info'>
              <h3>Nirvana<br/> - Heart Shaped Box</h3>
            </div>
          </div>

          <div className='grid-item' style={{}}>
            <div className='info'>
              <h3>Guns N' Roses<br/> - Estranged</h3>
            </div>
          </div>
          <div className='grid-item' style={{}}>
              <iframe src="https://www.youtube.com/embed/fSMZa1TipCA?si=HO8mkSQf4fniwUqQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>


          {/* Every 2 */}
          <div className='grid-item' 
                  style={{}}>
              <iframe src="https://www.youtube.com/embed/MILRbs5Fi88?si=RT4c_8FpiNzsVLuB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className='grid-item' style={{}}>
            <div className='info'>
              <h3>Lit<br/> - My Own Worst Enemy</h3>
            </div>
          </div>

          <div className='grid-item' style={{}}>
            <div className='info'>
              <h3>Rise Against<br/> - Prayer of the Refugee</h3>
            </div>
          </div>
          <div className='grid-item' style={{}}>
              <iframe src="https://www.youtube.com/embed/UR6JW6mYZWg?si=oXC5_dbnukETQHK1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>


          {/* Every 2 */}
          <div className='grid-item' 
                  style={{}}>
              <iframe src="https://www.youtube.com/embed/MILRbs5Fi88?si=RT4c_8FpiNzsVLuB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className='grid-item' style={{}}>
            <div className='info'>
              <h3>Breaking Benjamin<br/> - The Diary of Jane</h3>
            </div>
          </div>

          <div className='grid-item' style={{}}>
            <div className='info'>
              <h3>Disturbed<br/> - Stricken</h3>
            </div>
          </div>
          <div className='grid-item' style={{}}>
              <iframe src="https://www.youtube.com/embed/7NMrtn-67_0?si=2-TzLXVzQfZGF1oW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>


          {/* Every 2 */}
          <div className='grid-item' 
                  style={{}}>
              <iframe src="https://www.youtube.com/embed/_bSF-1F6FHI?si=WpAYcQbADF2i5m8B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className='grid-item' style={{}}>
            <div className='info'>
              <h3>Coheed and Cambria<br/> - Welcome Home</h3>
            </div>
          </div>

          <div className='grid-item' style={{}}>
            <div className='info'>
              <h3>Priestess<br/> - Lay Down</h3>
            </div>
          </div>
          <div className='grid-item' style={{}}>
              <iframe src="https://www.youtube.com/embed/dO4q-WqA5K8?si=6RCM_bhCphnksxpF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>



          {/* Every 2 */}
          <div className='grid-item' 
                  style={{}}>
              <iframe src="https://www.youtube.com/embed/fAn_REtelfM?si=P6iSM-eTm9M8H2Io" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className='grid-item' style={{}}>
            <div className='info'>
              <h3>Paramore<br/> - That's What You Get</h3>
            </div>
          </div>

          <div className='grid-item' style={{}}>
            <div className='info'>
              <h3>Jesus Culture<br/> - Let it Rain (Solo)</h3>
            </div>
          </div>
          <div className='grid-item' style={{}}>
               <iframe src="https://www.youtube.com/embed/6nma6qnHhgY?si=SMdpJFiHyH0UC-Fy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>



           {/* Every 2 */}
           <div className='grid-item' 
                  style={{}}>
              <iframe src="https://www.youtube.com/embed/pZfiFDum4RM?si=5rCU2pJ4j7Jwo45a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className='grid-item' style={{}}>
            <div className='info'>
              <h3>Guns N' Roses<br/> - Patience Solos (Studio vs Live)</h3>
            </div>
          </div>

          <div className='grid-item' style={{}}>
            <div className='info'>
              <h3>Mastodon<br/> - Colony of Birchmen</h3>
            </div>
          </div>
          <div className='grid-item' style={{}}>
              <iframe src="https://www.youtube.com/embed/-J1qqSqenC4?si=HZtHqVkR0gmp7JEK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

        </ProjectDiv>

      </div>
      </ContentContainer>
      </BackgroundDiv>
    )
}

export default MusicCovers;