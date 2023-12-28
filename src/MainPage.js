import React from "react";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

const MainPage = (props) => {
  const [activeComponent, setActiveComponent] = useState('')

  return(
    <div>
      <Sidebar activeComponent={activeComponent} setActiveComponent={setActiveComponent}/>
    </div>
  )
}

export default MainPage