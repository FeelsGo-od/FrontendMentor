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
                <div className='violet-txt'>{animatedNumber(result.years)}</div>years
            </div>
            <div className='box-field'>
                <div className='violet-txt'>{animatedNumber(result.months)}</div>months
            </div>
            <div className='box-field'>
                <div className='violet-txt'>{animatedNumber(result.days)}</div>days
            </div>
        </div>
    )
}

export default Result;