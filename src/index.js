import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { QuizProvider } from './context/AppContext'
import './styles/index.css'
import AppRoutes from './routes/AppRoutes'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <QuizProvider>
        <AppRoutes />
      </QuizProvider>
    </Router>
  </React.StrictMode>
)
