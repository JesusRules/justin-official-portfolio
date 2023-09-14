import React, { useEffect, useRef, useState } from 'react'
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
  top: 3vw;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: rgba(255,255,255,0.92);
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
  h4 {
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 1.75rem;
    img {
      padding-left: 0.2rem;
      padding-right: 0.2rem;
      position: relative;
      top: 0.75rem;
      width: 10rem;
    }
  }

  .intro {
    margin: 0 auto;
    text-align: left;
    display: flex;

    #my-diploma-1,
    #my-diploma-2 {
      object-fit: cover;
      padding-left: 6rem;
      width: 100%;
      height: 100%;
      max-width: 19rem;
      cursor: pointer;
      transition: width 0.3s, height 0.3s;
    }
    #my-diploma-2 {
      display: none;
    }

    .info {
      padding-left: 1rem;
      padding-right: 1rem;
      #course {
        font-size: 1.1rem;
        margin-top: 1.6rem;
      }
      .diploma-icon {
        width: 2.5rem;
        cursor: pointer;
      }
    }

  }

  .grades {
    margin-top: 3rem;
    margin-bottom: 5rem;
  }

  @media only screen and (max-width: 700px) {
    .intro {
      flex-direction: column;
      text-align: center;
      #my-diploma-1,
      #my-diploma-2 {
        padding: 0;
        margin: 0 auto;
        background-color: red;
      }
      #my-diploma-1 {
        display: none;
      }
      #my-diploma-2 {
        margin-top: 2.3rem;
        display: block;
      }
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

const ModalImage = styled.div`
  position: absolute;
  z-index: 50;
  margin: auto;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 100vw;
    max-width: 800px;
  }
`

const DarkBG = styled.div`
    z-index: 40;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.56);
    cursor: pointer;
    position: absolute;
`

function Education({ myRef, scrollYGlobal }) {
  const overlayRef = useRef(null);
  const backgroundImageRef = useRef(null);
  // Beginning Effect
  const text1Ref = useRef();
  const text2Ref = useRef();
  const educationPopupRef = useRef();
  const [showBeginning, setShowBeginning] = useState(false);
  // Main
  const floatingBoxRef = useRef();
  // Modals
  const [diplomaModal, setDiplomaModal] = useState(false);
  // const [gameDevModal, setGameDevModal] = useState(false);
  // const [MADDModal, setMADDModal] = useState(false);
  const [gradesModal, setGradesModal] = useState(false);

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
      if (showBeginning) return;
      setShowBeginning(true);
      gsap.to(overlayRef.current, { opacity: 1, duration: 2, delay: 0 });
      gsap.to(backgroundImageRef.current, { scale: 1.05, duration: 5 });
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

    const GameDevGraduatedLink = () => {
      window.open('https://drive.google.com/file/d/1i0o7hcPwAWGdsVgMl3929-Q3LHstEg_t/view?usp=sharing');
      // window.open('https://drive.google.com/file/d/1i0o7hcPwAWGdsVgMl3929-Q3LHstEg_t/view?usp=sharing', '_blank');
    }
    const MADDGraduatedLink = () => {
      window.open('https://drive.google.com/file/d/1wdxcyf9W-N1ppXQfkvZbvDgWQxy2n15q/view?usp=sharing');
    }
    const GradesLink = () => {
      window.open('https://drive.google.com/file/d/1RulDt3DBsVV_cg3Q60xid17W0UzKaCRp/view?usp=sharing');
    }


  return (
    <>
    <Section ref={myRef}>
      <Container>
        {diplomaModal && (
          <>
          <ModalImage>
            <img src="/img/education/madd-diploma.jpg"/>
          </ModalImage>
          <DarkBG onClick={(e) => setDiplomaModal(false)}/>
          </>
        )}
        {gradesModal && (
          <>
          <ModalImage>
            <img src="/img/education/grades.jpg"/>
          </ModalImage>
          <DarkBG onClick={(e) => setGradesModal(false)}/>
          </>
        )}

        
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
            <h4>Both courses I graduated from <img src="/img/education/algonquin-college-logo-normal.png"/> were:</h4>
            <div className='intro'>
              <img id="my-diploma-1" draggable={false} src="/img/education/madd-diploma.jpg" 
                    onClick={(e) => setDiplomaModal(true)}/>
              
              <div className='info'>
                {/* <p>Both courses I graduated from Algonquin College were:</p> */}
                <div>
                    <p id="course"><a href="https://www.algonquincollege.com/mediaanddesign/program/game-development/" target="_blank">Game Development</a> (2018-2021) <span style={{fontWeight: '900'}}>with Honours</span></p>
                    <img className="diploma-icon" src="/img/education/diploma-paper-2.png" onClick={GameDevGraduatedLink}/>
                </div>
                <div>
                   <p id="course"><a href='https://www.algonquincollege.com/mediaanddesign/program/mobile-application-design-and-development/' target="_blank">Mobile Application Design and Development</a> (2021-2023) <span style={{fontWeight: '900'}}>with Honours</span></p>
                    <img className="diploma-icon" src="/img/education/diploma-paper-2.png" onClick={MADDGraduatedLink}/>
                </div>
              </div>

              <img id="my-diploma-2" draggable={false} src="/img/education/madd-diploma.jpg" 
                    onClick={(e) => setDiplomaModal(true)}/>
            </div>
            <div className='grades'>
              <p>My grades were impeccable! I literally finished <span style={{fontWeight: 900}}>every semester</span> while on the Dean's List!</p>
              <br/>
              <br/>
              <p style={{fontStyle: 'italic'}}>Proof I had amazing grades! </p>
              <img style={{width: '7rem', cursor: 'pointer'}} src="/img/education/view-grades-icon.png" onClick={(e) => GradesLink()}/>
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
    </>
  )
}

export default Education
