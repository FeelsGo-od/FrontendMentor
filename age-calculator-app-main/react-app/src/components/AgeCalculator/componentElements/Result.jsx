import React from 'react'

function Result ({ result }) {
    return (
        <div className="box-result">
            <div>
                <span>{result.years < 10 ? `0${result.years}` : result.years} </span>years
            </div>
            <div>
                <span>{result.months < 10 ? `0${result.months}` : result.months} </span>months
            </div>
            <div>
                <span>{result.days < 10 ? `0${result.days}` : result.days} </span>days
            </div>
        </div>
    )
}

export default Result;