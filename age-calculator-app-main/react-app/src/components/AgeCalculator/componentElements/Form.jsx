import React, { useState } from "react";

function Form ({ handleSubmit }) {
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

    const handleDay = (e) => {
        setDay(e.target.value)
    }
    const handleMonth = (e) => {
        setMonth(e.target.value)
    }
    const handleYear = (e) => {
        setYear(e.target.value)
    }

    return (
        <form className="box-form">
            <div className="box-fields">
                <label>
                    <p className="box-title">day</p>
                    <input onChange={(e) => handleDay(e)} type="text" className="box-input" value={day} placeholder="DD" />
                </label>
                <label>
                    <p className="box-title">month</p>
                    <input onChange={(e) => handleMonth(e)} type="text" className="box-input" value={month} placeholder="MM" />
                </label>
                <label>
                    <p className="box-title">year</p>
                    <input onChange={(e) => handleYear(e)} type="text" className="box-input" value={year} placeholder="YYYY" />
                </label>
            </div>
            <div className="box-submit">
                <div className="box-hr"></div>
                <button onClick={e => handleSubmit(e, day, month, year)} type="submit"></button>
            </div>
        </form>
    )
}

export default Form;