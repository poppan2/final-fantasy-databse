import "./Character.css";

const Character = (props) => {
  const arrByName = props.characters.filter((name) => {
    return name.name.toLowerCase() === props.inputValue.toLowerCase();
  });
  let resultArr = [props.randomCharacters];
  if (arrByName.length > 0) {
    resultArr = arrByName;
  }
  const searchedCharacters =
    props.randomCharacters &&
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
        <button onClick={props.handleClearOnClick}>clear</button>
      </div>
      {searchedCharacters}
    </div>
  );
};

export default Character;
