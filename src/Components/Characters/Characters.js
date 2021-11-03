import React, { useEffect, useState } from "react";
import "./Characters.css";

const Characters = (props) => {
  const [character, setCharacter] = useState([]);
  const [randomCharacter, setRandomCharacter] = useState();

  const makeAPICall = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacter(data));
  };

  useEffect(() => {
    const charactersURL = "https://www.moogleapi.com/api/v1/characters";
    makeAPICall(charactersURL);
  }, []);

  const makeRandomCharAPICall = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setRandomCharacter(data));
  };

  useEffect(() => {
    const randomCharacterURL =
      "https://www.moogleapi.com/api/v1/characters/random";
    makeRandomCharAPICall(randomCharacterURL);
  }, []);

  const arrByName = character.filter((name) => {
    return name.name.toLowerCase() === props.inputValue.toLowerCase();
  });
  let resultArr = [randomCharacter];
  if (arrByName.length > 0) {
    resultArr = arrByName;
  }
  const searchedCharacters =
    randomCharacter &&
    resultArr.map((character) => {
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

      let source =
        character && character.pictures[0]
          ? character.pictures[0].url
          : "https://mooglestorage.blob.core.windows.net/images/9a5f4c52-9806-493e-9352-5750a5420006.jpg";
      return (
        <div className="randomCharacter" key={character.id}>
          <img alt="random-FF-Character" src={source} />
          <div className="list">
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
      <div>
        <input
          type="text"
          placeholder="Search Character"
          className="input-character"
          value={props.inputValue}
          onChange={props.handleChange}
        />
        <button onClick={props.handleClearOnClick}>
          clear
        </button>
      </div>
      {searchedCharacters}
    </div>
  );
};

export default Characters;
