import React, { useState } from "react";
import Home from "../icons/Home";
import ArrowRight from "../icons/ArrowRight";
import ArrowDown from "../icons/ArrowDown";

const Sidebar = () => {
  const [generalDropdown, setGeneralDropdown] = useState(false)
  const [activeComponent, setActiveComponent] = useState('')

  const handleGeneralDropdown = () => {
    if (!generalDropdown) {
      setActive('general')
    }

    setGeneralDropdown(!generalDropdown)
  }

  const generalIcon = () => {
    return(
        (!generalDropdown && <ArrowRight w='6' h='6'/>) || <ArrowDown w='6' h='6'/>
    )
  }

  const isActive = (name) => {
    if (name === activeComponent) {
      return("text-gray-900")
    } else {
      return("text-gray-500")
    }
  }

  const setActive = (name) => {
    console.log(name)
    if (activeComponent !== name) {
      setActiveComponent(name)
    } else {
      setActiveComponent('')
    }
  }

  return(
    <aside id="default-sidebar" className="mt-0.5 top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li >
                <button onClick={handleGeneralDropdown} className={`flex items-center p-2 ${isActive('general')} rounded-lg dark:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 group`}>
                  <Home w='6' h ='6'/>
                  <span className="ms-3">General</span>
                  <span className="ml-20" > { generalIcon() } </span>
                </button>
                { generalDropdown &&
                  <button onClick={() => setActive('photo')}>
                    <ul className={`ml-11 ${isActive('photo')}`}>
                      <li className="hover:text-gray-900">Photos</li>
                    </ul>
                  </button>
                }

            </li>
          </ul>
      </div>
    </aside>
  )
}

export default Sidebar