import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Skills from './components/Skills'
import Hero from './components/Hero'
import Who from './components/Who'
import Education from './components/Education'
import Contact from './components/Contact'
import { styled } from 'styled-components'
import Projects from './components/Projects'
import NavBar from './components/NavBar'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  /* height: 100vh; */
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  background-color: lightblue;
  place-items: center;
  position: relative;
  overflow-y: auto; 
  overflow-x: hidden;
`

function App() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = (event) => {
    const scrollTop = event.target.scrollTop;
    setScrollY(scrollTop);
  };

  return (
    <Container onScroll={handleScroll}>
      <NavBar scrollYGlobal={scrollY} />
      <Hero scrollYGlobal={scrollY} />
      <Skills />
      <Projects />
      <Who />
      <Education />
      <Contact />
    </Container>
  )
}

export default App
