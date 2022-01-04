import React from 'react'
import './App.css'
import { useState } from "react";

const Button = ({name, bkgdColor}) => {

    return (
        <button className="button" style={{backgroundColor: bkgdColor}}>
       
            {name}
            
        </button>
    )
}

export default Button
