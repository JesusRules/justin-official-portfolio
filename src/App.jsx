import { useState, useEffect, useRef } from 'react'
import './css/App.css'
import './css/Swiper.css'
import './css/Switch.css'
import './css/CloseButton.css'
import './css/Education.css'
import Skills from './components/Skills'
import Hero from './components/Hero'
import Who from './components/Who'
import Education from './components/Education'
import Contact from './components/Contact'
import { styled } from 'styled-components'
import Projects from './components/Projects'
import NavBar from './components/NavBar'
import Lenis from '@studio-freight/lenis'
import WebgiViewer from './components/WebgiViewer'
import gsap from 'gsap';
import { useGLTF } from '@react-three/drei'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  scroll-snap-type: y mandatory;
  /* scroll-behavior: smooth; */
  /* touch-action: 'none'; */
  scroll-behavior: auto;
  scroll-snap-stop: 0.000000000001;
  background-color: lightblue;
  /* background-color: lightblue; */
  place-items: center;
  position: relative;
  overflow-y: ${(props) => (props.hideOverflow ? 'hidden' : 'auto')};
  overflow-x: hidden;
  /* overflow-y: hidden; */
`

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [hideOverflow, setHideOverflow] = useState(false);

  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const whoRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // devicePixelRatio = 0.001;
      setTimeout(function(){
        window.scrollTo(0, 1);
    }, 500);

    setInterval(function () {
      containerRef.current.focus();
      console.log(containerRef.current);
    }, 1000); 
  }, [])

  

  const handleScroll = (event) => {
    const scrollTop = event.target.scrollTop;
    setScrollY(scrollTop);
  };


  const scrollToHero = () => {
    heroRef.current.scrollIntoView({ behavior: 'smooth' });
    heroRef.current.focus();
    console.log("JESUS!")
  }
  const scrollToWho = () => {
    whoRef.current.scrollIntoView({ behavior: 'smooth' });
    whoRef.current.focus();
  }
  const scrollToSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: 'smooth' });
    skillsRef.current.focus();
  }
  const scrollToPortfolio = () => {
    portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
    portfolioRef.current.focus();
  }
  const scrollToEducation = () => {
    educationRef.current.scrollIntoView({ behavior: 'smooth' });
    educationRef.current.focus();
  }
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
    contactRef.current.focus();
  }


  return (
    <Container ref={containerRef} onScroll={handleScroll} hideOverflow={hideOverflow}>
      <NavBar scrollYGlobal={scrollY} 
              clickToWho={scrollToWho}
              clickToSkills={scrollToSkills}
              clickToPortfolio={scrollToPortfolio}
              clickToEducation={scrollToEducation}
              clickToContact={scrollToContact}
              />
      <Hero myRef={heroRef} scrollYGlobal={scrollY} 
                            clickToContact={scrollToContact}
                            scrollToHero={scrollToHero} />
      <Who myRef={whoRef} scrollYGlobal={scrollY}
              scrollToWho={scrollToWho} />
      <Skills myRef={skillsRef} scrollYGlobal={scrollY} scrollToSkills={scrollToSkills}/>
      <Projects myRef={portfolioRef} scrollYGlobal={scrollY} 
                scrollToSkills={scrollToSkills} 
                scrollToEducation={scrollToEducation}
                setHideOverflow={setHideOverflow} 
                scrollToPortfolio={scrollToPortfolio}
                />
      <Education myRef={educationRef} scrollYGlobal={scrollY} 
                  scrollToPortfolio={scrollToPortfolio}
                  scrollToEducation={scrollToEducation}
                  scrollToContact={scrollToContact}
                  />
      <Contact myRef={contactRef} educationRef={educationRef} 
                scrollToContact={scrollToContact} scrollYGlobal={scrollY} />
      {/* <WebgiViewer scrollYGlobal={scrollY}/> */}
    </Container>
  )
}

export default App