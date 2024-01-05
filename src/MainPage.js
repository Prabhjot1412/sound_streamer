import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import ImageForm from "./components/ImageForm";
import Group from "./components/Group";

const MainPage = (props) => {
  const [activeComponent, setActiveComponent] = useState('')
  const [groups, setGroups] = useState([])

  useEffect(() => {
    let user_data = props.user_data

    user_data.then((val) => {
    setGroups(val.groups)
    })
  })

  return(
    <div className="flex">
      <Sidebar activeComponent={activeComponent} setActiveComponent={setActiveComponent}/>

      <div className="ml-3 mt-3 w-3/4">
        { ( activeComponent === 'photo' &&
          <>
            {groups.map((group) => {
              return(
                <div key={group.name}>
                  <Group group={group} />
                </div>
              )
            })}
            <button className="ml-20 mt-10 bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent active:bg-green-600 focus:ring focus:ring-green-300 rounded-full"> + </button>
          </>
          ) || <ImageForm />
        }
      </div>
    </div>
  )
}

export default MainPage
