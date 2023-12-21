import React from "react";
import { BrowserRouter as MyRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import MainPage from "./MainPage";

const Router = (props) => {
  return(
    <MyRouter>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/login"
          element={
            <Form
              title='Log In'
              buttonName='Sign in'
              api_url='login_api'
              redirect='/'
              fields={[
                { name: 'Username', type: 'text', placeholder: 'Username' },
                { name: 'Password', type: 'Password', placeholder: '********' },
              ]}
            />
          } />
        </Routes>
    </MyRouter>
  )
}

export default Router