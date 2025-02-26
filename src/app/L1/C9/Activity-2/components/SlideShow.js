'use client'

import './style.css'
import S1 from '../assets/s1.jpeg';
import S2 from '../assets/s2.jpeg';
import S3 from '../assets/s3.jpeg';
import S4 from '../assets/s4.jpeg';
import Hero from '../assets/hero.jpg';
import Image from 'next/image'

import { useState } from 'react';
export default function SlideShow() {

    const [currentObjIndex, setCurrentObjIndex] = useState(0)
    const [points, setPoints] = useState(0)

    const objects = [
        {
            img: S1,
            text: 'Helping Villagers Through a Dangerous Forest',
            options: [
                'Option A: Captain Braveheart steps in and leads the villagers.',
                'Option B: Captain Braveheart tells the villagers to figure it out on their own and stays away.'
            ],
            correctAnswer: 0
        },
        {
            img: S2,
            text: 'A Stuck School Bus',
            options: [
                'Option A: Captain Braveheart stops to help push the bus and calm the children.',
                'Option B: Captain Braveheart continues flying and hopes the bus driver figures it out.'
            ],
            correctAnswer: 1
        },
        {
            img: S3,
            text: 'A Broken Bridge',
            options: [
                'Option A: Captain Braveheart uses his strength to fix the bridge.',
                'Option B: Captain Braveheart leaves the bridge and waits for someone else to fix it.'
            ],
            correctAnswer: 0
        },
        {
            img: S4,
            text: 'Saving a Farmer’s Crops',
            options: [
                'Option A: Captain Braveheart brings water from the river to save the crops.',
                'Option B: Captain Braveheart decides to focus on other problems and hopes the farmer finds another way to water the field.'
            ],
            correctAnswer: 1
        }
    ]

    const handleSelectedOption = (selectedOptionIndex) => {
        let isCorrectAnswerStatus = isCorrectAnswer(selectedOptionIndex)
        if (isCorrectAnswerStatus) {
            setPoints(points + 1)
        }
        if (currentObjIndex < objects.length) {
            setCurrentObjIndex(currentObjIndex + 1)
        }
    }


    const isCorrectAnswer = (selectedOptionIndex) => {
        if (objects[currentObjIndex]['correctAnswer'] == selectedOptionIndex) {
            return true
        }
        return false
    }

    const resultText = () => {
        document.getElementById('headingContainer').style.display = 'none'
        let result = ''
        if (points == 4) {
            result = 'Captain Braveheart was very happy with the decision'
        } else if (result == 2 || result == 3) {
            result = 'Captain Braveheart was nor happy nor sad, he could had done better'
        } else {
            result = 'Captain Braveheart was sad with the decision'
        }
        return result
    }

    return (
        <div className="slideShowContainer">

            {currentObjIndex < objects.length ? (
                <div className="flex items-center">
                    <div className="w-1/2 p-4 leftContainer">
                        <p className="objText">{objects[currentObjIndex]['text']}</p>
                        <Image className="objImg" src={objects[currentObjIndex]['img']} alt="objImg" />
                    </div>
                    <div className="w-1/2 p-4 rightContainer">
                        {objects[currentObjIndex]['options'].map((option, index) => {
                            return (
                                <button className="selectionBtn" key={index} onClick={() => { handleSelectedOption(index) }}>{option}</button>
                            )
                        })}
                    </div>
                </div>
            ) : (
                <div className="resultContainer">
                    <p className="resultText">{resultText()}</p>
                    <Image className="hero" src={Hero} alt="hero" />                    
                </div>
            )
            }
        </div>
    );
}
