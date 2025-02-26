'use client'

import './style.css'

import S1_t1 from '../assets/scenarios/scenarios_1/s1_t1.jpeg';
import S1_t2 from '../assets/scenarios/scenarios_1/s1_t2.jpeg';
import S1_t3 from '../assets/scenarios/scenarios_1/s1_t3.jpeg';
import S1_t4 from '../assets/scenarios/scenarios_1/s1_t3.jpeg';

import S2_t1 from '../assets/scenarios/scenarios_2/s2_t1.jpeg';
import S2_t2 from '../assets/scenarios/scenarios_2/s2_t2.jpeg';
import S2_t3 from '../assets/scenarios/scenarios_2/s2_t3.jpeg';
import S2_t4 from '../assets/scenarios/scenarios_2/s2_t4.jpeg';
import S2_t5 from '../assets/scenarios/scenarios_2/s2_t5.jpeg';

import S3_t1 from '../assets/scenarios/scenarios_3/s3_t1.jpeg';
import S3_t2 from '../assets/scenarios/scenarios_3/s3_t2.jpeg';
import S3_t3 from '../assets/scenarios/scenarios_3/s3_t3.jpeg';
import S3_t4 from '../assets/scenarios/scenarios_3/s3_t4.jpeg';
import S3_t5 from '../assets/scenarios/scenarios_3/s3_t5.jpeg';

import Image from 'next/image'


import { useState } from 'react'


export default function Sequence() {
    const [currentObjectIndex, setCurrentObjectIndex] = useState(0)
    const objectsTitle = [
        'Fix the breakfast prep sequence',
        'Fix the gardening sequence sequence',
        'Fix the sequence to get ready for school'
    ]
    const objects = [
        [
            {
                id: 1,
                img: S1_t2,
                text: 'Pour cereal into a bowl.',
                seqPlace: 2
            },
            {
                id: 0,
                img: S1_t1,
                text: 'Open the cereal box.',
                seqPlace: 1
            },
            {
                id: 3,
                img: S1_t4,
                text: 'Eat the cereal with a spoon.',
                seqPlace: 4
            },
            {
                id: 2,
                img: S1_t3,
                text: 'Add milk to the cereal.',
                seqPlace: 3
            }
        ],
        [
            {
                id: 2,
                img: S2_t3,
                text: 'Put the pot in sunlight.',
                seqPlace: 3
            },
            {
                id: 0,
                img: S2_t1,
                text: 'Plant the seed in the soil.',
                seqPlace: 1
            },
            {
                id: 1,
                img: S2_t2,
                text: 'Water the seed.',
                seqPlace: 2
            },
            {
                id: 4,
                img: S2_t5,
                text: 'Play with the soil.',
                seqPlace: 5
            },
            {
                id: 3,
                img: S2_t4,
                text: 'Watch the plant grow.',
                seqPlace: 4
            }
        ],
        [
            {
                id: 3,
                img: S3_t4,
                text: 'Pack your school bag.',
                seqPlace: 4
            },
            {
                id: 4,
                img: S3_t5,
                text: 'Watch a movie.',
                seqPlace: 5
            },
            {
                id: 1,
                img: S3_t2,
                text: 'Brush your teeth.',
                seqPlace: 2
            },
            {
                id: 0,
                img: S3_t1,
                text: 'Wake up and get out of bed.',
                seqPlace: 1
            },
            {
                id: 2,
                img: S3_t3,
                text: 'Eat your breakfast.',
                seqPlace: 3
            }
        ]
    ]

    const objectSeqAnswer = ['1234', '1234', '1234']

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
        if (objectSeqAnswer[currentObjectIndex] === seq) {
            if (currentObjectIndex < objects.length - 1) {
                setCurrentObjectIndex(currentObjectIndex + 1)
                setCurrentOptions(objects[currentObjectIndex + 1])
                setCurrentSelectedObject([])
            } else {
                alert('Yeh! You did a good job')
            }
        } else {
            alert('Oops! Incorrect sequence, try again')
        }
    }

    return (
        <div className="sequenceConatiner">
            <p className="sequenceText">{objectsTitle[currentObjectIndex]}</p>
            <div className="selectedOptionsContainer">
                {currentSelectedObject.length > 0 && currentSelectedObject.map((object, index) => {
                    return (
                        <div key={index} className="selectedOptionsContainer_1">
                            <Image className="objImg" src={object.img} alt="objImg" />
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
                            <Image className="objImg" src={object.img} alt="objImg" />
                            <p className="objText">{object.text}</p>
                            <button onClick={() => { handleObjSelection(object) }} className="objActionBtn">Add</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
