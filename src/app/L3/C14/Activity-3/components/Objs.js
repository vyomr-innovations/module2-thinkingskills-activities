"use client";

import './style.css';

import Tect_e1 from '../assets/tect_e1.jpg';
import Tect_e2 from '../assets/tect_e2.jpg';
import Tect_e2a from '../assets/tect_e2-a.jpg';
import Tect_e3 from '../assets/tect_e3.jpg';
import Image from 'next/image';

import { useState } from 'react';

export default function Home() {
    const [currentObj, setCurrentObj] = useState(0)
    const obj = [
        Tect_e1,
        Tect_e2,
        Tect_e3
    ]
    const objHeading = [
        'RFID (Radio-Frequency Identification)',
        'Smart Sensors',
        'Biometrics (Fingerprint & Face Recognition)'
    ]
    const handleNext = () => {
        setCurrentObj(currentObj + 1)
    }
    return (
        <div className="mainContainer">
            <center>
                <h1 className="heading">{objHeading[currentObj]}</h1>
                <Image className='currentObj' alt="currentObj" src={obj[currentObj]} />
                {currentObj == 1 &&
                    <Image className='currentObj' alt="currentObj" src={Tect_e2a} style={{ marginTop: '20px' }} />
                }
                {currentObj < obj.length - 1 &&
                    <button onClick={handleNext}>Next</button>
                }
            </center>
        </div>
    );
}
