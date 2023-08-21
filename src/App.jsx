import { useState } from 'react'
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
  min-height: 100vh;
  overflow-x: hidden;
  background-color: lightblue;
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <NavBar />
      <Hero />
      <Skills />
      <Who />
      <Projects />
      <Education />
      <Contact />
      <Container />
    </Container>
  )
}

export default App
