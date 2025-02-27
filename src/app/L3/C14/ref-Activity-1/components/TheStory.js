'use client'

import './style.css'
import SuperHero from '../assets/superHero.jpg'
import Image from 'next/image';
import { useState } from 'react';

export default function TheStory() {
    const [counter, setCounter] = useState(0);
    const questions = [
        'Who is behind the danger threatening the city?',
        'What danger is threatening the city?',
        'When did the superhero discover the danger?',
        'Where is the villain hiding?',
        'Why does the villain want to destroy the city?',
        'How will the superhero stop the villain?'
    ]
    const [questionList, setQuestionList] = useState([]);


    const handleNext = () => {
        if (counter < questions.length) {
            setCounter(prevCounter => prevCounter + 1)
            setQuestionList((prev) => [...prev, questions[counter]]);
        }
    }

    return (
        <>
            <div className="flex items-center">
                <div className="w-1/2 p-4 leftContainer text-center">
                    <p className="heading">Sparkles</p>
                    <center>
                        <Image className="hero" src={SuperHero} alt='hero' />
                    </center>
                </div>


                <div className="w-1/2 p-4 rightContainer">
                    {questionList.map((question, index) => {
                        const words = question.split(" ");
                        return (
                            <p key={index} className="content">
                                <span className="contenf1">{words[0]}</span>{" "}
                                {words.slice(1).join(" ")}
                            </p>
                        );
                    })}
                </div>
            </div>

            {counter < questions.length &&
                <button
                    onClick={handleNext}
                    className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg myBtn">
                    Next
                </button>
            }
        </>
    );
}
