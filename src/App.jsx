import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './components/Home'
import { Route, Routes } from 'react-router-dom'
import { Login } from './components/Login'
import { Quiz } from './components/Quiz'
import { QuizItem } from './components/QuizItem'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz-item" element={<QuizItem />} />
      </Routes>
    </>
  )
}

export default App
