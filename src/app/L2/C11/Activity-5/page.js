"use client";

import './page.css';

import Boy from './assets/boy.jpg';
import Bat from './assets/bat.jpg';
import Image from 'next/image';

import { useState } from 'react';

export default function Home() {
  const [currentObj, setCurrentObj] = useState(0)
  const obj = [
    Boy,
    Bat
  ]
  const objHeading = [
    'How does human walk?',
    'How does bat fly?'
  ]
  const handleNext = () => {
    setCurrentObj(currentObj + 1)
  }
  return (
    <div className="mainContainer">
      <center>
        <h1 className="heading">{objHeading[currentObj]}</h1>
        <Image alt="currentObj" src={obj[currentObj]} />
        {currentObj == 0 &&
          <button onClick={handleNext}>Next</button>
        }
      </center>
    </div>
  );
}
