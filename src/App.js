import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Characters from "./Components/Characters/Characters";
import Character from "./Components/Characters/Character";
import GamesPage from "./Components/Games/GamesPage";
import Games from "./Components/Games/Games";
import Game from "./Components/Games/Game";
import CharactersPage from "./Components/Characters/CharactersPage";
import { Route } from "react-router";
import { useState, useEffect } from "react";
import MonstersPage from "./Components/Monsters/MonstersPage";
import Monsters from "./Components/Monsters/Monsters";
import Monster from "./Components/Monsters/Monster";

function App() {
  // Characters API Call
  const [characters, setCharacters] = useState([]);
  const [randomCharacters, setRandomCharacters] = useState();
  const charAPICall = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data));
  };

  useEffect(() => {
    const charactersURL = "https://www.moogleapi.com/api/v1/characters";
    charAPICall(charactersURL);
  }, []);

  const makeRandomCharAPICall = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setRandomCharacters(data));
  };

  useEffect(() => {
    const randomCharacterURL =
      "https://www.moogleapi.com/api/v1/characters/random";
    makeRandomCharAPICall(randomCharacterURL);
  }, []);

  // Games API Call
  const [games, setGames] = useState([]);
  const gamesAPICall = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setGames(data));
  };

  useEffect(() => {
    const gamesURL = "https://www.moogleapi.com/api/v1/games";
    gamesAPICall(gamesURL);
  }, []);

  // Monsters API Call
  const [monsters, setMonsters] = useState([]);

  const monstersAPICall = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMonsters(data));
  };

  useEffect(() => {
    const monstersURL = "https://www.moogleapi.com/api/v1/monsters";
    monstersAPICall(monstersURL);
  }, []);

  // User Input
  const [inputValue, setInputValue] = useState("");
  const handleClearOnClick = () => {
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = ()=>{
    fetch('https://www.moogleapi.com/api/v1/characters/random')
      .then((response) => response.json())
      .then((data) => setRandomCharacters(data));
  }
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Route
          path="/"
          exact
          render={() => (
            <CharactersPage randomCharacters={randomCharacters} handleClick={handleClick}/>
          )}
        />
        <Route
          path="/characters"
          exact
          render={() => <Characters characters={characters} />}
        />
        <Route
          path="/characters/:characterId"
          exact
          render={() => (
            <Character
              inputValue={inputValue}
              handleClearOnClick={handleClearOnClick}
              handleChange={handleChange}
              characters={characters}
            />
          )}
        />
        <Route path="/" exact render={() => <GamesPage games={games} />} />
        <Route path="/games" exact render={() => <Games games={games} />} />
        <Route
          path="/games/:gametitle"
          exact
          render={() => <Game games={games} />}
        />
        <Route path="/" exact component={MonstersPage} />
        <Route
          path="/monsters"
          exact
          render={() => <Monsters monsters={monsters} />}
        />
        <Route
          path="/monsters/:monsterId"
          exact
          render={() => <Monster monsters={monsters} />}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
