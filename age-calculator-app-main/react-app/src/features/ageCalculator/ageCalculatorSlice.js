import { createSlice } from '@reduxjs/toolkit'

export const ageCalculatorSlice = createSlice({
    name: 'ageCalculator',
    initialState: {
        days: '--', months: '--', years: '--'
    },
    reducers: {
        countAge: (state, action) => {
            state = action.payload
        }
    }
})

export const { countAge } = ageCalculatorSlice.actions

export default ageCalculatorSlice.reducer