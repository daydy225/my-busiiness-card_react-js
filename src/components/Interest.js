import React from "react"

export default function Interest(props) {
     return (
        <div 
        className={props.darkMode ?"interest" : "interest--light"}
        >
        <h3 className={props.darkMode ? "interest-title" : "interest--title--light"}
        >
         Centre d'intérets
        </h3>
        <p className={props.darkMode ? "interest-desc" : "interest-desc--light"}
        >
            Foot. Lecture. Internet. Basketball. Entreprenariat. Amour du voyage. Pop music. Gastronomie.
        </p>
        </div>
    )
}