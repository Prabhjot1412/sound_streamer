import React, { useState } from "react";
import Home from "../icons/Home";
import ArrowRight from "../icons/ArrowRight";
import ArrowDown from "../icons/ArrowDown";

const Sidebar = () => {
  const handleGeneralDropdown = () => {
    setGeneralDropdown(!generalDropdown)
  }

  const generalIcon = () => {
    return(
        (!generalDropdown && <ArrowRight w='6' h='6'/>) || <ArrowDown w='6' h='6'/>
    )
  }

  const [generalDropdown, setGeneralDropdown] = useState(false)

  return(
    <aside id="default-sidebar" class="mt-0.5 top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-2 font-medium">
            <li >
                <button onClick={handleGeneralDropdown} class="flex items-center p-2 text-gray-500 rounded-lg dark:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <Home w='6' h ='6'/>
                  <span class="ms-3">General</span>
                  <span className="ml-20" > { generalIcon() } </span>
                </button>
                { generalDropdown && 
                  <span>
                    <ul className="ml-11 text-gray-500">
                      <li className="hover:text-gray-900 hover:bg-gray-100">Photos</li>
                    </ul>
                  </span>
                }

            </li>
          </ul>
      </div>
    </aside>
  )
}

export default Sidebar