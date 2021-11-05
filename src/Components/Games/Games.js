import "./Games.css";
import defaultImage from "./ffbrave-exius.jpg";
import { Link } from "react-router-dom";

const Game = (props) => {

  const gAmes =
    props.games &&
    props.games.map((game) => {
      if (game.gameId === "8f24fe1b-0e23-47c3-bca1-08d712cd7324") {
        return (
          <div className="ff-game" key={game.gameId}>
            <Link to={'/final-fantasy-databse/games/' + game.title}><div className="ff-game-image">
              <img alt="ff-game-img" src={defaultImage} />
            </div></Link>
            <ul>
              <li>
                <span>Title:</span> {game.title}
              </li>
              <li>
                <span>Platform: </span>
                {game.platform}
              </li>
              <li>
                <span>Release Date: </span>
                {game.releaseDate}
              </li>
            </ul>
          </div>
        );
      } else {
        return (
          <div className="ff-game">
            <Link to={'/final-fantasy-databse/games/' + game.title}><div className="ff-game-image">
              <img alt="ff-game-img" src={game.picture} />
            </div></Link>
            <ul>
              <li>
                <span>Title:</span> {game.title}
              </li>
              <li>
                <span>Platform: </span>
                {game.platform}
              </li>
              <li>
                <span>Release Date: </span>
                {game.releaseDate}
              </li>
            </ul>
          </div>
        );
      }
    });

  return <div className="ff-games">{gAmes}</div>;
};

export default Game;
