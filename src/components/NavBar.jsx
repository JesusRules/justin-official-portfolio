import React, { useState, useEffect, useRef }from 'react'
import { styled } from 'styled-components'
import gsap from 'gsap';

const Container = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    left: 0;
    right: 0;
    top: -1rem;
    z-index: 9999000;
    transition: transform 0.3s ease, opacity 0.3s ease;
    user-select: none;
`

const SImage = styled.img`
    width: 100%;
    min-width: 3600px; //1200px
    text-align: center;
    cursor: pointer;
    `

const DarkBG = styled.div`
    z-index: 9997000;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    cursor: pointer;
    transition: transform 0.3s ease, opacity 0.3s ease;
`

const MenuContainer = styled.nav`
    position: fixed;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9998000;
    width: 270px;
    height: 400px;
    `
const MenuImage = styled.img`
    width: inherit;
    height: inherit;
    object-fit: cover;
    position: relative;
    top: 1rem;
    `
const MenuItems = styled.ul`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    text-decoration: none;
    list-style: none;
    opacity: 0;
    p {
        font-weight:bold;
        color: #fff;
        font-size: 1.5rem;
        text-decoration: none;
        line-height: 2.6rem;
        cursor: pointer;

        text-decoration: none;
        // transition: text-decoration 0.3s ease-in-out;
        position: relative;

    }
    p:hover {
    // text-decoration: underline;
    }
    p:after {    
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: #fff;
        transition: width 0.1s ease 0s, left 0.1s ease 0s;
        width: 0;
      }
      p:hover:after { 
        width: 100%; 
        left: 0; 
      }
`

function NavBar({ scrollYGlobal, 
                clickToWho, clickToSkills, clickToPortfolio, clickToEducation, clickToContact}) {
    //FLAG
    const [menuEnabled, setMenuEnabled] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    // const [gifUrl, setGifUrl] = useState("/img/navbar/Banner-Render-2.gif");
    const [gifReady, setGifReady] = useState(false);
    const menuItemsRef = useRef();

    const gifUrl = menuEnabled
    ? "/img/navbar/Banner-Render-2-Faster.gif"
    : "/img/navbar/Banner-Render-3.gif";

    useEffect(() => {
      setGifReady(false);
      const img = new Image();
      img.src = gifUrl;
      img.onload = () => setGifReady(true);
    }, [gifUrl]);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [])

    useEffect(() => {
      const img = new Image();
      img.src = "/img/navbar/Banner-Render-2.gif";
      img.onload = () => setGifReady(true);
    }, []);

    const handleMouseMove = (event) => {
        const mouseY = event.clientY;
        if (mouseY <= 10) {
            setVisible(true);
        }
    }


    useEffect(() => {
        if (window.innerWidth > 700) {
            handleScroll();
        }
    }, [scrollYGlobal])
      
    const handleScroll = () => {
        const currentScrollPos = scrollYGlobal;
        // setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10); //GOOD
        
        if (prevScrollPos > currentScrollPos) {
            // UP
            setVisible(true);
        } else if (prevScrollPos < currentScrollPos) {
            // DON
            setMenuEnabled(false);
            setVisible(false);
        }

        setPrevScrollPos(currentScrollPos);
    };
      
    const handleClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setMenuEnabled(!menuEnabled);
    }
    
    useEffect(() => {
      if (!menuEnabled) return;
      gsap.set(menuItemsRef.current, { opacity: 0 });
      gsap.to(menuItemsRef.current, { opacity: 1, duration: 1 });
    }, [menuEnabled]);
    
    // useEffect(() => {
    //     if (menuEnabled === true) {
    //         setGifUrl("/img/navbar/Banner-Render-2-Faster.gif")
    //         gsap.to(menuItemsRef.current, {
    //             opacity: 1,
    //             duration: 1,
    //         })
    //     }
    //     if (menuEnabled === false) {
    //         setGifUrl("/img/navbar/Banner-Render-3.gif")
    //     }
        
    // }, [menuEnabled])

  return (
    <>
    <Container className={`nav ${visible ? 'visible' : 'hidden'}`}>
        <SImage  src="/img/navbar/NavBar.png" onClick={(e) => handleClick(e)}/>
    </Container>

    {menuEnabled && (
    <>
        <DarkBG onClick={() => setMenuEnabled(false)} />
        <MenuContainer>
            {/* <MenuImage src={gifUrl}/> */}
            {gifReady && <MenuImage src={gifUrl} />}
            
            <MenuItems ref={menuItemsRef}>
                <li>
                    <p onClick={() => {
                        clickToWho();
                        setMenuEnabled(false);
                    }} >Who Am I?</p>
                </li>
                <li>
                    <p onClick={() => {
                        clickToSkills();
                        setMenuEnabled(false);
                    }} >Skills</p>
                </li>
                <li>
                    <p onClick={() => {
                        clickToPortfolio();
                        setMenuEnabled(false);
                    }} >Portfolio</p>
                </li>
                {/* <li>
                    <p onClick={() => clickToPortfolio()} >Services</p>
                </li> */}
                <li>
                    <p onClick={() => {
                        clickToEducation();
                        setMenuEnabled(false);
                    }} >Education</p>
                </li>
                <li>
                    <p onClick={() => {
                        clickToContact();
                        setMenuEnabled(false);
                    }} >Contact</p>
                </li>
            </MenuItems>
        </MenuContainer>
    </>
    )}

    </>
  )
}

export default NavBar
