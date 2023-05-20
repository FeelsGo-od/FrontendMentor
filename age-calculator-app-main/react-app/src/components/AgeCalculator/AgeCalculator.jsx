import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { countAge } from '../../features/ageCalculator/ageCalculatorSlice'

import Form from './componentElements/Form'
import Result from './componentElements/Result'

function BoxContainer () {
    const [result, setResult] = useState(useSelector((state) => state.ageCalculator))
    const [dayError, setDayError] = useState('')
    const dispatch = useDispatch()

    const countYears = (day, month, year) => {
        const birth = new Date(year, month - 1, day)
        const now = new Date()
        const diff = new Date(now.valueOf() - birth.valueOf())

        return {days: diff.getDate() ,months: diff.getMonth(), years: Math.abs(diff.getFullYear() - 1970)}
    }

    const onSubmit = (data) => {
        if(new Date(data.year, data.month - 1, data.day).getDate() !== Number(data.day)) {
            setDayError('dayError')
            return false;
        } else {
            setDayError('')
        }

        const countedAge = countYears(data.day, data.month, data.year)

        dispatch(countAge(countedAge))
        setResult(countedAge)
    }

    return (
        <div className="box-container">
            <Form onSubmit={onSubmit} dayError={dayError ? dayError : ''} setDayError={setDayError} />
            <Result result={result} />
        </div>
    )
}

export default BoxContainer;