import React from 'react'
import { useQuizContext } from '../context/AppContext'
import '../styles/score.css'
import Button from '../components/Button'
import { NUM_OF_QUES, QUES_MARKS } from '../constant'

function Score() {
    const { score, playAgain } = useQuizContext()
    return (
        <div className='Score'>
            <div className='content'>
                <p>Congratulations on Your Outstanding Performance!</p>
                <p>You have achieved an impressive score of {score} Marks out of {QUES_MARKS * NUM_OF_QUES}!</p>
            </div>
            <Button buttonText='Play Again' onClick={playAgain} />
        </div>
    )
}

export default Score