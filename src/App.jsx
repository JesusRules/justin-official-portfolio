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
  scroll-behavior: smooth;
  background-color: lightblue;
  place-items: center;
  position: relative;
  overflow-y: ${(props) => (props.hideOverflow ? 'hidden' : 'auto')};
  overflow-x: hidden;
`

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [hideOverflow, setHideOverflow] = useState(false);

  const whoRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    devicePixelRatio = 0.001;
    setTimeout(function(){
      // This hides the address bar:
      window.scrollTo(0, 1);
  }, 0);
  }, [])

  const handleScroll = (event) => {
    const scrollTop = event.target.scrollTop;
    setScrollY(scrollTop);
  };


  const scrollToWho = () => {
    whoRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  const scrollToSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  const scrollToPortfolio = () => {
    portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  const scrollToEducation = () => {
    educationRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Container onScroll={handleScroll} hideOverflow={hideOverflow}>
      <NavBar scrollYGlobal={scrollY} 
              clickToWho={scrollToWho}
              clickToSkills={scrollToSkills}
              clickToPortfolio={scrollToPortfolio}
              clickToEducation={scrollToEducation}
              clickToContact={scrollToContact}
              />
      <Hero scrollYGlobal={scrollY} clickToContact={scrollToContact}/>
      <Who myRef={whoRef}/>
      <Skills myRef={skillsRef} scrollYGlobal={scrollY}/>
      <Projects myRef={portfolioRef} scrollYGlobal={scrollY} 
                scrollToSkills={scrollToSkills} 
                scrollToEducation={scrollToEducation}
                setHideOverflow={setHideOverflow} />
      <Education myRef={educationRef} scrollYGlobal={scrollY} 
                  scrollToPortfolio={scrollToPortfolio}
                  scrollToContact={scrollToContact}
                  />
      <Contact myRef={contactRef} educationRef={educationRef} scrollYGlobal={scrollY}/>
      {/* <WebgiViewer scrollYGlobal={scrollY}/> */}
    </Container>
  )
}

export default App