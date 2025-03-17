'use client'

import './style.css'

import BrokenBike from '../assets/brokenBike.jpeg'
import ToolBox from '../assets/toolBox.jpeg'
import Clock from '../assets/clock.jpeg'
import Evn from '../assets/evn.jpeg'
import TelePhone from '../assets/telePhone.jpeg'
import Image from 'next/image';

import Solution from './Solution'
import { useState } from 'react'


export default function Mystery() {
    const [showfindSolutionScreen, setShowfindSolutionScreen] = useState(false)

    const [clues, setClues] = useState([])
    const [counter, setCounter] = useState(0);
    const questions = [
        'Who is involved in this situation?',
        'What is the problem?',
        'When do you need to fix the bike?',
        'Where is the party location?',
        'Why is fixing the bike important?',
        'How will you fix the bike?'
    ]
    const [questionCounter, setQuestionCounter] = useState(0);
    const [questionList, setQuestionList] = useState([]);

    const answers = [
        'You and your bike',
        'The bike is broken',
        'Before 12.00 PM',
        '5km away from the current location',
        'To go to the party',
        'Call a mechanic, call a friend or try to fix yourself using toolbox'
    ]
    const [answerCounter, setAnswerCounter] = useState(0);
    const [answerList, setAnswerList] = useState([]);

    const showClue = (clue) => {
        setClues((prev) => [...prev, clue]);
    }

    const handleNext = () => {
        if (answerCounter < answers.length) {
            let c = counter + 1
            setCounter(c)
            if (c % 2 === 0) {
                setAnswerCounter(prevCounter => prevCounter + 1)
                setAnswerList((prev) => [...prev, answers[answerCounter]]);
            } else {
                setQuestionCounter(prevCounter => prevCounter + 1)
                setQuestionList((prev) => [...prev, questions[questionCounter]]);
            }
        }
    }


    const cluesDone = () => {
        setShowfindSolutionScreen(true)
    }

    return (
        <div className="mysteryConatiner">
            {showfindSolutionScreen ? (
                <div>
                    <Solution />
                </div>
            ) : (
                <>
                        <p className="subH">Click on each image to the reveal the clues</p>
                        <div className="clueMaincontainer">
                        <div className="clueSubcontainer">
                            <Image
                                alt='BrokenBike'
                                onClick={() => showClue(1)}
                                src={BrokenBike} />
                            {clues.includes(1) &&
                                <p><b>Clue : </b> You’ve found the broken bike. It’s missing a tire, and the handlebars are loose.</p>
                            }
                        </div>
                        <div className="clueSubcontainer">
                            <Image
                                alt='clock'
                                onClick={() => showClue(2)}
                                src={Clock} />
                            {clues.includes(2) &&
                                <p><b>Clue : </b> It's 10.05 AM the party starts in 2 hours, and you need the bike ready before then.</p>
                            }
                        </div>
                        <div className="clueSubcontainer">
                            <Image
                                alt='ToolBox'
                                onClick={() => showClue(3)}
                                src={ToolBox} />
                            {clues.includes(3) &&
                                <p><b>Clue : </b> You have found a toolbox is full of tools: wrenches, screwdrivers, and a pump, but you’re not sure how to use them.</p>
                            }
                        </div>
                        <div className="clueSubcontainer">
                            <Image 
                                alt='Evn'
                                onClick={() => showClue(4)}
                                src={Evn} />
                            {clues.includes(4) &&
                                <p><b>Clue : </b> Birthday party invitation of a friend and you really want to attend the party, and the part location is 5km away hence riding the bike there is your only option.</p>
                            }
                        </div>
                        <div className="clueSubcontainer">
                            <Image 
                                alt='telePhone'
                                onClick={() => showClue(5)}
                                src={TelePhone} />
                            {clues.includes(5) &&
                                <p><b>Clue : </b>You have found a phone you can call a mechanic's or your friend.</p>
                            }
                        </div>
                    </div>

                    {clues.length > 4 &&
                        <hr />
                    }

                    <div className="qnaContainer">
                        <div className="leftContainer">
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
                        <div className="rightContainer">
                            {answerList.map((answer, index) => {
                                return (
                                    <p key={index} className="content">
                                        {answer}
                                    </p>
                                );
                            })}
                        </div>

                        {answerCounter == answers.length &&
                            <div className="finalBtnContainer">
                                <button onClick={cluesDone}>Finalize the solution</button>
                            </div>
                        }
                    </div>


                    {clues.length > 4 && answerCounter < answers.length &&
                        <button
                            onClick={handleNext}
                            className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg myBtn">
                            Next
                        </button>
                    }
                </>
            )}
        </div>
    );
}
