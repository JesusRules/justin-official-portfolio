import React, { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
import gsap from 'gsap';
import '../App.css'
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import InfiniteImageScroller from './threejsscripts/InfiniteImageScroller'
import { Canvas } from '@react-three/fiber'

const Container = styled.div`
    background-color: #ceeeff;
    height: 100vh;
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.0)),
                  url("/img/blue-sky-4.jpg");
    /* background-image: url("/img/blue-sky-2.jpg"); */
    background-repeat: no-repeat;
    background-size: cover;
`

const Title = styled.h1`
    color: black;
    text-align: center;
    margin: 1rem;
    font-style: italic;
    margin-bottom: 3rem;
    font-weight: 800;
`;

const Subtitle = styled.h2`
    color: black;
    text-align: center;
    font-size: 1.1rem;
    text-transform: uppercase;
    max-width: 1100px;
    width: 100%;
    margin: 0 auto 0.2rem auto;
    padding-left: .5rem;
    font-weight: 800;
`;


function Skills() {

  return (
    <Container>
      <Title>All the languages, software, technologies I know!</Title>
      {/* <Canvas>
        <InfiniteImageScroller images={images}/>
    </Canvas> */}

    <Subtitle>Coding Languages</Subtitle>
    <HorizontalImageLoopComponent1 _images={imagesLanguages} _isReversed={false} />
    
    <Subtitle>App development</Subtitle>
    <HorizontalImageLoopComponent2 _images={imagesApps} _isReversed={true} />
    
    <Subtitle>Media/Game creation</Subtitle>
    <HorizontalImageLoopComponent3 _images={imagesMedia} _isReversed={false} />
    </Container>
  )
}



const imagesApps = [
    '/logos/app-development/adobe-xd.png',
    '/logos/app-development/amplify.png',
    '/logos/app-development/android-studio.png',
    '/logos/app-development/asp.net.png',
    '/logos/app-development/aws-logo.png',
    '/logos/app-development/express.png',
    '/logos/app-development/figma.png',
    '/logos/app-development/firebase.png',
    '/logos/app-development/flutter.png',
    '/logos/app-development/gsap.png',
    '/logos/app-development/hostinger.png',
    '/logos/app-development/knockoutjs.png',
    '/logos/app-development/mongodb.png',
    '/logos/app-development/mysql.png',
    '/logos/app-development/net-maui-logo.png',
    '/logos/app-development/netlify.png',
    '/logos/app-development/nextjs.png',
    '/logos/app-development/nodejs.png',
    '/logos/app-development/postgres.png',
    '/logos/app-development/react-native.png',
    '/logos/app-development/react-redux.png',
    '/logos/app-development/react.png',
    '/logos/app-development/styled-components.png',
    '/logos/app-development/supabase.png',
    '/logos/app-development/tailwindcss.png',
    '/logos/app-development/threejs.png',
    '/logos/app-development/vercel.png',
    '/logos/app-development/vite-react.png'
];

const imagesMedia = [
    '/logos/media-development/adobe-dimension.webp',
    '/logos/media-development/audition.webp',
    '/logos/media-development/blender.png',
    '/logos/media-development/flstudio.jpg',
    '/logos/media-development/gamemaker2.png',
    '/logos/media-development/illustrator.jpg',
    '/logos/media-development/maya.png',
    '/logos/media-development/mirror.jpg',
    '/logos/media-development/photon-fusion.webp',
    '/logos/media-development/photoshop.png',
    '/logos/media-development/pun2.jpg',
    '/logos/media-development/unity.jpg',
    '/logos/media-development/unreal-engine.png',
    '/logos/media-development/zbrush.png',
];

const imagesLanguages = [
    '/logos/languages/c++.png',
    '/logos/languages/css.png',
    '/logos/languages/dart.png',
    '/logos/languages/html.png',
    '/logos/languages/javascript.png',
    '/logos/languages/kotlin.png',
    '/logos/languages/php.png',
    '/logos/languages/solidity.png',
    '/logos/languages/swift.png',
    '/logos/languages/typescript.png',
];


const HorizontalImageLoopComponent1 = ({ _images, _isReversed }) => {
    const sliderWrapper = useRef(null);
    let isMouseDown = false;
    let scrubStartAt = 0; // Store the time where scrubbing started
    const isReversed = _isReversed;
    let timeline;

    useEffect(() => {
        const boxes = gsap.utils.toArray(".images1");
        const items = document.querySelectorAll(".images1");
        
        // Create array of colors
        // const colors = ["#f38630","#6fb936", "#ccc", "#6fb936"];
        const colors = ["#f2f2f2"];
        
        // Apply colors to boxes - one after the other
        gsap.set(boxes , {
            backgroundColor: gsap.utils.wrap(colors)
        });
        
        // const items = document.querySelectorAll(".box");
      const config = {
          repeat: -1,
          speed: 1,
          snap: 1,
          reversed: false,
          // Add the paddingBetween property here
        };
        
        timeline = horizontalLoop(items, config);

        setTimeout(() => {
            if (isReversed) {
                timeline.timeScale(-1)
            }
          }, "0");
        
        sliderWrapper.current.addEventListener('mousedown', handleMouseDown);
        sliderWrapper.current.addEventListener('mouseleave', handleMouseUp);
        sliderWrapper.current.addEventListener('mousemove', handleMouseMove);
        sliderWrapper.current.addEventListener('mouseup', handleMouseUp);

        sliderWrapper.current.addEventListener('touchstart', handleTouchDown);
        sliderWrapper.current.addEventListener('touchmove', handleTouchMove);
        sliderWrapper.current.addEventListener('touchend', handleTouchUp);
        
        // Cleanup function
        return () => {
            sliderWrapper.current.removeEventListener('mousedown', handleMouseDown);
            sliderWrapper.current.removeEventListener('mouseleave', handleMouseUp);
            sliderWrapper.current.removeEventListener('mousemove', handleMouseMove);
            sliderWrapper.current.removeEventListener('mouseup', handleMouseUp);

            sliderWrapper.current.removeEventListener('touchstart', handleTouchDown);
            sliderWrapper.current.removeEventListener('touchmove', handleTouchMove);
            sliderWrapper.current.removeEventListener('touchend', handleTouchUp);
        // Pause and clear the animation when the component unmounts
        timeline.pause(0);
        timeline.kill();
      };
    }, []);


    // MOUSE MOVEMENTS

    const handleMouseDown = (event) => {
        isMouseDown = true;
        timeline.pause();
        // Calculate cursor position as a percentage of the slider width
        const cursorPosition = (event.clientX - sliderWrapper.current.getBoundingClientRect().left) / sliderWrapper.current.offsetWidth;
        // Store the time where scrubbing started
        scrubStartAt = timeline.time() - (cursorPosition * timeline.duration());
        // If the cursor position is greater than 0.5, it means you're dragging to the left
        if (cursorPosition > 0.5) {
            scrubStartAt += timeline.duration();
        }
    }
    
    const handleMouseMove = (event) => {
        if (isMouseDown) {
            const cursorPosition = (event.clientX - sliderWrapper.current.getBoundingClientRect().left) / sliderWrapper.current.offsetWidth;
            // Calculate time relative to the start time and loop duration
            let time = scrubStartAt + cursorPosition * timeline.duration();
            // Allow the time to wrap around and loop
            if (isReversed) {
                if (time > 0) {
                    time = timeline.duration() + (time % timeline.duration());
                  } else if (time > timeline.duration()) {
                    time = time % timeline.duration();
                  }
            }
            if (!isReversed) {
                if (time < 0) {
                    time = timeline.duration() + (time % timeline.duration());
                  } else if (time > timeline.duration()) {
                    time = time % timeline.duration();
                  }
            }
            timeline.seek(time, false);
          }
    }

    const handleMouseUp = (event) => {
        isMouseDown = false;
        scrubStartAt = 0; // Reset the start time when scrubbing is done
        timeline.play()
        if (isReversed) {
            timeline.timeScale(-1)
        }
    }

    // TOUCH MOVEMENTS

    const handleTouchDown = (event) => {
        isMouseDown = true;
        timeline.pause();
        
        // Get the first touch
        const touch = event.touches[0];
        
        // Calculate cursor position as a percentage of the slider width
        const cursorPosition = (touch.clientX - sliderWrapper.current.getBoundingClientRect().left) / sliderWrapper.current.offsetWidth;
        
        // Store the time where scrubbing started
        scrubStartAt = timeline.time() - (cursorPosition * timeline.duration());
        
        // If the cursor position is greater than 0.5, it means you're dragging to the left
        if (cursorPosition > 0.5) {
            scrubStartAt += timeline.duration();
        }
    }
    
    const handleTouchMove = (event) => {
        if (isMouseDown) {
            const touch = event.touches[0]; // Get the first touch
            const cursorPosition = (touch.clientX - sliderWrapper.current.getBoundingClientRect().left) / sliderWrapper.current.offsetWidth;
            
            // Calculate time relative to the start time and loop duration
            let time = scrubStartAt + cursorPosition * timeline.duration();
            
            // Allow the time to wrap around and loop
            if (isReversed) {
                if (time > 0) {
                    time = timeline.duration() + (time % timeline.duration());
                } else if (time > timeline.duration()) {
                    time = time % timeline.duration();
                }
            }
            if (!isReversed) {
                if (time < 0) {
                    time = timeline.duration() + (time % timeline.duration());
                } else if (time > timeline.duration()) {
                    time = time % timeline.duration();
                }
            }
            
            timeline.seek(time, false);
        }
    }

    const handleTouchUp = () => {
        isMouseDown = false;
        scrubStartAt = 0; // Reset the start time when scrubbing is done
        timeline.play();
        if (isReversed) {
            timeline.timeScale(-1);
        }
    }

    return (
    <div class="wrapper no-select" ref={sliderWrapper}>
            {_images.map((imageUrl, index) => (
                <img
                    draggable="false"
                    className={`box default images1`}
                    key={index}
                    src={imageUrl}
                    alt={`Image ${index}`}
                />
            ))}
            <img
                draggable="false"
                className={`box empty images1`}
                src={'/logos/empty.png'}
            />
      </div>
    );
  };


  const HorizontalImageLoopComponent2 = ({ _images, _isReversed }) => {
    const sliderWrapper = useRef(null);
    let isMouseDown = false;
    let scrubStartAt = 0; // Store the time where scrubbing started
    const isReversed = _isReversed;
    let timeline;

    useEffect(() => {
        const boxes = gsap.utils.toArray(".images2");
        const items = document.querySelectorAll(".images2");
        
        // Create array of colors
        // const colors = ["#f38630","#6fb936", "#ccc", "#6fb936"];
        const colors = ["#f2f2f2"];
        
        // Apply colors to boxes - one after the other
        gsap.set(boxes , {
            backgroundColor: gsap.utils.wrap(colors)
        });
        
        // const items = document.querySelectorAll(".box");
      const config = {
          repeat: -1,
          speed: 1,
          snap: 1,
          reversed: false,
          // Add the paddingBetween property here
        };
        
        timeline = horizontalLoop(items, config);

        setTimeout(() => {
            if (isReversed) {
                timeline.timeScale(-1)
            }
          }, "0");
        
        sliderWrapper.current.addEventListener('mousedown', handleMouseDown);
        sliderWrapper.current.addEventListener('mouseleave', handleMouseUp);
        sliderWrapper.current.addEventListener('mousemove', handleMouseMove);
        sliderWrapper.current.addEventListener('mouseup', handleMouseUp);

        sliderWrapper.current.addEventListener('touchstart', handleTouchDown);
        sliderWrapper.current.addEventListener('touchmove', handleTouchMove);
        sliderWrapper.current.addEventListener('touchend', handleTouchUp);
        
        // Cleanup function
        return () => {
            sliderWrapper.current.removeEventListener('mousedown', handleMouseDown);
            sliderWrapper.current.removeEventListener('mouseleave', handleMouseUp);
            sliderWrapper.current.removeEventListener('mousemove', handleMouseMove);
            sliderWrapper.current.removeEventListener('mouseup', handleMouseUp);

            sliderWrapper.current.removeEventListener('touchstart', handleTouchDown);
            sliderWrapper.current.removeEventListener('touchmove', handleTouchMove);
            sliderWrapper.current.removeEventListener('touchend', handleTouchUp);
        // Pause and clear the animation when the component unmounts
        timeline.pause(0);
        timeline.kill();
      };
    }, []);


    // MOUSE MOVEMENTS

    const handleMouseDown = (event) => {
        isMouseDown = true;
        timeline.pause();
        // Calculate cursor position as a percentage of the slider width
        const cursorPosition = (event.clientX - sliderWrapper.current.getBoundingClientRect().left) / sliderWrapper.current.offsetWidth;
        // Store the time where scrubbing started
        scrubStartAt = timeline.time() - (cursorPosition * timeline.duration());
        // If the cursor position is greater than 0.5, it means you're dragging to the left
        if (cursorPosition > 0.5) {
            scrubStartAt += timeline.duration();
        }
    }
    
    const handleMouseMove = (event) => {
        if (isMouseDown) {
            const cursorPosition = (event.clientX - sliderWrapper.current.getBoundingClientRect().left) / sliderWrapper.current.offsetWidth;
            // Calculate time relative to the start time and loop duration
            let time = scrubStartAt + cursorPosition * timeline.duration();
            // Allow the time to wrap around and loop
            if (isReversed) {
                if (time < 0) {
                    time = timeline.duration() + (time % timeline.duration());
                  } else if (time > timeline.duration()) {
                    time = time % timeline.duration();
                  }
            }
            if (!isReversed) {
                if (time > 0) {
                    time = timeline.duration() + (time % timeline.duration());
                  } else if (time > timeline.duration()) {
                    time = time % timeline.duration();
                  }
            }
            timeline.seek(time, false);
          }
    }

    const handleMouseUp = (event) => {
        isMouseDown = false;
        scrubStartAt = 0; // Reset the start time when scrubbing is done
        timeline.play()
        if (isReversed) {
            timeline.timeScale(-1)
        }
    }

    // TOUCH MOVEMENTS

    const handleTouchDown = (event) => {
        isMouseDown = true;
        timeline.pause();
        
        // Get the first touch
        const touch = event.touches[0];
        
        // Calculate cursor position as a percentage of the slider width
        const cursorPosition = (touch.clientX - sliderWrapper.current.getBoundingClientRect().left) / sliderWrapper.current.offsetWidth;
        
        // Store the time where scrubbing started
        scrubStartAt = timeline.time() - (cursorPosition * timeline.duration());
        
        // If the cursor position is greater than 0.5, it means you're dragging to the left
        if (cursorPosition > 0.5) {
            scrubStartAt += timeline.duration();
        }
    }
    
    const handleTouchMove = (event) => {
        if (isMouseDown) {
            const touch = event.touches[0]; // Get the first touch
            const cursorPosition = (touch.clientX - sliderWrapper.current.getBoundingClientRect().left) / sliderWrapper.current.offsetWidth;
            
            // Calculate time relative to the start time and loop duration
            let time = scrubStartAt + cursorPosition * timeline.duration();
            
            // Allow the time to wrap around and loop
            if (isReversed) {
                if (time < 0) {
                    time = timeline.duration() + (time % timeline.duration());
                } else if (time > timeline.duration()) {
                    time = time % timeline.duration();
                }
            }
            if (!isReversed) {
                if (time > 0) {
                    time = timeline.duration() + (time % timeline.duration());
                } else if (time > timeline.duration()) {
                    time = time % timeline.duration();
                }
            }
            
            timeline.seek(time, false);
        }
    }

    const handleTouchUp = () => {
        isMouseDown = false;
        scrubStartAt = 0; // Reset the start time when scrubbing is done
        timeline.play();
        if (isReversed) {
            timeline.timeScale(-1);
        }
    }

    return (
    <div class="wrapper no-select" ref={sliderWrapper}>
            {_images.map((imageUrl, index) => (
                <img
                    draggable="false"
                    className={`box default images2`}
                    key={index}
                    src={imageUrl}
                    alt={`Image ${index}`}
                />
            ))}
            <img
                draggable="false"
                className={`box empty images2`}
                src={'/logos/empty.png'}
            />
      </div>
    );
  };



  const HorizontalImageLoopComponent3 = ({ _images, _isReversed }) => {
    const sliderWrapper = useRef(null);
    let isMouseDown = false;
    let scrubStartAt = 0; // Store the time where scrubbing started
    const isReversed = _isReversed;
    let timeline;

    useEffect(() => {
        const boxes = gsap.utils.toArray(".images3");
        const items = document.querySelectorAll(".images3");
        
        // Create array of colors
        // const colors = ["#f38630","#6fb936", "#ccc", "#6fb936"];
        const colors = ["#f2f2f2"];
        
        // Apply colors to boxes - one after the other
        gsap.set(boxes , {
            backgroundColor: gsap.utils.wrap(colors)
        });
        
        // const items = document.querySelectorAll(".box");
      const config = {
          repeat: -1,
          speed: 1,
          snap: 1,
          reversed: false,
          // Add the paddingBetween property here
        };
        
        timeline = horizontalLoop(items, config);

        setTimeout(() => {
            if (isReversed) {
                timeline.timeScale(-1)
            }
          }, "0");
        
        sliderWrapper.current.addEventListener('mousedown', handleMouseDown);
        sliderWrapper.current.addEventListener('mouseleave', handleMouseUp);
        sliderWrapper.current.addEventListener('mousemove', handleMouseMove);
        sliderWrapper.current.addEventListener('mouseup', handleMouseUp);

        sliderWrapper.current.addEventListener('touchstart', handleTouchDown);
        sliderWrapper.current.addEventListener('touchmove', handleTouchMove);
        sliderWrapper.current.addEventListener('touchend', handleTouchUp);
        
        // Cleanup function
        return () => {
            sliderWrapper.current.removeEventListener('mousedown', handleMouseDown);
            sliderWrapper.current.removeEventListener('mouseleave', handleMouseUp);
            sliderWrapper.current.removeEventListener('mousemove', handleMouseMove);
            sliderWrapper.current.removeEventListener('mouseup', handleMouseUp);

            sliderWrapper.current.removeEventListener('touchstart', handleTouchDown);
            sliderWrapper.current.removeEventListener('touchmove', handleTouchMove);
            sliderWrapper.current.removeEventListener('touchend', handleTouchUp);
        // Pause and clear the animation when the component unmounts
        timeline.pause(0);
        timeline.kill();
      };
    }, []);


    // MOUSE MOVEMENTS

    const handleMouseDown = (event) => {
        isMouseDown = true;
        timeline.pause();
        // Calculate cursor position as a percentage of the slider width
        const cursorPosition = (event.clientX - sliderWrapper.current.getBoundingClientRect().left) / sliderWrapper.current.offsetWidth;
        // Store the time where scrubbing started
        scrubStartAt = timeline.time() - (cursorPosition * timeline.duration());
        // If the cursor position is greater than 0.5, it means you're dragging to the left
        if (cursorPosition > 0.5) {
            scrubStartAt += timeline.duration();
        }
    }
    
    const handleMouseMove = (event) => {
        if (isMouseDown) {
            const cursorPosition = (event.clientX - sliderWrapper.current.getBoundingClientRect().left) / sliderWrapper.current.offsetWidth;
            // Calculate time relative to the start time and loop duration
            let time = scrubStartAt + cursorPosition * timeline.duration();
            // Allow the time to wrap around and loop
            if (isReversed) {
                if (time < 0) {
                    time = timeline.duration() + (time % timeline.duration());
                  } else if (time > timeline.duration()) {
                    time = time % timeline.duration();
                  }
            }
            if (!isReversed) {
                if (time > 0) {
                    time = timeline.duration() + (time % timeline.duration());
                  } else if (time > timeline.duration()) {
                    time = time % timeline.duration();
                  }
            }
            timeline.seek(time, false);
          }
    }

    const handleMouseUp = (event) => {
        isMouseDown = false;
        scrubStartAt = 0; // Reset the start time when scrubbing is done
        timeline.play()
        if (isReversed) {
            timeline.timeScale(-1)
        }
    }

    // TOUCH MOVEMENTS

    const handleTouchDown = (event) => {
        isMouseDown = true;
        timeline.pause();
        
        // Get the first touch
        const touch = event.touches[0];
        
        // Calculate cursor position as a percentage of the slider width
        const cursorPosition = (touch.clientX - sliderWrapper.current.getBoundingClientRect().left) / sliderWrapper.current.offsetWidth;
        
        // Store the time where scrubbing started
        scrubStartAt = timeline.time() - (cursorPosition * timeline.duration());
        
        // If the cursor position is greater than 0.5, it means you're dragging to the left
        if (cursorPosition > 0.5) {
            scrubStartAt += timeline.duration();
        }
    }
    
    const handleTouchMove = (event) => {
        if (isMouseDown) {
            const touch = event.touches[0]; // Get the first touch
            const cursorPosition = (touch.clientX - sliderWrapper.current.getBoundingClientRect().left) / sliderWrapper.current.offsetWidth;
            
            // Calculate time relative to the start time and loop duration
            let time = scrubStartAt + cursorPosition * timeline.duration();
            
            // Allow the time to wrap around and loop
            if (isReversed) {
                if (time < 0) {
                    time = timeline.duration() + (time % timeline.duration());
                } else if (time > timeline.duration()) {
                    time = time % timeline.duration();
                }
            }
            if (!isReversed) {
                if (time > 0) {
                    time = timeline.duration() + (time % timeline.duration());
                } else if (time > timeline.duration()) {
                    time = time % timeline.duration();
                }
            }
            
            timeline.seek(time, false);
        }
    }

    const handleTouchUp = () => {
        isMouseDown = false;
        scrubStartAt = 0; // Reset the start time when scrubbing is done
        timeline.play();
        if (isReversed) {
            timeline.timeScale(-1);
        }
    }

    return (
    <div class="wrapper no-select" ref={sliderWrapper}>
            {_images.map((imageUrl, index) => (
                <img
                    draggable="false"
                    className={`box default images3`}
                    key={index}
                    src={imageUrl}
                    alt={`Image ${index}`}
                />
            ))}
            <img
                draggable="false"
                className={`box empty images3`}
                src={'/logos/empty.png'}
            />
      </div>
    );
  };

  function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({repeat: config.repeat, paused: config.paused, defaults: {ease: "none"}, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)}),
        length = items.length,
        startX = items[0].offsetLeft,
        times = [],
        widths = [],
        xPercents = [],
        curIndex = 0,
        pixelsPerSecond = (config.speed || 1) * 100,
        snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
        totalWidth, curX, distanceToStart, distanceToLoop, item, i;
    gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
        xPercent: (i, el) => {
            let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
            xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
            return xPercents[i];
        }
    });
    
    gsap.set(items, {x: 0});
    totalWidth = items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingBetween) || 0) + (parseFloat(config.paddingBetween) || 0) * (length - 1);

    for (i = 0; i < length; i++) {
        item = items[i];
        curX = xPercents[i] / 100 * widths[i];
        distanceToStart = item.offsetLeft + curX - startX + (parseFloat(config.paddingBetween) || 0) * i;
distanceToLoop = (distanceToStart) + widths[i] * gsap.getProperty(item, "scaleX");

        // Adjust the xPercent value calculation
        let adjustedXPercent = snap((curX - distanceToLoop - 35) / widths[i] * 100);

        tl.to(item, {xPercent: adjustedXPercent, duration: distanceToLoop / pixelsPerSecond}, 0)
        // tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)

          .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
          .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
    }

    function toIndex(index, vars) {
        vars = vars || {};
        (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
        let newIndex = gsap.utils.wrap(0, length, index),
            time = times[newIndex];
        if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
            vars.modifiers = {time: gsap.utils.wrap(0, tl.duration())};
            time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
    }
    tl.next = vars => toIndex(curIndex+1, vars);
    tl.previous = vars => toIndex(curIndex-1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true).invalidate(); // pre-render for performance
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
    return tl;
}

// function InfiniteScrollerApps() {
//     // const settings = {
//     //     dots: false,
//     //     infinite: true,
//     //     speed: 500,
//     //     slidesToShow: 3,
//     //     slidesToScroll: 1,
//     //     autoplay: true,
//     //     autoplaySpeed: 1, 
//     //     easing: 'ease-in-out',
//     //   };

//     const logosRef = useRef();

//     useEffect(() => {
//         var copy = document.querySelector(".logos-slide").cloneNode(true);
//         document.querySelector('.logos').appendChild(copy);
//     }, [])

//     const getStyleInfo = () => {
//         console.log(logosRef.current.style);
//         // logosRef.current.style.animationDuration = "-6s";
//         logosRef.current.classList.add('reverse-animation');
//     }

//     return (
//         <div className='logos' onClick={(e) => getStyleInfo()}>
//             <div className='logos-slide' ref={logosRef} >
//                 <img src="/logos/app-development/adobe-xd.png" />
//                 <img src="/logos/app-development/amplify.png" />
//                 <img src="/logos/app-development/android-studio.jpg" />
//                 <img src="/logos/app-development/asp.net.png" />
//                 <img src="/logos/app-development/aws-logo.png" />
//                 <img src="/logos/app-development/express.png" />
//                 <img src="/logos/app-development/figma.png" />
//                 <img src="/logos/app-development/firebase.jpg" />
//                 <img src="/logos/app-development/flutter.png" />
//                 <img src="/logos/app-development/gsap.png" />
//                 <img src="/logos/app-development/hostinger.png" />
//                 <img src="/logos/app-development/knockoutjs.png" />
//                 <img src="/logos/app-development/mongodb.jpg" />
//                 <img src="/logos/app-development/mysql.png" />
//                 <img src="/logos/app-development/net-maui-logo.webp" />
//                 <img src="/logos/app-development/netlify.png" />
//                 <img src="/logos/app-development/nextjs.jpg" />
//                 <img src="/logos/app-development/nodejs.png" />
//                 <img src="/logos/app-development/postgres.png" />
//                 <img src="/logos/app-development/react-native.png" />
//                 <img src="/logos/app-development/react-redux.png" />
//                 <img src="/logos/app-development/react.jpg" />
//                 <img src="/logos/app-development/styled-components.png" />
//                 <img src="/logos/app-development/supabase.png" />
//                 <img src="/logos/app-development/tailwindcss.jpg" />
//                 <img src="/logos/app-development/threejs.png" />
//                 <img src="/logos/app-development/vercel.jpg" />
//                 <img src="/logos/app-development/vite.jpg" />
//             </div>
//     </div>
//     )
// }




// const ImagePlane = ({ imageUrl, position }) => {
//     const texture = new TextureLoader().load(imageUrl);
    
//     return (
//       <mesh position={position}>
//         <planeBufferGeometry args={[1, 1]} />
//         <meshBasicMaterial map={texture} />
//       </mesh>
//     );
//   };

// function InfiniteScrollerThreeJS() {
//     const scrollContainer = useRef(null);

//     useFrame(() => {
//         // Slowly move the scroll container
//         if (scrollContainer.current) {
//           scrollContainer.current.position.x += 0.001;
          
//           // Reset position to create an infinite loop
//           if (scrollContainer.current.position.x > 1) {
//             scrollContainer.current.position.x = -1;
//           }
//         }
//       });

//       return (
//         <Canvas>
//           <scene>
//             <group ref={scrollContainer}>
//               <ImagePlane imageUrl="/logos/app-development/adobe-xd.png" position={[0, 0, 0]} />
//               <ImagePlane imageUrl="/logos/app-development/amplify.png" position={[1, 0, 0]} />
//               <ImagePlane imageUrl="/logos/app-development/android-studio.jpg" position={[2, 0, 0]} />
//               <ImagePlane imageUrl="/logos/app-development/asp.net.png" position={[3, 0, 0]} />
//               <ImagePlane imageUrl="/logos/app-development/aws-logo.png" position={[4, 0, 0]} />
//               <ImagePlane imageUrl="/logos/app-development/express.png" position={[5, 0, 0]} />
//               <ImagePlane imageUrl="/logos/app-development/figma.png" position={[6, 0, 0]} />
//               <ImagePlane imageUrl="/logos/app-development/firebase.jpg" position={[7, 0, 0]} />
//               <ImagePlane imageUrl="/logos/app-development/flutter.png" position={[8, 0, 0]} />
//               <ImagePlane imageUrl="/logos/app-development/gsap.png" position={[9, 0, 0]} />
//               <ImagePlane imageUrl="/logos/app-development/hostinger.png" position={[10, 0, 0]} />
//               <ImagePlane imageUrl="/logos/app-development/knockoutjs.png" position={[11, 0, 0]} />
//               <ImagePlane imageUrl="/logos/app-development/mongodb.jpg" position={[12, 0, 0]} />
//               {/* Add more image planes here */}
//             </group>
//             <perspectiveCamera fov={75} aspect={window.innerWidth / window.innerHeight} position={[0, 0, 3]} />
//           </scene>
//         </Canvas>
//       );

//     // return (
//     //     <div className='logos' >
//     //         <div className='logos-slide'>
//     //             <img src="/logos/app-development/adobe-xd.png" />
//     //             <img src="/logos/app-development/amplify.png" />
//     //             <img src="/logos/app-development/android-studio.jpg" />
//     //             <img src="/logos/app-development/asp.net.png" />
//     //             <img src="/logos/app-development/aws-logo.png" />
//     //             <img src="/logos/app-development/express.png" />
//     //             <img src="/logos/app-development/figma.png" />
//     //             <img src="/logos/app-development/firebase.jpg" />
//     //             <img src="/logos/app-development/flutter.png" />
//     //             <img src="/logos/app-development/gsap.png" />
//     //             <img src="/logos/app-development/hostinger.png" />
//     //             <img src="/logos/app-development/knockoutjs.png" />
//     //             <img src="/logos/app-development/mongodb.jpg" />
//     //             <img src="/logos/app-development/mysql.png" />
//     //             <img src="/logos/app-development/net-maui-logo.webp" />
//     //             <img src="/logos/app-development/netlify.png" />
//     //             <img src="/logos/app-development/nextjs.jpg" />
//     //             <img src="/logos/app-development/nodejs.png" />
//     //             <img src="/logos/app-development/postgres.png" />
//     //             <img src="/logos/app-development/react-native.png" />
//     //             <img src="/logos/app-development/react-redux.png" />
//     //             <img src="/logos/app-development/react.jpg" />
//     //             <img src="/logos/app-development/styled-components.png" />
//     //             <img src="/logos/app-development/supabase.png" />
//     //             <img src="/logos/app-development/tailwindcss.jpg" />
//     //             <img src="/logos/app-development/threejs.png" />
//     //             <img src="/logos/app-development/vercel.jpg" />
//     //             <img src="/logos/app-development/vite.jpg" />
//     //         </div>
//     // </div>
//     // )
// }


// OTHERS !!!!!!!!!!!!

function InfiniteScrollerLanguages() {
    useEffect(() => {
        var copy = document.querySelector(".logos-slide-opposite").cloneNode(true);
        document.querySelector('.logos-opposite').appendChild(copy);
    }, [])

    return (
        <div className='logos-opposite'>
            <div className='logos-slide-opposite'>
                <img src="/logos/languages/csharp.png" />
                <img src="/logos/languages/c++.png" />
                <img src="/logos/languages/css.jpg" />
                <img src="/logos/languages/dart.jpg" />
                <img src="/logos/languages/html.jpg" />
                <img src="/logos/languages/javascript.png" />
                <img src="/logos/languages/kotlin.png" />
                <img src="/logos/languages/php.png" />
                <img src="/logos/languages/solidity.png" />
                <img src="/logos/languages/swift.png" />
                <img src="/logos/languages/typescript.png" />
                
            </div>
        </div>
    )
}

function InfiniteScrollerMedia() {
    useEffect(() => {
        var copy = document.querySelector(".logos-slide-2").cloneNode(true);
        document.querySelector('.logos-2').appendChild(copy);
    }, [])

    return (
        <div className='logos-2'>
            <div className='logos-slide-2'>
                <img src="/logos/media-development/3dsmax.jpg" />
                <img src="/logos/media-development/adobe-dimension.webp" />
                <img src="/logos/media-development/audition.webp" />
                <img src="/logos/media-development/blender.png" />
                <img src="/logos/media-development/flstudio.jpg" />
                <img src="/logos/media-development/gamemaker2.png" />
                <img src="/logos/media-development/illustrator.jpg" />
                <img src="/logos/media-development/maya.png" />
                <img src="/logos/media-development/mirror.jpg" />
                <img src="/logos/media-development/photon-fusion.webp" />
                <img src="/logos/media-development/photoshop.png" />
                <img src="/logos/media-development/pun2.jpg" />
                <img src="/logos/media-development/unity.jpg" />
                <img src="/logos/media-development/unreal-engine.png" />
                <img src="/logos/media-development/zbrush.png" />
            </div>
        </div>
    )
}

export default Skills
