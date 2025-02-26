'use client'

import './page.css'
import Hero from './assets/hero.jpg';
import Image from 'next/image'

import SlideShow from './components/SlideShow'

import { useState } from 'react';

export default function Home() {
  const [introDone, setIntroDone] = useState(false)
  const handleStart = () => {
    setIntroDone(true)
  }
  return (
    <div>
      {introDone ? (
        <div className="mainContainer">
          <div className="headingContainer" id="headingContainer">
            <h1 className="mainHeading">What Would Captain Braveheart Do?</h1>
            <Image className="logo" src={Hero} alt="hero" />
          </div>
          <hr />
          <SlideShow />
        </div>
      ) : (
        <div className="introContainer">
          <div className="text-center introContainer_leftHandSide">
            <p className="introText">
              Hello I am Captain Braveheart!
            </p>
            <button className="startBtn" onClick={handleStart}>Start</button>
          </div>
          <Image className="introHeroImg" src={Hero} alt="hero" />
        </div>
      )}
    </div>
  );
}
