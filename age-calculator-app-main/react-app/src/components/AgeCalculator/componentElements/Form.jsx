import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Form ({ onSubmit, dayError, setDayError }) {
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

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="box-form">
            <div className="box-fields">
                <div>
                    <p className="box-title">day</p>
                    <input onChange={(e) => handleDay(e)} {...register('day', {required: true, min: 1, max: 31, onChange: () => setDayError('')}) } type="text" className={errors.day || dayError ? 'box-input box-errorInp' : 'box-input'} defaultValue={day} placeholder="DD" />
                    {errors?.day?.type === "required" && <p className="box-errorTxt">This field is required</p>}
                    {errors?.day?.type === "min" || errors?.day?.type === "max" && <p className="box-errorTxt">Must be a valid day</p>}
                    {dayError === 'dayError' && <p className="box-errorTxt">Must be a valid day</p>}
                </div>
                <div>
                    <p className="box-title">month</p>
                    <input onChange={(e) => handleMonth(e)} {...register('month', {required: true, min: 1, max: 12}) } type="text" className={errors.month || dayError ? 'box-input box-errorInp' : 'box-input'} defaultValue={month} placeholder="MM" />
                    {errors?.month?.type === "required" && <p className="box-errorTxt">This field is required</p>}
                    {errors?.month?.type === "min" || errors?.month?.type === "max" && <p className="box-errorTxt">Must be a valid month</p>}
                </div>
                <div>
                    <p className="box-title">year</p>
                    <input onChange={(e) => handleYear(e)} {...register('year', {required: true, min: 0, max: new Date().getFullYear()}) } type="text" className={errors.year || dayError ? 'box-input box-errorInp' : 'box-input'} defaultValue={year} placeholder="YYYY" />
                    {errors?.year?.type === "required" && <p className="box-errorTxt">This field is required</p>}
                    {errors?.year?.type === "max" && (<p className="box-errorTxt">Must be in the past</p>)}
                    {errors?.year?.type === "min" && (<p className="box-errorTxt">Must be in our era ;D</p>)}
                </div>
            </div>
            <div className="box-submit">
                <div className="box-hr"></div>
                <button type="submit" aria-label="Submit Your Birthday date" title="Submit Your Birthday date"></button>
            </div>
        </form>
    )
}

export default Form;