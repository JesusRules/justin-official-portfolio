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

          {/* Polished+ */}
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
        

          {/* YouTube Clone */}
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


          {/* Bike Club */}
          <div className='grid-item' style={{ gridArea: 'five' }}>
            <img className='' src="/img/projects/other-projects/polished+.jpg" 
                onClick={(e) => handleUrl("https://bern0241.github.io/9013-bootstrap-010/#")}/>
          </div>
          <div className='grid-item' style={{ gridArea: 'six' }}>
            <div className='info'>
              <h3 onClick={(e) => handleUrl("https://bern0241.github.io/9013-bootstrap-010/#")}>The Bike Club</h3>
              <p>A beginner assignment done in school when learning fundamental HTML, CSS, JS and <a href="https://getbootstrap.com/">Bootstrap.</a></p>
            </div>
          </div>

          {/* FireGiftr */}
          <div className='grid-item' style={{ gridArea: 'seven' }}>
            <div className='info left'>
              <h3 onClick={(e) => handleUrl("https://bejewelled-malabi-9c797f.netlify.app/")}>Fire Giftr</h3>
              <p>Fire Giftr was a hybrid assignment where we learned to sign into a GitHub account and save data to the Firebase database.</p>
            </div>          
          </div>
          <div className='grid-item' style={{ gridArea: 'eight' }}>
            <img className='' src="/img/projects/other-projects/polished+.jpg" 
                onClick={(e) => handleUrl("https://bejewelled-malabi-9c797f.netlify.app/")}/>
          </div>


          {/* Proof Of Concept - Postgres Test */}
          <div className='grid-item' style={{ gridArea: 'nine' }}>
            <img className='' src="/img/projects/other-projects/polished+.jpg" 
                onClick={(e) => handleUrl("https://gleaming-kulfi-440d07.netlify.app/")}/>
          </div>
          <div className='grid-item' style={{ gridArea: 'ten' }}>
            <div className='info'>
              <h3 onClick={(e) => handleUrl("https://gleaming-kulfi-440d07.netlify.app/")}>Proof Of Concept - Postgres Test</h3>
              <p>This test was an important step me and my team had to make prior to the development of Ottawa Rec Sports. We learned the basics of PostgreSQL and relational databases, especially many-to-many calls.</p>
            </div>
          </div>


        {/* ThreeJS Crash Course */}
          <div className='grid-item' style={{ gridArea: 'eleven' }}>
            <div className='info left'>
              <h3 onClick={(e) => handleUrl("https://www.youtube.com/watch?v=YK1Sw_hnm58")}>ThreeJS Crash Course</h3>
              <p>A 2 and a half hour video on YouTube by Chris Courses <a href="https://www.youtube.com/watch?v=YK1Sw_hnm58">(video link)</a> 
                A very useful tutorial on learning ThreeJS with vanilla HTML and JavaScript.</p>
            </div>          
          </div>
          <div className='grid-item' style={{ gridArea: 'twelve' }}>
            <img className='' src="/img/projects/other-projects/polished+.jpg" 
                onClick={(e) => handleUrl("https://www.youtube.com/watch?v=YK1Sw_hnm58")}/>
          </div>

          {/* ThreeJS Portfolio */}
          <div className='grid-item' style={{ gridArea: 'thirteen' }}>
            <img className='' src="/img/projects/other-projects/polished+.jpg" 
                onClick={(e) => handleUrl("https://gleaming-kulfi-440d07.netlify.app/")}/>
          </div>
          <div className='grid-item' style={{ gridArea: 'fourteen' }}>
            <div className='info'>
              <h3 onClick={(e) => handleUrl("https://gleaming-kulfi-440d07.netlify.app/")}>ThreeJS Portfolio</h3>
              <p>Another very useful tutorial when learning React Three Fiber (ThreeJS but for React). <a href="https://www.youtube.com/watch?v=qALsVa-V9qo&t=300s">Video link here.</a></p>
            </div>
          </div>

          {/* Parallax Tutorial */}
          <div className='grid-item' style={{ gridArea: 'fifteen' }}>
            <div className='info left'>
              <h3 onClick={(e) => handleUrl("https://whimsical-sawine-ca8839.netlify.app/")}>Parallax Tutorial</h3>
              <p>A super interesting video on creating a awesome parallax effect for website hero banners. Taught me a lot about compositing in Photoshop and advanced JavaScript.
                <a href="https://www.youtube.com/watch?v=Yo3j_Dx4u7c&t=2489s">Video link here.</a>
              </p>
            </div>          
          </div>
          <div className='grid-item' style={{ gridArea: 'sixteen' }}>
            <img className='' src="/img/projects/other-projects/polished+.jpg" 
                onClick={(e) => handleUrl("https://whimsical-sawine-ca8839.netlify.app/")}/>
          </div>

          {/* Giftr (Flutter) */}
          <div className='grid-item' style={{ gridArea: 'seventeen' }}>
            <img className='' src="/img/projects/other-projects/polished+.jpg" 
                onClick={(e) => handleUrl("https://gleaming-kulfi-440d07.netlify.app/")}/>
          </div>
          <div className='grid-item' style={{ gridArea: 'eighteen' }}>
            <div className='info'>
              <h3 onClick={(e) => handleUrl("https://gleaming-kulfi-440d07.netlify.app/")}>Giftr (Flutter)</h3>
              <p>A school assignment that taught us the foundations of using <a href="https://flutter.dev/development?gclid=Cj0KCQjwmICoBhDxARIsABXkXlJLORbygAzmGgvqmj2ji9RBb9yODa7P9xDih9RmixTMHRuRGwZSTbgaAtrDEALw_wcB&gclsrc=aw.ds">Flutter and Dart.</a> In association with Express and Mongoose (MongoDB).</p>
            </div>
          </div>

        </ProjectDiv>

      </div>
      </ContentContainer>
    )
}

export default OtherProjects;