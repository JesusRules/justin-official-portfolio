import gsap from 'gsap';

export const scrollAnimation = (position, target, isMobile, onUpdate) => {
    const tl = gsap.timeline();

    // SOUND SECTION
    // tl.to(position, {
    //     x: -4.9856600392 , //First values are DESKTOP
    //     y: -0.7412908362 ,
    //     z: 6.2386989573,
    //     scrollTrigger: {
    //         trigger: '#skills', // second section triggers animation
    //         start: "top bottom", //section, viewport
    //         end: "top top", //section, viewport
    //         scrub: 2, //true?
    //         immediateRender: false, //efficiency
    //     },
    //    onUpdate 
    // });
    // tl.to(target, {
    //     x: -1.8859794188 ,
    //     y: -0.3094333057,
    //     z: 3.1534181519 ,
    //     scrollTrigger: {
    //         trigger: '#skills', // second section triggers animation
    //         start: "top bottom", //section, viewport
    //         end: "top top", //section, viewport
    //         scrub: 2, //true?
    //         immediateRender: false, //efficiency
    //     },
    // })




    // .to('.jumbotron-section', {
    //     opacity: 0,
    //     scrollTrigger: {
    //         trigger: '.sound-section', // second section triggers animation
    //         start: "top bottom", //section, viewport
    //         end: "top top", //section, viewport
    //         scrub: 2, //true?
    //         immediateRender: false, //efficiency
    //     },
    // })
    // .to('.sound-section-content', {
    //     opacity: 1,
    //     scrollTrigger: {
    //         trigger: '.sound-section', // second section triggers animation
    //         start: "top bottom", //section, viewport
    //         end: "top top", //section, viewport
    //         scrub: 2, //true?
    //         immediateRender: false, //efficiency
    //     },
    // });





    // DISPLAY SECTION
    // tl.to(position, {
    //     x:!isMobile ? 1.56 : 9.36,
    //     y: !isMobile ? 5.0 : 10.95,
    //     z: !isMobile ? 0.01 : 0.09,
    //     scrollTrigger: {
    //         trigger: '.display-section', // second section triggers animation
    //         start: "top bottom", //section, viewport
    //         end: "top top", //section, viewport
    //         scrub: 2, //true?
    //         immediateRender: false, //efficiency
    //     },
    //    onUpdate 
    // });
    // tl.to(target, {
    //     x: !isMobile ? -0.55 : -1.62,
    //     y: !isMobile ? 0.32 : 0.02,
    //     z: !isMobile ? 0.0 : -0.06,
    //     scrollTrigger: {
    //         trigger: '.display-section', // second section triggers animation
    //         start: "top bottom", //section, viewport
    //         end: "top top", //section, viewport
    //         scrub: 2, //true?
    //         immediateRender: false, //efficiency
    //     },
    // })
    // .to('.display-section', {
    //     opacity: 1,
    //     scrollTrigger: {
    //         trigger: '.display-section', // second section triggers animation
    //         start: "top bottom", //section, viewport
    //         end: "top top", //section, viewport
    //         scrub: 2, //true?
    //         immediateRender: false, //efficiency
    //     },
    // });
}