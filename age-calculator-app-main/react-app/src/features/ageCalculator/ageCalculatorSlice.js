import { createSlice } from '@reduxjs/toolkit'

export const ageCalculatorSlice = createSlice({
    name: 'ageCalculator',
    initialState: {
        days: 0, months: 0, years: 0
    },
    reducers: {
        countAge: (state, action) => {
            state = action.payload
        }
    }
})

export const { countAge } = ageCalculatorSlice.actions

export default ageCalculatorSlice.reducer