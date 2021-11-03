import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Characters from "./Components/Characters/Characters";
import Monsters from "./Components/Monsters/Monsters";
import Games from "./Components/Games/Games";
import RandomCharacters from "./Components/Characters/RandomCharacter";
import { Route } from "react-router";
import { useState } from "react";

function App() {

  const [inputValue, setInputValue] = useState('')

  const handleSearchOnClick = () => {
   console.log('hello')
    
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
        handleSearchOnClick={handleSearchOnClick}
        handleChange={handleChange}
        /> } />
        <Route path='/' exact component={Games} />
        <Route path='/' exact component={Monsters} />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
