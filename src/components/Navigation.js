import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Questions from "../pages/Questions";
import Score from "../pages/Score";
import Start from "../pages/Start";

function Navigation() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Start />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/score" element={<Score />} />
      </Routes>
    </Router>
  );
}

export default Navigation;
