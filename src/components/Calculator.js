import React from 'react'
import "./Calculator.css";

const calculator = ({children}) => {
    return (
        <div id="calculator">
            {children}
        </div>
    )
}

export default calculator
