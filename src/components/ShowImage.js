import { useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import React from "react";

const ShowImage = (props) => {
  const {user_data} = props
  const [image, setImage] = useState([])
  const params = useParams()
  const groupName = params["*"].split("/")[0]
  const imageIndex = params["*"].split("/")[1]
  const [fullImage, setFullImage] = useState(false)
 
  useEffect( () => {
    user_data.then((val => {
      setImage(val.groups.find(
        ({ name }) => name.toLowerCase() === groupName.toLowerCase()
        ).images[parseInt(imageIndex)]
      )
    }))
  })

  return(
    <Routes>
        <Route path="/:groupName/:imageIndex" element={
        <div>
          <button onClick={() => {setFullImage(!fullImage)}}>
            { (fullImage && 
               <img src={image} className="transition-all duration-150"/>
            ) ||
              <img src={image} width="600px" height="600px" className="m-20 ml-40 border-solid border-2 border-cyan-600 ease-linear transition-all duration-150 hover:border-indigo-600"/>
            }
          </button>
        </div>
      }/>
    </Routes>
  )
}

export default ShowImage