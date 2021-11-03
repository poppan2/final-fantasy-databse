import React, { useEffect, useState } from "react";
import "./Games.css";

const Games = () => {
  const [ffGames, setFFGames] = useState([]);

  const makeAPICall = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setFFGames(data));
  };

  useEffect(() => {
    const gamesURL = "https://www.moogleapi.com/api/v1/games";
    makeAPICall(gamesURL);
  }, []);

  const games =
    ffGames &&
    ffGames.map((game) => {
      return (
        <div className="game" key={game.gameId}>
          <div className="game-image">
            <img alt="FF-Game" src={game.picture} />
          </div>
        </div>
      );
    });

  // let slideIndex = 0;
  // let slides = ffGames && document.getElementsByClassName("game");

  // if (slides.length > 0) {
  //   showSlides(slideIndex);

  //   function showSlides() {
  //     for (let i = 0; i < slides.length; i++) {
  //       slides[i].style.display = "none";
  //     }
  //     slideIndex++;
  //     if (slideIndex > slides.length) {
  //       slideIndex = 1;
  //     }
  //     slides[slideIndex - 1].style.display = "block";
  //     setTimeout(showSlides, 3000);
  //   }
  // }

  return <div className="games">{games}</div>;
};

export default Games;
