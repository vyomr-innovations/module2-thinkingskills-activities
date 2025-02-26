import React from 'react'
import './page.css'
import Slider from './components/Slider'

const Page = () => {
    return (
        <div className="mainContainer">
            <div className="headingContainer">
                <h1 className="mainHeading">What Would You Do?</h1>
                <p className="emoji">🤔</p>
            </div>
            <hr />
            <Slider />
        </div>
    )
}

export default Page