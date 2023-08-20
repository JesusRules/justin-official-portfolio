import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Skills from './components/Skills'
import Hero from './components/Hero'
import Who from './components/Who'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Skills />
      <Who />
      <Education />
      <Contact />
    </>
  )
}

export default App
