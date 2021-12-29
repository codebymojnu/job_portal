import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";

function App() {
  return (
   <div>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/signin" element={<SignIn/>}/>
     </Routes>
   </div>
  );
}

export default App;
