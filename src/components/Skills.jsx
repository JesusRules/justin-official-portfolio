import React, { useEffect, useRef, useLayoutEffect } from 'react'
import { styled } from 'styled-components'
import gsap from 'gsap';
import InfiniteImageScroller from './threejsscripts/InfiniteImageScroller'
import { Canvas } from '@react-three/fiber'

const Container = styled.div`
    background-color: #ceeeff;
    height: 100vh;
    scroll-snap-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.0)),
    url("/img/hero-banner/blue-sky-2.jpg");
    /* background-image: url("/img/hero-banner/blue-sky-2.jpg"); */
    background-repeat: no-repeat;
    background-size: cover;
    `
    const Container2 = styled.div`
    position: relative;
    top: 2.5rem;
    z-index: 10;
`

const Title = styled.h3`
    color: black;
    text-align: center;
    font-style: italic;
    margin-bottom: 2.5rem;
    font-weight: 800;
    position: relative;
    font-size: 1.6rem;
    @media only screen and (max-width: 700px) {
    }
`;

const Subtitle = styled.h2`
    color: black;
    text-align: center;
    font-size: 1rem;
    text-transform: uppercase;
    max-width: 1100px;
    width: 100%;
    margin: 0 auto 0.2rem auto;
    padding-left: .5rem;
    font-weight: 800;
`;

const CrucifixDiv = styled.div`
   position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 1000px;
    bottom: 2.4rem;
    /* height: 100%; */
    @media only screen and (max-width: 700px) {
    }
    `
const CrucifixImage = styled.img`
    position: absolute;
    height: 42rem;
    @media only screen and (max-width: 700px) {
        top: 1.2rem;
        margin: 0 auto;
        left: -94%;
        right: -5%;
        display: none;
    }
`

function Skills({ myRef, scrollYGlobal, scrollToSkills, setRefReached }) {
    let tl = gsap.timeline();

    useEffect(() => {
        const divElement = myRef.current;
        if (Math.round(scrollYGlobal) == divElement.offsetTop) {
            scrollToSkills();
            setRefReached(true);
        }
        if (scrollYGlobal >= divElement.offsetTop) {
        //   tl.to(".first-div", {
        //         transform: 'translateY(0)',
        //         opacity: 1,
        //         duration:0.33, //say 1
        //     });
        }

      }, [scrollYGlobal])

  return (
    <Container id="skills div3" className="trigger main-div" ref={myRef}>
        
        {/* <CrucifixDiv>
            <CrucifixImage style={{filter: 'blur(0px)', position: 'absolute'}} src="/img/jesus-effect/image-2-short.png"/>
        </CrucifixDiv> */}

      <Container2>
      <Title>All the technologies I know!</Title>
    
    {/* <div className="first-div" style={{opacity: 0, transform: 'translateY(40px)'}}> */}
    <div className="first-div" >
        <Subtitle>Coding Languages</Subtitle>
        <HorizontalImageLoopComponent1 _images={imagesLanguages} _isReversed={false} />
    </div>
    <div className="first-div" >
        <Subtitle>App development</Subtitle>
        <HorizontalImageLoopComponent2 _images={imagesApps} _isReversed={true} />
    </div>
    <div className="first-div" >
        <Subtitle>Media/Game creation</Subtitle>
        <HorizontalImageLoopComponent3 _images={imagesMedia} _isReversed={false} />
    </div>

      </Container2>
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
    '/logos/app-development/mantine.png',
    '/logos/app-development/mongodb.png',
    '/logos/app-development/mysql.png',
    '/logos/app-development/net-maui-logo.png',
    '/logos/app-development/netlify.png',
    '/logos/app-development/nextjs.png',
    '/logos/app-development/nodejs.png',
    '/logos/app-development/postgres.png',
    '/logos/app-development/paypal.png',
    '/logos/app-development/stripe.png',
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
    '/logos/media-development/3dsmax.png',
    '/logos/media-development/adobe-dimension.webp',
    '/logos/media-development/audition.webp',
    '/logos/media-development/blender.png',
    '/logos/media-development/flstudio.png',
    '/logos/media-development/gamemaker2.png',
    '/logos/media-development/illustrator.jpg',
    '/logos/media-development/maya.png',
    '/logos/media-development/mirror.jpg',
    '/logos/media-development/pun2.jpg',
    '/logos/media-development/photon-fusion.webp',
    '/logos/media-development/photon-quantum.jpg',
    '/logos/media-development/photoshop.jpg',
    '/logos/media-development/unity.jpg',
    '/logos/media-development/unreal-engine.png',
    '/logos/media-development/zbrush.png',
    // DUPLICATE
    '/logos/media-development/3dsmax.png',
    '/logos/media-development/adobe-dimension.webp',
    '/logos/media-development/audition.webp',
    '/logos/media-development/blender.png',
    '/logos/media-development/flstudio.png',
    '/logos/media-development/gamemaker2.png',
    '/logos/media-development/illustrator.jpg',
    '/logos/media-development/maya.png',
    '/logos/media-development/mirror.jpg',
    '/logos/media-development/pun2.jpg',
    '/logos/media-development/photon-fusion.webp',
    '/logos/media-development/photon-quantum.jpg',
    '/logos/media-development/photoshop.jpg',
    '/logos/media-development/unity.jpg',
    '/logos/media-development/unreal-engine.png',
    '/logos/media-development/zbrush.png',
];

const imagesLanguages = [
    '/logos/languages/c++.png',
    '/logos/languages/csharp.png',
    '/logos/languages/css.png',
    '/logos/languages/dart.png',
    '/logos/languages/html.png',
    '/logos/languages/javascript.png',
    '/logos/languages/typescript.png',
    '/logos/languages/rust.png',
    '/logos/languages/kotlin.png',
    '/logos/languages/php.png',
    '/logos/languages/solidity.png',
    '/logos/languages/swift.png',
    // DUPLICATE
    '/logos/languages/c++.png',
    '/logos/languages/csharp.png',
    '/logos/languages/css.png',
    '/logos/languages/dart.png',
    '/logos/languages/html.png',
    '/logos/languages/javascript.png',
    '/logos/languages/typescript.png',
    '/logos/languages/rust.png',
    '/logos/languages/kotlin.png',
    '/logos/languages/php.png',
    '/logos/languages/solidity.png',
    '/logos/languages/swift.png',
];


// const HorizontalImageLoopComponent1 = ({ _images, _isReversed }) => {
//     const sliderWrapper = useRef(null);
//     let isMouseDown = false;
//     let scrubStartAt = 0; // Store the time where scrubbing started
//     const isReversed = _isReversed;
//     let timeline;
//     // NEW
//     const inited = useRef(false); // guard against React 18 double-invoke in dev

//     // NEW
//     useLayoutEffect(() => {
//       if (inited.current) return; // StrictMode guard
//       inited.current = true;

//       const wrapper = sliderWrapper.current;
//       if (!wrapper) return;

//       const imgs = Array.from(wrapper.querySelectorAll("img"));
//       let cancelled = false;

//       // wait for all images to have layout width
//       const waitForImages = async () => {
//         await Promise.all(
//           imgs.map((img) => {
//             if (img.complete && img.naturalWidth) return Promise.resolve();
//             // prefer decode() when available (Safari iOS 15+)
//             if (img.decode) return img.decode().catch(() => {});
//             return new Promise((res) => {
//               img.addEventListener("load", res, { once: true });
//               img.addEventListener("error", res, { once: true });
//             });
//           })
//         );
//       };

//       (async () => {
//         await waitForImages();
//         if (cancelled) return;

//         const items = wrapper.querySelectorAll(".images1");
//         const config = { repeat: -1, speed: 1, snap: 1, reversed: false };

//         const tl = horizontalLoop(items, config);
//         timelineRef.current = tl;

//         if (_isReversed) tl.timeScale(-1);

//         // pointer handlers (optional)
//         const down = () => tl.pause();
//         const up = () => { tl.play(); if (_isReversed) tl.timeScale(-1); };
//         wrapper.addEventListener("touchstart", down);
//         wrapper.addEventListener("touchend", up);
//         wrapper.addEventListener("mousedown", down);
//         wrapper.addEventListener("mouseup", up);

//         // cleanup
//         const cleanup = () => {
//           cancelled = true;
//           wrapper.removeEventListener("touchstart", down);
//           wrapper.removeEventListener("touchend", up);
//           wrapper.removeEventListener("mousedown", down);
//           wrapper.removeEventListener("mouseup", up);
//           tl?.kill();
//         };
//         // store cleanup so React can call it
//         timelineRef.current._cleanup = cleanup;
//       })();

//       return () => {
//         timelineRef.current?._cleanup?.();
//       };
//     }, [_isReversed]);

//     useEffect(() => {
//         const boxes = gsap.utils.toArray(".images1");
//         const items = document.querySelectorAll(".images1");
        
//         // Create array of colors
//         // const colors = ["#f38630","#6fb936", "#ccc", "#6fb936"];
//         const colors = ["#f2f2f2"];
        
//         // Apply colors to boxes - one after the other
//         gsap.set(boxes , {
//             backgroundColor: gsap.utils.wrap(colors)
//         });
        
//         // const items = document.querySelectorAll(".box");
//       const config = {
//           repeat: -1,
//           speed: 1,
//           snap: 1,
//           reversed: false,
//           // Add the paddingBetween property here
//         };
        
//         timeline = horizontalLoop(items, config);

//         setTimeout(() => {
//             if (isReversed) {
//                 timeline.timeScale(-1)
//             }
//           }, "0");
        
//         sliderWrapper.current.addEventListener('mousedown', handleMouseDown);
//         sliderWrapper.current.addEventListener('mouseleave', handleMouseUp);
//         sliderWrapper.current.addEventListener('mousemove', handleMouseMove);
//         sliderWrapper.current.addEventListener('mouseup', handleMouseUp);

//         sliderWrapper.current.addEventListener('touchstart', handleTouchDown);
//         sliderWrapper.current.addEventListener('touchmove', handleTouchMove);
//         sliderWrapper.current.addEventListener('touchend', handleTouchUp);
        
//         // Cleanup function
//         return () => {
//             sliderWrapper.current.removeEventListener('mousedown', handleMouseDown);
//             sliderWrapper.current.removeEventListener('mouseleave', handleMouseUp);
//             sliderWrapper.current.removeEventListener('mousemove', handleMouseMove);
//             sliderWrapper.current.removeEventListener('mouseup', handleMouseUp);

//             sliderWrapper.current.removeEventListener('touchstart', handleTouchDown);
//             sliderWrapper.current.removeEventListener('touchmove', handleTouchMove);
//             sliderWrapper.current.removeEventListener('touchend', handleTouchUp);
//         // Pause and clear the animation when the component unmounts
//         timeline.pause(0);
//         timeline.kill();
//       };
//     }, []);


//     // MOUSE MOVEMENTS

//     const handleMouseDown = (event) => {
//         isMouseDown = true;
//         timeline.pause();
//         // Calculate cursor position as a percentage of the slider width
//         const cursorPosition = (event.clientX - sliderWrapper.current.getBoundingClientRect().left) / sliderWrapper.current.offsetWidth;
//         // Store the time where scrubbing started
//         scrubStartAt = timeline.time() - (cursorPosition * timeline.duration());
//         // If the cursor position is greater than 0.5, it means you're dragging to the left
//         if (cursorPosition > 0.5) {
//             scrubStartAt += timeline.duration();
//         }
//     }
    
//     const handleMouseMove = (event) => {
//         if (isMouseDown) {
//             const cursorPosition = (event.clientX - sliderWrapper.current.getBoundingClientRect().left) / sliderWrapper.current.offsetWidth;
//             // Calculate time relative to the start time and loop duration
//             let time = scrubStartAt + cursorPosition * timeline.duration();
//             // Allow the time to wrap around and loop
//             if (isReversed) {
//                 if (time > 0) {
//                     time = timeline.duration() + (time % timeline.duration());
//                   } else if (time > timeline.duration()) {
//                     time = time % timeline.duration();
//                   }
//             }
//             if (!isReversed) {
//                 if (time < 0) {
//                     time = timeline.duration() + (time % timeline.duration());
//                   } else if (time > timeline.duration()) {
//                     time = time % timeline.duration();
//                   }
//             }
//             timeline.seek(time, false);
//           }
//     }

//     const handleMouseUp = (event) => {
//         isMouseDown = false;
//         scrubStartAt = 0; // Reset the start time when scrubbing is done
//         timeline.play()
//         if (isReversed) {
//             timeline.timeScale(-1)
//         }
//     }

//     // TOUCH MOVEMENTS

//     const handleTouchDown = (event) => {
//         isMouseDown = true;
//         timeline.pause();
        
//         // Get the first touch
//         const touch = event.touches[0];
        
//         // Calculate cursor position as a percentage of the slider width
//         const cursorPosition = (touch.clientX - sliderWrapper.current.getBoundingClientRect().left) / sliderWrapper.current.offsetWidth;
        
//         // Store the time where scrubbing started
//         scrubStartAt = timeline.time() - (cursorPosition * timeline.duration());
        
//         // If the cursor position is greater than 0.5, it means you're dragging to the left
//         if (cursorPosition > 0.5) {
//             scrubStartAt += timeline.duration();
//         }
//     }
    
//     const handleTouchMove = (event) => {
//         if (isMouseDown) {
//             const touch = event.touches[0]; // Get the first touch
//             const cursorPosition = (touch.clientX - sliderWrapper.current.getBoundingClientRect().left) / sliderWrapper.current.offsetWidth;
            
//             // Calculate time relative to the start time and loop duration
//             let time = scrubStartAt + cursorPosition * timeline.duration();
            
//             // Allow the time to wrap around and loop
//             if (isReversed) {
//                 if (time > 0) {
//                     time = timeline.duration() + (time % timeline.duration());
//                 } else if (time > timeline.duration()) {
//                     time = time % timeline.duration();
//                 }
//             }
//             if (!isReversed) {
//                 if (time < 0) {
//                     time = timeline.duration() + (time % timeline.duration());
//                 } else if (time > timeline.duration()) {
//                     time = time % timeline.duration();
//                 }
//             }
            
//             timeline.seek(time, false);
//         }
//     }

//     const handleTouchUp = () => {
//         isMouseDown = false;
//         scrubStartAt = 0; // Reset the start time when scrubbing is done
//         timeline.play();
//         if (isReversed) {
//             timeline.timeScale(-1);
//         }
//     }

//     return (
//     <div class="wrapper no-select" ref={sliderWrapper}>
//             {_images.map((imageUrl, index) => (
//                 <img
//                     draggable="false"
//                     className={`box default images1`}
//                     key={index}
//                     src={imageUrl}
//                     alt={`Image ${index}`}
//                 />
//             ))}
//             <img
//                 draggable="false"
//                 className={`box empty images1`}
//                 src={'/logos/empty.png'}
//             />
//       </div>
//     );
//   };
const HorizontalImageLoopComponent1 = ({ _images, _isReversed }) => {
    const wrapperRef = useRef(null);
    const tlRef = useRef(null);
    const inited = useRef(false);
    const isDownRef = useRef(false);
    const scrubStartAtRef = useRef(0);

    useLayoutEffect(() => {
      if (inited.current) return; // React StrictMode guard (dev)
      inited.current = true;

      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const imgs = Array.from(wrapper.querySelectorAll("img"));
      let cancelled = false;

      // wait until images have layout widths (Safari/iOS important)
      const waitForImages = async () => {
        await Promise.all(
          imgs.map((img) => {
            if (img.complete && img.naturalWidth) return;
            if (img.decode) return img.decode().catch(() => {});
            return new Promise((res) => {
              img.addEventListener("load", res, { once: true });
              img.addEventListener("error", res, { once: true });
            });
          })
        );
      };

      (async () => {
        await waitForImages();
        if (cancelled) return;

        // optional: scoped styling for this slider only
        const boxes = wrapper.querySelectorAll(".images1");
        gsap.set(boxes, { backgroundColor: "#f2f2f2" });

        // build loop (scope to wrapper)
        const items = wrapper.querySelectorAll(".images1");
        const tl = horizontalLoop(items, { repeat: -1, speed: 1, snap: 1 });
        tlRef.current = tl;
        if (_isReversed) tl.timeScale(-1);

        // ---- Scrub handlers (mouse) ----
        const handleMouseDown = (e) => {
          const tl = tlRef.current;
          if (!tl) return;
          isDownRef.current = true;
          tl.pause();

          const rect = wrapper.getBoundingClientRect();
          const cursor = (e.clientX - rect.left) / wrapper.offsetWidth;
          scrubStartAtRef.current = tl.time() - cursor * tl.duration();
          if (cursor > 0.5) scrubStartAtRef.current += tl.duration();
        };

        const handleMouseMove = (e) => {
          const tl = tlRef.current;
          if (!tl || !isDownRef.current) return;

          const rect = wrapper.getBoundingClientRect();
          const cursor = (e.clientX - rect.left) / wrapper.offsetWidth;
          let time = scrubStartAtRef.current + cursor * tl.duration();

          if (_isReversed) {
            if (time < 0) time = tl.duration() + (time % tl.duration());
            else if (time > tl.duration()) time = time % tl.duration();
          } else {
            if (time < 0) time = tl.duration() + (time % tl.duration());
            else if (time > tl.duration()) time = time % tl.duration();
          }
          tl.seek(time, false);
        };

        const handleMouseUp = () => {
          const tl = tlRef.current;
          if (!tl) return;
          isDownRef.current = false;
          scrubStartAtRef.current = 0;
          tl.play();
          if (_isReversed) tl.timeScale(-1);
        };

        // ---- Touch handlers ----
        const handleTouchDown = (e) => {
          const tl = tlRef.current;
          if (!tl) return;
          isDownRef.current = true;
          tl.pause();

          const touch = e.touches[0];
          const rect = wrapper.getBoundingClientRect();
          const cursor = (touch.clientX - rect.left) / wrapper.offsetWidth;
          scrubStartAtRef.current = tl.time() - cursor * tl.duration();
          if (cursor > 0.5) scrubStartAtRef.current += tl.duration();
        };

        const handleTouchMove = (e) => {
          const tl = tlRef.current;
          if (!tl || !isDownRef.current) return;

          const touch = e.touches[0];
          const rect = wrapper.getBoundingClientRect();
          const cursor = (touch.clientX - rect.left) / wrapper.offsetWidth;
          let time = scrubStartAtRef.current + cursor * tl.duration();

          if (_isReversed) {
            if (time < 0) time = tl.duration() + (time % tl.duration());
            else if (time > tl.duration()) time = time % tl.duration();
          } else {
            if (time < 0) time = tl.duration() + (time % tl.duration());
            else if (time > tl.duration()) time = time % tl.duration();
          }
          tl.seek(time, false);
        };

        const handleTouchUp = () => {
          const tl = tlRef.current;
          if (!tl) return;
          isDownRef.current = false;
          scrubStartAtRef.current = 0;
          tl.play();
          if (_isReversed) tl.timeScale(-1);
        };

        // attach (scoped to wrapper)
        wrapper.addEventListener("mousedown", handleMouseDown);
        wrapper.addEventListener("mousemove", handleMouseMove);
        wrapper.addEventListener("mouseup", handleMouseUp);
        wrapper.addEventListener("mouseleave", handleMouseUp);

        wrapper.addEventListener("touchstart", handleTouchDown, { passive: true });
        wrapper.addEventListener("touchmove", handleTouchMove, { passive: true });
        wrapper.addEventListener("touchend", handleTouchUp);

        // cleanup
        const cleanup = () => {
          cancelled = true;
          wrapper.removeEventListener("mousedown", handleMouseDown);
          wrapper.removeEventListener("mousemove", handleMouseMove);
          wrapper.removeEventListener("mouseup", handleMouseUp);
          wrapper.removeEventListener("mouseleave", handleMouseUp);

          wrapper.removeEventListener("touchstart", handleTouchDown);
          wrapper.removeEventListener("touchmove", handleTouchMove);
          wrapper.removeEventListener("touchend", handleTouchUp);

          tl?.kill();
          tlRef.current = null;
        };

        tlRef.current._cleanup = cleanup;
      })();

      return () => {
        tlRef.current?._cleanup?.();
      };
    }, [_isReversed]);

    return (
      <div className="wrapper no-select" ref={wrapperRef}>
        {_images.map((src, i) => (
          <img
            draggable="false"
            className="box default images1"
            key={i}
            src={src}
            alt=""
          />
        ))}
        <img draggable="false" className="box empty images1" src="/logos/empty.png" alt="" />
      </div>
    );
  };


  const HorizontalImageLoopComponent2 = ({ _images, _isReversed }) => {
    const sliderWrapper = useRef(null);
    let isMouseDown = false;
    let scrubStartAt = 0; // Store the time where scrubbing started
    // const isReversed = _isReversed;
    // const [isReversed, setIsReversed] = useState(_isReversed);
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
            if (_isReversed) {
                timeline.play();
                timeline.timeScale(-1)
                // setTimeout(() => {
                // }, 200);
            }
          }, 200);
        
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
            // sliderWrapper.current.removeEventListener('mouseleave', handleMouseUp);
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
        timeline.pause(); //works when .play()?
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
            if (_isReversed) {
                if (time < 0) {
                    time = timeline.duration() + (time % timeline.duration());
                  } else if (time > timeline.duration()) {
                    time = time % timeline.duration();
                  }
            }
            if (!_isReversed) {
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
        if (isMouseDown) {
            isMouseDown = false;
            scrubStartAt = 0; // Reset the start time when scrubbing is done
            timeline.play()
            if (_isReversed) {
                timeline.timeScale(-1)
            }

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
            if (_isReversed) {
                if (time < 0) {
                    time = timeline.duration() + (time % timeline.duration());
                } else if (time > timeline.duration()) {
                    time = time % timeline.duration();
                }
            }
            if (!_isReversed) {
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
        if (_isReversed) {
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
    <div class="wrapper no-select" ref={sliderWrapper} >
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


export default Skills
