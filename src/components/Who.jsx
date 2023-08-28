import React from 'react'
import { styled } from 'styled-components'
import downloadSvg from '../../public/svg/download-solid.svg';
import { JustinHead } from './threejsscripts/JustinHead';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei';

const Section = styled.div`
    background-color: lightblue;
    height: 100vh;
    scroll-snap-align: start;
    display: flex;
    justify-content: center;
`

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  position: relative;
  
`

const Left = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  /* @media only screen and (max-width: 768px) {
    display: none;
  } */
`
const Right = styled.div`
  /* flex: 4; */
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  pointer-events: none;

  //-webkit-user-select: none; /* Safari */
  //-ms-user-select: none; /* IE 10 and IE 11 */
  //user-select: none; /* Standard syntax */

  /* @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
} */
`


const ResumeButton = styled.a`
      margin-top: 1rem;
      color: #fff;
      text-transform: uppercase;
      pointer-events:  auto;
      
      .btn-resume{
        display: inline-block;
        font-size: 1.1em;
        padding: 20px;
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

function Who({ myRef }) {
  return (
    <Section ref={myRef}>
      <Container>
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
                
                <Html style={{width: '100vw'}}>
                <Right className='about-me'>
                  <h1>About Me</h1>
                  <h2>There's nothing I can't do!</h2>
                  <p>Communicative, strong, and resilient are some of the many keywords that can be used to describe me. I love to learn, I love culture, and I love life! I believe that the things that are most difficult are the things most worth doing in life! I want to travel the world and experience life to the fullest! Leave me a message, I'm always happy to meet new people!</p>
                  
                  <p style={{marginTop: '1rem', fontStyle: 'italic'}}>Add me on social media! I'm always on Facebook  <span>🥰🙏🙌</span></p>
                  
                  <div className='social-media-icons' style={{display: 'flex', gap: '.6rem', pointerEvents: 'auto'}}>
                    <a href="https://www.facebook.com/justin.bernard320"><img src="/svg/facebook.svg"/></a>
                    <a href="https://www.youtube.com/channel/UCx8Il9AsAJZnIs9BwXY_M7g"><img src="/svg/youtube.svg"/></a>
                    <a href="https://github.com/bern0241"><img src="/svg/github.svg"/></a>
                    <a href="https://www.linkedin.com/in/justin-bernard32/"><img src="/svg/linkedin.svg"/></a>
                    <a href="https://www.instagram.com/justin.bernard320/"><img src="/svg/instagram.svg"/></a>
                  </div>

                <ResumeButton href="/justin-bernard-resume.docx" target="_blank">
                  <div class="btn-resume">
                    <img src={downloadSvg} alt="Logo" />
                    <span>Download my resume</span>
                  </div>
                </ResumeButton>
                </Right>
                </Html>
            </Canvas>
        
      </Container>


    </Section>
  )
}

export default Who
