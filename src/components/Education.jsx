import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    background-color: green;
    height: 100vh;
    scroll-snap-align: start;
`

function Education({ myRef }) {
  return (
    <Container ref={myRef}>
      Education
    </Container>
  )
}

export default Education
