import React from "react";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Form from "./components/Form";
import ImageForm from "./components/ImageForm";

const MainPage = (props) => {
  const [activeComponent, setActiveComponent] = useState('')

  return(
    <div className="flex">
      <Sidebar activeComponent={activeComponent} setActiveComponent={setActiveComponent}/>

      <div className="ml-3 mt-3 w-3/4">
        <ImageForm />
      </div>
    </div>
  )
}

export default MainPage
