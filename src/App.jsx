import { lazy, useState, useEffect, useRef } from 'react'
import './css/App.css'
import './css/Swiper.css'
import './css/Switch.css'
import './css/CloseButton.css'
import './css/Education.css'
import Hero from './components/Hero'
import DeferredSection from './components/DeferredSection'
import { styled } from 'styled-components'
import NavBar from './components/NavBar'

const Who = lazy(() => import('./components/Who'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));


const Wrapper = styled.main`
  height: 100vh;
  position: relative;
  background-color: red;
  `
const Container = styled.div`
  width: 100vw;
  height: 100vh; //100vh FOR OLD SCHOOL
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  /* touch-action: 'none'; */
  /* scroll-behavior: auto; */
  background-color: lightblue;
  /* background-color: lightblue; */
  place-items: center;
  overflow-y: ${(props) => (props.hideOverflow ? 'hidden' : 'scroll')}; //auto?
  overflow-x: hidden;
  /* overflow-y: hidden; */
  position: relative;
  /* left: 50%;
  transform: translateX(-50%); */
`

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [hideOverflow, setHideOverflow] = useState(false);

  const [menuVisible, setMenuVisible] = useState(false);

  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const whoRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  const [refReached, setRefReached] = useState(false);

  useEffect(() => {
    // devicePixelRatio = 0.001;
    //   setTimeout(function(){
    //     window.scrollTo(0, 1);
    // }, 500);
  }, [])

  
  // OLD //////////////////////////////
  const handleScroll = (event) => {
    const scrollTop = event.target.scrollTop;
    setScrollY(scrollTop);
  };


  const scrollToHero = () => {
    heroRef.current.scrollIntoView({ behavior: 'smooth' });
  }
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
    contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    // <Wrapper>
    <Container ref={containerRef} onScroll={handleScroll} hideOverflow={hideOverflow}>
      <NavBar 
              menuVisible={menuVisible}
              setMenuVisible={setMenuVisible}
              scrollYGlobal={scrollY} 
              clickToWho={scrollToWho}
              clickToSkills={scrollToSkills}
              clickToPortfolio={scrollToPortfolio}
              clickToEducation={scrollToEducation}
              clickToContact={scrollToContact}
              />
      <Hero myRef={heroRef} scrollYGlobal={scrollY} 
                            clickToContact={scrollToContact}
                            scrollToHero={scrollToHero} 
                            whoRef={whoRef} 
                            setRefReached={setRefReached}/>
      <DeferredSection component={Who} label="About Me" myRef={whoRef} scrollYGlobal={scrollY}
              scrollToWho={scrollToWho} 
              setRefReached={setRefReached}/>
      <DeferredSection component={Skills} label="skills" myRef={skillsRef} scrollYGlobal={scrollY} scrollToSkills={scrollToSkills}
                  setRefReached={setRefReached} />
      <DeferredSection component={Projects} label="projects" myRef={portfolioRef}
                menuVisible={menuVisible}
                scrollYGlobal={scrollY} 
                scrollToSkills={scrollToSkills} 
                scrollToEducation={scrollToEducation}
                setHideOverflow={setHideOverflow} 
                scrollToPortfolio={scrollToPortfolio}
                setRefReached={setRefReached}
                />
      <DeferredSection component={Education} label="education" myRef={educationRef} scrollYGlobal={scrollY}
                  scrollToPortfolio={scrollToPortfolio}
                  scrollToEducation={scrollToEducation}
                  scrollToContact={scrollToContact}
                  setRefReached={setRefReached}
                  />
      <DeferredSection component={Contact} label="contact" myRef={contactRef} educationRef={educationRef}
                scrollToContact={scrollToContact} scrollYGlobal={scrollY}
                setRefReached={setRefReached} />
      {/* <WebgiViewer scrollYGlobal={scrollY}/> */}
    </Container>
    // </Wrapper>
  )
}

export default App
