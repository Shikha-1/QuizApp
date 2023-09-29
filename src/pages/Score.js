import React from 'react'
import { useQuizContext } from '../context/AppContext'
import '../styles/score.css'
import Button from '../components/Button'

function Score() {
    const { score, playAgain } = useQuizContext()
    return (
        <div className='Score'>
            Your Score: {score}
            <Button buttonText='Play Again' onClick={playAgain} />
        </div>
    )
}

export default Score