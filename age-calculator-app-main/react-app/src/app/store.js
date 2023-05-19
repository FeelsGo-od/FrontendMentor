import { configureStore } from '@reduxjs/toolkit'
import ageCalculatorReducer from '../features/ageCalculator/ageCalculatorSlice'

export default configureStore({
    reducer: {
        ageCalculator: ageCalculatorReducer
    }
})