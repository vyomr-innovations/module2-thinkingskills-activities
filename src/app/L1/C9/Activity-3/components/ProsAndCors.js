'use client'

import './style.css'

import { useState } from 'react';

export default function ProsAndCors() {
    const [pros, setPros] = useState([]);
    const [cons, setCons] = useState([]);
    const [proInput, setProInput] = useState('');
    const [conInput, setConInput] = useState('');
    const [ladderHeight, setLadderHeight] = useState(0);
    const [showFinalDecision, setShowFinalDecision] = useState(false)

    const addPro = () => {
        setShowFinalDecision(false)
        if (proInput) {
            setPros([...pros, proInput]);
            setLadderHeight(ladderHeight + 1);
            setProInput('');
        }
    };

    const addCon = () => {
        setShowFinalDecision(false)
        if (conInput) {
            setCons([...cons, conInput]);
            setLadderHeight(ladderHeight);
            setConInput('');
        }
    };


    const handleProInputChange = (event) => setProInput(event.target.value);
    const handleConInputChange = (event) => setConInput(event.target.value);

    const handleFinalDecision = () => {
        setShowFinalDecision(true)
    }

    return (

        <div className="flex items-center">
            <div className="w-1/2 p-4 leftContainer">
                <p className="text">Let's decide if having 4 days of school is a good idea!</p>
                <div className="proLadderContainer">
                    <h2 className="text">Pro (Positive) Thoughts:</h2>
                    <input
                        className="input"
                        type="text"
                        value={proInput}
                        onChange={handleProInputChange}
                        placeholder="Enter a pro"
                    />
                    <button className="proBtn" onClick={addPro}>Add Pro</button>
                </div>

                <br />
                <hr />

                <div className="conLadderContainer">
                    <h2 className="text">Con (Negative) Thoughts:</h2>
                    <input
                        className="input"
                        type="text"
                        value={conInput}
                        onChange={handleConInputChange}
                        placeholder="Enter a con"
                    />
                    <button className="conBtn" onClick={addCon}>Add Con</button>
                </div>

            </div>


            <div className="w-1/2 p-4 rightContainer">
                <div style={{ marginTop: '20px' }}>
                    <h3 className="text">Ladder:</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        {Array.from({ length: ladderHeight }).map((_, index) => (
                            <div
                                key={`pro-${index}`}
                                style={{
                                    padding:'0px 10px',
                                    backgroundColor: '#4CAF50',
                                    marginBottom: '5px',
                                    textAlign: 'center',
                                    lineHeight: '30px',
                                    color: '#fff',
                                }}
                            >
                                {pros[index] || 'Pro'}
                            </div>
                        ))}

                        {Array.from({ length: cons.length }).map((_, index) => (
                            <div
                                key={`con-${index}`}
                                style={{
                                    padding:'0px 10px',
                                    backgroundColor: '#F44336',
                                    marginBottom: '5px',
                                    textAlign: 'center',
                                    lineHeight: '30px',
                                    color: '#fff',
                                }}
                            >
                                {cons[index] || 'Con'}
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ marginTop: '20px' }}>
                    {(cons.length > 0 || ladderHeight > 0) &&
                        <button className="finalDecisionBtn" onClick={handleFinalDecision}>Final Decision</button>
                    }
                    {showFinalDecision &&
                        <>
                            {ladderHeight > cons.length ? (
                                <p className="text resultText">Looks like we have more pros! It seems like 4 days of school could be a good idea!</p>
                            ) : (
                                <p className="text resultText">The cons are holding us back. Maybe 4 days of school isn't the best idea.</p>
                            )}
                        </>
                    }
                </div>
            </div>
        </div>
    );
}
