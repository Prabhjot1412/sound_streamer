import React, { useEffect, useState } from "react";
import Cap from "../icons/Cap";

const Navbar = (props) => {
  const [username, setUsername] = useState('')

  useEffect(() => {
    let user_data = props.user_data

    user_data.then((val) => {
      setUsername(val.username)
    })
  })

  return(
    <nav className="h-15 flex items-center bg-teal-200 shadow-md">
      <a href="/" className="m-1 flex" id='nav_link'>
        <Cap w='10' h='10'/>

        <span className="mt-2"> { username } </span> 
      </a>
    </nav>
  )
}

export default Navbar
