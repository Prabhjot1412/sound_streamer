import React, { useState } from "react";
import style from "./MainPage.module.css"

const GreetingsSignedOut = (props) => {
  const shadeOut = (boxId) => {
    let element = document.getElementById(boxId)
    element.style.backgroundColor = "rgba(46, 91, 91, 0.206)"
    element.style.fontSize = "35px"
    element.style.color = "grey"
  }

  const shadeIn = (boxId) => {
    let element = document.getElementById(boxId)
    element.style.backgroundColor = ""
    element.style.fontSize = ""
    element.style.color = ""
  }

  return(
    <React.Fragment>
      <div
        className={style.box1}
        id="box1"
        onMouseOver={ () => shadeOut("box2") }
        onMouseOut={() => shadeIn("box2") }
      >
        <a href="/login"> Log In <i className="fa-solid fa-arrow-right-to-bracket" /></a>
      </div>

      <div
        className={style.box2}
        id="box2"
        onMouseOver={ () => shadeOut("box1") }
        onMouseOut={() => shadeIn("box1") }
      >
        <a href="/registration/new"> Sign Up <i className="fa-solid fa-user-plus" /></a>
      </div>
    </React.Fragment>
  )
}

export default GreetingsSignedOut
