import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";

import Home from "./Home";
import Page1 from "./Page1";

const App = () => {
  return (
    <Router>
      <div className="container">
      <header>
        <h1>Header</h1>
      </header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="page1" element={<Page1/>} />
      </Routes>
      <footer>
        <p>&copy;2023 Jon Hay</p>
      </footer>
      </div>
    </Router>
  );
}

export default App;