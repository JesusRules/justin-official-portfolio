import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    position: relative;
    background-color: #dff8e3;
    height: 100vh;
    scroll-snap-align: start;
`

/* HERO LAYERS */
const Sky = styled.img`
    object-fit: cover;
    position: absolute;
    width: 1920px;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: red;
    z-index: 1;
`
  
const Dove = styled.img`
    position: absolute;
    width: 126px;
    top: calc(50% - 230px);
    left: calc(50% - 676px);
    /* top: 100px; */
    z-index: 2;
    transform: translate(-50%, -50%);
`
  
const CloudMain_Back = styled.img`
    position: absolute;
    width: 1700px;
    top: calc(50% + 271px);
    left: calc(50% - 0px);
    /* top: 100px; */
    /* background-color: blue; */
    z-index: 3;
    transform: translate(-50%, -50%);
`
  
const CloudMain_Front = styled.img`
    position: absolute;
    width: 1460px;
    top: calc(50% + 286px);
    left: calc(50% - 0px);
    /* top: 100px; */
    /* background-color: red;  */
    z-index: 4;
    transform: translate(-50%, -50%);
`
  
const CloudBG_4 = styled.img`
    position: absolute;
    width: 190px;
    top: calc(50% - 99px);
    left: calc(50% - 536px);
    /* top: 100px; */
    z-index: 5;
    transform: translate(-50%, -50%);
`
  
const CloudBG_3 = styled.img`
    position: absolute;
    width: 250px;
    top: calc(50% - 250px);
    left: calc(50% - 150px);
    /* top: 100px; */
    z-index: 6;
    transform: translate(-50%, -50%);
`
  
const CloudBG_2 = styled.img`
    position: absolute;
    width: 185px;
    top: calc(50% - 225px);
    left: calc(50% + 530px);
    /* top: 100px; */
    z-index: 7;
    transform: translate(-50%, -50%);
`
  
const CloudBG_1 = styled.img`
    position: absolute;
    width: 380px;
    top: calc(50% - 125px);
    left: calc(50% - 950px);
    /* top: 100px; */
    z-index: 8;
    transform: translate(-50%, -50%);
`
  
const JesusFlag = styled.img`
    position: absolute;
    width: 144px;
    top: calc(50% + 100px);
    left: calc(50% - 345px);
    /* top: 100px; */
    z-index: 9;
    transform: translate(-50%, -50%);
`
  
const Pipe = styled.img`
    position: absolute;
    width: 151px;
    top: calc(50% + 140px);
    left: calc(50% + 460px);
    /* top: 100px; */
    z-index: 10;
    transform: translate(-50%, -50%);
`
  
const Haunter = styled.img`
    position: absolute;
    width: 206px;
    top: calc(50% - 110px);
    left: calc(50% - 509px);
    /* top: 100px; */
    z-index: 11;
    transform: translate(-50%, -50%);
`
  
const Boo = styled.img`
    position: absolute;
    width: 129px;
    top: calc(50% - 122px);
    left: calc(50% + 586px);
    /* top: 100px; */
    z-index: 12;
    transform: translate(-50%, -50%);
`
  
const Bernard_Txt = styled.img`
    position: absolute;
    width: 730px;
    top: calc(50% - 70px);
    left: calc(50% + 0px);
    /* top: 100px; */
    z-index: 13;
    transform: translate(-50%, -50%);
    @media only screen and (max-width: 700px) {
        width: 530px;
        top: calc(50% - 118px);
    }
`
  
const Justin_Txt = styled.img`
    position: absolute;
    width: 730px;
    top: calc(50% - 223px);
    left: calc(50% + 0px);
    /* top: 100px; */
    z-index: 14;
    transform: translate(-50%, -50%);
    @media only screen and (max-width: 700px) {
        top: calc(50% - 233px);
        width: 530px;
    }
`
  
const HelloKitty = styled.img`
    position: absolute;
    width: 147px;
    top: calc(50% + 150px);
    left: calc(50% - 512px);
    /* top: 100px; */
    z-index: 15;
    transform: translate(-50%, -50%);
`
  
const Toad = styled.img`
    position: absolute;
    width: 149px;
    top: calc(50% + 180px);
    left: calc(50% + 400px);
    /* top: 100px; */
    z-index: 16;
    transform: translate(-50%, -50%);
`
  
const Kart = styled.img`
    position: absolute;
    width: 298px;
    top: calc(50% + 218px);
    left: calc(50% - 437px);
    /* top: 100px; */
    z-index: 17;
    transform: translate(-50%, -50%);
`
  
const Joy = styled.img`
    position: absolute;
    width: 149px;
    top: calc(50% + 232px);
    left: calc(50% + 308px);
    /* top: 100px; */
    z-index: 18;
    transform: translate(-50%, -50%);
`
  
const Pikachu = styled.img`
    position: absolute;
    width: 180px;
    top: calc(50% + 235px);
    left: calc(50% - 286px);
    /* top: 100px; */
    z-index: 19;
    transform: translate(-50%, -50%);
`
  
const Mario = styled.img`
    position: absolute;
    width: 180px;
    top: calc(50% + 255px);
    left: calc(50% - 182px);
    /* top: 100px; */
    z-index: 20;
    transform: translate(-50%, -50%);
    @media only screen and (max-width: 700px) {
    }
`
  
const MiniJesus = styled.img`
    position: absolute;
    width: 233px;
    top: calc(50% + 170px);
    left: calc(50% + 200px);
    /* top: 100px; */
    z-index: 21;
    transform: translate(-50%, -50%);
    @media only screen and (max-width: 700px) {
    }
`
  
const Justin = styled.img`
    position: absolute;
    width: 253px;
    top: calc(50% + 170px);
    left: calc(50% + 0px);
    /* top: 100px; */
    z-index: 22;
    transform: translate(-50%, -50%);
`    

const HeroText = styled.h1`
    width: 100%;
    text-align: center;
    position: absolute;
    color: #520000;
    z-index: 1000;
    font-size: 33px;
    font-family: "myriad-pro", sans-serif;
    font-weight: 700;
    font-style: normal;
    top: 9rem;
    @media only screen and (max-width: 700px) {
        font-size: 28px;
    }
`

const Vignette = styled.div`
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0) 65%, rgba(255, 255, 255, 0.7));
    pointer-events: none;
}
`

function Hero() {
  return (
    <Container>

      {/* <img src="/img/Sky.png" className='parallax bg-img'/>
      <img src="/img/Dove.png" className='parallax dove'/>

      <img src="/img/CloudMain-Back.png" className='parallax cloud-main-back'/>
      <img src="/img/CloudMain-Front.png" className='parallax cloud-main-front'/>

      <img src="/img/CloudBG-4.png" className='parallax cloud-bg-4'/>
      <img src="/img/CloudBG-3.png" className='parallax cloud-bg-3'/>
      <img src="/img/CloudBG-2.png" className='parallax cloud-bg-2'/>
      <img src="/img/CloudBG-1.png" className='parallax cloud-bg-1'/>

      <img src="/img/JesusFlag.png" className='parallax jesus-flag'/>
      <img src="/img/Pipe.png" className='parallax pipe'/>
      <img src="/img/Haunter.png" className='parallax haunter'/>
      <img src="/img/Boo.png" className='parallax boo'/>
      <img src="/img/Bernard-Text.png" className='parallax bernard-txt'/>
      <img src="/img/Justin-Text.png" className='parallax justin-txt'/>
      <img src="/img/HelloKitty.png" className='parallax hello-kitty'/>
      <img src="/img/Toad.png" className='parallax toad'/>
      <img src="/img/Kart.png" className='parallax kart'/>
      <img src="/img/Joy.png" className='parallax joy'/>
      <img src="/img/Pikachu.png" className='parallax pikachu'/>
      <img src="/img/Mario.png" className='parallax mario'/>
      <img src="/img/MiniJesus.png" className='parallax mini-jesus'/>
      <img src="/img/Justin.png" className='parallax justin'/> */}

      {/* <Vignette /> */}

      <Sky src="/img/Sky.png" className='parallax bg-img'/>
      <Dove src="/img/Dove.png" className='parallax dove'/>
      {/* Cloud Main */}
      <CloudMain_Back src="/img/CloudMain-Back.png" className='parallax cloud-main-back'/>
      <CloudMain_Front src="/img/CloudMain-Front.png" className='parallax cloud-main-front'/>
      {/* Cloud Backgrounds */}
      <CloudBG_4 src="/img/CloudBG-4.png" className='parallax cloud-bg-4'/>
      <CloudBG_3 src="/img/CloudBG-3.png" className='parallax cloud-bg-3'/>
      <CloudBG_2 src="/img/CloudBG-2.png" className='parallax cloud-bg-2'/>
      <CloudBG_1 src="/img/CloudBG-1.png" className='parallax cloud-bg-1'/>
        {/* Items/Characters */}
      <JesusFlag src="/img/JesusFlag.png" className='parallax jesus-flag'/>
      <Pipe src="/img/Pipe.png" className='parallax pipe'/>
      <Haunter src="/img/Haunter.png" className='parallax haunter'/>
      <Boo src="/img/Boo.png" className='parallax boo'/>
      <Bernard_Txt src="/img/Bernard-Text.png" className='parallax bernard-txt'/>
      <Justin_Txt src="/img/Justin-Text.png" className='parallax justin-txt'/>
      <HelloKitty src="/img/HelloKitty.png" className='parallax hello-kitty'/>
      <Toad src="/img/Toad.png" className='parallax toad'/>
      <Kart src="/img/Kart.png" className='parallax kart'/>
      <Joy src="/img/Joy.png" className='parallax joy'/>
      <Pikachu src="/img/Pikachu.png" className='parallax pikachu'/>
      <Mario src="/img/Mario.png" className='parallax mario'/>
      <MiniJesus src="/img/MiniJesus.png" className='parallax mini-jesus'/>
      <Justin src="/img/Justin.png" className='parallax justin'/>

      <HeroText>Passionate. Professional. Reliable.</HeroText>

    </Container>
  )
}

export default Hero
