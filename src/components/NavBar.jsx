import React, { useState, useEffect }from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 9999;
    transition: transform 0.3s ease, opacity 0.3s ease;
`

const Image = styled.img`
    width: 100%;
    min-width: 1500px;
    text-align: center;
    cursor: pointer;
    `

const DarkBG = styled.div`
    z-index: 9997;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transition: transform 0.3s ease, opacity 0.3s ease;
`

const MenuContainer = styled.div`
    position: fixed;
    top: 32px;
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
        font-size: 1.5rem;
        text-decoration: none;
        line-height: 2.6rem;
    }
`

function NavBar() {
    //FLAG
    const [menuEnabled, setMenuEnabled] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

      
    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        // setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10); //GOOD
        
        if (prevScrollPos > currentScrollPos) {
            // UP
            setVisible(true);
        } else {
            // DON
            setMenuEnabled(false);
            setVisible(false);
        }

        setPrevScrollPos(currentScrollPos);
    };
    

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

      
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
        <DarkBG onClick={() => setMenuEnabled(false)} />
        <MenuContainer >
            <MenuImage src="/img/Jesus-Banner.png" />
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
