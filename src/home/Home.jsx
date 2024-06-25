// import React from 'react'
import "../styles/home.css"
import pattern from "../assets/pattern-divider-desktop.svg"
import dice from "../assets/icon-dice.svg"
import { useState } from "react"

const Home = () => {
   const [isToggled, setisToggled] = useState(false)
   const  handleClick = ()=>{
      setisToggled(prevState => !prevState);
   };

  return (
   <>
   <main id='body'>
    <div id="advise">
      <h2 className="advise">ADVISE #117</h2>
      
      <p>{isToggled ? `"It is easy to sit up and take notice, what's difficult is getting up and taking action."`:`"It is easy to have big dreams, but what's challenging is turning those dreams into reality."`}</p>
      {/* <p>{text}</p> */}
      <img src={pattern} alt="" width={390} id="pattern"/>
      <button id="dice" onClick={handleClick}>
      <img src={dice} alt=""/>
      </button>
    </div>
   </main>
   </>
  )
}

export default Home