import React from "react";
import { Link } from "react-router-dom";
import "./Monsters.css";

const Monsters = (props) => {
  const monsters = props.monsters.map((monster) => {
    return (
      <div className="ff-monster" key={monster.monsterId}>
        <Link to={'/monsters/' + monster.monsterId}><div className="ff-monster-img">
          <img alt="ff-monster" src={monster.picture} />
        </div></Link>
        <div className="monster-lists">
          <ul>
            <li>
              <span>Name: </span>{monster.name}
            </li>
            <li>
              <span>JapaneseName: </span>{monster.japaneseName}
            </li>
            <li>
              <span>E-Affinity: </span>{monster.elementalAffinity}
            </li>
            <li>
              <span>E-Weakness: </span>{monster.elementalWeakness}
            </li>
          </ul>
          <ul>
            <li>
              <span>HP: </span>{monster.hitPoints}
            </li>
            <li>
              <span>MP: </span>{monster.manaPoints}
            </li>
            <li>
              <span>Atk: </span>{monster.attack}
            </li>
            <li>
              <span>Def: </span>{monster.defense}
            </li>
          </ul>
        </div>

        <p>
          <span>FF-Series: </span>{monster.game}
        </p>
      </div>
    );
  });
  return <div className="ff-monsters">{monsters}</div>;
};

export default Monsters;
