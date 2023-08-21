import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
`
const Image = styled.img`
    width: 100%;
    min-width: 1440px;
    text-align: center;

`

function NavBar() {
  return (
    <Container>
        <Image src="/img/NavBar.png" />
    </Container>
  )
}

export default NavBar
