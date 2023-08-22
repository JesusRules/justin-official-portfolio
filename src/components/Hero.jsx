import React, { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
import gsap from 'gsap';

const Container = styled.div`
    position: relative;
    background-color: #a7e6ff;
    height: 100vh;
    scroll-snap-align: center;
    overflow: hidden;
`

/* HERO LAYERS */
const Sky = styled.img`
    object-fit: cover;
    position: absolute;
    /* width: 1920px; */
    height: 1420px;
    /* top: 50%; */
    // top: 2000px; (OLD)
    top: 600px;
    left: 50%;
    transform: translate(-50%, -50%);
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
// const Dove2 = styled.img`
//     /* -webkit-transform: scaleX(-1); */
//     position: absolute;
//     width: 156px;
//     top: calc(50% - 230px);
//     left: calc(50% - 686px);
//     /* top: 100px; */
//     z-index: 2;
//     transform: translate(-50%, -50%) scaleX(-1);
// `
  
const CloudMain_Back = styled.img`
    position: absolute;
    width: 1700px;
    /* top: calc(50% + 271px); */
    left: calc(50% - 0px);
    top: 2000px;
    z-index: 3;
`
  
const CloudMain_Front = styled.img`
    position: absolute;
    width: 1560px;
    /* top: calc(50% + 286px); */
    left: calc(50% - 0px);
    top: 3600px;
    z-index: 4;
`

  
const CloudBG_4 = styled.img`
    position: absolute;
    width: 190px;
    /* top: calc(50% - 99px); */
    left: calc(50% - 536px);
    top: 1600px;
    //top: 2000px; LIKE SKY OLD
    z-index: 5;
`
  
const CloudBG_3 = styled.img`
    position: absolute;
    width: 250px;
    /* top: calc(50% - 250px); */
    left: calc(50% - 150px);
    top: 1600px;
    //top: 2000px; LIKE SKY OLD
    z-index: 6;
`
  
const CloudBG_2 = styled.img`
    position: absolute;
    width: 185px;
    /* top: calc(50% - 225px); */
    left: calc(50% + 530px);
    top: 1600px;
    //top: 2000px; LIKE SKY OLD
    z-index: 7;
`
  
const CloudBG_1 = styled.img`
    position: absolute;
    width: 380px;
    /* top: calc(50% - 125px); */
    left: calc(50% - 950px);
    top: 1600px;
    //top: 2000px; LIKE SKY OLD
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
    /* top: calc(50% + 102px); */
    left: calc(50% - 340px);
    top: 3000px;
    z-index: 9;
    @media only screen and (max-width: 700px) {
        left: calc(50% - 340px + 135px);
        /* top: calc(50% + 102px + 10px); */
        top: 3000px;
    }
`

  
const Haunter = styled.img`
    position: absolute;
    width: 169px;
    /* top: calc(50% - 110px); */
    left: calc(50% - 509px);
    top: 2100px;
    z-index: 11;
`
  
const Boo = styled.img`
    position: absolute;
    width: 89px;
    /* top: calc(50% - 122px); */
    left: calc(50% + 485px);
    top: 2100px;
    z-index: 12;
`
  
const Bernard_Txt = styled.img`
    position: absolute;
    width: 700px;
    /* top: calc(50% - 65px); */
    left: calc(50% + 0px);
    top: 1200px;
    z-index: 13;
    @media only screen and (max-width: 700px) {
        width: 530px;
        top: 1200px;
        /* top: calc(50% - 118px); */
    }
`
const Justin_Txt = styled.img`
    position: absolute;
    width: 700px;
    /* top: calc(50% - 208px); */
    left: calc(50% + 0px);
    top: -100px;
    z-index: 14;
    @media only screen and (max-width: 700px) {
        top: -100px;
        /* top: calc(50% - 233px); */
        width: 530px;
    }
`

const Pipe = styled.img`
    position: absolute;
    width: 124px;
    /* top: calc(50% + 140px); */
    left: calc(50% + 433px);
    top: 2000px;
    z-index: 10;
`
  
const HelloKitty = styled.img`
    position: absolute;
    width: 120px;
    /* top: calc(50% + 150px); */
    left: calc(50% - 485px);
    top: 2000px;
    z-index: 15;
    @media only screen and (max-width: 700px) {
        left: calc(50% - 495px + 290px);
        display: none;
    }
`
  
const Toad = styled.img`
    position: absolute;
    width: 122px;
    /* top: calc(50% + 180px); */
    left: calc(50% + 373px);
    top: 2400px;
    z-index: 16;
    @media only screen and (max-width: 700px) {
        left: calc(50% + 383px - 160px);
        display: none;
    }
`
  
const Kart = styled.img`
    position: absolute;
    width: 271px;
    /* top: calc(50% + 218px); */
    left: calc(50% - 410px);
    top: 2400px;
    z-index: 17;
    @media only screen and (max-width: 700px) {
        left: calc(50% - 420px + 240px);
        display: none;
    }
`
  
const Joy = styled.img`
    position: absolute;
    width: 122px;
    /* top: calc(50% + 232px); */
    left: calc(50% + 281px);
    top: 2800px;
    z-index: 18;
    @media only screen and (max-width: 700px) {
        left: calc(50% + 291px - 100px);
        display: none;
    }
`
  
const Pikachu = styled.img`
    position: absolute;
    width: 153px;
    top: calc(50% + 235px)k;
    left: calc(50% - 259px);
    top: 2800px;
    z-index: 19;
    @media only screen and (max-width: 700px) {
        left: calc(50% - 269px + 115px);
        display: none;
    }
`
  
const Mario = styled.img`
    position: absolute;
    width: 153px;
    /* top: calc(50% + 245px); */
    left: calc(50% - 155px);
    top: 3200px;
    z-index: 20;
    @media only screen and (max-width: 700px) {
        left: calc(50% - 165px + 30px);
    }
`
  
const MiniJesus = styled.img`
    position: absolute;
    width: 206px;
    /* top: calc(50% + 160px); */
    top: 3200px;
    left: calc(50% + 173px);
    z-index: 21;
    @media only screen and (max-width: 700px) {
        left: calc(50% + 183px - 35px);
    }
`
  
const Justin = styled.img`
    position: absolute;
    width: 235px;
    /* top: calc(50% + 157px); */
    top: 3600px;
    left: calc(50% + 0px);
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
    opacity: 0;
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

function Hero({ scrollYGlobal }) { 
    // PARALLAX VARS
    let parallex_el;
    let xValue = 0, yValue = 0;
    let rotateDegree = 0;
    
    //TRANSFROM BEGINNING
    const durationLoad = 2.5;
    const startDelay = 1;
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
        scrollTo(0, 0);
        update(0);
        gsapBeginning();
        // Add event listener when the component mounts
        document.addEventListener('mousemove', handleMouseMove);
        // Clean up by removing event listener when the component unmounts
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);

      const handleMouseMove = (event) => {
        xValue = event.clientX - innerWidth / 2;
        yValue = event.clientY - innerHeight / 2;
        
        rotateDegree = (xValue / (innerWidth / 2)) * 20;
            
        update(event.clientX);
    }

      const gsapBeginning = () => {
        gsap.to(skyRef.current, {
            top: '50%',
            duration: durationLoad,
            ease: easeLoad
        }, startDelay);

        gsap.to(cloudMainBackRef.current, {
            top: 'calc(50% + 271px)',
            duration: durationLoad,
            ease: easeLoad
        }, startDelay);

        gsap.to(cloudMainFrontRef.current, {
            top: 'calc(50% + 286px)',
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
                top: 'calc(50% - 208px)',
                duration: durationLoad,
                ease: easeLoad
            }, startDelay);
        } 
         else 
        {
            gsap.to(bernardTxtRef.current, {
                top: 'calc(50% - 118px)',
                duration: durationLoad,
                ease: easeLoad
            }, startDelay);

            gsap.to(justinTxtRef.current, {
                top: 'calc(50% - 233px)',
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
            top: 'calc(50% + 150px)',
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
            top: 'calc(50% + 245px)',
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
                top: 'calc(50% - 208px)',
                duration: durationLoad,
                ease: easeLoad
            }, startDelay);
        } 
         else 
        {
            gsap.to(bernardTxtRef.current, {
                top: 'calc(50% - 118px)',
                duration: durationLoad,
                ease: easeLoad
            }, startDelay);

            gsap.to(justinTxtRef.current, {
                top: 'calc(50% - 233px)',
                duration: durationLoad,
                ease: easeLoad
            }, startDelay);
        }
      }


      
      useEffect(() => {
            setJustinPos(window.getComputedStyle(justinRef.current).getPropertyValue('left'));
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
        }, [])


        
        useEffect(() => {
            handleScroll();
      }, [scrollYGlobal])

      
      const handleScroll = () => {
        const currentScrollY = scrollYGlobal;

        if (currentScrollY > scrollY) { //down
            justinRef.current.style.left = parseFloat(justinPos) + scrollYGlobal * -1 + 'px';
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
        }
         else if (currentScrollY < scrollY && scrollYGlobal < '600') { //up
            justinRef.current.style.left = "";
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

        // mountain_2.style.left = parseFloat(mountain2Pos) + value * 1 + 'px';
        // mountain_3.style.left = parseFloat(mountain3Pos) + value * -0.75 + 'px';
      }


  return (
    <Container >
      {/* <Vignette /> */}
    <HeroText ref={subtitleTxtRef}>Passionate. Professional. Reliable.</HeroText>

      <Sky ref={skyRef} src="/img/Sky.png" data-speedx="0.33" data-speedy="0.33" data-speedz="0" data-rotation="0" className='parallax bg-img'/>
      {/* <Dove src="/img/Dove.png" className='parallax dove'/> */}
      {/* <Dove2 src="/img/Dove.gif" className='parallax dove'/> */}
      {/* Cloud Main */}
      <CloudMain_Back ref={cloudMainBackRef} src="/img/CloudMain-Back.png" data-speedx="0.15" data-speedy="0.16" data-speedz="0.125" data-rotation="0.01" className='parallax cloud-main-back'/>
      <CloudMain_Front ref={cloudMainFrontRef} src="/img/CloudMain-Front.png" data-speedx="0.01" data-speedy="0.02" data-speedz="0.53" data-rotation="0.2" className='parallax cloud-main-front'/>
      {/* Cloud Backgrounds */}
      <CloudBG_4 ref={cloudBG4} src="/img/CloudBG-4.png" data-speedx="0.287" data-speedy="0.305" data-speedz="0.03" data-rotation="0" className='parallax cloud-bg-4'/>
      <CloudBG_3 ref={cloudBG3} src="/img/CloudBG-3.png" data-speedx="0.285" data-speedy="0.299" data-speedz="0.045" data-rotation="0" className='parallax cloud-bg-3'/>
      <CloudBG_2 ref={cloudBG2} src="/img/CloudBG-2.png" data-speedx="0.271" data-speedy="0.284" data-speedz="0.033" data-rotation="0" className='parallax cloud-bg-2'/>
      <CloudBG_1 ref={cloudBG1} src="/img/CloudBG-1.png" data-speedx="0.282" data-speedy="0.3" data-speedz="0.041" data-rotation="0" className='parallax cloud-bg-1'/>
        {/* Items/Characters */}
      {/* <JesusFlag src="/img/JesusFlag.png" className='parallax jesus-flag'/> */}
      <Haunter ref={haunterRef} src="/img/Haunter.png" data-speedx="0.215" data-speedy="0.301" data-speedz="0.1" data-rotation="0.01" className='parallax haunter'/>
      <Boo ref={booRef} src="/img/Boo.png" data-speedx="0.215" data-speedy="0.276" data-speedz="0.1" data-rotation="0.01" className='parallax boo'/>

      <Bernard_Txt ref={bernardTxtRef} src="/img/Bernard-Text.png" data-speedx="0.1" data-speedy="0.134" data-speedz="0.25" data-rotation="0.02" className='parallax bernard-txt'/>
      <Justin_Txt ref={justinTxtRef} src="/img/Justin-Text.png" data-speedx="0.1" data-speedy="0.125" data-speedz="0.25" data-rotation="0.02"  className='parallax justin-txt'/>
      
      <JesusFlag2 ref={jesusFlagRef} src="/img/JesusFlag.gif" data-speedx="0.125" data-speedy="0.137" data-speedz="0.175" data-rotation="0.09" className='parallax jesus-flag'/>
      <Pipe ref={pipeRef} src="/img/Pipe.png" data-speedx="0.11" data-speedy="0.134" data-speedz="0.3" data-rotation="0.1" className='parallax pipe'/>
      <HelloKitty ref={helloKittyRef} src="/img/HelloKitty.png" data-speedx="0.11" data-speedy="0.15" data-speedz="0.3" data-rotation="0.1" className='parallax hello-kitty'/>
      <Toad ref={toadRef} src="/img/Toad.png" data-speedx="0.08" data-speedy="0.09" data-speedz="0.35" data-rotation="0.125" className='parallax toad'/>
      <Kart ref={kartRef} src="/img/Kart.png" data-speedx="0.08" data-speedy="0.088" data-speedz="0.35" data-rotation="0.125" className='parallax kart'/>
      <Joy ref={joyRef} src="/img/Joy.png" data-speedx="0.05" data-speedy="0.06" data-speedz="0.4" data-rotation="0.15" className='parallax joy'/>
      <Pikachu ref={pikachuRef} src="/img/Pikachu.png" data-speedx="0.05" data-speedy="0.064" data-speedz="0.4" data-rotation="0.15" className='parallax pikachu'/>
      <Mario ref={marioRef} src="/img/Mario.png" data-speedx="0.03" data-speedy="0.032" data-speedz="0.45" data-rotation="0.175" className='parallax mario'/>
      <MiniJesus ref={miniJesusRef} src="/img/MiniJesus.png" data-speedx="0.03" data-speedy="0.03" data-speedz="0.45" data-rotation="0.175" className='parallax mini-jesus'/>
      <Justin ref={justinRef} src="/img/Justin.png" data-speedx="0.01" data-speedy="0.02" data-speedz="0.53" data-rotation="0.2" className='parallax justin'/>


    </Container>
  )
}

export default Hero




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
