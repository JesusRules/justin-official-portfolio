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

const BackgroundDiv = styled.div`
  background-image: url('/img/projects/live-performances/seamless-sand-texture.jpg');
  background-repeat: repeat;
  background-size: 330px 330px; 
  background-position: center center;
  background-color: #fff;
  background-attachment: fixed;
`
const ContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 13rem;

  .title {
    display: flex;
    margin: 0 auto;
    text-align: center;

    height: 5rem;
    padding: 0.5rem;
  }
`;


const TopLightsDiv = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  `
const TopLights = styled.img`
    width: 100%;
    min-width: 50rem;
    margin-bottom: 1rem;
`;

const TopBanner = styled.img`
  cursor: pointer;
  width: 92%;
  max-width: 41rem;
  left: 50%;
  position: relative;
  transform: translateX(-50%);
`

const BlackDivider = styled.img`
  width: 92%;
  max-width: 70rem;
  height: 1.25rem;
  /* min-width: 42rem; */
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: .5rem;
  margin-bottom: .5rem;
`

const IntroDiv = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 820px;
  margin: 2.5rem auto 4.5rem auto;
  #intro-content {
    gap: .75rem;
    padding-left: .9rem;
    display: flex;
    flex-direction: column;
    p {
      font-size: 1.05rem;
    }
  }
  #band-pic {
    width: 24rem;
  }

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    #intro-content {
      margin-top: 1rem;
      text-align: center;
    }
    #band-pic {
      width: 100%;
      align-self: center;
      max-width: 25rem;
    }
  }
`
const YearSign = styled.img`
  position: absolute; 
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 12.2rem;
  transform: translateY(-1rem);
`

const YearlyDiv = styled.div` 
  margin-top: 5rem;
`
const AllPerformancesDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`
const PerformanceDiv = styled.div`
  margin: 1.7rem 0 1.5rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  p {
    font-style: italic;
    font-size: 1.5rem;
    font-weight: 600;
  }
  span {
    font-weight: 700;
  }
  .live-link {
    margin-top: .5rem;
    font-size: 1.2rem;
  }
` 

const VideoDiv = styled.div`
  width: 100%;
  `
const VideoDiv2 = styled.div`
  position: relative;
  padding-top: 0rem;
  padding-bottom: 22rem;
  height: 0;
  overflow: hidden;
  @media only screen and (max-width: 700px) {
    padding-bottom: 58%;
    /* padding-bottom: 50.5%; */
  }
`
const Video = styled.iframe`
box-shadow: 6px 6px 10px rgba(0,0,0,.7);
  width: 100%;
  object-fit: cover;
  max-width: 39rem;
  height: 100%;
  /* max-height: 20rem; */
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: .3rem auto 0rem auto;
  border: 0;

  //VIDEO
  * {
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
  body,
  html {
    height: 100%;
  }
  img,
  svg {
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  svg {
    filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));
    transition: all 250ms ease-in-out;
  }
  body:hover svg {
    filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));
    transform: scale(1.2);
  }
`

const BottomBanner = styled.img`
  position: absolute;
  width: 100%;
  height: 15rem;
  object-fit: cover;
  opacity: 40%;
  transform: translateY(-2rem);
`

const images = [
  '/img/projects/pokithedog/preview-1.jpg',
  '/img/projects/pokithedog/preview-2.jpg',
  '/img/projects/pokithedog/preview-3.jpg',
  '/img/projects/pokithedog/preview-4.jpg',
  '/img/projects/pokithedog/preview-5.jpg',
  '/img/projects/pokithedog/preview-6.jpg',
];

function LivePerformances({ openModal, setOpenModal, hideVideos }) {
  const [hideMe, setHideMe] = useState(false);

  useEffect(() => {
    if (openModal) {
      setHideMe(false);
    }
    if (!openModal) {
      setHideMe(true);
    }
  }, [openModal])

  const handleUrl = () => {
    window.open('https://pokithedog.com/', '_blank');
  }
  const handleRBCWebsite = () => {
    window.open('https://ottawabluesfest.ca/', '_blank');
  }

    return (
      <>
      <BackgroundDiv>
      
      <ContentContainer>
      <CloseButton setOpenModal={setOpenModal} />

      <div style={{zIndex: 1}}>
        <TopLightsDiv>
        <TopLights draggable={false} src="/img/projects/live-performances/lights-1.jpg"/>
        </TopLightsDiv>
        <TopBanner onClick={handleRBCWebsite} draggable={false} src="/img/projects/live-performances/bluesfest-banner.png"/>
        
        <BlackDivider draggable={false} src="/img/projects/live-performances/black-divider.png" />

        <IntroDiv>
          <img id="band-pic" src="/img/projects/live-performances/slothpit_beintheband.jpg"/>
          <div id="intro-content">
            <p>Hey guys! Welcome to the live performances' section of the website!</p>
            <p>I was in the <span style={{fontWeight: 900}}>Be In The Band</span> program at the Royal Ottawa for 5 years!</p>
            <p>I played drums, bass and guitar with different kinds of genres/bands!</p>
          </div>
        </IntroDiv>


        {!hideVideos && (
          <>
        {/* 2015 */}
        <YearlyDiv>
        <BlackDivider draggable={false} src="/img/projects/live-performances/black-divider.png" />
        <YearSign draggable={false} src="/img/projects/live-performances/2015.png"/>
        <AllPerformancesDiv>
          
          <PerformanceDiv>
            <p>Let Us Be Free - <span style={{fontWeight: 800}}>Sloth Pit</span></p>
            <span>Genre: <u>Metal</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Instrument: <u>Drums</u></span>
            <VideoDiv>
              <VideoDiv2>
                <Video src="https://www.youtube.com/embed/w9kPjBpEOJg?si=K6H9GwqYZisNLDdw" srcDoc='
                <style>*{padding:0;margin:0;overflow:hidden;}body,html{height:100%;}img,svg{position:absolute;width:100%;top:0;bottom:0;margin:auto;}svg{filter:drop-shadow(1px 1px 10px hsl(206.5,70.7%,8%));transition:all 250ms ease-in-out;}body:hover svg{filter:drop-shadow(1px 1px 10px hsl(206.5,0%,10%));transform:scale(1.2);}</style>
                <a href="https://www.youtube.com/embed/w9kPjBpEOJg?si=K6H9GwqYZisNLDdw?autoplay=1">
                    <img src="https://i.ytimg.com/vi/w9kPjBpEOJg/sddefault.jpg" alt="Performance Video"/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                </a>
                '
                loading="lazy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Video>
              </VideoDiv2>
            </VideoDiv>
          </PerformanceDiv>
          <PerformanceDiv>
            <p>No Name - <span style={{fontWeight: 800}}>Sloth Pit</span></p>
            <span>Genre: <u>Metal</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Instrument: <u>Drums</u></span>
            <VideoDiv>
              <VideoDiv2>
                <Video src="https://www.youtube.com/embed/P36Jz9kpBM8?si=j21P7XD7sOZSHqmP" srcDoc='
                <style>*{padding:0;margin:0;overflow:hidden;}body,html{height:100%;}img,svg{position:absolute;width:100%;top:0;bottom:0;margin:auto;}svg{filter:drop-shadow(1px 1px 10px hsl(206.5,70.7%,8%));transition:all 250ms ease-in-out;}body:hover svg{filter:drop-shadow(1px 1px 10px hsl(206.5,0%,10%));transform:scale(1.2);}</style>
                <a href="https://www.youtube.com/embed/P36Jz9kpBM8?si=j21P7XD7sOZSHqmP?autoplay=1">
                    <img src="https://i.ytimg.com/vi/P36Jz9kpBM8/sddefault.jpg" alt="Performance Video"/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                </a>
                '
                loading="lazy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Video>
              </VideoDiv2>
            </VideoDiv>
            </PerformanceDiv>
          </AllPerformancesDiv>
        </YearlyDiv>

        {/* 2016 */}
        <YearlyDiv>
        <BlackDivider draggable={false} src="/img/projects/live-performances/black-divider.png" />
        <YearSign draggable={false} src="/img/projects/live-performances/2016.png"/>
        <AllPerformancesDiv>
          
          <PerformanceDiv>
            <p>First Song - <span style={{fontWeight: 800}}>Mad Hatters</span> (Short)</p>
            <span>Genre: <u>R&B/Soul</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Instrument: <u>Drums</u></span>
            <Video src="https://www.youtube.com/embed/f5CH-R-8M1U?si=WSP7_RpBuj1mkZgk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Video>
          </PerformanceDiv>
          <PerformanceDiv>
            <p>Second Song - <span style={{fontWeight: 800}}>Mad Hatters</span></p>
            <span>Genre: <u>R&B/Soul</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Instrument: <u>Drums</u></span>
            <Video src="https://www.youtube.com/embed/zvoFlvVrsiI?si=S7wx3h6uHcCVwiAK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Video>
            <a className="live-link" href="https://www.youtube.com/watch?v=Zt55Sfzin2Q" target='_blank' >Click Here For Live Version</a>
            </PerformanceDiv>
          </AllPerformancesDiv>
        </YearlyDiv>

        {/* 2017 */}
        <YearlyDiv>
        <BlackDivider draggable={false} src="/img/projects/live-performances/black-divider.png" />
        <YearSign draggable={false} src="/img/projects/live-performances/2017.png"/>
        
        <AllPerformancesDiv>
          <PerformanceDiv>
            <p>Go Back Home - <span style={{fontWeight: 800}}>Twisted Melody</span></p>
            <span>Genre: <u>Pop</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Instrument: <u>Drums</u></span>
            <Video src="https://www.youtube.com/embed/4Mevkyoo9pM?si=tm57F47zcDQv-sG1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Video>
          </PerformanceDiv>
          <PerformanceDiv>
            <p>Naive - <span style={{fontWeight: 800}}>Twisted Melody</span></p>
            <span>Genre: <u>Pop</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Instrument: <u>Drums</u></span>
            <Video src="https://www.youtube.com/embed/iZ2Q6aYx1QY?si=eMigZ8y-ABPsUPA1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Video>
            </PerformanceDiv>
          <PerformanceDiv>
            <p>Boom! - <span style={{fontWeight: 800}}>Sloth Pit</span></p>
            <span>Genre: <u>Metal</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Instrument: <u>Drums</u></span>
            <Video src="https://www.youtube.com/embed/SPd_UEvyVN8?si=nryT_ZGpa-BGLZso" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Video>
          </PerformanceDiv>
          <PerformanceDiv>
            <p>Outdated - <span style={{fontWeight: 800}}>Sloth Pit</span></p>
            <span>Genre: <u>Metal</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Instrument: <u>Drums</u></span>
            <Video src="https://www.youtube.com/embed/5vqaAoi93lQ?si=mCmzm8kVPUewi1gJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Video>
            </PerformanceDiv>
        
          </AllPerformancesDiv>
        </YearlyDiv>

         {/* 2018 */}
         <YearlyDiv>
        <BlackDivider draggable={false} src="/img/projects/live-performances/black-divider.png" />
        <YearSign draggable={false} src="/img/projects/live-performances/2018.png"/>
        <AllPerformancesDiv>
          <PerformanceDiv>
            <p>Jealous - <span style={{fontWeight: 800}}>Twisted Melody</span></p>
            <span>Genre: <u>R&B/Soul</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Instrument: <u>Bass</u></span>
            <Video src="https://www.youtube.com/embed/QPNrOZV8-e4?si=OBIaQqA_CQmf47Gt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Video>
          </PerformanceDiv>
          <PerformanceDiv>
            <p>Falling - <span style={{fontWeight: 800}}>Twisted Melody</span></p>
            <span>Genre: <u>R&B/Soul</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Instrument: <u>Bass</u></span>
            <Video src="https://www.youtube.com/embed/bkyfuWmI5_U?si=Jx6uNdlSBCSwnolf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Video>
            <a className="live-link" href="https://www.youtube.com/watch?v=TsiXBx53fl0" target='_blank' >Click Here For Studio Version</a>
            </PerformanceDiv>
          </AllPerformancesDiv>
        </YearlyDiv>

        {/* 2019 */}
        <YearlyDiv>
        <BlackDivider draggable={false} src="/img/projects/live-performances/black-divider.png" />
        <YearSign draggable={false} src="/img/projects/live-performances/2019.png"/>
        <AllPerformancesDiv>
          <PerformanceDiv>
            <p>Like A Fool - <span style={{fontWeight: 800}}>Stretch</span></p>
            <span>Genre: <u>R&B/Soul</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Instrument: <u>Guitar</u></span>
            <Video src="https://www.youtube.com/embed/HGJKOKpqIj8?si=SqWhwVV_79web7fD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Video>
          </PerformanceDiv>
          <PerformanceDiv>
            <p>Scam On My Heart - <span style={{fontWeight: 800}}>Stretch</span></p>
            <span>Genre: <u>R&B/Soul</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Instrument: <u>Guitar (Solo 2:27)</u></span>
            <Video src="https://www.youtube.com/embed/5-tLjHBw2UU?si=ZXOS5BFmbVaCijgU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Video>
            </PerformanceDiv>
          <PerformanceDiv>
            <p>This Is Goodbye - <span style={{fontWeight: 800}}>Twisted Melody</span></p>
            <span>Genre: <u>R&B/Soul</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Instrument: <u>Guitar</u></span>
            <Video src="https://www.youtube.com/embed/kt634X93R1A?si=0F-LwZR9Wa4hzCcT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Video>
            </PerformanceDiv>
          <PerformanceDiv>
            <p>Done - <span style={{fontWeight: 800}}>Twisted Melody</span></p>
            <span>Genre: <u>Pop</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Instrument: <u>Guitar</u></span>
            <Video src="https://www.youtube.com/embed/e-AmVA-pHZk?si=RMEomPBjc9eQs7yf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Video>
            </PerformanceDiv>
          <PerformanceDiv>
            <p>Song 1 - <span style={{fontWeight: 800}}>Brass Knuckles</span></p>
            <span>Genre: <u>Orchestra</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Instrument: <u>Drums</u></span>
            <Video src="https://www.youtube.com/embed/P3XMQiHZaHs?si=ZA3NYPETuxzYH3mi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Video>
            </PerformanceDiv>
          <PerformanceDiv>
            <p>Song 2 - <span style={{fontWeight: 800}}>Brass Knuckles</span></p>
            <span>Genre: <u>Orchestra Funk</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Instrument: <u>Drums</u></span>
            <Video src="https://www.youtube.com/embed/rgeG897chKI?si=Ff06RrVNAhNjI5kf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Video>
            </PerformanceDiv>
          </AllPerformancesDiv>
        </YearlyDiv>
        </>
        )}
        
        <BottomBanner src='/img/projects/live-performances/drummer.jpg'/>

        {/* METHOD 3 */}
        {/* <HorizontalImageLoopProjects _images={images} _isReversed={false} openModal={openModal} _uniqueClassName={"images4"} /> */}

      {/* METHOD 2 */}
        {/* <BackgroundBanner imageUrl="/img/projects/pokithedog/pokithedog-2.png">
        </BackgroundBanner> */}

      {/* METHOD 1 */}
        {/* <div className='swiper_container1'>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={'4'}
        coverflowEffect={{
          rotate: 0,
          stretch: -55,
          depth: 130,
          modifier: 6, //2.5
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.arrow-projects-right',
          prevEl: '.arrow-projects-left',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container2"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <iframe src="https://www.youtube.com/embed/gD_hHXYEsxc?si=TaAz-pDpn8OzYUf2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <div className="slider-controler">
              <div className="swiper-pagination"></div>
          </div>
      </Swiper>
      <div className='arrows'>
        <div className='arrow-projects-left'>
          <img src="/img/projects/misc/left-arrow.png" />
        </div>
        <div className='arrow-projects-right' >
          <img src="/img/projects/misc/right-arrow.png" />
        </div>
      </div>
      </div> */}

        {/* <div style={{textAlign: 'center', margin: '1rem'}}>
            <h4 style={{fontWeight: 800, marginBottom: '.26rem'}}>Try it out!</h4>
            <div style={{display: 'flex', alignItems: 'start', gap: '0.2rem', justifyContent: 'center'}}>
              <img onClick={(e) => handleUrl()} style={{width: '28%', maxWidth: '170px', cursor: 'pointer'}} src="/img/projects/misc/web-link.png"/>
            </div>
        </div> */}

      {/* <div style={{padding: '0 1rem', textAlign: 'center', fontStyle: 'italic', marginTop: '1.35rem'}}>
            <p>This website was designed to practice and promote my development abilities!</p>
            <p>It features some early games I've designed!</p>
      </div> */}
      </div>

      <div >
        {/* <img style={{display: 'flex', padding: '1.5rem', width: '260px', margin: 'auto auto'}} src="img/projects/pokithedog/pokithedog-logo.png"/> */}
      </div>

      {/* <p className='bottom-madewith' style={{textAlign: 'left', color: 'blue', padding: '1rem', fontStyle: 'italic', fontWeight: 400}}>Project was made using vanilla <b>JavaScript, CSS and HTML.</b></p> */}
      </ContentContainer>
      </BackgroundDiv>
      </>
    )
}

export default LivePerformances;