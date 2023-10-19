import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import gsap from 'gsap';

const Container = styled.div`
    position: relative;
    background-color: #d0eaff;
    height: 100vh;
    scroll-snap-align: start;
    overflow: hidden;
    /* background-image: linear-gradient(rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 0.6)),
                  url("/img/hero-banner/blue-sky-2.jpg"); */
    background-image: url("/img/hero-banner/Sky.png");
    /* background: radial-gradient(circle at center, white 0%, transparent 100%), url("/img/hero-banner/Sky.png"); */
    background-repeat: no-repeat;
    background-size: cover;
`

const GradientOverlayImage = styled.div`
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 11;
    background: radial-gradient(circle at center, #ffffffe2 0%, transparent 100%);
    pointer-events: none;
    @media only screen and ( min-width: 2538px ) and ( min-height: 1500px ) {
        /* display: none; */
    }
`

/* HERO LAYERS */
const Sky = styled.img`
    object-fit: cover;
    position: absolute;
    /* width: 1920px; */
    height: 1720px; //1420px
    /* top: 50%; */
    // top: 2000px; (OLD)
    top: 600px;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    /* @media only screen and (min-width: 2538px) { */
    @media only screen and ( min-width: 1740px ) and ( min-height: 1500px ) {
        display: none;
    }
`



const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
  
const ContactBtnMain = styled.div`
    opacity: 0;
    z-index: 9990;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    /* bottom: .5rem; */
    width: 110px;
    height: 90px;
    background: #1c1c1c;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    bottom: 5.5rem;
    span {
        color: #fff;
        margin: auto;
        text-align:center;
        font-size: 1.23rem;
    }
    &::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 110px;
        height: 90px;
        background: linear-gradient(0deg, transparent, transparent, #45f3ff, #45f3ff, #45f3ff);
        z-index: 1;
        transform-origin: bottom right;
        animation: ${spin} 2s linear infinite;
    }
    &::after {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 110px;
        height: 90px;
        background: linear-gradient(0deg, transparent, transparent, #45f3ff, #45f3ff, #45f3ff);
        z-index: 1;
        transform-origin: bottom right;
        animation: ${spin} 2s linear infinite;
        animation-delay: -1s;
    }
    div {
        position: absolute;
        inset: 5px;
        background: #444;
        /* background: #222; */
        padding: 50px 40px;
        border-radius: 8px;
        z-index: 111112;
        display: flex;
        flex-direction: column;
    }
`
  
const CloudMain_Back = styled.img`
    position: absolute;
    width: 1673px;
    /* top: calc(50% + 271px); */
    left: calc(50% - 0px);
    top: 2000px;
    z-index: 13;
`
    
    const CloudMain_Front = styled.img`
    position: absolute;
    width: 1390px;
    /* top: calc(50% + 286px); */
    left: calc(50% - 0px);
    top: 3600px;
    z-index: 14;
`

  
const CloudBG_4 = styled.img`
    position: absolute;
    width: 190px;
    /* top: calc(50% - 99px); */
    left: calc(50% - 536px);
    top: 1600px;
    //top: 2000px; LIKE SKY OLD
    z-index: 15;
    @media only screen and ( min-width: 2538px ) and ( min-height: 1500px ) {
        /* display: none; */
    }
`
  
const CloudBG_3 = styled.img`
    position: absolute;
    width: 250px;
    /* top: calc(50% - 250px); */
    left: calc(50% - 150px);
    top: 1600px;
    //top: 2000px; LIKE SKY OLD
    z-index: 16;
    @media only screen and ( min-width: 2538px ) and ( min-height: 1500px ) {
        /* display: none; */
    }
`
  
const CloudBG_2 = styled.img`
    position: absolute;
    width: 185px;
    /* top: calc(50% - 225px); */
    left: calc(50% + 530px);
    top: 1600px;
    //top: 2000px; LIKE SKY OLD
    z-index: 17;
    @media only screen and ( min-width: 2538px ) and ( min-height: 1500px ) {
        /* display: none; */
    }
`
  
const CloudBG_1 = styled.img`
    position: absolute;
    width: 380px;
    /* top: calc(50% - 125px); */
    left: calc(50% - 950px);
    top: 1600px;
    //top: 2000px; LIKE SKY OLD
    z-index: 18;
    @media only screen and ( min-width: 2538px ) and ( min-height: 1500px ) {
        /* display: none; */
    }
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
    width: 330px;
    /* top: calc(50% + 102px); */
    left: calc(50% - 220px);
    top: 3000px;
    z-index: 19;
    @media only screen and (max-width: 700px) {
        left: calc(50% - 316px + 150px);
        /* top: calc(50% + 102px + 10px); */
        top: 3000px;
    }
`

  
const Haunter = styled.img`
    position: absolute;
    width: 144px;
    /* top: calc(50% - 110px); */
    left: calc(50% - 480px);
    top: 2100px;
    z-index: 21;
`
  
const Boo = styled.img`
    position: absolute;
    width: 74px;
    /* top: calc(50% - 122px); */
    left: calc(50% + 455px);
    top: 2100px;
    z-index: 22;
`
  
const Bernard_Txt = styled.img`
    position: absolute;
    width: 600px;
    /* top: calc(50% - 65px); */
    left: calc(50% + 0px);
    top: 1450px;
    z-index: 23;
    opacity: 0;
    @media only screen and (max-width: 700px) {
        width: 430px;
        top: 1450px;
        /* top: calc(50% - 118px); */
    }
    @media only screen and (max-width: 370px) { //375 = mobile medium
        width: 360px;
    }
    
`
const Justin_Txt = styled.img`
    position: absolute;
    width: 600px;
    /* top: calc(50% - 208px); */
    left: calc(50% + 0px);
    /* top: -100px; */
    top: 1300px;
    opacity: 0;
    z-index: 24;
    @media only screen and (max-width: 700px) {
        /* top: -100px; */
        top: 1300px;
        /* top: calc(50% - 233px); */
        width: 530px;
    }
    @media only screen and (max-width: 370px) { //375 = mobile medium
        width: 460px;
    }
`

const Pipe = styled.img`
    position: absolute;
    width: 109px;
    /* top: calc(50% + 140px); */
    left: calc(50% + 419px);
    top: 2000px;
    z-index: 20;
`
  
const HelloKitty = styled.img`
    position: absolute;
    width: 105px;
    /* top: calc(50% + 150px); */
    left: calc(50% - 415px);
    top: 2000px;
    z-index: 25;
    @media only screen and (max-width: 700px) {
        left: calc(50% - 495px + 290px);
        display: none;
    }
`
  
const Toad = styled.img`
    position: absolute;
    width: 107px;
    /* top: calc(50% + 180px); */
    left: calc(50% + 350px);
    top: 2400px;
    z-index: 26;
    @media only screen and (max-width: 700px) {
        left: calc(50% + 383px - 160px);
        display: none;
    }
`
  
const Kart = styled.img`
    position: absolute;
    width: 256px;
    /* top: calc(50% + 218px); */
    left: calc(50% - 340px);
    top: 2400px;
    z-index: 27;
    @media only screen and (max-width: 700px) {
        left: calc(50% - 420px + 240px);
        display: none;
    }
`
  
const Joy = styled.img`
    position: absolute;
    width: 107px;
    /* top: calc(50% + 232px); */
    left: calc(50% + 266px);
    top: 2800px;
    z-index: 28;
    @media only screen and (max-width: 700px) {
        left: calc(50% + 291px - 100px);
        display: none;
    }
`
  
const Pikachu = styled.img`
    position: absolute;
    width: 138px;
    top: calc(50% + 235px)k;
    left: calc(50% - 230px);
    top: 2800px;
    z-index: 29;
    @media only screen and (max-width: 700px) {
        left: calc(50% - 269px + 115px);
        display: none;
    }
`
  
const Mario = styled.img`
    position: absolute;
    width: 138px;
    /* top: calc(50% + 245px); */
    left: calc(50% - 142px);
    top: 3200px;
    z-index: 30;
    @media only screen and (max-width: 700px) {
        left: calc(50% - 165px + 42px);
        width: 132px;
    }
`
  
const MiniJesus = styled.img`
    position: absolute;
    width: 180px;
    /* top: calc(50% + 160px); */
    top: 3200px;
    left: calc(50% + 173px);
    z-index: 31;
    @media only screen and (max-width: 700px) {
        left: calc(50% + 183px - 40px);
        width: 163px;
    }
`
  
const Justin = styled.img`
    position: absolute;
    width: 235px;
    // top: calc(50% + 157px);
    top: 3600px;
    left: calc(50% + 0px);
    z-index: 32;
    @media only screen and (max-width: 700px) {
        width: 215px;
    }
`    

const HeroText = styled.h1`
    width: 100%;
    text-align: center;
    position: relative;
    color: #520000;
    z-index: 1000;
    /* font-size: 29px; */
    font-size: 28px;
    font-family: "myriad-pro", sans-serif;
    font-weight: 700;
    font-style: normal;
    /* top: 13%; //15 */
    top: 13%; //15
    opacity: 0;
    @media only screen and (max-width: 700px) {
        top: 6.5rem;
        padding: 0;
        margin: 0;
        display: none;
        /* font-size: 43px; */
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


const LoadingText = styled.h1`
    width: 100%;
    display: flex;
    text-align: center;
    position: absolute;
    justify-content: center;
    align-items: center;
    margin: auto;
    color: #520000;
    z-index: 1000;
    font-size: 29px;
    font-family: "myriad-pro", sans-serif;
    font-weight: 700;
    font-style: normal;
    top: 0;
    bottom: 0;
    opacity: 1;
    /* display: none; */
    /* transition: opacity 1s;  */
    @media only screen and (min-width: 768px) {
        /* display: none; */
        opacity: 0;
    }
`

function Hero({ scrollYGlobal, clickToContact, myRef, scrollToHero }) { 
    // PARALLAX VARS
    let parallex_el;
    let xValue = 0, yValue = 0;
    let rotateDegree = 0;
    
    //TRANSFROM BEGINNING
    const durationLoad = 2.5;
    // const [startDelay, setStartDelay] = useState(1); //1
    let startDelay = 1;
    const easeLoad = "power3.out";

    // ALL OBJECT REFS
    const skyRef = useRef(null);
    const cloudMainBackRef = useRef(null);
    const cloudMainFrontRef = useRef(null);
    const cloudBG4 = useRef(null);
    const cloudBG3 = useRef(null);
    const cloudBG2 = useRef(null);
    const cloudBG1 = useRef(null);
    const haunterRef = useRef(null);
    const booRef = useRef(null);
    const bernardTxtRef = useRef(null);
    const justinTxtRef = useRef(null);
    const subtitleTxtRef = useRef(null);
    const jesusFlagRef = useRef(null);
    const pipeRef = useRef(null);
    const helloKittyRef = useRef(null);
    const toadRef = useRef(null);
    const kartRef = useRef(null);
    const joyRef = useRef(null);
    const pikachuRef = useRef(null);
    const marioRef = useRef(null);
    const miniJesusRef = useRef(null);
    const justinRef = useRef(null);
    const contactBtnRef = useRef(null);

    // INITIAL POSITIONS
    const [scrollY, setScrollY] = useState(0);
    const [justinPos, setJustinPos] = useState();
    const [miniJesusPos, setMiniJesusPos] = useState();
    const [pikachuPos, setPikachuPos] = useState();
    const [marioPos, setMarioPos] = useState();
    const [toadPos, setToadPos] = useState();
    const [joyPos, setJoyPos] = useState();
    const [kartPos, setKartPos] = useState();
    const [flagPos, setFlagPos] = useState();
    const [helloKittyPos, setHelloKittyPos] = useState();
    const [pipePos, setPipePos] = useState();
    const [haunterPos, setHaunterPos] = useState();
    const [booPos, setBooPos] = useState();
    const [contactBtnPos, setContactBtnPos] = useState();

    // Audio
    const marioAudioRef = useRef();
    const booAudioRef = useRef();
    const haunterAudioRef = useRef();
    const kartAudioRef = useRef();
    const pikachuAudioRef = useRef();
    const pipeAudioRef = useRef();
    const toadAudioRef = useRef();
    const jesusAudioRef = useRef();

    let navElement;
    const loadingTxtRef = useRef();
    const [loadedImageCount, setLoadedImageCount] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    const update = (cursorPosition) => {
        parallex_el = document.querySelectorAll(".parallax");

        parallex_el.forEach(el => {
            let speedx = el.dataset.speedx;
            let speedy = el.dataset.speedy;
            let speedz = el.dataset.speedz;
            let rotateSpeed = el.dataset.rotation;

            let isInLeft = parseFloat(getComputedStyle(el).left) < innerWidth / 2 ? 1 : -1;
            let zValue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

            el.style.transform = `translateX(calc(-50% + ${-xValue * speedx / 1}px)) translateY(calc(-50% + ${yValue * speedy}px)) perspective(2300px) translateZ(${zValue * speedz}px) rotateY(${rotateDegree * rotateSpeed}deg)`;
        })
    }

    useEffect(() => {
        navElement = document.querySelector('.nav');
        if (window.innerWidth <= 768) {
            startDelay = 0;
        } else {
            startDelay = 0.75;
        }
        
        scrollTo(0, 0);
        update(0);
        gsapBeginning();
        // Add event listener when the component mounts
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('touchmove', handleTouchMove);
        // Clean up by removing event listener when the component unmounts
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('touchmove', handleTouchMove);
        };
      }, []);

      const handleMouseMove = (event) => {
        const isCursorOverNav = navElement.contains(event.target); //??? works
        if (!isCursorOverNav)
        {
            xValue = event.clientX - innerWidth / 2;
            yValue = event.clientY - innerHeight / 2;
            
            rotateDegree = (xValue / (innerWidth / 2)) * 20;
                
            update(event.clientX);
        }
    }

    const handleTouchMove = (event) => {
        xValue = event.touches[0].clientX - innerWidth / 2;
        yValue = event.touches[0].clientY - innerHeight / 2;
        
        rotateDegree = (xValue / (innerWidth / 2)) * 20;
        
        update(event.touches[0].clientX);
    }


      const gsapBeginning = () => {
        // NAMES OPACITY
        gsap.to(bernardTxtRef.current, {
            opacity: 1,
            duration: 0.5,
            ease: easeLoad
        }, startDelay);
        
        gsap.to(justinTxtRef.current, {
            opacity: 1,
            duration: 0.5,
            ease: easeLoad
        }, startDelay);
        
        // REST
        gsap.to(skyRef.current, {
            top: '50%',
            duration: durationLoad,
            ease: easeLoad
        }, startDelay);

        gsap.to(cloudMainBackRef.current, {
            top: 'calc(50% + 265px)',
            duration: durationLoad,
            ease: easeLoad
        }, startDelay);

        gsap.to(cloudMainFrontRef.current, {
            top: 'calc(50% + 266px)',
            duration: durationLoad,
            ease: easeLoad
        }, startDelay);

        gsap.to(cloudBG4.current, {
            top: 'calc(50% - 99px)',
            duration: durationLoad,
            ease: easeLoad
        }, startDelay);

        gsap.to(cloudBG3.current, {
            top: 'calc(50% - 250px)',
            duration: durationLoad,
            ease: easeLoad
        }, startDelay);

        gsap.to(cloudBG2.current, {
            top: 'calc(50% - 225px)',
            duration: durationLoad,
            ease: easeLoad
        }, startDelay);

        gsap.to(cloudBG1.current, {
            top: 'calc(50% - 125px)',
            duration: durationLoad,
            ease: easeLoad
        }, startDelay);

        gsap.to(haunterRef.current, {
            top: 'calc(50% - 110px)',
            duration: durationLoad,
            ease: easeLoad
        }, startDelay);
        
        gsap.to(booRef.current, {
            top: 'calc(50% - 122px)',
            duration: durationLoad,
            ease: easeLoad
        }, startDelay);
        

        // NAME BERNARD JUSTIN
        if (window.innerWidth > 700) 
        {
            gsap.to(bernardTxtRef.current, {
                top: 'calc(50% - 65px)',
                duration: durationLoad,
                ease: easeLoad
            }, startDelay);
            
            gsap.to(justinTxtRef.current, {
                top: 'calc(50% - 195px)',
                duration: durationLoad,
                ease: easeLoad
            }, startDelay);
        } 
         else 
        {
            gsap.to(bernardTxtRef.current, {
                top: 'calc(50% - 128px)',
                duration: durationLoad,
                ease: easeLoad
            }, startDelay);

            gsap.to(justinTxtRef.current, {
                top: 'calc(50% - 229px)',
                duration: durationLoad,
                ease: easeLoad
            }, startDelay);
        }

        
        gsap.to(subtitleTxtRef.current, {
            duration: durationLoad,
            ease: easeLoad,
            opacity: 1
        }, startDelay);
        
        gsap.to(jesusFlagRef.current, {
            top: 'calc(50% + 102px)',
            duration: durationLoad,
            ease: easeLoad
        }, startDelay);
        
        gsap.to(pipeRef.current, {
            top: 'calc(50% + 140px)',
            duration: durationLoad,
            ease: easeLoad
        }, startDelay);
        
        gsap.to(helloKittyRef.current, {
            top: 'calc(50% + 155px)',
            duration: durationLoad,
            ease: easeLoad
        }, startDelay);
        
        gsap.to(toadRef.current, {
            top: 'calc(50% + 180px)',
            duration: durationLoad,
            ease: easeLoad
        }, startDelay);
       
        gsap.to(kartRef.current, {
            top: 'calc(50% + 218px)',
            duration: durationLoad,
            ease: easeLoad
        }, startDelay);
        
        gsap.to(joyRef.current, {
            top: 'calc(50% + 232px)',
            duration: durationLoad,
            ease: easeLoad
        }, startDelay);
        
        gsap.to(pikachuRef.current, {
            top: 'calc(50% + 235px)',
            duration: durationLoad,
            ease: easeLoad
        }, startDelay);
        
        gsap.to(marioRef.current, {
            top: 'calc(50% + 235px)',
            duration: durationLoad,
            ease: easeLoad
        }, startDelay);
        
        gsap.to(miniJesusRef.current, {
            top: 'calc(50% + 160px)',
            duration: durationLoad,
            ease: easeLoad
        }, startDelay);
        
        gsap.to(justinRef.current, {
            top: 'calc(50% + 157px)',
            duration: durationLoad,
            ease: easeLoad
        }, startDelay);
        
        // Contact Button
        gsap.to(contactBtnRef.current, {
            opacity: 1,
            duration: 1,
        }, '3');

        // Loader - Show only mobile
        // if (window.innerWidth <= 768) {
        //     gsap.to(loadingTxtRef.current, {
        //         opacity: 0,
        //         duration: 0.2,
        //         ease: easeLoad,
        //         onComplete: () => {
        //             loadingTxtRef.current.style.display = "none";
        //         }
        //     }, startDelay);
        // } else {
        //     //NOT in css components - resizing issues
        //     loadingTxtRef.current.style.display = "none";
        //     loadingTxtRef.current.style.opacity = 0;
        // }
      }


      // RESIZING NAMES
      useEffect(() => {
        window.addEventListener('resize', checkScreenSizesNames);
        return () => {
          window.removeEventListener('resize', checkScreenSizesNames);
        };
      }, []);

      const checkScreenSizesNames = () => {
        justinRef.current.style.left = "";

        if (window.innerWidth > 700) 
        {
            gsap.to(bernardTxtRef.current, {
                top: 'calc(50% - 65px)',
                duration: durationLoad,
                ease: easeLoad
            }, startDelay);
            
            gsap.to(justinTxtRef.current, {
                top: 'calc(50% - 195px)',
                duration: durationLoad,
                ease: easeLoad
            }, startDelay);
        } 
         else 
        {
            gsap.to(bernardTxtRef.current, {
                top: 'calc(50% - 128px)',
                duration: durationLoad,
                ease: easeLoad
            }, startDelay);

            gsap.to(justinTxtRef.current, {
                top: 'calc(50% - 229px)',
                duration: durationLoad,
                ease: easeLoad
            }, startDelay);
        }
      }


      
      useEffect(() => {
            // setJustinPos(window.getComputedStyle(justinRef.current).getPropertyValue('left'));
            setMiniJesusPos(window.getComputedStyle(miniJesusRef.current).getPropertyValue('left'));
            setMarioPos(window.getComputedStyle(marioRef.current).getPropertyValue('left'));
            setPikachuPos(window.getComputedStyle(pikachuRef.current).getPropertyValue('left'));
            setJoyPos(window.getComputedStyle(joyRef.current).getPropertyValue('left'));
            setKartPos(window.getComputedStyle(kartRef.current).getPropertyValue('left'));
            setToadPos(window.getComputedStyle(toadRef.current).getPropertyValue('left'));
            setPipePos(window.getComputedStyle(pipeRef.current).getPropertyValue('left'));
            setHelloKittyPos(window.getComputedStyle(helloKittyRef.current).getPropertyValue('left'));
            setFlagPos(window.getComputedStyle(jesusFlagRef.current).getPropertyValue('left'));
            setHaunterPos(window.getComputedStyle(haunterRef.current).getPropertyValue('left'));
            setBooPos(window.getComputedStyle(booRef.current).getPropertyValue('left'));
            // setContactBtnPos(window.getComputedStyle(contactBtnRef.current).getPropertyValue('bottom'));
        }, [])

        useEffect(() => {
            const divElement = myRef.current;
            if (Math.round(scrollYGlobal) == divElement.offsetTop) {
                scrollToHero();
            }
            //WTF idk
            if (divElement.scrollTop + divElement.clientHeight === divElement.scrollHeight) {
                divElement.scrollTop = 0;
              }
            // if (Math.round(scrollYGlobal) > divElement.offsetTop || Math.round(scrollYGlobal) < divElement.offsetTop) {
            //     console.log("OFF")
            // }
        }, [scrollYGlobal])
        
        useEffect(() => {
            handleScroll();
      }, [scrollYGlobal])

      
      const handleScroll = () => {
        const currentScrollY = scrollYGlobal;

        if (currentScrollY > scrollY) { //down
            // justinRef.current.style.left = parseFloat(justinPos) + scrollYGlobal * -1 + 'px';
            miniJesusRef.current.style.left = parseFloat(miniJesusPos) + scrollYGlobal * 1 + 'px';
            marioRef.current.style.left = parseFloat(marioPos) + scrollYGlobal * -1 + 'px';
            pikachuRef.current.style.left = parseFloat(pikachuPos) + scrollYGlobal * 1 + 'px';
            joyRef.current.style.left = parseFloat(joyPos) + scrollYGlobal * -1 + 'px';
            kartRef.current.style.left = parseFloat(kartPos) + scrollYGlobal * -1 + 'px';
            toadRef.current.style.left = parseFloat(toadPos) + scrollYGlobal * 1 + 'px';
            pipeRef.current.style.left = parseFloat(pipePos) + scrollYGlobal * 1 + 'px';
            helloKittyRef.current.style.left = parseFloat(helloKittyPos) + scrollYGlobal * 1 + 'px';
            jesusFlagRef.current.style.left = parseFloat(flagPos) + scrollYGlobal * 1 + 'px';
            haunterRef.current.style.left = parseFloat(haunterPos) + scrollYGlobal * -1 + 'px';
            booRef.current.style.left = parseFloat(booPos) + scrollYGlobal * 1 + 'px';
            // contactBtnRef.current.style.bottom = parseFloat(contactBtnPos) + scrollYGlobal * 1 + 'px';
        }
         else if (currentScrollY < scrollY && scrollYGlobal < '600') { //up
            // justinRef.current.style.left = "";
            miniJesusRef.current.style.left = "";
            marioRef.current.style.left = "";
            pikachuRef.current.style.left = "";
            joyRef.current.style.left = "";
            kartRef.current.style.left = "";
            toadRef.current.style.left = "";
            pipeRef.current.style.left = "";
            helloKittyRef.current.style.left = "";
            jesusFlagRef.current.style.left = "";
            haunterRef.current.style.left = "";
            booRef.current.style.left = "";
        }

        setScrollY(currentScrollY);
      }

      // LOADING STUFF
      function imageLoaded(img) {
        setLoadedImageCount((prevCount) => prevCount + 1);
    }
    function imageError(img) {
        console.error(`Error loading ${img.alt}.`);
    }
    useEffect(() => {
        if (loadedImageCount === 21) { //20 images
            setIsLoaded(true);
            // console.log('All images have loaded successfully.');
            gsap.to(loadingTxtRef.current, {
                duration: 0.5,
                opacity: 0,
                ease: easeLoad,
                onComplete: () => {
                    loadingTxtRef.current.style.display = "none";
                }
            }, 0);
        }
    }, [loadedImageCount])

  return (
    <>

    {/* <Loader /> */}
    <Container ref={myRef}>
        <GradientOverlayImage />
         {/* <Vignette /> */}
    <HeroText ref={subtitleTxtRef}>Passionate. Professional. Reliable.</HeroText>
    
    <LoadingText ref={loadingTxtRef}>Loading...</LoadingText>
    
    <ContactBtnMain ref={contactBtnRef} id="button-8" onClick={clickToContact}>
        <span className='borderLine'></span>
        <div id="button- 3" style={{padding: 0}}>
            <span className='contact'>Contact Me!!</span>
        </div>
    </ContactBtnMain>

      <Sky ref={skyRef} src="/img/hero-banner/Sky.png" data-speedx="0.33" data-speedy="0.33" data-speedz="0" data-rotation="0" className='parallax bg-img'
            draggable="false" alt='Sky' onLoad={(e) => imageLoaded(e.target)} onError={(e) => imageError(e)}/>
    
      {/* <Dove src="/img/Dove.png" className='parallax dove'/> */}
      {/* <Dove2 src="/img/Dove.gif" className='parallax dove'/> */}
      {/* Cloud Main */}
      <CloudMain_Back ref={cloudMainBackRef} src="/img/hero-banner/CloudMain-Back.png" data-speedx="0.15" data-speedy="0.16" data-speedz="0.125" data-rotation="0.01" className='parallax cloud-main-back'
            alt='CloudBack' onLoad={(e) => imageLoaded(e.target)} onError={(e) => imageError(e)} draggable="false"/>
      <CloudMain_Front ref={cloudMainFrontRef} src="/img/hero-banner/CloudMain-Front.png" data-speedx="0.01" data-speedy="0.02" data-speedz="0.53" data-rotation="0.2" className='parallax cloud-main-front'
            alt='CloudMain' onLoad={(e) => imageLoaded(e.target)} onError={(e) => imageError(e)} draggable="false"/>
      {/* Cloud Backgrounds */}
      <CloudBG_4 ref={cloudBG4} src="/img/hero-banner/CloudBG-4.png" data-speedx="0.287" data-speedy="0.305" data-speedz="0.03" data-rotation="0" className='parallax cloud-bg-4'
            alt='Cloud4' onLoad={(e) => imageLoaded(e.target)} onError={(e) => imageError(e)} draggable="false"/>
      <CloudBG_3 ref={cloudBG3} src="/img/hero-banner/CloudBG-3.png" data-speedx="0.285" data-speedy="0.299" data-speedz="0.045" data-rotation="0" className='parallax cloud-bg-3'
            alt='Cloud3' onLoad={(e) => imageLoaded(e.target)} onError={(e) => imageError(e)} draggable="false"/>
      <CloudBG_2 ref={cloudBG2} src="/img/hero-banner/CloudBG-2.png" data-speedx="0.271" data-speedy="0.284" data-speedz="0.033" data-rotation="0" className='parallax cloud-bg-2'
            alt='Cloud2' onLoad={(e) => imageLoaded(e.target)} onError={(e) => imageError(e)} draggable="false"/>
      <CloudBG_1 ref={cloudBG1} src="/img/hero-banner/CloudBG-1.png" data-speedx="0.282" data-speedy="0.3" data-speedz="0.041" data-rotation="0" className='parallax cloud-bg-1'
            alt='Cloud1' onLoad={(e) => imageLoaded(e.target)} onError={(e) => imageError(e)} draggable="false"/>
        {/* Items/Characters */}
      {/* <JesusFlag src="/img/JesusFlag.png" className='parallax jesus-flag'/> */}
      <Haunter ref={haunterRef} src="/img/hero-banner/Haunter.png" data-speedx="0.215" data-speedy="0.301" data-speedz="0.1" data-rotation="0.01" className='parallax haunter'
            alt='Haunter' onLoad={(e) => imageLoaded(e.target)} onError={(e) => imageError(e)} draggable="false" onClick={() => haunterAudioRef.current.play()}/>
      <Boo ref={booRef} src="/img/hero-banner/Boo.png" data-speedx="0.215" data-speedy="0.276" data-speedz="0.1" data-rotation="0.01" className='parallax boo'
            alt='Boo' onLoad={(e) => imageLoaded(e.target)} onError={(e) => imageError(e)} draggable="false" onClick={() => booAudioRef.current.play()}/>

      <Bernard_Txt ref={bernardTxtRef} src="/img/hero-banner/Bernard-Text.png" data-speedx="0.1" data-speedy="0.134" data-speedz="0.25" data-rotation="0.02" className='parallax bernard-txt'
            alt='BernardTxt' onLoad={(e) => imageLoaded(e.target)} onError={(e) => imageError(e)} draggable="false"/>
      <Justin_Txt ref={justinTxtRef} src="/img/hero-banner/Justin-Text.png" data-speedx="0.1" data-speedy="0.125" data-speedz="0.25" data-rotation="0.02"  className='parallax justin-txt'
            alt='JustinTxt' onLoad={(e) => imageLoaded(e.target)} onError={(e) => imageError(e)} draggable="false"/>
      
      <JesusFlag2 ref={jesusFlagRef} src="/img/hero-banner/JesusFlag.gif" data-speedx="0.125" data-speedy="0.137" data-speedz="0.175" data-rotation="0.09" className='parallax jesus-flag'
            alt='JesusFlag2' onLoad={(e) => imageLoaded(e.target)} onError={(e) => imageError(e)} draggable="false"/>
      <Pipe ref={pipeRef} src="/img/hero-banner/Pipe.png" data-speedx="0.11" data-speedy="0.134" data-speedz="0.3" data-rotation="0.1" className='parallax pipe'
            alt='Pipe' onLoad={(e) => imageLoaded(e.target)} onError={(e) => imageError(e)} draggable="false" onClick={() => pipeAudioRef.current.play()}/>
      <HelloKitty ref={helloKittyRef} src="/img/hero-banner/HelloKitty.png" data-speedx="0.11" data-speedy="0.15" data-speedz="0.3" data-rotation="0.1" className='parallax hello-kitty'
            alt='HelloKitty' onLoad={(e) => imageLoaded(e.target)} onError={(e) => imageError(e)} draggable="false"/>
      <Toad ref={toadRef} src="/img/hero-banner/Toad.png" data-speedx="0.08" data-speedy="0.09" data-speedz="0.35" data-rotation="0.125" className='parallax toad'
            alt='Toad' onLoad={(e) => imageLoaded(e.target)} onError={(e) => imageError(e)} draggable="false" onClick={() => toadAudioRef.current.play()}/>
      <Kart ref={kartRef} src="/img/hero-banner/Kart.png" data-speedx="0.08" data-speedy="0.088" data-speedz="0.35" data-rotation="0.125" className='parallax kart'
            alt='Kart' onLoad={(e) => imageLoaded(e.target)} onError={(e) => imageError(e)} draggable="false" onClick={() => kartAudioRef.current.play()}/>
      <Joy ref={joyRef} src="/img/hero-banner/Joy.png" data-speedx="0.05" data-speedy="0.06" data-speedz="0.4" data-rotation="0.15" className='parallax joy'
            alt='Joy' onLoad={(e) => imageLoaded(e.target)} onError={(e) => imageError(e)} draggable="false"/>
      <Pikachu ref={pikachuRef} src="/img/hero-banner/Pikachu.png" data-speedx="0.05" data-speedy="0.064" data-speedz="0.4" data-rotation="0.15" className='parallax pikachu'
            draggable="false" alt='Pikachu' onLoad={(e) => imageLoaded(e.target)} onError={(e) => imageError(e)} onClick={() => pikachuAudioRef.current.play()}/>
      <Mario ref={marioRef} src="/img/hero-banner/Mario.png" data-speedx="0.03" data-speedy="0.032" data-speedz="0.45" data-rotation="0.175" className='parallax mario'
            draggable="false" alt='Mario' onLoad={(e) => imageLoaded(e.target)} onError={(e) => imageError(e)} onClick={() => marioAudioRef.current.play()}/>
      <MiniJesus ref={miniJesusRef} src="/img/hero-banner/MiniJesus.png" data-speedx="0.03" data-speedy="0.03" data-speedz="0.45" data-rotation="0.175" className='parallax mini-jesus'
            draggable="false" alt='MiniJesus' onLoad={(e) => imageLoaded(e.target)} onError={(e) => imageError(e)} onClick={() => jesusAudioRef.current.play()} />
      <Justin ref={justinRef} src="/img/hero-banner/Justin.png" data-speedx="0.01" data-speedy="0.02" data-speedz="0.53" data-rotation="0.2" className='parallax justin'
            draggable="false" alt='Justin' onLoad={(e) => imageLoaded(e.target)} onError={(e) => imageError(e)}/>

      <audio ref={marioAudioRef} controls style={{display: 'none'}}>
          <source src="/audio/mario.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={booAudioRef} controls style={{display: 'none'}}>
          <source src="/audio/boo.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={pikachuAudioRef} controls style={{display: 'none'}}>
          <source src="/audio/pikachu.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={kartAudioRef} controls style={{display: 'none'}}>
          <source src="/audio/kart.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={jesusAudioRef} controls style={{display: 'none'}}>
          <source src="/audio/jesus.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={haunterAudioRef} controls style={{display: 'none'}}>
          <source src="/audio/haunter.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={toadAudioRef} controls style={{display: 'none'}}>
          <source src="/audio/toad.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={pipeAudioRef} controls style={{display: 'none'}}>
          <source src="/audio/pipe.mp3" type="audio/mpeg" />
      </audio>

    </Container>
    </>
  )
}

export default Hero





const CrossSection = styled.div`
z-index: 10000001110;
height: 100vh;
width: 100vw;
background: green;
position: absolute;
display: flex;
justify-content: center;
`
const CrossContainer = styled.div`
z-index: 10000000;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transform: translateY(2rem) scale(0.5);
  background: green;
`

const WaterCross = styled.div`
    position: absolute;
    z-index: 10000000;
    /* top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    width: 330px;
    height: 480px;
    background: url('/img/projects/misc/wave5.png');
    background-repeat: repeat-x;
    animation: ${spin} 1.5s linear infinite;
    
    mask: url('/img/projects/misc/cross-mask.svg');
    -webkit-mask-image: url('/img/projects/misc/cross-mask.svg');
    mask-image: url('/img/projects/misc/cross-mask.svg');
    
    /* -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat; */
    /* -webkit-mask-position: center; */
    /* mask-position: center; */

    /* background-position-y: -750px; // TOP */
    background-position-y: 460px; // BOTTOM

    @keyframes animate
    {
        0%{
            background-position-x: 0;
        }
        100% {
            background-position-x: 1333px;
        }
    }
`
const CrossBackground = styled.div`
    position: absolute;
    z-index: 10000000;
    /* top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    background-position: center;
    width: 330px;
    height: 480px; //760
    background: url('/img/projects/misc/cross-mask.svg');
    background-repeat: no-repeat;
`

function Loader() {
    // const { progress } = useProgress()
    return (
      <>
       {/* <Html center> */}
  
        <CrossSection>
            <CrossContainer>
                <CrossBackground />
                <WaterCross />
            </CrossContainer>
        </CrossSection>
  
      {/* </Html> */}
      </>
    )
  }