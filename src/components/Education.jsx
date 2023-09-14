import React, { useEffect, useRef } from 'react'
import { styled } from 'styled-components'
import gsap from 'gsap';
import ZoomableImage from './smaller-components/ZoomableImage';

const Section = styled.div`
    background-color: white;
    height: 100vh;
    position: relative;
    scroll-snap-align: start;
    // background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/img/education/algonquin-college.jpg");
    // background-image: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.0)), url("/img/education/algonquin-college.jpg");
    // background-image: url("/img/education/algonquin-college.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
`
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  // max-width: 1100px;
  // top: 6vw;
  margin: 0 auto;
  text-align: center;
  h1 {
    font-style: italic;
    margin-bottom: 1.2rem;
  }
  .background-image {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.66); /* Adjust the opacity here */
    opacity: 0; /* Start with 0 opacity */
    pointer-events: none; /* Allow clicks to pass through the overlay */
    z-index: 10;
  }

  @media only screen and (max-width: 800px) {
    // top: 3.5rem;
  }
`;

const EducationPopup = styled.div`
  color: white;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  z-index: 20;
`

const FloatingBox = styled.div`
  position: absolute;
  top: 6vw;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: rgba(255,255,255,0.9);
  border-radius: 15px;
  height: 90%;
  width: 97%;
  max-width: 1100px;
  z-index: 30;
  opacity: 0;
  display: none;
  overflow-y: auto;
  overflow-x: hidden;
  @media only screen and (max-width: 800px) {
    top: 3rem;
  }
`;

const Content = styled.div`
  padding: .5rem;
  max-width: 1000px;
  margin: 0 auto;
  h2 {
    margin-bottom: 2rem;
  }
  .intro {
    margin: 0 auto;
    max-width: 800px;
    text-align: left;
    display: flex;
    img {
      width: 19rem;
    }
    p {
      padding: 1rem;
      line-height: 2rem;
    }
  }
  @media only screen and (max-width: 700px) {
    .intro {
      flex-direction: column;
      text-align: center;
      align-items: center;
    }
  }
`

const ScrollImage = styled.div`
 position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh; /* Adjust to the desired height */
  img {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease; /* Add a smooth transition effect */
  }
`;

const Banner = styled.img`
  // width: 40rem;
  width: 100%;
  object-fit: cover;
  height: 15rem;
`;

function Education({ myRef, scrollYGlobal }) {
  const overlayRef = useRef(null);
  const backgroundImageRef = useRef(null);
  // Beginning Effect
  const text1Ref = useRef();
  const text2Ref = useRef();
  const educationPopupRef = useRef();
  // Main
  const floatingBoxRef = useRef();

  useEffect(() => {
    const divElement = myRef.current;
    const halfwayPoint = divElement.scrollHeight / 5;
   
      if (Math.round(scrollYGlobal) == divElement.offsetTop) {
        OnViewed();
      }
      // if (scrollYGlobal > divElement.offsetTop || scrollYGlobal < divElement.offsetTop) {
      // }
    }, [scrollYGlobal])

    const OnViewed = () => {
      gsap.to(overlayRef.current, { opacity: 1, duration: 2, delay: 0 });
      gsap.to(backgroundImageRef.current, { scale: 1.05, duration: 7 });
      // Text effects
      gsap.to(text1Ref.current, { opacity: 1, duration: 1.5, delay: 0 });
      gsap.to(text2Ref.current, { opacity: 1, duration: 1.5, delay: 1.5 });
      // Main
      gsap.to(floatingBoxRef.current, 
        { 
          opacity: 1, 
          duration: 1, 
          delay: 4,
          onStart: () => {
            floatingBoxRef.current.style.display = 'block'
          },
        });
        gsap.to(educationPopupRef.current, 
          { opacity: 0, 
            duration: 1, 
            delay: 4,
            onComplete: () => { 
              educationPopupRef.current.style.display = 'none'
          } });
          gsap.to(overlayRef.current, { opacity: 0.3, duration: 1, delay: 4 });
    }

    // Image Scroll
    const imageStyle = {
      transform: `translateY(${scrollYGlobal * 0.1}px)`, // Adjust the multiplier for the desired scroll speed
    };


  return (
    <Section ref={myRef}>
      <Container>
        <div ref={overlayRef} className="overlay"></div>
        <img draggable={false} ref={backgroundImageRef} src="/img/education/algonquin-college.jpg" alt="Background Image" className="background-image" />

        <EducationPopup ref={educationPopupRef} >
          <p ref={text1Ref} style={{fontSize: '3.5rem', opacity: 0}}>My Education</p>
          
            <div ref={text2Ref} style={{display: 'flex', justifyContent: 'center', 
                              alignItems: 'end', gap: '1rem',
                              opacity: 0}}>
            <p style={{fontSize: '3.5rem'}}>At </p>
            <img draggable={false} style={{width: '20rem', position: 'relative', top: '0.3rem'}} src="/img/education/algonquin-college-logo.png"/>
          </div>
        </EducationPopup>

        <FloatingBox ref={floatingBoxRef}>
          <Content>
            <h2>My Education</h2>
            <div className='intro'>
              <img src="/img/education/madd-diploma.jpg"/>
              <div>
                <p>I graduated from both the <a href="https://www.algonquincollege.com/mediaanddesign/program/game-development/" target="_blank">Game Development</a> (3 years) and <a href='https://www.algonquincollege.com/mediaanddesign/program/mobile-application-design-and-development/' target="_blank"> Application Design and Development</a> (2 years) at Algonquin College (Ottawa, Canada).
                </p>
              </div>
            </div>
            {/* <div style={{display: 'flex', justifyContent: 'center'}}>
              <ZoomableImage src="/img/education/grades.jpg" />
            </div> */}
          </Content>
        </FloatingBox>

      {/* <Banner src="/img/education/algonquin-college.jpg"/> */}
      {/* <h1>Education</h1> */}
      </Container>
    </Section>
  )
}

export default Education
