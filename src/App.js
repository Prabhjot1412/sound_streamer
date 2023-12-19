import React from "react";
import Navbar from "./components/Navbar";
import Router from "./Router";
import Cookies from "js-cookie"

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Router />
    </React.Fragment>
  );
}

export default App;
