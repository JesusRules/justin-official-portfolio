import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    background-color: brown;
    height: 100vh;
    scroll-snap-align: start;
`

function Contact({ myRef }) {
  return (
    <Container ref={myRef}>
      Contact
    </Container>
  )
}

export default Contact
