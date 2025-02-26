"use client";

import RoboticArmWithIndustory from '../assets/roboticArmWithIndustory.jpg';
import RobiticArmWithAutomotive from '../assets/robiticArmWithAutomotive.jpg';
import RoboticArmWithSpace from '../assets/roboticArmWithSpace.jpg';
import Image from 'next/image';
import { useState } from 'react';
import './style.css';

const SlideShow = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
    const [showBenefits, setShowBenefits] = useState(false)
    const objectImgs = [
        RoboticArmWithIndustory,
        RobiticArmWithAutomotive,
        RoboticArmWithSpace,
    ];
    const objectName = [
        'Robotic Arm in Warehousing and Logistics',
        'Robotic Arm in Automotive Industry',
        'Robotic Arm in Space Exploration',
    ];

    const objectUses = [
        ['1. Picking and placing goods in warehouses.', '2. Sorting packages for delivery.'],
        ['1. Assembling car parts on production lines.', '2. Conducting quality control checks.'],
        ['1. Repairing spacecraft.', '2. Collecting samples from other planets or asteroids.']
    ]

    const objectBenefits = [
        ['1. Faster order fulfillment.',
            '2. Reduces labor costs.',
            '3. Minimizes injuries from repetitive tasks.'],

        ['1. Increases production speed.',
            '2. Ensures consistent quality.',
            '3. Reduces workplace hazards for employees.'],

        ['1. Performs tasks in environments unsafe for humans.',
            '2. Extends the capabilities of astronauts.',
            '3. Saves costs by reducing human involvement in space missions.']
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
                    <h1 className="objectName">{objectName[currentSlideIndex]}</h1>
                    <Image src={objectImgs[currentSlideIndex]} alt="object" />
                    {!showBenefits &&
                        <button onClick={handleRevealBenefits}>Show Uses & Benefits</button>
                    }

                    {showBenefits && currentSlideIndex < objectImgs.length - 1 &&
                        <button onClick={handleNextObj}>Next</button>
                    }

                </div>
                <div className="w-1/2 benefitsContainerMain">

                    <div className="benefitsContainer">
                        {showBenefits && <h1>Uses</h1>}
                        {showBenefits && objectUses[currentSlideIndex].map((uses, index) => {
                            return (
                                <div key={index}>
                                    <p>{uses}</p>
                                </div>
                            );
                        })}

                    </div>
                    <div className="benefitsContainer">
                        {showBenefits && <h1>Benefits</h1>}
                        {showBenefits && objectBenefits[currentSlideIndex].map((benefit, index) => {
                            return (
                                <div key={index}>
                                    <p>{benefit}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlideShow;
