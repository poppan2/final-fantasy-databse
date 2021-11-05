import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import './Monster.css'

const Monster = (props) => {
  const { monsterId } = useParams();

  const filteredMonsterImg = props.monsters.filter((monster) => {
    return monsterId === monster.monsterId;
  });

  console.log(filteredMonsterImg);
  return (
    <div className="main-ff-monster">
      <Link to="/final-fantasy-databse/monsters">
        <button>Back</button>
      </Link>
      <div className="ff-indiv-monster-img">
        <img alt="ff-monster-img" src={filteredMonsterImg[0].picture} />
      </div>
      <div className="monster-lists">
        <ul>
          <li>
            <span>Name: </span>
            {filteredMonsterImg[0].name}
          </li>
          <li>
            <span>JapaneseName: </span>
            {filteredMonsterImg[0].japaneseName}
          </li>
          <li>
            <span>E-Affinity: </span>
            {filteredMonsterImg[0].elementalAffinity}
          </li>
          <li>
            <span>E-Weakness: </span>
            {filteredMonsterImg[0].elementalWeakness}
          </li>
        </ul>
        <ul>
          <li>
            <span>HP: </span>
            {filteredMonsterImg[0].hitPoints}
          </li>
          <li>
            <span>MP: </span>
            {filteredMonsterImg[0].manaPoints}
          </li>
          <li>
            <span>Atk: </span>
            {filteredMonsterImg[0].attack}
          </li>
          <li>
            <span>Def: </span>
            {filteredMonsterImg[0].defense}
          </li>
        </ul>
      </div>

      <p>
        <span>FF-Series: </span>
        {filteredMonsterImg[0].game}
      </p>
      <div className='monster-description'>
          {filteredMonsterImg[0].description}
      </div>
    </div>
  );
};

export default Monster;
