import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    background-color: lightblue;
    height: 100vh;
    scroll-snap-align: start;
`

function Who({ myRef }) {
  return (
    <Container ref={myRef}>
      Who
    </Container>
  )
}

export default Who
