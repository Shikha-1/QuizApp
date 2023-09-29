import React from 'react'
import '../styles/question.css'
import { sanitizedData } from './../constant'

function Question({ value }) {
    return (
        <div className='Question' dangerouslySetInnerHTML={sanitizedData(value)} />
    )
}

export default Question