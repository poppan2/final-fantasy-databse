import React, { useEffect, useState } from "react";
import "./CharactersPage.css";
import { Link } from "react-router-dom";
import defaultImg from './moogle.jpg'

const CharactersPage = (props) => {

  let source =
    props.randomCharacters && props.randomCharacters.pictures[0] ? props.randomCharacters.pictures[0].url : defaultImg;

  if (props.randomCharacters) {
    if (props.randomCharacters.age === "??") {
      props.randomCharacters.age = "Unknown";
    }
    if (props.randomCharacters.gender === "??") {
      props.randomCharacters.gender = "Unknown";
    }
    if (props.randomCharacters.height === "??") {
      props.randomCharacters.height = "Unknown";
    }
    if (props.randomCharacters.weight === "??") {
      props.randomCharacters.weight = "Unknown";
    }
  }
  return (
    <div className="random-characters">
    <div className="random-character">
      <button onClick={props.handleClick}>New Random Character</button>
      <Link to='/characters'><div className="image">
        <img alt='FF Character' src={source} />
      </div>
      </Link>
      <div className="lists">
        <ul>
          {props.randomCharacters && <li><span>Name:</span> {props.randomCharacters.name}</li>}
          {props.randomCharacters && <li><span>Race:</span> {props.randomCharacters.race}</li>}
          {props.randomCharacters && <li><span>Job:</span> {props.randomCharacters.job}</li>}
          {props.randomCharacters && <li><span>FF Series:</span> {props.randomCharacters.origin}</li>}
        </ul>
        <ul>
          {props.randomCharacters && <li><span>Age:</span> {props.randomCharacters.age}</li>}
          {props.randomCharacters && <li><span>Gender:</span> {props.randomCharacters.gender}</li>}
          {props.randomCharacters && <li><span>Height:</span> {props.randomCharacters.height}</li>}
          {props.randomCharacters && <li><span>Weight:</span> {props.randomCharacters.weight}</li>}
        </ul>
      </div>
      <Link to="/characters"><p className="character-page">More Characters</p></Link>
    </div>
    </div>
  );
};

export default CharactersPage;
