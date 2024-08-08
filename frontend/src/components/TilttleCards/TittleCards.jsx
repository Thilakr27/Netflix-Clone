import React, { useEffect, useRef, useState } from "react";
import "./TittleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";

const TittleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWFjYjg3M2JjZjJhMGFkNDQzNWRlZTA0YjkxMWYzNyIsIm5iZiI6MTcyMjkyNTc4OS44ODgwMTEsInN1YiI6IjY2YjFjMTgzYTQyZDA1MTQxNzk0MGM2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sOFC5ZxhKQqcAaO29OsZJ8oCzkrM03KDAJcZb89KiBo",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));

    const currentRef = cardsRef.current;
    cardsRef.current.addEventListener("wheel", handleWheel);

    // Clean up event listener on component unmount
    return () => {
      currentRef.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="tittlecards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt={card.name}
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TittleCards;
