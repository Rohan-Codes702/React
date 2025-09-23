import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Feathures/Counter/CounterSlice'
import { Component } from 'react'
export const store = configureStore({
  reducer: {
    counter: counterReducer,

  },
})

