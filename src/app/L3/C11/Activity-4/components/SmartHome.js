"use client";

import Light from '../assets/light.jpg';
import Refrigerator from '../assets/refrigerator.jpg';
import Vacuum from '../assets/vacuum.jpg';
import Image from 'next/image';

import { useState } from 'react';
import './style.css';

const SmartHome = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
    const [showBenefits, setShowBenefits] = useState(false)
    const homeObject = [
        Light,
        Refrigerator,
        Vacuum,
    ];
    const homeObjectName = [
        'Lights',
        'Refrigerator',
        'Vacuum',
    ];

    const homeObjectBenefits = [
        ['1. Automatically adjust brightness and color based on time of day.',
            '2. Turn lights on/off using motion sensors or voice commands.',
            '3. Save energy by detecting empty rooms and turning lights off.'],

        ['1. Keep track of items inside and notify you when youre running low.',
            '2. Suggest recipes based on the ingredients you have.',
            '3. Let you see inside without opening the door.'],

        ['1. Automatically cleans your floors and avoids obstacles.',
            '2. Learn the layout of your house for efficient cleaning.',
            '3. Cleans on a schedule or with voice commands.']
    ];

    const handleRevealBenefits = () => {
        setShowBenefits(true)
    }

    const handleNextObj = () => {
        setCurrentSlideIndex(currentSlideIndex + 1)
        setShowBenefits(false)
    }
    return (
        <div className="slideShowContainer">

            <div className="flex">
                <div className="w-1/2">
                    <h1 className="homeObjectName">{homeObjectName[currentSlideIndex]}</h1>
                    <Image src={homeObject[currentSlideIndex]} alt="smart home object" />
                    {!showBenefits &&
                        <button onClick={handleRevealBenefits}>Show Benefits</button>
                    }

                    {showBenefits && currentSlideIndex < homeObject.length - 1 &&
                        <button onClick={handleNextObj}>Next</button>
                    }

                </div>
                <div className="w-1/2 benefitsContainerMain">
                    <div className="benefitsContainer">
                        {showBenefits && homeObjectBenefits[currentSlideIndex].map((benefit, index) => {
                            return (
                                <p key={index}>{benefit}</p>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmartHome;
