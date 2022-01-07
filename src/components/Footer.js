import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

export default function App() {
    return (
    <footer>
        <div className="social-media">
           <span >
              <a href="http://twitter.com/@dabeliedadi" target="_blank">
            <FontAwesomeIcon icon={['fab','twitter-square']} className="media-icon"/>
              </a>
            </span>
           <span >
              <a href="#">
            <FontAwesomeIcon icon={['fab','facebook-square']} className="media-icon"/>
              </a>
            </span>
           <span>
              <a href="#">
             <FontAwesomeIcon icon={['fab','instagram-square']} className="media-icon"/>
              </a>
            </span>
           <span>
              <a href="https://github.com/daydy225" target="_blank">
              <FontAwesomeIcon icon={['fab','github-square']} className="media-icon"/>
              </a>
           </span>
        </div>
    </footer>
           )
}
