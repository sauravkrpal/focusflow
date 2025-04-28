import React from 'react'
import {
  BrowserRouter as Router,
  Routers, 
  Route, 

} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
      <Routers>
<Route path="/login" element={<Login />} />
<Route path="/signUp" element={<SignUp />} />

{/* Admin Routes */}
<Route element={<PrivateRoute allowedRoles={["admin"]} />}>
<Route path="/admin/dashboard" element=[<Dashboard //></Route>
      </div>
  )
}
export default App