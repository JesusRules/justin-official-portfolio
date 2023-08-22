import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import '../App.css'

const Container = styled.div`
    background-color: #f2f2f2;
    height: 100vh;
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const LogoImage = styled.img`
    height: 50px;
`

function Skills() {
  return (
    <Container>
      Skills!!
      <InfiniteScrollerApps />
      <InfiniteScrollerMedia />
      <InfiniteScrollerLanguages />
    </Container>
  )
}

function InfiniteScrollerApps() {
    useEffect(() => {
        var copy = document.querySelector(".logos-slide").cloneNode(true);
        document.querySelector('.logos').appendChild(copy);
    }, [])

    return (
        <div className='logos'>
            <div className='logos-slide'>
                <img src="/logos/app-development/adobe-xd.png" />
                <img src="/logos/app-development/amplify.png" />
                <img src="/logos/app-development/android-studio.jpg" />
                <img src="/logos/app-development/asp.net.png" />
                <img src="/logos/app-development/aws-ec2.png" />
                <img src="/logos/app-development/aws-lambda.png" />
                <img src="/logos/app-development/aws-logo.png" />
                <img src="/logos/app-development/figma.png" />
                <img src="/logos/app-development/firebase.jpg" />
                <img src="/logos/app-development/flutter.png" />
                <img src="/logos/app-development/gsap.png" />
                <img src="/logos/app-development/hostinger.png" />
                <img src="/logos/app-development/knockoutjs.png" />
                <img src="/logos/app-development/mongodb.jpg" />
                <img src="/logos/app-development/mysql.png" />
                <img src="/logos/app-development/net.maui.jpg" />
                <img src="/logos/app-development/netlify.png" />
                <img src="/logos/app-development/nextjs.jpg" />
                <img src="/logos/app-development/nodejs-express.webp" />
                <img src="/logos/app-development/postgres.png" />
                <img src="/logos/app-development/react-native.png" />
                <img src="/logos/app-development/react-redux.png" />
                <img src="/logos/app-development/react.jpg" />
                <img src="/logos/app-development/supabase.png" />
                <img src="/logos/app-development/tailwindcss.jpg" />
                <img src="/logos/app-development/threejs.png" />
                <img src="/logos/app-development/vercel.jpg" />
                <img src="/logos/app-development/vite.jpg" />
            </div>
        </div>
    )
}

function InfiniteScrollerMedia() {
    useEffect(() => {
        var copy = document.querySelector(".logos-slide-opposite").cloneNode(true);
        document.querySelector('.logos-opposite').appendChild(copy);
    }, [])

    return (
        <div className='logos-opposite'>
            <div className='logos-slide-opposite'>
                <img src="/logos/app-development/adobe-xd.png" />
                <img src="/logos/app-development/amplify.png" />
                <img src="/logos/app-development/android-studio.jpg" />
                <img src="/logos/app-development/asp.net.png" />
                <img src="/logos/app-development/aws-ec2.png" />
                <img src="/logos/app-development/aws-lambda.png" />
                <img src="/logos/app-development/aws-logo.png" />
                <img src="/logos/app-development/figma.png" />
                <img src="/logos/app-development/firebase.jpg" />
                <img src="/logos/app-development/flutter.png" />
                <img src="/logos/app-development/gsap.png" />
                <img src="/logos/app-development/hostinger.png" />
                <img src="/logos/app-development/knockoutjs.png" />
                <img src="/logos/app-development/mongodb.jpg" />
                <img src="/logos/app-development/mysql.png" />
                <img src="/logos/app-development/net.maui.jpg" />
                <img src="/logos/app-development/netlify.png" />
                <img src="/logos/app-development/nextjs.jpg" />
                <img src="/logos/app-development/nodejs-express.webp" />
                <img src="/logos/app-development/postgres.png" />
                <img src="/logos/app-development/react-native.png" />
                <img src="/logos/app-development/react-redux.png" />
                <img src="/logos/app-development/react.jpg" />
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
        var copy = document.querySelector(".logos-slide-2").cloneNode(true);
        document.querySelector('.logos-2').appendChild(copy);
    }, [])

    return (
        <div className='logos-2'>
            <div className='logos-slide-2'>
                <img src="/logos/app-development/adobe-xd.png" />
                <img src="/logos/app-development/amplify.png" />
                <img src="/logos/app-development/android-studio.jpg" />
                <img src="/logos/app-development/asp.net.png" />
                <img src="/logos/app-development/aws-ec2.png" />
                <img src="/logos/app-development/aws-lambda.png" />
                <img src="/logos/app-development/aws-logo.png" />
                <img src="/logos/app-development/figma.png" />
                <img src="/logos/app-development/firebase.jpg" />
                <img src="/logos/app-development/flutter.png" />
                <img src="/logos/app-development/gsap.png" />
                <img src="/logos/app-development/hostinger.png" />
                <img src="/logos/app-development/knockoutjs.png" />
                <img src="/logos/app-development/mongodb.jpg" />
                <img src="/logos/app-development/mysql.png" />
                <img src="/logos/app-development/net.maui.jpg" />
                <img src="/logos/app-development/netlify.png" />
                <img src="/logos/app-development/nextjs.jpg" />
                <img src="/logos/app-development/nodejs-express.webp" />
                <img src="/logos/app-development/postgres.png" />
                <img src="/logos/app-development/react-native.png" />
                <img src="/logos/app-development/react-redux.png" />
                <img src="/logos/app-development/react.jpg" />
                <img src="/logos/app-development/supabase.png" />
                <img src="/logos/app-development/tailwindcss.jpg" />
                <img src="/logos/app-development/threejs.png" />
                <img src="/logos/app-development/vercel.jpg" />
                <img src="/logos/app-development/vite.jpg" />
            </div>
        </div>
    )
}

export default Skills
