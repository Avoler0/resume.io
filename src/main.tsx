import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Routes>
      <Route path="https://avoler0.github.io/" element={<App />}/>
    </Routes>
  </React.StrictMode>
)
