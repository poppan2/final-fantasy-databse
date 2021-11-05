import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import './Game.css'
import defaultImage from "./ffbrave-exius.jpg";

const Game = (props) => {
  const { gametitle } = useParams();

  const filteredImg = props.games.filter((game)=>{
      return gametitle === game.title
  })
  if(gametitle === 'Final Fantasy Brave Exvius'){

    return (
        <div className="main-ff-game">
          <Link to="/final-fantasy-databse/games">
            <button>Back</button>
          </Link>
          <div className="ff-indiv-game">
            <div className="ff-indiv-game-image">
              <img alt="ff-game-img" src={defaultImage} />
            </div>
            <ul>
              <li>
                <span>Title:</span> {filteredImg[0].title}
              </li>
              <li>
                <span>Platform: </span>
                {filteredImg[0].platform}
              </li>
              <li>
                <span>Release Date: </span>
                {filteredImg[0].releaseDate}
              </li>
            </ul>
          </div>
          <div className="game-description">{filteredImg[0].description}</div>
        </div>
      );
  }else{
    return (
        <div className="main-ff-game">
          <Link to="/final-fantasy-databse/games">
            <button>Back</button>
          </Link>
          <div className="ff-indiv-game">
            <div className="ff-indiv-game-image">
              <img alt="ff-game-img" src={filteredImg[0].picture} />
            </div>
            <ul>
              <li>
                <span>Title:</span> {filteredImg[0].title}
              </li>
              <li>
                <span>Platform: </span>
                {filteredImg[0].platform}
              </li>
              <li>
                <span>Release Date: </span>
                {filteredImg[0].releaseDate}
              </li>
            </ul>
          </div>
          <div className="game-description">{filteredImg[0].description}</div>
        </div>
      );
  }
  
};

export default Game;
