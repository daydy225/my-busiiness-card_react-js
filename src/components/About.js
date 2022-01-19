import React from "react"

export default function About(props) {
    return (
        <div 
        className={props.darkMode?"about" : "about--light"}
        >
        <h3 
        className={props.darkMode ? "about-title" : "about-title--light"}
        >
         Sur moi
        </h3>
        <p 
        className={props.darkMode ? "about-desc" : "about-desc--light"}
        >
            Je suis un dévéloppeur frontend avec un intéret particulier à faire les choses simplement et rendre automatique mes tâches quotidiennes. j'essaie de suivre les normes de sécurité et les bonnes pratiques, et je suis toujours à la recherche de nouveaux défis.
        </p>
        </div>
    )
}