import React from 'react'
import './App.css'

const Button = (props) => {
    return (
        <div className="button">
            {props.name}
        </div>
    )
}

export default Button
