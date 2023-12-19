import React from "react";
import Cap from "../icons/Cap";

const Navbar = (props) => {
  return(
    <nav className="h-15 flex items-center bg-teal-200 shadow-md">
      <a href="/" className="m-1"> <Cap w='6' h='6'/> </a>
    </nav>
  )
}

export default Navbar


