'use client'

import './style.css'

import { useState } from 'react';
export default function SlideShow() {

    const [currentObjIndex, setCurrentObjIndex] = useState(0)

    const objects = [
        {
            text: 'What does the "W" in 5W1H stand for?',
            options: [
                'What',
                'Where',
                'Why',
                'All of the above'
            ],
            correctAnswer: 3
        },
        {
            text: 'Which step comes first when solving a problem?',
            options: [
                'Execute the plan',
                'Identify the problem',
                'Reflect on the solution',
                'Choose a solution'
            ],
            correctAnswer: 1
        },
        {
            text: 'Why is it important to consider pros and cons when choosing a solution?',
            options: [
                'To make the problem more complicated',
                'To choose the best solution',
                'To waste time',
                'To avoid solving the problem'
            ],
            correctAnswer: 1
        },
        {
            text: 'What does the "H" in 5W1H stand for?',
            options: [
                'How',
                'Here',
                'Help',
                'Happen'
            ],
            correctAnswer: 0
        },
        {
            text: 'What should you do after executing a plan?',
            options: [
                'Forget about it',
                'Reflect on what could have been done better',
                'Start a new problem',
                'Ignore the results'
            ],
            correctAnswer: 1
        }
    ]




    const handleSelectedOption = (selectedOption) => {
        if (selectedOption == objects[currentObjIndex].correctAnswer) {
            alert('Correct Answer')
            if (currentObjIndex < objects.length - 1) {
                setCurrentObjIndex(prevCurrentObjIndex => prevCurrentObjIndex + 1)
            } else {
                alert('Great you have completed the quiz')
            }
        } else {
            alert('Incorrect Answer')
        }
    }

    return (
        <div className="slideShowContainer">

            <div className="p-4 space-y-4">
                <p className="text-lg font-semibold text-center bg-gray-100 p-4 rounded-lg">
                    {objects[currentObjIndex].text}
                </p>
                <center>
                    <button
                        onClick={() => handleSelectedOption(0)}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">{objects[currentObjIndex].options[0]}</button>

                    <br />

                    <button
                        onClick={() => handleSelectedOption(1)}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md">{objects[currentObjIndex].options[1]}</button>

                    <br />

                    <button
                        onClick={() => handleSelectedOption(2)}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md">{objects[currentObjIndex].options[2]}</button>

                    <br />

                    <button
                        onClick={() => handleSelectedOption(3)}
                        className="px-4 py-2 bg-yellow-500 text-black rounded-lg shadow-md">{objects[currentObjIndex].options[3]}</button>
                </center>
            </div>
        </div >
    );
}
