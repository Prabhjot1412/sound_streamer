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
    {console.log(groups)}
      {
        groups.map((group) => {
          return(
            <div key={group.name}>
              <Group group={group} />
            </div>
          )
        }
      )}
    </>
  )
}

export default Photos
