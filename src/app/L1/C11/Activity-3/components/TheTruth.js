"use client";

import './style.css'
import React, { useState } from 'react';

import FishFly from '../assets/fishFly.jpeg';
import FishSwim from '../assets/fishSwim.jpg';
import EarthRound from '../assets/earthRound.jpeg';
import EarthSquare from '../assets/earthSquare.jpeg';
import TreeWithWheels from '../assets/treeWithWheels.jpeg';
import TreeWithLeaves from '../assets/treeWithLeaves.jpg';
import PencilCanTalk from '../assets/pencilCanTalk.jpg';
import PencilCanDraw from '../assets/pencilCanDraw.jpg';
import DogRead from '../assets/dogRead.jpg';
import DogBark from '../assets/dogBark.jpg';
import SoundWave from '../assets/soundWave.png';
import Image from 'next/image'

import TextToSpeech from './TextToSpeech'

export default function TheTruth() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(-1)

    const objectImg = [
        [FishFly, FishSwim],
        [EarthRound, EarthSquare],
        [TreeWithWheels, TreeWithLeaves],
        [PencilCanTalk, PencilCanDraw],
        [DogBark, DogRead]
    ]

    const objectTitle = [
        ['Fish can fly', 'Fish can swim'],
        ['Earth is round in shape', 'Earth is square in shape'],
        ['Tree has wheels', 'Tree have leaves'],
        ['Pencil can talk', 'Pencil can draw'],
        ['Dog can bark', 'Dog can read']
    ]

    const objectAnswers = [
        [false, true],
        [true, false],
        [false, true],
        [false, true],
        [true, false]
    ]

    const IntiTextToSpeech = (text) => {
        TextToSpeech(text);
    }

    const handleSelectedOption = (selectedOption) => {
        setCurrentOptionSelected(selectedOption)
    }

    const handleNext = () => {
        setCurrentSlideIndex(currentSlideIndex + 1)
        setCurrentOptionSelected(-1)
    }

    const giveResult = () => {
        let result = objectAnswers[currentSlideIndex][currentOptionSelected]
        let statement = ''
        if (result) {
            statement = 'Yeh! Your answer is correct.'
        } else {
            statement = 'Oops your answer is incorrect.'
        }
        return statement
    }

    return (
        <div className="theTruthMainContainer">
            <div className="flex">

                <div className="w-1/2 bg-yellow-400 contentContainer">
                    <div className="contentContainer_1">
                        <h1 className="objectHeading">{objectTitle[currentSlideIndex][0]}</h1>
                        <Image onClick={() => { IntiTextToSpeech(objectTitle[currentSlideIndex][0]) }} className="soundWave" alt="soundWave" src={SoundWave} />
                    </div>
                    <Image className="objectImg" alt="objectImg" src={objectImg[currentSlideIndex][0]} />
                    {currentOptionSelected == -1 &&
                        <button className="truthBtn" onClick={() => { handleSelectedOption(0) }}>Truth</button>
                    }
                </div>

                <div className="w-1/2 bg-teal-400 contentContainer">
                    <div className="contentContainer_1">
                        <h1 className="objectHeading">{objectTitle[currentSlideIndex][1]}</h1>
                        <Image onClick={() => { IntiTextToSpeech(objectTitle[currentSlideIndex][1]) }} className="soundWave" alt="soundWave" src={SoundWave} />
                    </div>
                    <Image alt="objectImg" className="objectImg" src={objectImg[currentSlideIndex][1]} />
                    {currentOptionSelected == -1 &&
                        <button className="truthBtn" onClick={() => { handleSelectedOption(1) }}>Truth</button>
                    }
                </div>

            </div>

            <div className="resultContainer">
                {currentOptionSelected > -1 &&
                    <h1 className="resultText">
                        {giveResult()}
                    </h1>
                }

                {currentOptionSelected > -1 && currentSlideIndex < objectImg.length - 1 &&
                    <button className="nextBtn" onClick={handleNext}>Next</button>
                }
            </div>
        </div>
    );
}


