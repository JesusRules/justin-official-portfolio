import React, { useState, useEffect }from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    left: 0;
    right: 0;
    top: -1rem;
    z-index: 9999;
    transition: transform 0.3s ease, opacity 0.3s ease;
    user-select: none;
`

const Image = styled.img`
    width: 100%;
    min-width: 1200px; //1500px
    text-align: center;
    cursor: pointer;
    `

const DarkBG = styled.div`
    z-index: 9997;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    cursor: pointer;
    transition: transform 0.3s ease, opacity 0.3s ease;
`

const MenuContainer = styled.div`
    position: fixed;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9998;
    width: 270px;
    height: 400px;
    `
const MenuImage = styled.img`
    width: inherit;
    height: inherit;
    object-fit: cover;
    `
const MenuItems = styled.ul`
    position: absolute;
    top: 2vw;
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
    p {
        font-weight:bold;
        color: #fff;
        font-size: 1.5rem;
        text-decoration: none;
        line-height: 2.6rem;
        cursor: pointer;

        text-decoration: none;
        transition: text-decoration 0.3s ease-in-out;

    }
    p:hover {
    text-decoration: underline;
    }
`

function NavBar({ scrollYGlobal, 
                clickToWho, clickToSkills, clickToPortfolio, clickToEducation, clickToContact}) {
    //FLAG
    const [menuEnabled, setMenuEnabled] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [])

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

  return (
    <>
    <Container className={`nav ${visible ? 'visible' : 'hidden'}`}>
        <Image  src="/img/hero-banner/NavBar.png" onClick={(e) => handleClick(e)}/>
    </Container>

    {menuEnabled && (
    <>
        <DarkBG onClick={() => setMenuEnabled(false)} />
        <MenuContainer >
            <MenuImage src="/img/hero-banner/Jesus-Banner.png" />
            <MenuItems>
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
