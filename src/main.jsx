import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FirebaseContext } from './store/FirebaseContext'
import { auth } from './firebase/config'
import Context from './store/context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FirebaseContext.Provider value={{ auth }}>
    <Context>
      <App />
    </Context>
  </FirebaseContext.Provider>,
  document.getElementById('root')
)
