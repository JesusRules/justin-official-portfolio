import { useState, useEffect, useRef, useCallback  } from 'react'
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
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  }


  return (
    // <Wrapper>
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
                            scrollToHero={scrollToHero} 
                            whoRef={whoRef} 
                            setRefReached={setRefReached}/>
      <Who myRef={whoRef} scrollYGlobal={scrollY}
              scrollToWho={scrollToWho} 
              setRefReached={setRefReached}/>
      <Skills myRef={skillsRef} scrollYGlobal={scrollY} scrollToSkills={scrollToSkills}
                  setRefReached={setRefReached} />
      <Projects myRef={portfolioRef} scrollYGlobal={scrollY} 
                scrollToSkills={scrollToSkills} 
                scrollToEducation={scrollToEducation}
                setHideOverflow={setHideOverflow} 
                scrollToPortfolio={scrollToPortfolio}
                setRefReached={setRefReached}
                />
      <Education myRef={educationRef} scrollYGlobal={scrollY} 
                  scrollToPortfolio={scrollToPortfolio}
                  scrollToEducation={scrollToEducation}
                  scrollToContact={scrollToContact}
                  setRefReached={setRefReached}
                  />
      <Contact myRef={contactRef} educationRef={educationRef} 
                scrollToContact={scrollToContact} scrollYGlobal={scrollY}
                setRefReached={setRefReached} />
      {/* <WebgiViewer scrollYGlobal={scrollY}/> */}
    </Container>
    // </Wrapper>
  )
}

export default App



  // good
  // const [refIndex, setRefIndex] = useState(0);
  
  // const sectionRefs = [
  //   heroRef,
  //   whoRef,
  //   skillsRef,
  //   portfolioRef,
  //   educationRef,
  //   contactRef,
  // ];
  
  // const scrollToSection = (sectionRef) => {
  //   const container = containerRef.current;
  //   const scrollTo = sectionRef.current.offsetTop;
  //   container.scrollTo({ top: scrollTo, behavior: 'smooth' });
  // };

  // useEffect(() => {
  //   const handleWheel = (e) => {
  //     e.preventDefault();
  //     if (e.deltaY > 0) {
  //       setRefIndex((prevIndex) => Math.min(prevIndex + 1, 5));
  //     }
  //     if (e.deltaY < 0) {
  //       setRefIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  //     }
  //   };
  //   window.addEventListener('wheel', handleWheel);
  //   return () => {
  //     window.removeEventListener('wheel', handleWheel);
  //   };
  // }, []);
  

  // useEffect(() => {
  //   if (refIndex !== null) { // Check if refIndex is not null
  //     // Ensure refIndex stays within the desired range
  //     setRefIndex((prevIndex) => Math.min(Math.max(prevIndex, 0), 5));
  //     console.log(refIndex);
  //     scrollToSection(sectionRefs[refIndex]);
  //   }
  // }, [refIndex]);