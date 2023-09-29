import React from 'react'
import '../styles/progress-bar.css'

function ProgressBar({ filledPercentage }) {
    return (
        <div className='ProgressBar'>
            <div
                className='progress-bar-filled'
                style={{ width: `${filledPercentage}%` }}
            >
            </div>
        </div>
    )
}

export default ProgressBar