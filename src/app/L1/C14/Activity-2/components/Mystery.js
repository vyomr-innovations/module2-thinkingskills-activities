'use client'

import './style.css'


import ToyRockey from '../assets/toyRockey.jpeg';
import Hat from '../assets/hat.jpeg';
import RubberDuck from '../assets/rubberDuck.jpeg';
import CrayonBox from '../assets/crayonBox.jpeg';
import Balloon from '../assets/balloon.jpeg';
import Blanket from '../assets/blanket.jpeg';
import Lollipop from '../assets/lollipop.jpeg';
import Mbox from '../assets/mBox.jpeg';

import Image from 'next/image'


import { useState } from 'react';
export default function Mystery() {

    const [currentObjIndex, setCurrentObjIndex] = useState(-1)
    const objects = [
        {
            "img": ToyRockey,
            "text": "Toy Rockey"
        },
        {
            "img": Hat,
            "text": "Hat"
        },
        {
            "img": RubberDuck,
            "text": "Rubber Duck"
        },
        {
            "img": CrayonBox,
            "text": "Crayon Box"
        },
        {
            "img": Balloon,
            "text": "Balloon"
        },
        {
            "img": Blanket,
            "text": "Blanket"
        },
        {
            "img": Lollipop,
            "text": "Lollipop"
        }
    ]

    const handleMBoxClick = () => {
        if (currentObjIndex < objects.length) {
            setCurrentObjIndex(currentObjIndex + 1)
        } else {
            alert('Mystery box is empty now')
        }
    }
    return (
        <div className="slideShowContainer">

            <center>
                {currentObjIndex > -1 && currentObjIndex < objects.length &&
                    <div>
                        <Image alt="mObj" className="mObj" src={objects[currentObjIndex]["img"]} />
                        <p className="mtext">{objects[currentObjIndex]["text"]}</p>
                    </div>
                }
                <Image
                    alt="mBox"
                    onClick={handleMBoxClick}
                    className="mBox" src={Mbox} />
            </center>
        </div >
    );
}
