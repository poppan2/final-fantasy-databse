import React, { useEffect, useState } from "react";
import "./GamesPage.css";
import defaultImage from "./ff14.jpg";
import { Link } from "react-router-dom";

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
      if (game.gameId === "8f24fe1b-0e23-47c3-bca1-08d712cd7324") {
        return defaultImage;
      } else {
        return game.picture;
      }
    });

  let i = 0;
  
  // function changeImg() {
  //   document.getElementById("image").src = games[i];
  //   if (i < games.length - 1) {
  //     i++;
  //   } else {
  //     i = 0;
  //   }
    
  // }

  // window.onload = setInterval(changeImg, 3000);

  return (
    <div className="games">
      <Link to='/games'><div className="game-image">
        <img name="slide" id="image" src={games[i]} alt="ff-game" />
      </div></Link>
    </div>
  );
};

export default Games;
