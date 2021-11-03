import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Characters from "./Components/Characters/Characters";
import Monsters from "./Components/Monsters/Monsters";
import GamesPage from "./Components/Games/GamesPage";
import Games from "./Components/Games/Games";
import Game from "./Components/Games/Game";
import RandomCharacters from "./Components/Characters/RandomCharacter";
import { Route } from "react-router";
import { useState, useEffect } from "react";

function App() {

  // Game API Call
  const [games, setGames] = useState([]);
  const makeAPICall = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setGames(data));
  };

  useEffect(() => {
    const gamesURL = "https://www.moogleapi.com/api/v1/games";
    makeAPICall(gamesURL);
  }, []);

  // User Input
  const [inputValue, setInputValue] = useState('')
  const handleClearOnClick = () => {
   setInputValue('')
    
  };

  const characterOnClick = (characterID)=>{
    console.log('Hi, I have been clicked')
  }
  const handleChange = (event)=>{
    setInputValue(event.target.value)
  }

  return (
    <div className="App">
      <Header />
      <main className="main">
        <Route path='/' exact render={()=> <RandomCharacters characterOnClick={characterOnClick} /> } />
        <Route path='/characters' exact render={()=> 
        <Characters 
        inputValue={inputValue}
        handleClearOnClick={handleClearOnClick}
        handleChange={handleChange}
        /> } />
        <Route path='/' exact render={()=> <GamesPage games={games} /> } />
        <Route path='/games' exact render={()=> <Games games={games} /> } />
        <Route path='/games/:gametitle' exact render={()=> <Game games={games} /> } />
        <Route path='/' exact component={Monsters} />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
