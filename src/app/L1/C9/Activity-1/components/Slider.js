'use client'

import './style.css'
import { useState } from 'react';

import Image from 'next/image'
import S1 from '../assets/s1.jpeg';
import S2 from '../assets/s2.jpeg';
import S3 from '../assets/s3.jpeg';
import S5 from '../assets/s5.jpeg';

export default function Slider() {
    const [currentObjIndex, setCurrentObjIndex] = useState(0)

    const objects = [
        {
            img: S1,
            text: 'You are in line for the school bus and someone pushes you.'
        },
        {
            img: S2,
            text: 'You find a lost puppy on the playground.'
        },
        {
            img: S3,
            text: 'You accidentally break your friends toy.'
        },
        {
            img: S5,
            text: 'You see a friend being teased by other children.'
        }
    ]

    const handleNext = () => {
        console.log(currentObjIndex, objects.length)
        if (currentObjIndex < objects.length - 1) {
            setCurrentObjIndex(currentObjIndex + 1);
        }
    };

    return (
        <div className="sliderContainer">
            <br />
            <br />
            <p className="objText">{objects[currentObjIndex]['text']}</p>
            <Image className="objImg" src={objects[currentObjIndex]['img']} alt="img"/>
            {currentObjIndex < objects.length - 1 &&
                <button onClick={handleNext} className="nextBtn">Next</button>
            }
        </div>
    );
}
