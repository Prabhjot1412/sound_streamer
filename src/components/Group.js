import { useState } from "react"
import Carousel from "./Carousel"
import Modal from "./Modal"
import ImageForm from "./ImageForm"

const Group = (props) => {
  const {group} = props
  const [showModal, setShowModal] = useState(false)

  return(
    <div className="mb-10">
      {showModal ?
        <Modal form={true} setShowModal={setShowModal} element={<ImageForm groupName={group.name} modal={true}/>}/> 
        : null
      }
      <button onClick={() => {setShowModal(true)}} className="mb-10 ml-5 text-4xl font-bold dark:text-white">{group.name}</button>
      <Carousel images={group.images} />
    </div>
  )
}

export default Group
