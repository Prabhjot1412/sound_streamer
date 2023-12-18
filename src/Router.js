import React from "react";
import { BrowserRouter as MyRouter, Routes, Route } from "react-router-dom";

const Router = (props) => {
  return(
    <MyRouter>
      <Routes>
          <Route path="/login">
            <> Test </>
          </Route>
        </Routes>
    </MyRouter>
  )
}

export default Router