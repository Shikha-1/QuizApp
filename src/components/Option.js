import React from 'react'
import { useQuizContext } from '../context/AppContext'
import '../styles/option.css'
import { sanitizedData } from './../constant'

function Option({ value, optionNum }) {
    const { onOptionClick, selectedAnswer, isCorrectAnswer } = useQuizContext()
    // Determine the class based on whether the option is selected and is correct
    const optionClass = optionNum + 1 === selectedAnswer ? (isCorrectAnswer ? 'correct-option' : 'incorrect-option') : ''

    return (
        <div className='Option'>
            <div className='option-num'>{optionNum}</div>
            <div
                className={`option-val ${optionClass}`}
                dangerouslySetInnerHTML={sanitizedData(value)}
                onClick={() => onOptionClick(optionNum)}
            />
        </div>
    )
}

export default Option