import React, { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
import gsap from 'gsap';

const Section = styled.div`
    background-color: white;
    height: 100%;
    position: relative;
    scroll-snap-align: start;
    // background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/img/education/algonquin-college.jpg");
    // background-image: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.0)), url("/img/education/algonquin-college.jpg");
    // background-image: url("/img/education/algonquin-college.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    z-index: 10;
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

  @media only screen and (max-width: 768px) {
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
  p {
    font-size: 3rem;
  }
  .algonquin-at-name {
    img {
      width: 18rem;
      position: relative;
      top: 0.3rem;
    }
    p {
      font-size: 3rem;
    }
  }
  @media only screen and (max-width: 375px) {
    p {
      font-size: 2.55rem;
    }
    .algonquin-at-name {
      img {
        width: 13.5rem;
        position: relative;
        top: 0.3rem;
      }
      p {
        font-size: 2.05rem;
      }
  }
  }
`

const FloatingBox = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 95%; //95
  max-width: 1100px;
  z-index: 30;
  opacity: 0;
  display: none;
  overflow-y: auto;
  overflow-x: hidden;
  @media only screen and (max-width: 700px) {
    height: 92%;
    width: 92%; //95
    border-radius: 10px;
    bottom: 3rem;
    box-shadow: 7px 7px 7px rgba(0,0,0,.4);
  }
`;

const Content = styled.div`
  padding: 0.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  max-width: 1000px;
  margin: auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 15px;
  background-color: rgba(255,255,255,0.92);
  h4 {
    text-decoration: underline;
    font-size: 1.5rem;
    font-style: italic;
    margin-bottom: 3rem;
    img {
      padding-left: 0.2rem;
      padding-right: 0.2rem;
      position: relative;
      top: 0.75rem;
      width: 15rem;
    }
  }

  .intro {
    display: flex;
    flex-direction: column;

    .diploma-row {
        max-width: 700px;
        width: 100%;
        display: flex;
        flex-direction: row;
        margin: 0 auto;
        margin-bottom: .5rem;
      }
      .pic {
        max-width: 13rem;
        cursor: pointer;
        width: 30%;
      }
      .info {
        text-align: left;
        padding-left: 1rem;
        width: 70%;
      }


      padding-left: 1rem;
      padding-right: 1rem;
      #course {
        font-size: 1.1rem;
      }
      .diploma-icon {
        margin-bottom: 1.6rem;
        width: 2.5rem;
        cursor: pointer;
      }
  }

  .grades {
    margin-top: .5rem;
    img {
      width: 6rem;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 700px) {
    top: 3.5rem;
    transform: translateY(0);

    .intro {
      .diploma-row {
        flex-direction: column;
        align-items: center;
      }
      .pic {
        max-width: 17rem;
        width: 100%;
        margin-bottom: .5rem;
      }
      .info {
        text-align: center;
        max-width: 20rem;
        width: 100%;
      }
    }
    h4 {
      margin-bottom: 2rem;
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
  z-index: 11150;
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

const Arrows = styled.div`
  position: absolute;
  margin: 0 auto;
  top: 0;
  bottom: 0;
  z-index: 1000;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  /* opacity: 0.82; */
  /* display: flex; */
  display: none;
  opacity: 0;
  cursor: pointer;

  img {
    width: 2.3rem;
    height: 2.3rem;
  }
  #arrow-bottom {
    transform: scaleY(-1);
  }
  @media only screen and (min-width: 700px) {
    display: none;
  }
  `

function Education({ myRef, scrollYGlobal, scrollToPortfolio, scrollToEducation, scrollToContact }) {
  const overlayRef = useRef(null);
  const backgroundImageRef = useRef(null);
  // Beginning Effect
  const text1Ref = useRef();
  const text2Ref = useRef();
  const educationPopupRef = useRef();
  const [showBeginning, setShowBeginning] = useState(false);
  // Main
  const floatingBoxRef = useRef();
  const floatingBoxContentRef = useRef();
  const arrowsRef = useRef();
  // Modals
  const [gameDevModal, setGameDevModal] = useState(false);
  const [diplomaModal, setDiplomaModal] = useState(false);
  // const [MADDModal, setMADDModal] = useState(false);
  const [gradesModal, setGradesModal] = useState(false);

  useEffect(() => {
    const divElement = myRef.current;
    const halfwayPoint = divElement.scrollHeight / 5;
   
      if (Math.round(scrollYGlobal) == divElement.offsetTop) {
        scrollToEducation();
        OnViewed();
        if (floatingBoxContentRef.current) {
          floatingBoxContentRef.current.focus();
        }
      }
      // if (scrollYGlobal > divElement.offsetTop || scrollYGlobal < divElement.offsetTop) {
      // }
    }, [scrollYGlobal])

    const OnViewed = () => {
      if (showBeginning) return;
      setShowBeginning(true);
      gsap.to(overlayRef.current, { opacity: 1, duration: 1.5, delay: 0 });
      gsap.to(backgroundImageRef.current, { scale: 1.05, duration: 5 });
      // Text effects
      gsap.to(text1Ref.current, { opacity: 1, duration: 1.5, delay: 0 });
      gsap.to(text2Ref.current, { opacity: 1, duration: 1.5, delay: 1.25 });
      // Main
      gsap.to(floatingBoxRef.current, 
        { 
          opacity: 1, 
          duration: 1, 
          delay: 3.5,
          onStart: () => {
            floatingBoxRef.current.style.display = 'block'
          },
        });
        gsap.to(educationPopupRef.current, 
          { 
            opacity: 0, 
            duration: 1, 
            delay: 3.5,
            onComplete: () => { 
              educationPopupRef.current.style.display = 'none'
          } });
          gsap.to(overlayRef.current, { opacity: 0, duration: 1, delay: 3.5 });
          gsap.to(backgroundImageRef.current, {  filter: 'blur(4px)', duration: 1, delay: 3.5 });
          gsap.to(arrowsRef.current, { 
            opacity: 0.82, 
            duration: 1, 
            delay: 3.5,
          });
          gsap.to(arrowsRef.current, {
            onComplete: () => {
              delay: 3.5,
              arrowsRef.current.style.display = "flex";
            }
          });
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

    const handleUpArrow = () => {
      scrollToPortfolio();
    }
    const handleDownArrow = () => {
      scrollToContact();
    }

  return (
    <>
    <Section ref={myRef} className='education-section main-div'>
    <Arrows ref={arrowsRef}>
        <img draggable={false} onClick={handleUpArrow} id='arrow-top' src="/img/projects/misc/short-arrow.png"/>
        <img draggable={false} onClick={handleDownArrow} id='arrow-bottom' src="/img/projects/misc/short-arrow.png"/>
      </Arrows>
      <Container>

        {diplomaModal && (
          <>
          <ModalImage>
            <img src="/img/education/madd-diploma.jpg"/>
          </ModalImage>
          <DarkBG onClick={(e) => setDiplomaModal(false)}/>
          </>
        )}
        {gameDevModal && (
          <>
          <ModalImage>
            <img src="/img/education/gamedev-grad.jpg"/>
          </ModalImage>
          <DarkBG onClick={(e) => setGameDevModal(false)}/>
          </>
        )}

        
        <div ref={overlayRef} className="overlay"></div>
        <img draggable={false} ref={backgroundImageRef} src="/img/education/algonquin-college.jpg" alt="Background Image" className="background-image" />

        <EducationPopup ref={educationPopupRef} >
          <p ref={text1Ref} style={{opacity: 0}}>My Education</p>
          
            <div className='algonquin-at-name' ref={text2Ref} style={{display: 'flex', justifyContent: 'center', 
                              alignItems: 'end', gap: '1rem',
                              opacity: 0}}>
            <p>At </p>
            <img draggable={false} src="/img/education/algonquin-college-logo.png"/>
          </div>
        </EducationPopup>

        <FloatingBox ref={floatingBoxRef}>
          <Content ref={floatingBoxContentRef}>
            <h4><img src="/img/education/algonquin-college-logo-normal.png"/></h4>
            <div className='intro'>
              {/* <div className='photos'>
                <img id="my-gamedev-diploma" draggable={false} src="/img/education/gamedev-grad.jpg" onClick={(e) => setDiplomaModal(true)}/>
              <img id="my-madd-diploma" draggable={false} src="/img/education/madd-diploma.jpg" onClick={(e) => setDiplomaModal(true)}/>
              </div> */}
                <div className='diploma-row'>
                    <img className='pic' draggable={false} src="/img/education/gamedev-grad.jpg" onClick={(e) => setGameDevModal(true)}/>
                    <div className='info'>
                      <span>Course #1</span>
                      <p id="course"><a href="https://www.algonquincollege.com/mediaanddesign/program/game-development/" target="_blank">Game Development</a> (2018-2021) <span style={{fontWeight: '900'}}>with Honours</span></p>
                      <img className="diploma-icon" src="/img/education/diploma-paper-2.png" onClick={GameDevGraduatedLink}/>
                    </div>
                </div>
                <div className='diploma-row'>
                      <img className='pic' draggable={false} src="/img/education/madd-diploma.jpg" onClick={(e) => setDiplomaModal(true)}/>
                      <div className='info'>
                      <span>Course #2</span>
                      <p id="course"><a href='https://www.algonquincollege.com/mediaanddesign/program/mobile-application-design-and-development/' target="_blank">Mobile Application Design and Development</a> (2021-2023) <span style={{fontWeight: '900'}}>with Honours</  span></p>
                      <img className="diploma-icon" src="/img/education/diploma-paper-2.png" onClick={MADDGraduatedLink}/>
                    </div>
                </div>
              </div>
            <div className='grades'>
              <p>My grades were impeccable! I literally finished <span style={{fontWeight: 900}}>every semester</span> while on the Dean's List!</p>
              <br/>
              <p style={{fontStyle: 'italic'}}>Proof I had amazing grades! </p>
              <img src="/img/education/view-grades-icon.png" onClick={(e) => GradesLink()}/>
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
