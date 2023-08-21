import React, { useState, useEffect }from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 2;
    transition: transform 0.3s ease, opacity 0.3s ease;

    .visible {
    transform: translateY(0);
    opacity: 1;
    }

    .hidden {
    transform: translateY(-100%);
    opacity: 0;
    }
`

const Image = styled.img`
    width: 100%;
    min-width: 1500px;
    text-align: center;
    cursor: pointer;
    `

const DarkBG = styled.div`
    z-index: 1;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    `

const MenuContainer = styled.div`
    position: fixed;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    width: 200px;
    height: 280px;
    `
const MenuImage = styled.img`
    width: inherit;
    height: inherit;
    object-fit: cover;
    `
const MenuItems = styled.ul`
    background-color: rgba(0, 0, 0, .3);
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
    a {
        font-weight:bold;
        color: #fff;
        font-size: 1.4rem;

    }
`

function NavBar() {
    //FLAG
    const [menuEnabled, setMenuEnabled] = useState(false);

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

      
      useEffect(() => {
        window.addEventListener('scroll', handleScroll, true);
        // Remove the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll, true);
        };
    }, [menuEnabled]);
    

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
    
        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

        setMenuEnabled(false);
    
        setPrevScrollPos(currentScrollPos);
    };

      
    const handleClick = () => {
        setMenuEnabled(!menuEnabled);
    }

  return (
    <>
    <Container className={`nav ${visible ? 'visible' : 'hidden'}`}>
        <Image src="/img/NavBar.png" onClick={() => handleClick()}/>
    </Container>

    {menuEnabled && (
    <>
        <DarkBG onClick={() => handleClick()} />
        <MenuContainer>
            <MenuImage src="/img/jesus-flag.png" />
            <MenuItems>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Works</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </MenuItems>
        </MenuContainer>
    </>
    )}
    </>
  )
}

export default NavBar
