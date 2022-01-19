import React from "react"
import Info from "./components/Info"
import About from "./components/About"
import Interest from "./components/Interest"
import Footer from "./components/Footer"
import "./components/FontAwesomeIcons"
import "./style.css"
import Toggler from "./components/Toggler"



export default function App() {
      const [darkMode, setDarkMode] = React.useState(false) 
   
       function toggleDarkMode(){
           setDarkMode(prevMode => !prevMode)
       }

    return (
        <div className="business-card">
            <Toggler 
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            />
           <Info darkMode={darkMode}/>
           <About darkMode={darkMode} />
           <Interest darkMode={darkMode} />
           <Footer darkMode={darkMode} />
        </div>
    )
}