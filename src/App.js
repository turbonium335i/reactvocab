import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Landing from "./Pages/Landing";
import Grammar from "./Pages/Grammar";
import Intro from "./Pages/Intro";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Landing</Link> &nbsp;
        <Link to="/grammar">grammar</Link> &nbsp;
        <Link to="/intro">intro</Link>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/grammar" element={<Grammar />}></Route>
          <Route path="/intro" element={<Intro />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
document.body.style = "background: black;color:#66FF00;";
