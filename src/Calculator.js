import React from 'react'
import "./App.css";

const calculator = ({children}) => {
    return (
        <div id="calculator">
            {children}
        </div>
    )
}

export default calculator
