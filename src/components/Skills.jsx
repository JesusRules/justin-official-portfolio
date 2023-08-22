import React, { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
import '../App.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
    background-color: #ceeeff;
    height: 100vh;
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Title = styled.h1`
    color: black;
    text-align: center;
    margin: 1rem;
    `;

const Subtitle = styled.h2`
    color: #0011ff;
    text-align: center;
    margin: 0rem 0rem 1rem 0rem;
`;

function Skills() {
  return (
    <Container>
      <Title>I have a long list of technologies I've used over the years!</Title>
      <Subtitle>Check them out!</Subtitle>
      <InfiniteScrollerApps />
      {/* <InfiniteScrollerLanguages /> */}
      {/* <InfiniteScrollerMedia /> */}
    </Container>
  )
}

function InfiniteScrollerApps() {
    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 1, 
    //     easing: 'ease-in-out',
    //   };

    useEffect(() => {
        var copy = document.querySelector(".logos-slide").cloneNode(true);
        document.querySelector('.logos').appendChild(copy);
    }, [])

    return (
        <div className='logos' >
            <div className='logos-slide'>
                <img src="/logos/app-development/adobe-xd.png" />
                <img src="/logos/app-development/amplify.png" />
                <img src="/logos/app-development/android-studio.jpg" />
                <img src="/logos/app-development/asp.net.png" />
                <img src="/logos/app-development/aws-logo.png" />
                <img src="/logos/app-development/express.png" />
                <img src="/logos/app-development/figma.png" />
                <img src="/logos/app-development/firebase.jpg" />
                <img src="/logos/app-development/flutter.png" />
                <img src="/logos/app-development/gsap.png" />
                <img src="/logos/app-development/hostinger.png" />
                <img src="/logos/app-development/knockoutjs.png" />
                <img src="/logos/app-development/mongodb.jpg" />
                <img src="/logos/app-development/mysql.png" />
                <img src="/logos/app-development/net-maui-logo.webp" />
                <img src="/logos/app-development/netlify.png" />
                <img src="/logos/app-development/nextjs.jpg" />
                <img src="/logos/app-development/nodejs.png" />
                <img src="/logos/app-development/postgres.png" />
                <img src="/logos/app-development/react-native.png" />
                <img src="/logos/app-development/react-redux.png" />
                <img src="/logos/app-development/react.jpg" />
                <img src="/logos/app-development/styled-components.png" />
                <img src="/logos/app-development/supabase.png" />
                <img src="/logos/app-development/tailwindcss.jpg" />
                <img src="/logos/app-development/threejs.png" />
                <img src="/logos/app-development/vercel.jpg" />
                <img src="/logos/app-development/vite.jpg" />
            </div>
    </div>
    )
}

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
