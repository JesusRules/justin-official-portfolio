import React, { useState }from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    `
const Image = styled.img`
    z-index: 2;
    width: 100%;
    min-width: 1460px;
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

function NavBar() {
    const [backGroundEnabled, setBackGroundEnabled] = useState(false);

    const handleClick = () => {
        setBackGroundEnabled(!backGroundEnabled);
    }

  return (
    <>
    {backGroundEnabled && (
        <DarkBG onClick={() => handleClick()}>
        </DarkBG>
    )}
    <Container>
        <Image src="/img/NavBar.png" onClick={() => handleClick()}/>
    </Container>
    </>
  )
}

export default NavBar
