import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"



export default function Info() {
    return (
          <div className="info">
        <img src="./images/ma-photo.png"  className="photo" />
        <h1 className="info-title">Dadi Dabely</h1>
        <h3 className="info-subtitle">Dévéloppeur Frontend</h3>
        <h5 className="info-website">dabelydadi.website</h5>
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
            <a href="https://www.linkedin.com/in/dabely-dadi/" target="_blank">
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