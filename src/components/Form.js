import React, { useState } from "react";
import Consts from "../consts.json"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom";

const Form = (props) => {
  const handle_submit = async () => {
    let url = `${Consts.backend_base}/${props.api_url}`

    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(reqParams)
    })

    let response_json = await response.json()
    setErrors(response_json.error_messages)

    if (errors.length === 0) {
      switch(props.title) {
        case "Log In":
          const expirationTime = new Date(new Date().getTime() + 60000)
          Cookies.set("session_data", response_json, {expires: expirationTime})
          break;
        default:
          break;
      }

      navigate(props.redirect)
    }
  }

  const [reqParams, setReqParams] = useState({username: '', password: ''})
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()


  return(
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-7/12 ml-20 mt-20">
      <div>
        <h3 className="text-3xl font-bold mb-5"> {props.title} </h3>
      </div>

      {
        props.fields.map((field) => {
          return(
            <div className="mb-4" key={field.name}>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                {field.name}
              </label>

              <input className="shadow appearance-none border rounded w-7/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={field.name.toLowerCase()}
                type={field.type}
                placeholder={field.placeholder}
                onChange={(e) => { setReqParams({...reqParams, [field.name.toLowerCase()]: e.target.value})}}
              />
            </div>
          )
        })
      }

      <ol className="mb-2 text-red-600 list-decimal list-inside m-2">
        {
          errors.length !== 0 && errors.map((error) => {
            return(<li key={error}> {error} </li>)
          })
        }
      </ol>

      <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={ handle_submit }>
          {props.buttonName}
        </button>

        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Back
        </a>
      </div>
    </form>
  )
}

export default Form