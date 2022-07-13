import {configureStore, combineReducers } from '@reduxjs/toolkit'
import counterSlice from './counterSlice';

// 1. create reducers
const rootReducer=combineReducers({
counter:counterSlice,
})

// 2. create store 
const store=configureStore({
    reducer:rootReducer
})

export default store;