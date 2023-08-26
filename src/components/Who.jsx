import React from 'react'
import { styled } from 'styled-components'
import downloadSvg from '../../public/svg/download-solid.svg';
import { JustinHead } from './threejsscripts/JustinHead';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';

const Section = styled.div`
    background-color: lightblue;
    height: 100vh;
    scroll-snap-align: start;
    display: flex;
    justify-content: center;
`

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
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
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  /* @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
} */
`


const ResumeButton = styled.a`
      color: #fff;
      text-transform: uppercase;
      
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
        }
        
        img{
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
        <Left>
            <Canvas camera={{fov: 25, position: [0, 0, 5]}}>
                <JustinHead />
                {/* <OrbitControls enablePan={false} autoRotate enableZoom={false} /> */}
                <ambientLight intensity={1}/>
                <directionalLight position={[1, 2, 3]} />
            </Canvas>
        </Left>
        
        <Right className='about-me'>
          <h1>About Me</h1>
          <h2>There's nothing I can't do!</h2>
          <p>Communicative, strong, and resilient are some of the many keywords that can be used to describe me. I love to learn, I love culture, and I love life! I believe that the things that are most difficult are the things most worth doing in life! I want to travel the world and experience life to the fullest! Leave me a message, I'm always happy to meet new people!</p>
          <p style={{marginTop: '1rem', fontStyle: 'italic'}}>Add me on social media! I'm always on Facebook  <span>🥰🙏🙌</span></p>
          <div style={{display: 'flex', gap: '.6rem'}}>
            <a href="https://www.facebook.com/justin.bernard320"><img src="/svg/facebook.svg"/></a>
            <a href="https://www.youtube.com/channel/UCx8Il9AsAJZnIs9BwXY_M7g"><img src="/svg/youtube.svg"/></a>
            <a href="https://github.com/bern0241"><img src="/svg/github.svg"/></a>
            <a href="https://www.linkedin.com/in/justin-bernard32/"><img src="/svg/linkedin.svg"/></a>
            <a href="https://www.instagram.com/justin.bernard320/"><img src="/svg/instagram.svg"/></a>
          </div>
        </Right>
      </Container>

        {/* <ResumeButton href="#" target="_blank">
          <div class="btn-resume">
            <img src={downloadSvg} alt="Logo" />
            <span>Download my resume</span>
          </div>
        </ResumeButton> */}

    </Section>
  )
}

export default Who
