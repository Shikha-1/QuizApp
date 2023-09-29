import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Quiz from '../pages/Quiz'
import Score from '../pages/Score'
import Error from '../pages/Error'

function AppRoute() {
    return <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/score' element={<Score />} />
        <Route path='*' element={<Error />} />
    </Routes>
}

export default AppRoute
