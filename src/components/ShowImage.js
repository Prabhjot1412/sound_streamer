import { useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import React from "react";
import Cookies from "js-cookie";
import Consts from "../consts.json"
import Modal from "./Modal";
import CommentForm from "./CommentForm";


const ShowImage = (props) => {
  const {user_data} = props
  const [image, setImage] = useState([])
  const params = useParams()
  const groupName = params["*"].split("/")[0]
  const imageIndex = params["*"].split("/")[1]
  const [imageId, setImageId] = useState(false)
  const [fullImage, setFullImage] = useState(false)
  const [comments, setComments] = useState(false)
  const [showModal, setShowModal] = useState(false)
 
  useEffect( () => {
    user_data.then((val => {
      setImage(val.groups
        .find(
          ({ name }) => name.toLowerCase() === groupName.toLowerCase()
        ).images[parseInt(imageIndex)]
      )
      let image_id = val.groups.find(
        ({ name }) => name.toLowerCase() === groupName.toLowerCase()
      ).image_ids[parseInt(imageIndex)]

      setImageId(image_id)
      fetchComments(image_id)
    }))
  })

  const fetchComments = (image_id) => {
    let user_token = Cookies.get('session_token')
    let url = `${Consts.backend_base}/api/image/comments?image_id=${image_id}&user_token=${user_token}`
    let response_json = fetch(url).then((val) => {
      return val.json()
    })

    return response_json.then((val) => {
      if(comments !== false) {
        return
      }

      setComments(val.output)
    })
  }

  return(
    <Routes>
        <Route path="/:groupName/:imageIndex" element={
        <div>
          {(fullImage &&
              <button onClick={() => {setFullImage(!fullImage)}}>
                <img src={image} className="transition-all duration-500"/>
              </button>
            ) ||

              <div>
                {showModal ? <Modal form={true} setShowModal={setShowModal} element={<CommentForm group={groupName} image_id={imageId} image_index={imageIndex} modal={true}/>}/> : null }
                
                <div className="w-full">
                  <button onClick={() => {setFullImage(!fullImage)}}>
                    <img src={image} width="600px" height="600px" className="transition-all duration-500 m-20 ml-40 border-solid border-2 border-cyan-600 ease-linear hover:border-indigo-600"/>       
                  </button>
                </div>
                <button onClick={() => {setShowModal(true)}} className="transition-all duration-500 mb-10 ml-10 text-4xl hover:text-5xl font-bold dark:text-white">Notes</button>
                {comments ? comments.map((comment) => {
                  return(<div key={comment} className="transition-all duration-500 box-border h-20 w-3/4 rounded-md ml-5 mb-5 p-4 border-4 border-teal-300 bg-teal-100 hover:bg-indigo-100 hover:border-indigo-300">{comment}</div>)
                }) : null }
              </div>
          }
        </div>
      }/>
    </Routes>
  )
}

export default ShowImage