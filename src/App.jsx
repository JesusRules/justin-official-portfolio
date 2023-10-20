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


const Wrapper = styled.main`
  height: 100vh;
  position: relative;
  background-color: red;
  `
const Container = styled.div`
  width: 100vw;
  height: 100%; //100vh FOR OLD SCHOOL
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  /* touch-action: 'none'; */
  /* scroll-behavior: auto; */
  background-color: lightblue;
  /* background-color: lightblue; */
  place-items: center;
  /* position: relative; */
  overflow-y: ${(props) => (props.hideOverflow ? 'hidden' : 'auto')};
  overflow-x: hidden;
  /* overflow-y: hidden; */
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

  useEffect(() => {
    // devicePixelRatio = 0.001;
    //   setTimeout(function(){
    //     window.scrollTo(0, 1);
    // }, 500);
  }, [])

  // NEW ATTEMPT TO LOCK ON EACH DIV
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollDivRefs = useRef([]);

  useEffect(() => {
    scrollDivRefs.current = Array.from(containerRef.current.querySelectorAll('.main-div'));
  }, []);

  useEffect(() => {
    if (scrollDivRefs.current) {
      console.log("FIRST", scrollDivRefs.current)
    }
  }, [scrollDivRefs.current])

  // Function to scroll to a specific div
  const scrollToIndex = (index) => {
    if (index >= 0 && index < scrollDivRefs.current.length) {
      setCurrentIndex(index);
      scrollDivRefs.current[2].scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = (e) => {
      if (e.target.scrollTop > 0) {
        console.log(e.target.scrollTop)
        // Scrolling down
        scrollToIndex(currentIndex + 1);
      } else {
        // Scrolling up
        scrollToIndex(currentIndex - 1);
      }
    };
    containerRef.current.addEventListener('scroll', handleScroll);
    return () => {
      containerRef.current.removeEventListener('scroll', handleScroll);
    };
  }, [currentIndex]);




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
    <Wrapper>
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
                            whoRef={whoRef} />
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
    </Wrapper>
  )
}

export default App