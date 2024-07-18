import React from "react";
import { useState } from "react";
import style from "./../../UserLogin/components/UserLogin.module.css"

const HandleImageCreate = (props) => {

  const [imageInputs, setImageInputs] = useState({
    image: '',
    image_name: ''
  })

  const unsetMargin = {
    marginLeft: 'unset'
  }

  const [imageSelected, setImageSelected] = useState('absent')

  const fetchFilenamesFromProp = () => {
    let filenames = Object.keys(props.images)

    return(filenames)
  }

  return(
    <div className={style.login_container}>
      <br /><br /><br />
      <p>Select image</p>
      <select onChange={e => { setImageSelected(e.target.value)}}>
        <option value="">{"NaN"}</option>
        {
          fetchFilenamesFromProp().map((file) => {
          return(
            <option key={file} value={file}>{file}</option>
          )
          })
        }
      </select>
      <br />
      {
        <img width="100px" height="100px" src={props.images[imageSelected]} />
      }
    </div>
  )
}

export default HandleImageCreate
