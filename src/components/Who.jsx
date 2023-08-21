import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    background-color: lightblue;
    height: 100vh;
    scroll-snap-align: start;
`

function Who() {
  return (
    <Container>
      Who
    </Container>
  )
}

export default Who
