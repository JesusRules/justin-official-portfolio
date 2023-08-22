import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    background-color: #fff;
    height: 100vh;
    scroll-snap-align: start;
`

function Skills() {
  return (
    <Container>
      Skills!!
    </Container>
  )
}

function InfiniteScroller() {
    return (
        <div className='logos'>
            <div className='logos-slide'>
                
            </div>
        </div>
    )
}

export default Skills
