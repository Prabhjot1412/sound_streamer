import React from "react";
import { useState } from "react";
import style from "./../../UserLogin/components/UserLogin.module.css"

const CreateProfileForm = (props) => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(props)
    let response = await fetch(props.main_page_props.profile_create_path, {
      method: "POST",
      body: JSON.stringify({
        username: userInputs.username,
        difficulty: userInputs.difficulty,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        'X-CSRF-TOKEN': props.main_page_props.csrf_token
      }
    })
    let response_json = await response.json()
    let errorsList = response_json.error_messages
    setErrorMessages(errorsList)

    if (response.ok && errorsList.length === 0) {
      location.reload()
    }
  }

  const [errorMessages, setErrorMessages] = useState([])

  const [userInputs, setUserInputs] = useState({
    username: '',
    difficulty: '',
  })

  const unsetMargin = {
    marginLeft: 'unset'
  }

  return(
    <React.Fragment>
      <form onSubmit={event => handleSubmit(event)}>
        <div className={style.item}>
          <label className={style.attri} htmlFor="username">Username</label>
          <input id="username" type="text" onChange={e => setUserInputs({...userInputs, username: e.target.value})}/>
        </div>

        <div className={style.item}>
          <label className={style.attri} htmlFor='difficulty'>difficulty</label>
          <select onChange={e => setUserInputs({...userInputs, difficulty: e.target.value})}>
            { props.main_page_props.difficulties.map((difficulty) => {
              return(
                <option key={difficulty} value={difficulty}>{difficulty}</option>
              )
            })}
          </select>
        </div>

        <div className={style.error_container} style={unsetMargin}>
          { errorMessages.length > 0 && errorMessages.map((error_message) => {
            return(
              <p key={error_message}>
                {error_message }
              </p>
            )
          })}
        </div>
        <button className={style.submit}>Submit</button>
      </form>
    </React.Fragment>
  )
}

export default CreateProfileForm
