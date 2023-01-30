import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store'

// we can make it available to our React components by putting a React Redux <Provider> around our 
// application in src/main.jsx. Import the Redux store we just created, put a <Provider> around 
// your <App>, and pass the store as a prop

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
  
)
