import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import RoomPage from "./room";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/room/:roomId" element={<RoomPage />} />
    </Routes>
  );
}

export default App;
