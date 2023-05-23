import React from 'react'
import AnimatedNumbers from "react-animated-numbers";

function Result ({ result }) {
    const animatedNumber = (num) => {
        if(typeof num === 'number') {
            return (
                <AnimatedNumbers
                    animateToNumber={num}
                ></AnimatedNumbers>)
        } else {
            return '--'
        }
    }

    return (
        <div className="box-result">
            <div className='box-field'>
                <span>{animatedNumber(result.years)}</span>years
            </div>
            <div className='box-field'>
                <span>{animatedNumber(result.months)}</span>months
            </div>
            <div className='box-field'>
                <span>{animatedNumber(result.days)}</span>days
            </div>
        </div>
    )
}

export default Result;