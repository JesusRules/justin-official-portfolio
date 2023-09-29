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

const ProjectDiv = styled.div`
// SECTION SPACED
  display: grid;
  width: 100%;
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
      cursor: pointer;
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
    grid-column-start: 4;
    grid-column-end: 6;
    /* grid-column-start: 3;
    grid-column-end: 4; */
  }
  .grid-item:nth-child(4n+3) {
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
    /* grid-template-areas: 
    'item2'
    'item1'
    'item3'
    'item4'
    'item6'
    'item5'
    'item7'
    'item8'
    'item10'
    'item9'
    'item11'
    'item12'
    'item14'
    'item13'
    'item15'
    'item16'
    'item18'
    'item19'
    'item20'
    'item21'; */

    .grid-item:nth-child(1) {
      order: 2;
    }
    .grid-item:nth-child(2) {
      order: 1;
    }

    // WORKS
  .grid-item:nth-child(4n+1) {
    grid-column-start: 1;
    grid-column-end: 1;
  }
  .grid-item:nth-child(4n+2) {
    grid-column-start: 1;
    grid-column-end: 1;
  }
  .grid-item:nth-child(4n+3) {
    grid-column-start: 1;
    grid-column-end: 1;
  }
  .grid-item:nth-child(4n+4) {
    grid-column-start: 1;
    grid-column-end: 1;
  }
    
    
    .grid-item {
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
  useEffect(() => {
    AddGridAreaIncrementalNumbers();
  }, [])

  const handleUrl = (stringLink) => {
    window.open(stringLink, '_blank');
  }
  
  const AddGridAreaIncrementalNumbers = () => {
    const gridItems = document.querySelectorAll('.grid-item');
    // gridItems.forEach((item, index) => {
    //   item.style.gridArea = `item${index + 1}`;
    // });
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
              <h3 onClick={(e) => handleUrl("https://polished-plus.netlify.app/")}>Soundgarden<br/> - Beyond The Wheel</h3>
            </div>
          </div>


          <div className='grid-item' style={{}}>
            <div className='info'>
              <h3 onClick={(e) => handleUrl("https://polished-plus.netlify.app/")}>Banjo-Kazooie<br/> - Pause Menu Music</h3>
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
              <h3 onClick={(e) => handleUrl("https://polished-plus.netlify.app/")}>Tool<br/> - Right In Two</h3>
            </div>
          </div>


          <div className='grid-item' style={{}}>
            <div className='info'>
              <h3 onClick={(e) => handleUrl("https://polished-plus.netlify.app/")}>Acoustic/Electric Mashup</h3>
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
              <h3 onClick={(e) => handleUrl("https://polished-plus.netlify.app/")}>Guns N' Roses<br/> - Don't Cry (Solo)</h3>
            </div>
          </div>


          <div className='grid-item' style={{}}>
            <div className='info'>
              <h3 onClick={(e) => handleUrl("https://polished-plus.netlify.app/")}>Alice Cooper<br/> - Poison</h3>
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
              <h3 onClick={(e) => handleUrl("https://polished-plus.netlify.app/")}>Alice in Chains<br/> - Man in the Box</h3>
            </div>
          </div>


          <div className='grid-item' style={{}}>
            <div className='info'>
              <h3 onClick={(e) => handleUrl("https://polished-plus.netlify.app/")}>System of a Down<br/> - ATWA</h3>
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