import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./pages/mainPage/mainPage";
import CreateLobby from "./pages/createLobby/createLobby";
import JoinLobby from "./pages/joinLobby/joinLobby";

function App() {
  console.log("Inside app");
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/create" element={<CreateLobby />} />
          <Route path="/join" element={<JoinLobby />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
