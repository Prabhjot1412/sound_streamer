import React, { useState } from "react";
import style from "./MainPage.module.css"

const HomePage = (props) => {
  return(
    <React.Fragment>
      <div className={style.container}>
        <h3 className={style.underline_on_hover}> Start new game</h3>

        <p><a href="#test" className={`${style.underline_on_hover} ${style.blue}`}> Fight </a></p>
      </div>
    </React.Fragment>
  )
}

export default HomePage
