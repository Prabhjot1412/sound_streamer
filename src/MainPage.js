import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import ImageForm from "./components/ImageForm";
import Photos from "./components/Photos";
import GroupForm from "./components/GroupForm";

const MainPage = (props) => {
  const [activeComponent, setActiveComponent] = useState('')
  const [groups, setGroups] = useState([])

  useEffect(() => {
    let user_data = props.user_data

    user_data.then((val) => {
    setGroups(val.groups)

    if(typeof(val) !== 'object') {
      window.location.href = '/login'
    }
    })
  })

  return(
    <div className="flex">
      <Sidebar activeComponent={activeComponent} setActiveComponent={setActiveComponent}/>

      <div className="ml-3 mt-3 w-3/4">
        { ( activeComponent === 'photo' &&
            <Photos groups={groups} />
          ) || (activeComponent === 'group' && 
            <GroupForm />
          )
        }
      </div>
    </div>
  )
}

export default MainPage
