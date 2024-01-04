import Mode from "./components/Mode"
import Welcome from "./components/Welcome"
import Choice from "./components/Choice"
import { useState } from "react"
function App() {
  const [darkMode,setDarkMode] = useState(false)
  const [bgBody,setBgBody] = useState(null)
  document.body.style.backgroundColor = bgBody
  function changeMode(){
      if( darkMode === true){
        setBgBody("#313E51")
        setDarkMode(false)
      }else{
        setBgBody("#fff")
        setDarkMode(true)
      }
    }
  return (
    <div className="app">
      <Mode changeMode={changeMode} darkMode = {darkMode}/>
      <div className="body-container">
        <Welcome  darkMode = {darkMode}/>
        <Choice />
      </div>
      
    </div>
  )
}

export default App
