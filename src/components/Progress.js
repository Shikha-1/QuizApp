import React from 'react'
import '../styles/progress.css'
import ProgressBar from './ProgressBar'
import { NUM_OF_QUES } from '../constant'

function Progress({ val, score }) {
    // Calculate the completion %
    const filledPercentage = (val / NUM_OF_QUES) * 100
    return (
        <div className='Progress'>
            <div className='progress-count'>
                <div className='progress-count-ques'>
                    {`Attempted: ${val} / ${NUM_OF_QUES}`}
                </div>
                <ProgressBar filledPercentage={filledPercentage} />
            </div>
            <div className='progress-score'>
                Score: {score}
            </div>
        </div>
    )
}

export default Progress