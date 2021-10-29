import './App.css';
import Characters from './Components/Characters/Characters';
import Monsters from './Components/Monsters/Monsters';
import Games from './Components/Games/Games'

function App() {
  return (
    <div className="App">
      <header>Navigation Goes Here</header>
      <main className="main">
        <Characters />
        <Monsters />
        <Games />
      </main>
    </div>
  );
}

export default App;
