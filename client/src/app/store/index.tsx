import { configureStore, combineReducers } from '@reduxjs/toolkit'
import itemReducer from './reducers/itemReducer'

const store = configureStore({
    reducer: combineReducers({
        itemReducer
    })
})

export default store