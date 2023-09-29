import React from 'react'
import { useQuizContext } from './../context/AppContext'
import '../styles/quiz.css'
import Home from './Home'
import Option from '../components/Option'
import Question from '../components/Question'
import Progress from '../components/Progress'

function Quiz() {
    const {
        currentQuestion,
        questionCounter,
        score
    } = useQuizContext()

    if (currentQuestion === undefined) {
        return <Home />
    }

    return (
        <div className='Quiz'>
            <Progress val={questionCounter} score={score} />
            <Question value={currentQuestion.question} />
            {currentQuestion.choices.map((choice, index) =>
                <Option
                    key={choice}
                    optionNum={index + 1}
                    value={choice}
                />
            )}
        </div>
    )
}

export default Quiz