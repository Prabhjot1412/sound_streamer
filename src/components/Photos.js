import { useState } from "react"
import Group from "./Group"
import Modal from "./Modal"
import GroupForm from "./GroupForm"

const Photos = (props) => {
  const {groups} = props
  const [showModal, setShowModal] = useState(false)

  return(
    <>
    { showModal ? (<Modal form={true} element={<GroupForm modal={true} setShowModal={setShowModal} />} setShowModal={setShowModal}/>) : null }

      {
        groups.map((group) => {
          return(
            <div key={group.name}>
              <Group group={group} />
            </div>
          )
        }
      )}

      <button onClick={() => {setShowModal(!showModal)}} className="ml-20 mt-10 bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent active:bg-green-600 focus:ring focus:ring-green-300 rounded-full"> + </button>
    </>
  )
}

export default Photos
