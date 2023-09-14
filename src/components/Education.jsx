import React, { useEffect, useRef } from 'react'
import { styled } from 'styled-components'
import gsap from 'gsap';

const Section = styled.div`
    background-color: white;
    height: 100vh;
    position: relative;
    scroll-snap-align: start;
    // background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/img/education/algonquin-college.jpg");
    // background-image: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.0)), url("/img/education/algonquin-college.jpg");
    // background-image: url("/img/education/algonquin-college.jpg");
    background-repeat: no-repeat;
    background-size: cover;
`
const Container = styled.div`
  position: relative;
  width: 100%;
  // max-width: 1100px;
  // top: 6vw;
  margin: 0 auto;
  text-align: center;
  h1 {
    font-style: italic;
    margin-bottom: 1.2rem;
  }
  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity here */
    opacity: 0; /* Start with 0 opacity */
    pointer-events: none; /* Allow clicks to pass through the overlay */
    transition: opacity 0.3s ease; /* Add a smooth transition */
  }

  @media only screen and (max-width: 800px) {
    // top: 3.5rem;
  }
`;

const Banner = styled.img`
  // width: 40rem;
  width: 100%;
  object-fit: cover;
  height: 15rem;
`;

const GameDevelopment = styled.div`

`

const MADD = styled.div`

`

function Education({ myRef, scrollYGlobal }) {
  const overlayRef = useRef();

  useEffect(() => {
    const divElement = myRef.current;
    const halfwayPoint = divElement.scrollHeight / 5;
   
      if (Math.round(scrollYGlobal) == divElement.offsetTop) {
        OnViewed();
      }
      // if (scrollYGlobal > divElement.offsetTop || scrollYGlobal < divElement.offsetTop) {
      // }
    }, [scrollYGlobal])

    const OnViewed = () => {
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3 });
    }


  return (
    <Section ref={myRef}>
      <Container>
        <div ref={overlayRef} className="overlay"></div>
        <img src="/img/education/algonquin-college.jpg" alt="Background Image" className="background-image" />

      {/* <Banner src="/img/education/algonquin-college.jpg"/> */}
      {/* <h1>Education</h1> */}
      </Container>
    </Section>
  )
}

export default Education
