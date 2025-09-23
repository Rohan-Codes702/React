import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Name from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './Redux/Store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <Name />
    </Provider>
  </StrictMode>
  ,
)
