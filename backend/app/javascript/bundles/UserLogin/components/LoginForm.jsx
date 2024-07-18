import React from "react"
import LoginContainer from "./LoginContainer"
import LoginPage from "./LoginPage"

const LoginForm = (props) => {
  return (
    <React.Fragment>
      <LoginContainer >
        <LoginPage page_params={props}/>
      </LoginContainer>
    </React.Fragment>
  )
}

export default LoginForm
