import React from 'react'
import './App.css'

const Button = (props) => {
    return (
        <button className="button">
            {props.name}
        </button>
    )
}

export default Button
