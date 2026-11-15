import { lazy, useState, useEffect, useRef, useCallback } from 'react'
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
  const whoLoadRef = useRef(null);
  const skillsLoadRef = useRef(null);
  const portfolioLoadRef = useRef(null);
  const educationLoadRef = useRef(null);
  const contactLoadRef = useRef(null);
  const [heroReady, setHeroReady] = useState(false);
  const onHeroReady = useCallback(() => setHeroReady(true), []);
  const navigation = useRef(0);
  const cancelPendingNavigation = useCallback(() => { navigation.current += 1; }, []);

  const [refReached, setRefReached] = useState(false);

  useEffect(() => {
    const onKeyDown = event => {
      if (event.defaultPrevented || event.ctrlKey || event.metaKey || event.altKey) return;
      const target = event.target;
      if (target instanceof HTMLElement && (
        target.isContentEditable || target.matches('input, textarea, select') ||
        (event.key === ' ' && target.closest('button, a, [role="button"]'))
      )) return;
      if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(event.key)) {
        cancelPendingNavigation();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [cancelPendingNavigation]);

  useEffect(() => {
    if (!heroReady) return;
    let cancelled = false;
    // Let the hero paint first, then prepare the small sections in order.
    // Projects prepares on approach or when selected in the menu.
    const timer = setTimeout(async () => {
      for (const section of [whoLoadRef, skillsLoadRef, educationLoadRef]) {
        if (cancelled) break;
        await section.current.prepare();
      }
    }, 0);
    return () => { cancelled = true; clearTimeout(timer); };
  }, [heroReady]);

  
  // Scroll notifications also come from smooth scrolling and browser snapping.
  // Only new user input or another destination should cancel a pending menu jump.
  const handleScroll = (event) => {
    setScrollY(event.currentTarget.scrollTop);
  };


  const scrollToSection = async (section, loader) => {
    const request = ++navigation.current;
    // Direct navigation keeps the current screen until the destination is ready.
    await loader.current.prepare();
    if (navigation.current === request) {
      section.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const scrollToWho = () => scrollToSection(whoRef, whoLoadRef);
  const scrollToSkills = () => scrollToSection(skillsRef, skillsLoadRef);
  const scrollToPortfolio = () => scrollToSection(portfolioRef, portfolioLoadRef);
  const scrollToEducation = () => scrollToSection(educationRef, educationLoadRef);
  const scrollToContact = () => scrollToSection(contactRef, contactLoadRef);

  return (
    // <Wrapper>
    <Container ref={containerRef} onScroll={handleScroll} hideOverflow={hideOverflow}
              onWheelCapture={cancelPendingNavigation}
              onTouchMoveCapture={cancelPendingNavigation}
              onPointerDownCapture={cancelPendingNavigation}>
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
      <Hero myRef={heroRef} scrollYGlobal={scrollY} onReady={onHeroReady}
                            clickToContact={scrollToContact}
                            whoRef={whoRef} 
                            setRefReached={setRefReached}/>
      <DeferredSection component={Who} label="About Me" myRef={whoRef} scrollYGlobal={scrollY}
              loadRef={whoLoadRef} canPrepare={heroReady} backdrop="/img/hero-banner/blue-sky-2.jpg"
              setRefReached={setRefReached}/>
      <DeferredSection component={Skills} label="skills" myRef={skillsRef} scrollYGlobal={scrollY}
                  loadRef={skillsLoadRef} canPrepare={heroReady} backdrop="/img/hero-banner/blue-sky-2.jpg"
                  setRefReached={setRefReached} />
      <DeferredSection component={Projects} label="projects" myRef={portfolioRef}
                loadRef={portfolioLoadRef} canPrepare={heroReady} backdrop="/img/projects/misc/background.jpg"
                menuVisible={menuVisible}
                scrollYGlobal={scrollY} 
                scrollToSkills={scrollToSkills} 
                scrollToEducation={scrollToEducation}
                setHideOverflow={setHideOverflow} 
                scrollToPortfolio={scrollToPortfolio}
                setRefReached={setRefReached}
                />
      <DeferredSection component={Education} label="education" myRef={educationRef} scrollYGlobal={scrollY}
                  loadRef={educationLoadRef} canPrepare={heroReady} backdrop="/img/education/algonquin-college.jpg"
                  scrollToPortfolio={scrollToPortfolio}
                  scrollToEducation={scrollToEducation}
                  scrollToContact={scrollToContact}
                  setRefReached={setRefReached}
                  />
      <DeferredSection component={Contact} label="contact" myRef={contactRef} educationRef={educationRef}
                loadRef={contactLoadRef} canPrepare={heroReady} backdrop="/img/contact/contact-background-blur.jpg"
                scrollToContact={scrollToContact} scrollYGlobal={scrollY}
                setRefReached={setRefReached} />
      {/* <WebgiViewer scrollYGlobal={scrollY}/> */}
    </Container>
    // </Wrapper>
  )
}

export default App
