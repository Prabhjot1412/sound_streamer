import React from "react";
import { useState } from "react";
import style from "./UserLogin.module.css"

const LoginPage = (props) => {
  const [userInputs, setUserInputs] = useState({
    username: '',
    password: '',
  })
  const [errorMessages, setErrorMessages] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    let response = await fetch(props.page_params.create_path, {
      method: "POST",
      body: JSON.stringify({
        username: userInputs.username,
        password: userInputs.password,
        login: true,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        'X-CSRF-TOKEN': props.page_params.csrf_token
      }
    })
    let response_json = await response.json()
    let errorsList = response_json.error_messages
    setErrorMessages(errorsList)

    if (response.ok && errorsList.length === 0) {
      location.href = props.page_params.redirect_path;
    }
  }

  return (
    <div>
      <div className={style.container}>
        <h1>Login</h1>
        <form onSubmit={event => handleSubmit(event)}>
          <div className={style.item}>
            <label className={style.attri} htmlFor="username">Username</label>
            <input id="username" type="text" onChange={e => setUserInputs({...userInputs, username: e.target.value})}/>
          </div>

          <div className={style.item}>
            <label className={style.attri} htmlFor='password'>Password</label>
            <input id="password" type='password' onChange={e => setUserInputs({...userInputs, password: e.target.value})}/>
          </div>

          <div className={style.error_container}>
            { errorMessages.length > 0 && errorMessages.map((error_message) => {
              return(
                <p key={error_message}>
                  { error_message }
                </p>
              )
            })}
          </div>
          <button className={style.submit}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
