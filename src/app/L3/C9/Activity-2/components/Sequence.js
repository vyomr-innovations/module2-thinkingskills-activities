'use client'

import './style.css'
import S1_t1 from '../assets/scenarios/scenarios_1/s1_t1.jpeg';
import S1_t2 from '../assets/scenarios/scenarios_1/s1_t2.jpeg';
import S1_t3 from '../assets/scenarios/scenarios_1/s1_t3.jpeg';
import S1_t4 from '../assets/scenarios/scenarios_1/s1_t4.jpeg';
import Image from 'next/image';

import { useState } from 'react'


export default function Sequence() {
    const [currentObjectIndex, setCurrentObjectIndex] = useState(0)
    const maxTime = 120;
    const objects = [
        [
            {
                id: 1,
                img: S1_t2,
                text: 'Piano Practice (30 mins)',
                seqPlace: 2,
                timeReq: 30
            },
            {
                id: 0,
                img: S1_t1,
                text: 'Homework (65 mins)',
                seqPlace: 1,
                timeReq: 65
            },
            {
                id: 3,
                img: S1_t4,
                text: 'Call a friend to plan a weekend (15 mins)',
                seqPlace: 4,
                timeReq: 15
            },
            {
                id: 2,
                img: S1_t3,
                text: 'Clean Room (25 mins)',
                seqPlace: 3,
                timeReq: 25
            }
        ]
    ]

    const objectSeqAnswer = ['123']

    const [currentOptions, setCurrentOptions] = useState(objects[currentObjectIndex])
    const [currentSelectedObject, setCurrentSelectedObject] = useState([])

    const handleObjSelection = (selectedOption) => {
        setCurrentSelectedObject([...currentSelectedObject, selectedOption]);
        setCurrentOptions(currentOptions.filter((item) => item.id !== selectedOption.id));
    }

    const handleObjRemove = (selectedOption) => {
        setCurrentOptions([...currentOptions, selectedOption]);
        setCurrentSelectedObject(currentSelectedObject.filter((item) => item.id !== selectedOption.id));
    }

    const handleFinalDecision = () => {
        let seq = ''
        currentSelectedObject.forEach((item) => {
            seq = seq + item.seqPlace.toString()
        })

        let tempMaxTime = 0
        currentSelectedObject.forEach((item) => {
            tempMaxTime = tempMaxTime + item.timeReq
        })

        if (tempMaxTime > maxTime) {
            alert('Oops! your total time to do task is exceeding time limit')
            return
        }

        if (objectSeqAnswer[currentObjectIndex] === seq) {
            alert('Yeh! You did a good job')
        } else {
            alert('You can manage time and prioritise work in a better way!')
        }
    }

    return (
        <div className="sequenceConatiner">
            <div className="selectedOptionsContainer">
                {currentSelectedObject.length > 0 && currentSelectedObject.map((object, index) => {
                    return (
                        <div key={index} className="selectedOptionsContainer_1">
                            <Image alt='objImg' className="objImg" src={object.img} />
                            <p className="objText">{index + 1}. {object.text}</p>
                            <button onClick={() => { handleObjRemove(object) }} className="objActionBtn">Remove</button>
                        </div>
                    )
                })}
            </div>

            {currentSelectedObject.length > 0 &&
                <div className="finalDecisionConatiner">
                    <button className="finalDecisionbtn" onClick={handleFinalDecision}>Final Decision</button>
                </div>
            }

            <div className="fixed bottom-0 left-0 w-full bg-blue-500 text-white text-center py-4 optionContainer">
                {currentOptions.map((object, index) => {
                    return (
                        <div className="optionContainer_1" key={index}>
                            <Image alt='objImg' className="objImg" src={object.img} />
                            <p className="objText">{object.text}</p>
                            <button onClick={() => { handleObjSelection(object) }} className="objActionBtn">Add</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
