import React from "react";
import style from "./UserLogin.module.css"

const LoginContainer = (props) => {
  return(
    <div className={style.login_container}>
        { props.children }
    </div>
  )
}

export default LoginContainer
