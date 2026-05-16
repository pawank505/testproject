import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Stockform from "./components/Stockform";
function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        //<Route path="/stockform" element={<Stockform />} />
        {/* Add more routes here */}
      </Routes>
    </div>
  );
}

export default App;
