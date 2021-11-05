import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./Character.css";
import defaultImg from "./moogle.jpg";

const Character = (props) => {
  const { characterId } = useParams();

  const filteredChr = props.characters.filter((character) => {
    return characterId === character.id;
  });

  const arrByName = props.characters.filter((name) => {
    return name.name.toLowerCase() === props.inputValue.toLowerCase();
  });

  let resultArr = [...filteredChr];
  if (arrByName.length > 0) {
    resultArr = arrByName;
  }
  const searchedCharacters = resultArr.map((character) => {
    if (character.age === "??") {
      character.age = "Unknown";
    }
    if (character.gender === "??") {
      character.gender = "Unknown";
    }
    if (character.height === "??") {
      character.height = "Unknown";
    }
    if (character.weight === "??") {
      character.weight = "Unknown";
    }

    let source = character.pictures[0] ? character.pictures[0].url : defaultImg;
    return (
      <div className="indiv-character" key={character.id}>
        <img alt="indiv-FF-Character" src={source} />
        <div className="char-lists">
          <ul>
            <li>
              <span>Name: </span>
              {character.name}
            </li>
            <li>
              <span>Race: </span>
              {character.race}
            </li>
            <li>
              <span>Job: </span>
              {character.job}
            </li>
            <li>
              <span>FF-Series: </span>
              {character.origin}
            </li>
          </ul>
          <ul>
            <li>
              <span>Age: </span>
              {character.age}
            </li>
            <li>
              <span>Gender: </span>
              {character.gender}
            </li>
            <li>
              <span>Height: </span>
              {character.height}
            </li>
            <li>
              <span>Weight: </span>
              {character.weight}
            </li>
          </ul>
        </div>
        <div className="description">{character.description}</div>
      </div>
    );
  });
  return (
    <div className="characters">
      <Link to="/final-fantasy-databse/characters">
        <button>Back</button>
      </Link>
      <div>
        <input
          type="text"
          placeholder="Search Character"
          className="input-character"
          value={props.inputValue}
          onChange={props.handleChange}
        />
        <button onClick={props.handleClearOnClick}>clear</button>
      </div>
      {searchedCharacters}
    </div>
  );
};

export default Character;
