import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../index.css';

const HomePage = () => {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    navigate(`/room/${roomCode}`);
  };

  return (
    <div className="home-page">
      <div className="home-card">
        <img src="/image.png" alt="Roomify" className="home-image" />
        <h1 className="app-name">Roomify</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="roomCode">Enter Room Code</label>
          <input
            id="roomCode"
            className="room-input"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
            type="text"
            required
            placeholder="Enter Room Code"
          />
          <button className="enter-btn" type="submit">Enter Room</button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
