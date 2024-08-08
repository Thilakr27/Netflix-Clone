import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "/src/assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWFjYjg3M2JjZjJhMGFkNDQzNWRlZTA0YjkxMWYzNyIsIm5iZiI6MTcyMzAxNTMyMi40Mjk5MDUsInN1YiI6IjY2YjFjMTgzYTQyZDA1MTQxNzk0MGM2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8mfgYFlROok1VEcNfRAJnjwLBalrmGI4N1dkY9Wt5ik",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt=""
        onClick={() => {
          navigate(-2);
        }}
      />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
