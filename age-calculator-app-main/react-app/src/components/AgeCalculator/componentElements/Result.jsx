import React from 'react'
import AnimatedNumbers from "react-animated-numbers";

function Result ({ result }) {
    const animatedNumber = (num) => {
        if(num !== 0) {
            return (
                <AnimatedNumbers
                    animateToNumber={num}
                    // configs={(number, index) => {
                    //     return { mass: 1, tension: 230 * (index + 1), friction: 140 };
                    // }}
                ></AnimatedNumbers>)
        } else {
            return '--'
        }
    }
    return (
        <div className="box-result">
            <div className='box-field'>
                <span>{result.years < 10 && result.years > 1 ? `0${animatedNumber(result.years)}` : animatedNumber(result.years)}</span>years
            </div>
            <div className='box-field'>
                <span>{result.months < 10 && result.months > 1 ? `0${animatedNumber(result.months)}` : animatedNumber(result.months)}</span>months
            </div>
            <div className='box-field'>
                <span>{result.days < 10 && result.days > 1 ? `0${animatedNumber(result.days)}` : animatedNumber(result.days)}</span>days
            </div>
        </div>
    )
}

export default Result;