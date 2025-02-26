"use client";

import PuppyStuck from '../assets/puppyStuck.jpeg';
import WalletLost from '../assets/walletLost.jpg';
import KidLunch from '../assets/kidLunch.jpg';
import Image from 'next/image';

import { useState } from 'react';
import './style.css';

const SlideShow = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
    const [optionSelected, setOptionSelected] = useState(false)
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1)
    const [totalQuestionsAnswered, setTotalQuestionsAnswered] = useState(0)

    const objectImg = [
        PuppyStuck,
        WalletLost,
        KidLunch,
    ];

    const objectName = [
        'The Stuck Puppy',
        'The Forgotten Wallet',
        'Sharing Lunch',
    ];


    const objectOptions = [
        ['(a) Stop and help the puppy.',
            '(b) Call someone for help.',
            '(c) Ignore it and continue to school.'],

        ['(a) Take the wallet and keep the money.',
            '(b) Take the wallet and try to return it to the owner.',
            '(c) Leave the wallet where it is.'],

        ['(a) Share half of their sandwich.',
            '(b) Offer the whole sandwich and eat later.',
            '(c) Ignore the friend and eat alone.']
    ];

    const objectOptionsOutcomes = [
        ['Emma helps the puppy, but she arrives late to school. She feels good for doing the right thing.',
            'Emma calls for help and ensures someone will rescue the puppy. She still makes it to school on time.',
            'Emma ignores the puppy, gets to school on time, but feels guilty all day.'],

        ['Alex keeps the money, but he feels guilty and worried someone might find out.',
            'Alex finds the owner, who is very thankful, and Alex feels proud of doing the right thing.',
            'Alex leaves the wallet, but someone else might take it or the owner may never get it back.'],

        ['John and their friend both eat, and they feel good about sharing.',
            'John’s friend is happy, but John might feel hungry later.',
            'John eats alone but feels sad for not helping their friend.']
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
