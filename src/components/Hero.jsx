import React, { useEffect } from 'react'
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
    /* width: 1920px; */
    width: 2500px;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: red;
    z-index: 1;
`
  
// const Dove = styled.img`
//     position: absolute;
//     width: 106px;
//     top: calc(50% - 230px);
//     left: calc(50% - 676px);
//     /* top: 100px; */
//     z-index: 2;
//     transform: translate(-50%, -50%);
// `
const Dove2 = styled.img`
    /* -webkit-transform: scaleX(-1); */
    position: absolute;
    width: 156px;
    top: calc(50% - 230px);
    left: calc(50% - 686px);
    /* top: 100px; */
    z-index: 2;
    transform: translate(-50%, -50%) scaleX(-1);
`
  
const CloudMain_Back = styled.img`
    position: absolute;
    width: 1700px;
    top: calc(50% + 271px);
    left: calc(50% - 0px);
    /* top: 100px; */
    /* background-color: blue; */
    z-index: 3;
`
  
const CloudMain_Front = styled.img`
    position: absolute;
    width: 1460px;
    top: calc(50% + 286px);
    left: calc(50% - 0px);
    /* top: 100px; */
    /* background-color: red;  */
    z-index: 4;
`
  
const CloudBG_4 = styled.img`
    position: absolute;
    width: 190px;
    top: calc(50% - 99px);
    left: calc(50% - 536px);
    /* top: 100px; */
    z-index: 5;
`
  
const CloudBG_3 = styled.img`
    position: absolute;
    width: 250px;
    top: calc(50% - 250px);
    left: calc(50% - 150px);
    /* top: 100px; */
    z-index: 6;
`
  
const CloudBG_2 = styled.img`
    position: absolute;
    width: 185px;
    top: calc(50% - 225px);
    left: calc(50% + 530px);
    /* top: 100px; */
    z-index: 7;
`
  
const CloudBG_1 = styled.img`
    position: absolute;
    width: 380px;
    top: calc(50% - 125px);
    left: calc(50% - 950px);
    /* top: 100px; */
    z-index: 8;
`
  
// const JesusFlag = styled.img`
//     position: absolute;
//     width: 124px;
//     top: calc(50% + 100px);
//     left: calc(50% - 335px);
//     /* top: 100px; */
//     z-index: 9;
//     transform: translate(-50%, -50%);
// `
const JesusFlag2 = styled.img`
    position: absolute;
    width: 360px;
    top: calc(50% + 102px);
    left: calc(50% - 340px);
    /* top: 100px; */
    z-index: 9;
    @media only screen and (max-width: 700px) {
        left: calc(50% - 340px + 135px);
        top: calc(50% + 102px + 10px);
    }
`
  
const Pipe = styled.img`
    position: absolute;
    width: 124px;
    top: calc(50% + 140px);
    left: calc(50% + 433px);
    /* top: 100px; */
    z-index: 10;
`
  
const Haunter = styled.img`
    position: absolute;
    width: 169px;
    top: calc(50% - 110px);
    left: calc(50% - 509px);
    /* top: 100px; */
    z-index: 11;
`
  
const Boo = styled.img`
    position: absolute;
    width: 89px;
    top: calc(50% - 122px);
    left: calc(50% + 485px);
    /* top: 100px; */
    z-index: 12;
`
  
const Bernard_Txt = styled.img`
    position: absolute;
    width: 700px;
    top: calc(50% - 65px);
    left: calc(50% + 0px);
    /* top: 100px; */
    z-index: 13;
    @media only screen and (max-width: 700px) {
        width: 530px;
        top: calc(50% - 118px);
    }
`
  
const Justin_Txt = styled.img`
    position: absolute;
    width: 700px;
    top: calc(50% - 208px);
    left: calc(50% + 0px);
    /* top: 100px; */
    z-index: 14;
    @media only screen and (max-width: 700px) {
        top: calc(50% - 233px);
        width: 530px;
    }
`
  
const HelloKitty = styled.img`
    position: absolute;
    width: 120px;
    top: calc(50% + 150px);
    left: calc(50% - 485px);
    /* top: 100px; */
    z-index: 15;
    @media only screen and (max-width: 700px) {
        left: calc(50% - 495px + 290px);
        display: none;
    }
`
  
const Toad = styled.img`
    position: absolute;
    width: 122px;
    top: calc(50% + 180px);
    left: calc(50% + 373px);
    /* top: 100px; */
    z-index: 16;
    @media only screen and (max-width: 700px) {
        left: calc(50% + 383px - 160px);
        display: none;
    }
`
  
const Kart = styled.img`
    position: absolute;
    width: 271px;
    top: calc(50% + 218px);
    left: calc(50% - 410px);
    /* top: 100px; */
    z-index: 17;
    @media only screen and (max-width: 700px) {
        left: calc(50% - 420px + 240px);
        display: none;
    }
`
  
const Joy = styled.img`
    position: absolute;
    width: 122px;
    top: calc(50% + 232px);
    left: calc(50% + 281px);
    /* top: 100px; */
    z-index: 18;
    @media only screen and (max-width: 700px) {
        left: calc(50% + 291px - 100px);
    }
`
  
const Pikachu = styled.img`
    position: absolute;
    width: 153px;
    top: calc(50% + 235px);
    left: calc(50% - 259px);
    /* top: 100px; */
    z-index: 19;
    @media only screen and (max-width: 700px) {
        left: calc(50% - 269px + 115px);
    }
`
  
const Mario = styled.img`
    position: absolute;
    width: 153px;
    top: calc(50% + 245px);
    left: calc(50% - 155px);
    /* top: 100px; */
    z-index: 20;
    @media only screen and (max-width: 700px) {
        left: calc(50% - 165px + 60px);
    }
`
  
const MiniJesus = styled.img`
    position: absolute;
    width: 206px;
    top: calc(50% + 160px);
    left: calc(50% + 173px);
    /* top: 100px; */
    z-index: 21;
    @media only screen and (max-width: 700px) {
        left: calc(50% + 183px - 55px);
    }
`
  
const Justin = styled.img`
    position: absolute;
    width: 235px;
    top: calc(50% + 157px);
    left: calc(50% + 0px);
    /* top: 100px; */
    z-index: 22;
`    

const HeroText = styled.h1`
    width: 100%;
    text-align: center;
    position: relative;
    color: #520000;
    z-index: 1000;
    font-size: 33px;
    font-family: "myriad-pro", sans-serif;
    font-weight: 700;
    font-style: normal;
    top: 10rem;
    @media only screen and (max-width: 700px) {
        top: 9rem;
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
`

function Hero() {

    const parallex_el = document.querySelectorAll(".parallax");

    let xValue = 0, yValue = 0;
    let rotateDegree = 0;

    const handleMouseMove = (event) => {
        xValue = event.clientX - innerWidth / 2;
        yValue = event.clientY - innerHeight / 2;

        rotateDegree = (xValue / (innerWidth / 2)) * 20;
        console.log(rotateDegree);

        parallex_el.forEach(el => {
            let speedx = el.dataset.speedx;
            let speedy = el.dataset.speedy;
            let speedz = el.dataset.speedz;
            let rotateSpeed = el.dataset.rotation;

            let isInLeft = parseFloat(getComputedStyle(el).left) < innerWidth / 2 ? 1 : -1;
            let zValue = (event.clientX - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

            el.style.transform = `translateX(calc(-50% + ${-xValue * speedx / 1}px)) translateY(calc(-50% + ${yValue * speedy}px)) perspective(2300px) translateZ(${zValue * speedz}px) rotateY(${rotateDegree * rotateSpeed}deg)`;
        })
    }

    useEffect(() => {
        // Add event listener when the component mounts
        document.addEventListener('mousemove', handleMouseMove);
    
        // Clean up by removing event listener when the component unmounts
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
        };
      }, []); // Empty dependency array means this effect runs once on mount
    

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

      <Sky src="/img/Sky.png" data-speedx="0.3" data-speedy="0.37" data-speedz="0" data-rotation="0" className='parallax bg-img'/>
      {/* <Dove src="/img/Dove.png" className='parallax dove'/> */}
      {/* <Dove2 src="/img/Dove.gif" className='parallax dove'/> */}
      {/* Cloud Main */}
      <CloudMain_Back src="/img/CloudMain-Back.png" data-speedx="0.15" data-speedy="0.16" data-speedz="0.125" data-rotation="0.01" className='parallax cloud-main-back'/>
      <CloudMain_Front src="/img/CloudMain-Front.png" data-speedx="0.01" data-speedy="0.097" data-speedz="0.345" data-rotation="0.082" className='parallax cloud-main-front'/>
      {/* Cloud Backgrounds */}
      <CloudBG_4 src="/img/CloudBG-4.png" data-speedx="0.287" data-speedy="0.305" data-speedz="0.03" data-rotation="0" className='parallax cloud-bg-4'/>
      <CloudBG_3 src="/img/CloudBG-3.png" data-speedx="0.285" data-speedy="0.299" data-speedz="0.045" data-rotation="0" className='parallax cloud-bg-3'/>
      <CloudBG_2 src="/img/CloudBG-2.png" data-speedx="0.271" data-speedy="0.284" data-speedz="0.033" data-rotation="0" className='parallax cloud-bg-2'/>
      <CloudBG_1 src="/img/CloudBG-1.png" data-speedx="0.282" data-speedy="0.3" data-speedz="0.041" data-rotation="0" className='parallax cloud-bg-1'/>
        {/* Items/Characters */}
      {/* <JesusFlag src="/img/JesusFlag.png" className='parallax jesus-flag'/> */}
      <Haunter src="/img/Haunter.png" data-speedx="0.215" data-speedy="0.301" data-speedz="0.1" data-rotation="0.01" className='parallax haunter'/>
      <Boo src="/img/Boo.png" data-speedx="0.215" data-speedy="0.276" data-speedz="0.1" data-rotation="0.01" className='parallax boo'/>

      <Bernard_Txt src="/img/Bernard-Text.png" data-speedx="0.1" data-speedy="0.134" data-speedz="0.25" data-rotation="0.02" className='parallax bernard-txt'/>
      <Justin_Txt src="/img/Justin-Text.png" data-speedx="0.1" data-speedy="0.125" data-speedz="0.25" data-rotation="0.02"  className='parallax justin-txt'/>
      
      <JesusFlag2 src="/img/JesusFlag.gif" data-speedx="0.125" data-speedy="0.137" data-speedz="0.175" data-rotation="0.09" className='parallax jesus-flag'/>
      <Pipe src="/img/Pipe.png" data-speedx="0.11" data-speedy="0.134" data-speedz="0.3" data-rotation="0.1" className='parallax pipe'/>
      <HelloKitty src="/img/HelloKitty.png" data-speedx="0.11" data-speedy="0.15" data-speedz="0.3" data-rotation="0.1" className='parallax hello-kitty'/>
      <Toad src="/img/Toad.png" data-speedx="0.08" data-speedy="0.09" data-speedz="0.35" data-rotation="0.125" className='parallax toad'/>
      <Kart src="/img/Kart.png" data-speedx="0.08" data-speedy="0.088" data-speedz="0.35" data-rotation="0.125" className='parallax kart'/>
      <Joy src="/img/Joy.png" data-speedx="0.05" data-speedy="0.06" data-speedz="0.4" data-rotation="0.15" className='parallax joy'/>
      <Pikachu src="/img/Pikachu.png" data-speedx="0.05" data-speedy="0.064" data-speedz="0.4" data-rotation="0.15" className='parallax pikachu'/>
      <Mario src="/img/Mario.png" data-speedx="0.03" data-speedy="0.032" data-speedz="0.45" data-rotation="0.175" className='parallax mario'/>
      <MiniJesus src="/img/MiniJesus.png" data-speedx="0.03" data-speedy="0.03" data-speedz="0.45" data-rotation="0.175" className='parallax mini-jesus'/>
      <Justin src="/img/Justin.png" data-speedx="0.01" data-speedy="0.02" data-speedz="0.53" data-rotation="0.2" className='parallax justin'/>

      <HeroText>Passionate. Professional. Reliable.</HeroText>

    </Container>
  )
}

export default Hero
