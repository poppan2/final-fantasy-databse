import React, { useEffect, useState } from "react";
import "./RandomCharacter.css";
import { Link } from "react-router-dom";

const RandomCharacters = (props) => {
  const [character, setCharacter] = useState();

  const makeAPICall = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacter(data));
  };

  useEffect(() => {
    const charactersURL = "https://www.moogleapi.com/api/v1/characters/random";
    makeAPICall(charactersURL);
  }, []);

  let source =
    character && character.pictures[0] ? character.pictures[0].url : 'https://mooglestorage.blob.core.windows.net/images/9a5f4c52-9806-493e-9352-5750a5420006.jpg';

  if (character) {
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
  }

  const handleClick = ()=>{
    fetch('https://www.moogleapi.com/api/v1/characters/random')
      .then((response) => response.json())
      .then((data) => setCharacter(data));
  }

  return (
    <div className="random-character">
      <button onClick={handleClick}>New Random Character</button>
      <Link to='/characters'><div className="image">
        <img alt='FF Character' src={source} />
      </div>
      </Link>
      <div className="lists">
        <ul>
          {character && <li><span>Name:</span> {character.name}</li>}
          {character && <li><span>Race:</span> {character.race}</li>}
          {character && <li><span>Job:</span> {character.job}</li>}
          {character && <li><span>FF Series:</span> {character.origin}</li>}
        </ul>
        <ul>
          {character && <li><span>Age:</span> {character.age}</li>}
          {character && <li><span>Gender:</span> {character.gender}</li>}
          {character && <li><span>Height:</span> {character.height}</li>}
          {character && <li><span>Weight:</span> {character.weight}</li>}
        </ul>
      </div>
      <Link to="/characters"><p className="character-page">Characters</p></Link>
    </div>
  );
};

export default RandomCharacters;
