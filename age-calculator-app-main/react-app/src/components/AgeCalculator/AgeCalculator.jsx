import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { countAge } from '../../features/ageCalculator/ageCalculatorSlice'

import Form from './componentElements/Form'
import Result from './componentElements/Result'

function BoxContainer () {
    const [result, setResult] = useState(useSelector((state) => state.ageCalculator))
    const [errorMessage, setErrorMessage] = useState(null)
    const dispatch = useDispatch()

    const countYears = (day, month, year) => {
        const birth = new Date(year, month - 1, day)
        const now = new Date()
        const diff = new Date(now.valueOf() - birth.valueOf())

        return {days: diff.getDate() ,months: diff.getMonth(), years: Math.abs(diff.getFullYear() - 1970)}
    }

    const handleSubmit = (e, day, month, year) => {
        e.preventDefault()
        const countedAge = countYears(day, month, year)
        
        dispatch(countAge(countedAge))
        setResult(countedAge)
    }

    return (
        <div className="box-container">
            <Form handleSubmit={handleSubmit} error={errorMessage ? errorMessage : ''} />
            <Result result={result} />
        </div>
    )
}

export default BoxContainer;