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
    }
`

function NavBar({ scrollYGlobal, 
                clickToWho, clickToSkills, clickToPortfolio, clickToEducation, clickToContact}) {
    //FLAG
    const [menuEnabled, setMenuEnabled] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);


    useEffect(() => {
        handleScroll();
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
        <Image  src="/img/NavBar.png" onClick={(e) => handleClick(e)}/>
    </Container>

    {menuEnabled && (
    <>
        <DarkBG onClick={() => setMenuEnabled(false)} />
        <MenuContainer >
            <MenuImage src="/img/Jesus-Banner.png" />
            <MenuItems>
                <li>
                    <p onClick={() => clickToWho()} >Who</p>
                </li>
                <li>
                    <p onClick={() => clickToSkills()} >Skills</p>
                </li>
                <li>
                    <p onClick={() => clickToPortfolio()} >Portfolio</p>
                </li>
                <li>
                    <p onClick={() => clickToEducation()} >Education</p>
                </li>
                <li>
                    <p onClick={() => clickToContact()} >Contact</p>
                </li>
            </MenuItems>
        </MenuContainer>
    </>
    )}

    </>
  )
}

export default NavBar
