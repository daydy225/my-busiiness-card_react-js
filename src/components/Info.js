import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"



export default function Info(props) {
 
    return (
          <div 
          className={props.darkMode ? "info" : "info--light"}
          >
        <img src="./images/ma-photo.png"  className="photo" alt="" />
        <h1 
        className={props.darkMode ? "info-title" : "info-title--light"}
        >Dadi Dabely</h1>
        <h3 
        className={props.darkMode ?"info-subtitle" : "info-subtitle--light"}
        >Dévéloppeur Frontend</h3>
        <h5 className={props.darkMode ? "info-website" : "info-website--light"}
        >dabelydadi.website</h5>
        <div className="info-btn">
          <button className="btn btn-email">
            <a href="mailto:dabelydadi@gmail.com">
              <span>
                <FontAwesomeIcon icon="envelope" className="icon"/>
              </span>
              Email
              </a>
              </button>
          <button className="btn btn-linkedin">
            <a href="https://www.linkedin.com/in/dabely-dadi/" rel="noopener noreferrer"
            target="_blank" 
            >
            <span>
              <FontAwesomeIcon icon={['fab','linkedin']} className="icon"/>
            </span>
            LinkedIn
            </a>
            </button>
        </div>
        </div>
    )
}