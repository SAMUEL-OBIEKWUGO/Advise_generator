// import React from 'react'
import "../styles/home.css"
import pattern from "../assets/pattern-divider-desktop.svg"
import dice from "../assets/icon-dice.svg"

const Home = () => {
  return (
   <>
   <main id='body'>
    <div id="advise">
      <h2 className="advise">ADVISE #117</h2>
      <p><q>It is easy to sit up and take <br /> notice, what&apos;s difficult is getting <br /> up and taking action.</q></p>
      <img src={pattern} alt="" width={390} id="pattern"/>
      <button id="dice" >
      <img src={dice} alt=""/>
      </button>
    </div>
   </main>
   </>
  )
}

export default Home