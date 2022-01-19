import React from 'react'

export default function Toggler(props){
    return (
        <div 
        className="toggler" 
    >
        <p className="toggler--light">Clair</p>
        <div 
            className="toggler--slider"
            onClick={props.toggleDarkMode}
        >
            <div className={props.darkMode ? "toggler--slider--circle" : "toggler-top"}></div>
        </div>
        <p className="toggler--dark">Sombre</p>
    </div>
    )
}