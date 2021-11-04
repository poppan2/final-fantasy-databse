import "./GamesPage.css";
import defaultImage from "./ff14.jpg";
import { Link } from "react-router-dom";

const GamesPage = (props) => {
  const games =
    props.games &&
    props.games.map((game) => {
      if (game.gameId === "8f24fe1b-0e23-47c3-bca1-08d712cd7324") {
        return defaultImage;
      } else {
        return game.picture;
      }
    });

  let i = 14;

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
      <Link to="/games">
        <div className="game-image">
          <img id="image" src={games[i]} alt="ff-game" />
        </div>
      </Link>
      <p>More Games</p>
    </div>
  );
};

export default GamesPage;
