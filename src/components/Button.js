import React from 'react'
import '../styles/button.css'

function Button({ buttonText, onClick }) {
    return (
        <button className='Button' onClick={onClick}>
            {buttonText}
        </button>
    )
}

export default Button