import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import downloadSvg from "/svg/download-solid.svg?url";
import { JustinHead } from './threejsscripts/JustinHead';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html, Environment } from '@react-three/drei';
import PikaRun from './threejsscripts/PikaRun';

const Section = styled.div`
    background-color: lightblue;
    height: 100vh;
    scroll-snap-align: start;
    display: flex;
    justify-content: center;
    background-image: linear-gradient(rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 0.6)),
                  url("/img/hero-banner/blue-sky-2.jpg");
    /* background-image: url("/img/hero-banner/blue-sky-2.jpg"); */
    background-repeat: no-repeat;
    background-size: cover;
`

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  position: relative;
  
`

const LeftMobile = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: auto;
  top: 40.5%; //45
  /* top: 55%; */
  bottom: 0;
  @media only screen and (min-width: 700px) {
      display: none;
    }
`;

const Left = styled.div`
  flex: 1;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 100%;
  /* left: -17rem; */
  left: -14.75rem;
  @media only screen and (max-width: 925px) {
    left: -12rem;
  }
  @media only screen and (max-width: 700px) {
    display: none;
  }
`

const Right = styled.div`
  flex: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px; //20
  pointer-events: none;
  z-index: 10;

  width:50vw;
  max-width: 33rem;
  left: 50%;

  h1 {
    display: inline-block;
    color: transparent;
    background-image: linear-gradient(180deg, #4a6bff, #020bac);
    -webkit-background-clip: text;
    background-clip: text;
    font-weight: 800;
    /* font-size: 2.2rem; */
    font-size: 1.8rem;
  }
  h2 {
    /* font-size: 1.6rem; */
    font-size: 1.4rem;
    font-weight: 700;
    padding-right: 1rem;
  }
  p {
    font-size: .95rem;
    padding-right: 1rem;
  }
  .social-media-icons img {
    width: 2.5rem;
  }
  

  @media only screen and (max-width: 700px) {
    margin: auto;
    text-align: center;
    width: 95vw;
    left: 0;
    right: 0;
    top: 240px; //290
    bottom: 50%;
    gap: 8px;
    h1 {
      font-size: 1.8rem;
    }
    h2 {
      padding: .5rem;
      font-size: 1.4rem;
    }
    p {
      padding: .5rem;
    }
    .social-media-icons {
      justify-content: center;
    }
  }

`

const CrucifixDiv = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 950px;
  /* background-color: green; */
`
const CrucifixImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto 0;
  @media only screen and (max-width: 700px) {
    right: -2.8rem;
  }
`


const ResumeButton = styled.a`
      margin-top: 1rem;
      color: #fff;
      text-transform: uppercase;
      pointer-events:  auto;
      
      .btn-resume{
        display: inline-block;
        font-size: 1rem;
        padding: 18px; //20
        background: #4d4d4d;
        position:relative;
        border:2px solid #fff;
        border-radius: 5px;
        overflow: hidden;
        
        span{
          -webkit-transition: opacity 1.2s;
          -moz-transition: opacity 1.2s;
          transition: opacity 1.2s;
          border-width: 0px;
        }
        
        img {
          margin: 0 auto;
          fill:white;
          position:absolute;
          padding: 20px 0;
          top:-80px;
          width:35px;
          left:0;
          right: 0;
          -webkit-transition: top .5s;
          -moz-transition: top .5s;
          transition: top .5s;
        }
        
        &:hover {
          span{
            opacity: 0;
            -webkit-transition: opacity .4s;
            -moz-transition: opacity .4s;
            transition: opacity .4s;
          }
          img {
            top:-10px;
          }
        }
      }
`

function Who({ myRef, scrollYGlobal, scrollToWho, setRefReached }) {
  useEffect(() => {
    const divElement = myRef.current;
    if (Math.round(scrollYGlobal) == divElement.offsetTop) {
        scrollToWho();
        setRefReached(true);
    }
    // if (Math.round(scrollYGlobal) > divElement.offsetTop || Math.round(scrollYGlobal) < divElement.offsetTop) {
    //     console.log("OFF")
    // }
}, [scrollYGlobal])

  return (
    <Section ref={myRef} className='main-div' id='div2'>
      <Container>
        
        {/* <CrucifixDiv>
          <CrucifixImage style={{filter: 'blur(8px)'}} src="/img/jesus-effect/image-1-short.png"/>
        </CrucifixDiv> */}

        <Left>
            <Canvas camera={{fov: 25, position: [0, 0, 6]}}>
                <JustinHead />
                <OrbitControls
                  enableRotate={false}
                  enablePan={false} // Disable panning for vertical movement only
                  enableZoom={false} // Disable zoom to focus on shifting
                  target={[0, 0.1, 0]} // Set target point for the camera
                  minPolarAngle={Math.PI / 2} // Restrict camera movement below the horizon
                  maxPolarAngle={Math.PI} // Restrict camera movement above the horizon
                />
                <ambientLight intensity={1}/>
                <directionalLight position={[1, 2, 3]} />
            </Canvas>
          </Left>
          <LeftMobile>
          <Canvas style={{pointerEvents: 'none'}} camera={{fov: 25, position: [0, 0, 1]}}>
              <PikaRun scale={1.25}/>
              <OrbitControls autoRotate={false} enableZoom={false} enablePan={false} enableRotate={false} />
              <Environment preset="lobby"/>
                <ambientLight intensity={1} />
                <directionalLight intensity={2} position={[1, 1, -2]} />
          </Canvas>
          </LeftMobile>
            <Right className='about-me'>
              {/* <h1><span style={{color: 'black', fontWeight: 800}}>About</span> <span style={{color: 'black', fontWeight: 800}}>Me</span></h1> */}
              <h1>About Me</h1>
              <h2>I can make any system development vision come to life!</h2>
              {/* <p>Communicative, strong, and resilient! I love to learn, I love culture, and I love life! Coding is my favourite thing to do!</p> */}
              <p>I possess unwavering dedication, strong social skills and an open-minded attitude towards embracing unfamiliar ideas and processes. My creativity is a defining trait, and I exhibit a genuine enthusiasm for learning, particularly in the realm of coding.</p>
              {/* <p>I possess unwavering dedication, strong social skills and an open-minded attitude towards embracing unfamiliar ideas and processes. My creativity is a defining trait, and I exhibit a genuine enthusiasm for learning, particularly in the realm of coding. On a personal note, I cherish moments spent with my family and take pride in celebrating my indigenous and Italian heritage.</p> */}
              
              
              <div className='social-media-icons' style={{display: 'flex', gap: '.6rem', pointerEvents: 'auto'}}>
                <a target="_blank" title="Facebook" href="https://www.facebook.com/justin.bernard320"><img src="/svg/facebook.svg"/></a>
                <a target="_blank" title="YouTube" href="https://www.youtube.com/channel/UCx8Il9AsAJZnIs9BwXY_M7g"><img src="/svg/youtube.svg"/></a>
                <a target="_blank" title="GitHub" href="https://github.com/bern0241"><img src="/svg/github.svg"/></a>
                <a target="_blank" title="LinkedIn" href="https://www.linkedin.com/in/justin-bernard32/"><img src="/svg/linkedin.svg"/></a>
                <a target="_blank" title="Instagram" href="https://www.instagram.com/justin.bernard320/"><img src="/svg/instagram.svg"/></a>
              </div>

            <ResumeButton href="/justin-bernard-resume.docx" target="_blank">
              <div class="btn-resume">
                <img src={downloadSvg} alt="Logo" />
                <span>Download my resume</span>
              </div>
            </ResumeButton>
            </Right>
        
      </Container>


    </Section>
  )
}

export default Who
