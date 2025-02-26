"use client";
import { useState } from 'react';
import Soccer from '../assets/soccer.jpeg';
import Homework from '../assets/homework.jpeg';
import Lunchbox from '../assets/lunchbox.jpeg';
import Image from 'next/image';
import './style.css';

const SlideShow = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
    const [optionSelected, setOptionSelected] = useState(false)
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1)
    const [totalQuestionsAnswered, setTotalQuestionsAnswered] = useState(0)

    const objectImg = [
        Soccer,
        Homework,
        Lunchbox,
    ];

    const objectName = [
        'Soccer Practice and Rain',
        'Missing Homework Assignment',
        'Missing Lunchbox',
    ];
    
    const objectOptions = [
        ['(a) Wait and hope the rain stops.',
            '(b) Play an indoor game with friends.',
            '(c) Do a craft activity at home.'],

        ['(a) Quickly try to finish the homework before class.',
            '(b) Tell the teacher honestly and ask for an extension.',
            '(c) Pretend they did the homework and hope the teacher doesnt check.'],

        ['(a) Borrow food from a friend.',
            '(b) Ask the teacher or school staff for help.',
            '(c) Wait until they get home to eat.']
    ];

    

    const objectOptionsOutcomes = [
        ['The rain doesn’t stop, and the John is disappointed.',
            'The John enjoys an indoor game and stays active.',
            'The John creates something fun and learns a new skill.'],

        ['The Alex rushes through the homework but makes many mistakes and feels stressed.',
            'Tell the teacher honestly and ask for an extension.',
            'The teacher finds out, and the Alex faces consequences, learning the value of honesty.'],

        ['Emma borrows food from a friend, and they decide to split the lunch so both have something to eat. However, neither of them feels completely full, and Emma feels a bit guilty knowing their friend had to eat less because of their mistake.',
            'The teacher helps, and Emma learns it’s okay to ask for assistance in tricky situations.',
            'Emma feels hungry and realizes the importance of remembering essentials.']
    ]


    const handleOptionSelected = (selctedOptionIndex) => {
        setSelectedOptionIndex(selctedOptionIndex)
        setOptionSelected(true)
    }

    const handleNextObj = (ignoreCase) => {
        if (!ignoreCase) {
            if (totalQuestionsAnswered == currentSlideIndex) {
                alert('Please select option')
                return
            }
        }

        if (currentSlideIndex < objectImg.length - 1) {
            setCurrentSlideIndex(currentSlideIndex + 1)
            setTotalQuestionsAnswered(totalQuestionsAnswered + 1)
        } else {
            alert('You made great choices today!')
        }
    }

    const handleConfirmSelection = () => {
        setOptionSelected(false)
        handleNextObj(true)
    }

    return (
        <div className="slideShowContainer">

            <div className="flex">
                <div className="w-1/2">
                    <h1 className="objectName">{objectName[currentSlideIndex]}</h1>
                    <Image src={objectImg[currentSlideIndex]} alt="object" />

                    {currentSlideIndex < objectImg.length - 1 &&
                        <button className="optionBtn" onClick={() => handleNextObj(false)}>Next</button>
                    }

                </div>

                <div className="w-1/2 benefitsContainerMain">
                    <div className="benefitsContainer">

                        <div className="optionSelctedBtn">
                            {objectOptions[currentSlideIndex].map((option, index) => {
                                return (
                                    <button onClick={() => handleOptionSelected(index)} key={index} className="optionBtn">
                                        {option}
                                    </button>
                                )
                            })}
                        </div>

                        {optionSelected &&
                            <p className="optionOutcome">
                                {objectOptionsOutcomes[currentSlideIndex][selectedOptionIndex]}
                            </p>
                        }


                        {optionSelected &&
                            <button className="optionOutcomeBtn" onClick={handleConfirmSelection}>
                                Confrim the selected option
                            </button>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlideShow;
