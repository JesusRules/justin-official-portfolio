// UTILITY
import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export const HorizontalImageLoopProjects = ({ _images, _isReversed, openModal, _uniqueClassName }) => {
    const sliderWrapper = useRef(null);
    let isMouseDown = false;
    let scrubStartAt = 0; // Store the time where scrubbing started
    const isReversed = _isReversed;
    let timeline;
  
    useEffect(() => {
        setTimeout(() => {
            giantTimeout();
          }, "600");

        function giantTimeout() {
            const boxes = gsap.utils.toArray("." + _uniqueClassName);
            const items = document.querySelectorAll("." + _uniqueClassName);
            
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
    
              if (sliderWrapper.current) {
                  sliderWrapper.current.addEventListener('mousedown', handleMouseDown);
                  sliderWrapper.current.addEventListener('mouseleave', handleMouseUp);
                  sliderWrapper.current.addEventListener('mousemove', handleMouseMove);
                  sliderWrapper.current.addEventListener('mouseup', handleMouseUp);
            
                  sliderWrapper.current.addEventListener('touchstart', handleTouchDown);
                  sliderWrapper.current.addEventListener('touchmove', handleTouchMove);
                  sliderWrapper.current.addEventListener('touchend', handleTouchUp);
              }
            
            // Cleanup function
            return () => {
                if (sliderWrapper.current) {
                    sliderWrapper.current.removeEventListener('mousedown', handleMouseDown);
                    sliderWrapper.current.removeEventListener('mouseleave', handleMouseUp);
                    sliderWrapper.current.removeEventListener('mousemove', handleMouseMove);
                    sliderWrapper.current.removeEventListener('mouseup', handleMouseUp);
          
                    sliderWrapper.current.removeEventListener('touchstart', handleTouchDown);
                    sliderWrapper.current.removeEventListener('touchmove', handleTouchMove);
                    sliderWrapper.current.removeEventListener('touchend', handleTouchUp);
                }
            // Pause and clear the animation when the component unmounts
            timeline.pause(0);
            timeline.kill();
          };
        }
    }, [openModal]);
  
  
    // MOUSE MOVEMENTS
  
    const handleMouseDown = (event) => {
        isMouseDown = true;
        timeline.pause();
        // ADDED 1 -
        const cursorPosition = 1 - (event.clientX - sliderWrapper.current.getBoundingClientRect().left) / sliderWrapper.current.offsetWidth;
        // const cursorPosition = (event.clientX - sliderWrapper.current.getBoundingClientRect().left) / sliderWrapper.current.offsetWidth;

        scrubStartAt = timeline.time() - (cursorPosition * timeline.duration());
        // If the cursor position is greater than 0.5, it means you're dragging to the left
        if (cursorPosition > 0.5) {
            scrubStartAt += timeline.duration();
        }
    }
    
    const handleMouseMove = (event) => {
        if (isMouseDown) {
            const cursorPosition = (event.clientX - sliderWrapper.current.getBoundingClientRect().left) / sliderWrapper.current.offsetWidth;

            const reversedCursorPosition = 1 - cursorPosition;

            let time = scrubStartAt + reversedCursorPosition * timeline.duration();
            // let time = scrubStartAt + cursorPosition * timeline.duration();

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
    <div class="wrapperProjects no-select" ref={sliderWrapper}>
            {_images.map((imageUrl, index) => (
                <img
                    draggable="false"
                    className={`boxProjects default ${_uniqueClassName}`}
                    key={index}
                    src={imageUrl}
                    alt={`Image ${index}`}
                />
            ))}
            <img
                draggable="false"
                className={`boxProjects empty ${_uniqueClassName}`}
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
	totalWidth = items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0);
	for (i = 0; i < length; i++) {
		item = items[i];
		curX = xPercents[i] / 100 * widths[i];
		distanceToStart = item.offsetLeft + curX - startX;
		distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
		tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
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
  tl.progress(1, true).progress(0, true); // pre-render for performance
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
	return tl;
}