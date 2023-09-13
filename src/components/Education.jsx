import React from 'react'
import { styled } from 'styled-components'

const Section = styled.div`
    background-color: white;
    height: 100vh;
    position: relative;
    scroll-snap-align: start;
`
const Container = styled.div`
  padding: 1rem;
  position: relative;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  top: 6vw;
  h1 {
    text-align: center;
    font-style: italic;
    text-decoration: underline;
    margin-bottom: 1rem;
  }
  @media only screen and (max-width: 800px) {
    top: 3.5rem;
  }
`;

const Banner = styled.img`
  width: 40rem;
`;

function Education({ myRef }) {
  return (
    <Section ref={myRef}>
      <Container>
      <h1>Education</h1>
      <p>I graduated both Game Development (3 years) and Mobile App Design and Development (2 years), both with Honours!!!'</p>
      {/* <Banner src="/img/education/algonquin-college-justin.jpg"/> */}
      </Container>
    </Section>
  )
}

export default Education
