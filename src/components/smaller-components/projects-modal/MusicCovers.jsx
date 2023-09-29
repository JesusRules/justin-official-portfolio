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
  overflow-x: hidden;
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

const WrapperDiv = styled.div`
  background-color: red;
  width: 100%;
  /* position: relative;
  left: 50%;
  transform: translateX(-50%); */
`;

const ProjectDiv = styled.div`
// SECTION SPACED
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
    }
    iframe {
      width: 100%;
      height: 22rem;

      border: 1px solid black;
      box-shadow: 5px 5px 5px rgba(0,0,0, 0.3);
    }
    .info {
      width: 100%;
      /* background-color: red; */
      /* width: 20.7rem; */
      position: relative;
      bottom: 1rem;
      right: 0;
      // NEW
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
    /* grid-column-start: 1;
    grid-column-end: 3; */
  }
  .grid-item:nth-child(4n+2) {
    transform: translateX(1rem);
    grid-column-start: 4;
    grid-column-end: 6;
    /* grid-column-start: 3;
    grid-column-end: 4; */
  }
  .grid-item:nth-child(4n+3) {
    transform: translateX(-1rem);
    grid-column-start: 0;
    grid-column-end: 3;
    /* grid-column-start: 0;
    grid-column-end: 2; */
  }
  .grid-item:nth-child(4n+4) {
    grid-column-start: 3;
    grid-column-end: 6;
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
    row-gap: 1rem;
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
      order: 21;
    }
    .grid-item:nth-child(22) {
      order: 22;
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
    
    .grid-item {
      padding: 0;
      margin: 0;
      width: 100%;
      transform: translateX(0);
      iframe {
        margin-left: 0rem;
        width: 100%;
        margin-bottom: 2.5rem;
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
    window.open(stringLink, '_blank');
  }
  
    return (
      <ContentContainer>
      <CloseButton setOpenModal={setOpenModal} />
      <div>
        <h2>Music Covers</h2>
        {/* <img className='title' src='/img/projects/pokithedog/pokithedog-logo.png'/> */}

        {/* METHOD 3 */}
        {/* <HorizontalImageLoopProjects _images={images} _isReversed={false} openModal={openModal} _uniqueClassName={"images4"} /> */}

      {/* METHOD 2 */}
        {/* <BackgroundBanner imageUrl="/img/projects/pokithedog/pokithedog-2.png">
        </BackgroundBanner> */}

        {/* <div style={{textAlign: 'center', margin: '1rem'}}>
            <h4 style={{fontWeight: 800, marginBottom: '.26rem'}}>Try it out!</h4>
            <div style={{display: 'flex', alignItems: 'start', gap: '0.2rem', justifyContent: 'center'}}>
              <img onClick={(e) => handleUrl()} style={{width: '28%', maxWidth: '170px', cursor: 'pointer'}} src="/img/projects/misc/web-link.png"/>
            </div>
        </div> */}

      <div style={{padding: '0 1rem', marginBottom: '2rem', textAlign: 'center', fontStyle: 'italic', marginTop: '1.35rem'}}>
            <p>Here are some songs I've covered on guitar.</p>
            <p>It goes in chronological order (from oldest to latest)</p>
            <p>I love live music! I aspire to be a live performer one day!</p>
      </div>
        

        <ProjectDiv>
          {/* Every 2 */}
          <div className='grid-item' 
                  style={{}}>
              <iframe src="https://www.youtube.com/embed/0QHEDCigeBw?si=3JZyK1nJkpJ29QOc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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


          





          {/* <div className='grid-item' 
                  style={{ gridArea: 'five', 
                          // gridColumnStart: 1,
                          // gridColumnEnd: 3
                          }}>
              <iframe src="https://www.youtube.com/embed/0QHEDCigeBw?si=3JZyK1nJkpJ29QOc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className='grid-item' style={{ gridArea: 'six'}}>
            <div className='info'>
              <h3 onClick={(e) => handleUrl("https://polished-plus.netlify.app/")}>Soundgarden<br/> - Beyond The Wheel</h3>
            </div>
          </div>
          <div className='grid-item' style={{ gridArea: 'seven'}}>
            <div className='info'>
              <h3 onClick={(e) => handleUrl("https://polished-plus.netlify.app/")}>Soundgarden<br/> - Beyond The Wheel</h3>
            </div>
          </div>
          <div className='grid-item' style={{ gridArea: 'eight'}}>
              <iframe src="https://www.youtube.com/embed/0QHEDCigeBw?si=3JZyK1nJkpJ29QOc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div> */}
          {/* YouTube Clone */}
          {/* <div className='grid-item' style={{ gridArea: 'three' }}>
            <div className='info left'>
              <h3 onClick={(e) => handleUrl("https://justins-youtube-clone.netlify.app/")}>YouTube Clone</h3>
            </div>          
          </div>
          <div className='grid-item grid-second-image' style={{ gridArea: 'four' }}>
              <iframe src="https://www.youtube.com/embed/0QHEDCigeBw?si=3JZyK1nJkpJ29QOc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div> */}
          

        </ProjectDiv>

      </div>
      </ContentContainer>
    )
}

export default MusicCovers;