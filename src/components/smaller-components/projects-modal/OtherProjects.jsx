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

  .title {
    display: flex;
    margin: 0 auto;
    text-align: center;

    height: 5rem;
    padding: 0.5rem;
  }
`;

const ProjectDiv = styled.div`
  display: grid;
  margin: 0 auto;
  width: 88%;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  row-gap: 4rem;
  align-items: center;
  grid-template-areas: 
    'one two' 
    'three four'
    'five six'
    'seven eight'
    'nine ten'
    'eleven twelve'
    'thirteen fourteen'
    'fifteen sixteen'
    'seventeen eighteen'
    ;

  margin-bottom: 1rem;

  .grid-item {
    img {
      width: 100%;
    }
    h3 {
      color: blue;
      font-style: italic;
      text-decoration: underline;
      cursor: pointer;
      margin-bottom: 1rem;
    }
  }
  .info {
    position: relative;
    bottom: 1rem;
  }
  .left {
    text-align: right;
    h3 {
      text-align: right;
    }
  }
  img {
    border: 1px solid black;
    box-shadow: 5px 5px 5px rgba(0,0,0, 0.3);
    cursor: pointer;
  }

  @media only screen and (max-width: 700px) {
    row-gap: 1rem;
    grid-template-columns: 1fr;
    grid-template-areas: 
    'two'
    'one'
    'three'
    'four'
    'six'
    'five'
    'seven'
    'eight'
    'ten'
    'nine'
    'eleven'
    'twelve'
    'fourteen'
    'thirteen'
    'fifteen'
    'sixteen'
    'eighteen'
    'seventeen';

    
    .info {
      h3 {
        text-align: center;
      }
      text-align: left;
      bottom: 0rem;
    }
    img {
      margin-bottom: 2.5rem;
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

function OtherProjects({ openModal, setOpenModal }) {

  const handleUrl = (stringLink) => {
    window.open(stringLink, '_blank');
  }

    return (
      <ContentContainer>
      <CloseButton setOpenModal={setOpenModal} />
      <div>
        <h2>Other Projects (Links)</h2>
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
            <p>Here are some other projects I did at school or following YouTube tutorials.</p>
      </div>

        <ProjectDiv>

          <div className='grid-item' style={{ gridArea: 'one' }}>
            <img className='' src="/img/projects/other-projects/polished+.jpg" 
                onClick={(e) => handleUrl("https://gleaming-kulfi-440d07.netlify.app/")}/>
          </div>
          <div className='grid-item' style={{ gridArea: 'two' }}>
            <div className='info'>
              <h3 onClick={(e) => handleUrl("https://gleaming-kulfi-440d07.netlify.app/")}>Polished+</h3>
              <p>Beginning of college assignment I did, learning the fundamentals of HTML and CSS.</p>
            </div>
          </div>
        

          <div className='grid-item' style={{ gridArea: 'three' }}>
            <div className='info left'>
              <h3 onClick={(e) => handleUrl("https://whimsical-sawine-ca8839.netlify.app/")}>YouTube Clone</h3>
              <p>2 hour long video I followed on YouTube (by JavaScript Mastery) using React, Material UI, and RapidAPI.
              Video link <a href="https://www.youtube.com/watch?v=FHTbsZEJspU&t=1s">here</a></p>
            </div>          
          </div>
          <div className='grid-item' style={{ gridArea: 'four' }}>
            <img className='' src="/img/projects/other-projects/polished+.jpg" 
                onClick={(e) => handleUrl("https://whimsical-sawine-ca8839.netlify.app/")}/>
          </div>


          <div className='grid-item' style={{ gridArea: 'five' }}>
            <img className='' src="/img/projects/other-projects/polished+.jpg" 
                onClick={(e) => handleUrl("https://gleaming-kulfi-440d07.netlify.app/")}/>
          </div>
          <div className='grid-item' style={{ gridArea: 'six' }}>
            <div className='info'>
              <h3 onClick={(e) => handleUrl("https://gleaming-kulfi-440d07.netlify.app/")}>Polished+</h3>
              <p>Beginning of college assignment I did, learning the fundamentals of HTML and CSS.</p>
            </div>
          </div>


          <div className='grid-item' style={{ gridArea: 'seven' }}>
            <div className='info left'>
              <h3 onClick={(e) => handleUrl("https://whimsical-sawine-ca8839.netlify.app/")}>YouTube Clone</h3>
              <p>2 hour long video I followed on YouTube (by JavaScript Mastery) using React, Material UI, and RapidAPI.
              Video link <a href="https://www.youtube.com/watch?v=FHTbsZEJspU&t=1s">here</a></p>
            </div>          
          </div>
          <div className='grid-item' style={{ gridArea: 'eight' }}>
            <img className='' src="/img/projects/other-projects/polished+.jpg" 
                onClick={(e) => handleUrl("https://whimsical-sawine-ca8839.netlify.app/")}/>
          </div>


          <div className='grid-item' style={{ gridArea: 'nine' }}>
            <img className='' src="/img/projects/other-projects/polished+.jpg" 
                onClick={(e) => handleUrl("https://gleaming-kulfi-440d07.netlify.app/")}/>
          </div>
          <div className='grid-item' style={{ gridArea: 'ten' }}>
            <div className='info'>
              <h3 onClick={(e) => handleUrl("https://gleaming-kulfi-440d07.netlify.app/")}>Polished+</h3>
              <p>Beginning of college assignment I did, learning the fundamentals of HTML and CSS.</p>
            </div>
          </div>


          <div className='grid-item' style={{ gridArea: 'eleven' }}>
            <div className='info left'>
              <h3 onClick={(e) => handleUrl("https://whimsical-sawine-ca8839.netlify.app/")}>YouTube Clone</h3>
              <p>2 hour long video I followed on YouTube (by JavaScript Mastery) using React, Material UI, and RapidAPI.
              Video link <a href="https://www.youtube.com/watch?v=FHTbsZEJspU&t=1s">here</a></p>
            </div>          
          </div>
          <div className='grid-item' style={{ gridArea: 'twelve' }}>
            <img className='' src="/img/projects/other-projects/polished+.jpg" 
                onClick={(e) => handleUrl("https://whimsical-sawine-ca8839.netlify.app/")}/>
          </div>


          <div className='grid-item' style={{ gridArea: 'thirteen' }}>
            <img className='' src="/img/projects/other-projects/polished+.jpg" 
                onClick={(e) => handleUrl("https://gleaming-kulfi-440d07.netlify.app/")}/>
          </div>
          <div className='grid-item' style={{ gridArea: 'fourteen' }}>
            <div className='info'>
              <h3 onClick={(e) => handleUrl("https://gleaming-kulfi-440d07.netlify.app/")}>Polished+</h3>
              <p>Beginning of college assignment I did, learning the fundamentals of HTML and CSS.</p>
            </div>
          </div>


          <div className='grid-item' style={{ gridArea: 'fifteen' }}>
            <div className='info left'>
              <h3 onClick={(e) => handleUrl("https://whimsical-sawine-ca8839.netlify.app/")}>YouTube Clone</h3>
              <p>2 hour long video I followed on YouTube (by JavaScript Mastery) using React, Material UI, and RapidAPI.
              Video link <a href="https://www.youtube.com/watch?v=FHTbsZEJspU&t=1s">here</a></p>
            </div>          
          </div>
          <div className='grid-item' style={{ gridArea: 'sixteen' }}>
            <img className='' src="/img/projects/other-projects/polished+.jpg" 
                onClick={(e) => handleUrl("https://whimsical-sawine-ca8839.netlify.app/")}/>
          </div>


          <div className='grid-item' style={{ gridArea: 'seventeen' }}>
            <img className='' src="/img/projects/other-projects/polished+.jpg" 
                onClick={(e) => handleUrl("https://gleaming-kulfi-440d07.netlify.app/")}/>
          </div>
          <div className='grid-item' style={{ gridArea: 'eighteen' }}>
            <div className='info'>
              <h3 onClick={(e) => handleUrl("https://gleaming-kulfi-440d07.netlify.app/")}>Polished+</h3>
              <p>Beginning of college assignment I did, learning the fundamentals of HTML and CSS.</p>
            </div>
          </div>

        </ProjectDiv>

      </div>

      <div >
        {/* <img style={{display: 'flex', padding: '1.5rem', width: '260px', margin: 'auto auto'}} src="img/projects/pokithedog/pokithedog-logo.png"/> */}
      </div>

      <p className='bottom-madewith' style={{textAlign: 'left', color: 'blue', margin: '1rem', fontStyle: 'italic', fontWeight: 400}}>Project was made using vanilla <b>JavaScript, CSS and HTML.</b></p>
      </ContentContainer>
    )
}

export default OtherProjects;