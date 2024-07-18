// To do add avatar selection for characters

import React from "react";
import { useState } from "react";
import style from "./../../UserLogin/components/UserLogin.module.css"

const CreateCharacterForm = (props) => {
  const handleSubmit = async (e) => {
    e.preventDefault()

    let response = await fetch(props.main_page_props.character_create_path, {
      method: "POST",
      body: JSON.stringify({
        name: userInputs.name,
        char_class: userInputs.char_class,
        profile_id: props.profile.id
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
    name: '',
    char_class: '',
  })

  const unsetMargin = {
    marginLeft: 'unset'
  }

  return(
    <React.Fragment>
      <form onSubmit={event => handleSubmit(event)}>
        <div className={style.item}>
          <label className={style.attri} htmlFor="name">Name</label>
          <input id="name" type="text" onChange={e => setUserInputs({...userInputs, name: e.target.value})}/>
        </div>

        <div className={style.item}>
          <label className={style.attri} htmlFor='char_class'>Pick your Class</label>
          <select>
            {props.main_page_props.char_classes.map((char_class) => {
              return(
                <option key={char_class} value={char_class}>{char_class}</option>
              )
            })}
          </select>
        </div>

        <div className={style.error_container} style={unsetMargin}>
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
    </React.Fragment>
  )
}

export default CreateCharacterForm
