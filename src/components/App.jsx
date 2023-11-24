import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "../pages/Users.jsx";
import Home from "../pages/Home.jsx";
import NotFound from "./NotFound.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path= "/" exact element={<Home />} />
        <Route path= "/users" element={<Users />} />
        <Route path= "*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
