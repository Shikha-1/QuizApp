import React from 'react'
import { useQuizContext } from './../context/AppContext'
import '../styles/home.css'
import Button from './../components/Button'

function Home() {
    const {
        questions,
        loading,
        startQuiz
    } = useQuizContext()

    return (
        <div className='Home'>
            <div className='content'>
                <p>Welcome to our exciting quiz website! Are you ready to test your knowledge and have some fun?
                </p>
                <p> Get ready for a thrilling adventure as you answer multiple-choice questions (MCQs) on general knowledge.
                </p>
                <p>  Here's the deal: You'll face some thrilling questions. For every correct answer, you'll earn 10 points, but be cautious - incorrect answers won't earn you any points. So, choose wisely!
                </p>
                <p> Feel the adrenaline rush as you climb the leaderboard.
                </p>
                <p>Get started now, and let the general knowledge showdown begin! Good luck!</p>
                <Button buttonText={questions.length === 0 && loading ? 'Loading...' : 'Start Quiz'} onClick={() => startQuiz()} />
            </div>
        </div>
    )
}

export default Home