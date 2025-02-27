"use client";

import './style.css'
import React, { useState } from 'react';

import SoundWave from '../assets/soundWave.png';

import TextToSpeech from './TextToSpeech'

export default function TheFalse() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

    const statements = [
        {
            "questions": [
                "Penguins can swim.",
                "Owls can see at night.",
                "Birds lay eggs.",
                "All birds can fly."
            ],
            "answer": 3,
            "exp": "Yeh! Your answer is correct, you have selected the correct false statement."
        },
        {
            "questions": [
                "Our heart stops beating when we sleep.",
                "Our bones help us stand and move.",
                "Our skin is the largest organ in our body.",
                "We have five fingers on each hand."
            ],
            "answer": 0,
            "exp": "Yeh! Your answer is correct, you have selected the correct false statement."
        },
        {
            "questions": [
                "A spoon is used for eating soup.",
                "A microwave makes food frozen.",
                "A fridge keeps food cold.",
                "Water comes out of the sink."
            ],
            "answer": 1,
            "exp": "Yeh! Your answer is correct, you have selected the correct false statement."
        },
        {
            "questions": [
                "Pencils are used for writing.",
                "Erasers can remove pencil marks.",
                "Books have pages inside them.",
                "Teachers help students learn."
            ],
            "answer": -1,
            "exp": "Tricky statement, there is no false statement, everything is true!"
        },
        {
            "questions": [
                "A ball can be used to play games.",
                "Bicycles have wheels.",
                "Swings can go back and forth.",
                "A basketball floats on water.",
            ],
            "answer": 3,
            "exp": "Yeh! Your answer is correct, you have selected the correct false statement."
        },
        {
            "questions": [
                "You wash your face after waking up.",
                "You put on socks before wearing shoes.",
                "You eat breakfast before brushing your teeth.",
                "A school bag is used to carry books and lunch.",
            ],
            "answer": -1,
            "exp": "Tricky statement, there is no false statement, everything is true!"
        }
    ]

    const IntiTextToSpeech = (text) => {
        TextToSpeech(text);
    }


    const handleOptionSelected = (answer) => {
        if (statements[currentSlideIndex].answer == answer) {
            if (statements[currentSlideIndex].answer == -1) {
                alert('Oops your answer is incorrect')
            } else {
                alert(statements[currentSlideIndex].exp)
                setCurrentSlideIndex(currentSlideIndex + 1)
            }
        } else {
            alert('Oops your answer is incorrect')
        }
    }

    const handleTricky = () => {
        if (statements[currentSlideIndex].answer == -1) {
            alert(statements[currentSlideIndex].exp)
            setCurrentSlideIndex(currentSlideIndex + 1)
        }
    }

    return (
        <div>
            {currentSlideIndex < statements.length ? (
                <>
                    <div className="max-w-xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg theFalseMainContainer">
                        <h2 className="text-2xl font-bold text-center mb-4">
                            Statement : {currentSlideIndex + 1}
                        </h2>

                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <ul className="mt-2 space-y-2">
                                {statements[currentSlideIndex].questions.map((question, qIndex) => (
                                    <li
                                        key={qIndex}
                                        onClick={() => handleOptionSelected(qIndex)}
                                        className='p-2 rounded-lg bg-gray-50 text-gray-700 options'
                                    >
                                        {question}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                    <button
                        onClick={handleTricky}
                        className="fixed bottom-4 right-4 py-2 px-4">
                        Tricky
                    </button>

                </>
            ) : (
                <div className="max-w-xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg theFalseMainContainer">
                    <h2 className="text-2xl font-bold text-center mb-4">
                        Great you have answered all the Statement
                    </h2>
                </div>
            )}
        </div>

    );
}


