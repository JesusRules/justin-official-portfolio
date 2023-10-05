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
  position: absolute;
  left: 0;
  right: 0;
  display: grid;
  margin: 0 auto;
  width: 89%;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  /* row-gap: 4rem; */
  align-items: center;
  /* grid-template-areas: 
    'one two' 
    'three four'
    'five six'
    'seven eight'
    'nine ten'
    'eleven twelve'
    'thirteen fourteen'
    'fifteen sixteen'
    'seventeen eighteen'
    'nineteen twenty'
    ; */
    /* display: none; */

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
    'seventeen'
    'nineteen'
    'twenty';

    
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
`

function MySongs({ openModal, setOpenModal, hideVideos }) {
  const projectDev = useRef();

  const handleUrl = (stringLink) => {
    window.open(stringLink, '_blank');
  }

    return (
      <ContentContainer>
      <CloseButton setOpenModal={setOpenModal} />
      <div>
        <h2>Song's I've Made</h2>

      <div style={{padding: '0 1rem', marginBottom: '2rem', textAlign: 'center', fontStyle: 'italic', marginTop: '1.35rem'}}>
            <p>Here are some song's I've produced for fun - mainly using FL Studio.</p>
      </div>

        <ProjectDiv ref={projectDev}>
          {!hideVideos && (
            <>
          <div className='grid-item' >
            <iframe width="100%" height="166"  frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1189297048&color=%23005bff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap',textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}><a href="https://soundcloud.com/justin-bernard" title="Justin Bernard" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Justin Bernard</a> · <a href="https://soundcloud.com/justin-bernard/hypnotic-car-song" title="Hypnotic Car Song" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Hypnotic Car Song</a></div>
          </div>
          
          <div className='grid-item' >
             <iframe width="100%" height="166" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/652328030&color=%23005bff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap',textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}><a href="https://soundcloud.com/justin-bernard" title="Justin Bernard" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Justin Bernard</a> · <a href="https://soundcloud.com/justin-bernard/sick-beat" title="Sick Beat" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Sick Beat</a></div>
          </div>

          <div className='grid-item' >
            <iframe width="100%" height="166" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1631038107&color=%23005bff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap',textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}><a href="https://soundcloud.com/justin-bernard" title="Justin Bernard" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Justin Bernard</a> · <a href="https://soundcloud.com/justin-bernard/james-song" title="James&#x27; Song" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>James&#x27; Song</a></div>
          </div>
          
          <div className='grid-item' >
            <iframe width="100%" height="166"  frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/245102461&color=%23005bff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap',textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}><a href="https://soundcloud.com/justin-bernard" title="Justin Bernard" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Justin Bernard</a> · <a href="https://soundcloud.com/justin-bernard/techno-songs" title="Techno Songs" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Techno Songs</a></div>
          </div>
          
          <div className='grid-item' >
            <iframe width="100%" height="166" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/650336603&color=%23005bff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap',textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}><a href="https://soundcloud.com/justin-bernard" title="Justin Bernard" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Justin Bernard</a> · <a href="https://soundcloud.com/justin-bernard/hit-that" title="Hit That" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Hit That</a></div>
          </div>
          
          <div className='grid-item' >
            <iframe width="100%" height="166" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/649976744&color=%23005bff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap',textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}><a href="https://soundcloud.com/justin-bernard" title="Justin Bernard" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Justin Bernard</a> · <a href="https://soundcloud.com/justin-bernard/euphoria" title="Euphoria" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Euphoria</a></div>
          </div>
          
          <div className='grid-item' >
            <iframe width="100%" height="166" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/130905024&color=%23005bff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap',textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}><a href="https://soundcloud.com/justin-bernard-7" title="Justin Bernard 7" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Justin Bernard 7</a> · <a href="https://soundcloud.com/justin-bernard-7/dubstep-tutorial" title="Dubstep Tutorial" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Dubstep Tutorial</a></div>
          </div>
          </>
          )}

        </ProjectDiv>

      </div>
      </ContentContainer>
    )
}

export default MySongs;