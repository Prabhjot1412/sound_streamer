import React from "react"
import LoginContainer from "./LoginContainer"
import RegistrationPage from "./RegistrationPage"

const RegistrationForm = (props) => {
  return (
    <React.Fragment>
      <LoginContainer >
        <RegistrationPage page_params={props} />
      </LoginContainer>
    </React.Fragment>
  )
}

export default RegistrationForm
