import React from 'react'
import { styled } from 'styled-components'
import downloadSvg from '../../public/svg/download-solid.svg';

const Container = styled.div`
    background-color: lightblue;
    height: 100vh;
    scroll-snap-align: start;
`

const ResumeButton = styled.a`
      color: #fff;
      text-transform: uppercase;
      
      .btn-resume{
        display: inline-block;
        font-size: 1.1em;
        padding: 20px;
        background: rgba(0, 0, 0, 1);
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
    <Container ref={myRef}>
        <ResumeButton href="#" target="_blank">
          <div class="btn-resume">
            <img src={downloadSvg} alt="Logo" />
            <span>Download my resume</span>
          </div>
        </ResumeButton>
    </Container>
  )
}

export default Who
