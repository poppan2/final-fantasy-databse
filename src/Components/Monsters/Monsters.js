import React, { useEffect, useState } from "react";
import "./Monsters.css";

const Monsters = () => {
  const [monster, setMonster] = useState([]);

  const makeAPICall = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMonster(data));
  };

  useEffect(() => {
    const monstersURL = "https://www.moogleapi.com/api/v1/monsters";
    makeAPICall(monstersURL);
  }, []);

  const monsters =
    monster &&
    monster.map((monSter) => {
      return (
        <div className="monster" key={monSter.monsterId}>
          <div className="monster-image">
            <img alt="FF-monster" src={monSter.picture} />
          </div>
          {monster && <p>Name: {monSter.name}</p>}
          {monster && <p>FF Series: {monSter.game}</p>}
        </div>
      );
    });


  // let slideIndex = 0;
  // let slides = monster && document.getElementsByClassName("monster");
  // if(slides.length > 0){showSlides(slideIndex)}

  // function plusSlides(n) {
  //   if(slides.length > 0){showSlides((slideIndex += n))}
  // }

  // function showSlides(n) {
    
  //   if (n > slides.length) {
  //     slideIndex = 1;
  //   }
  //   if (n < 1) {
  //     slideIndex = slides.length;
  //   }
  //   for (let i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   slides[slideIndex - 1].style.display = "block";
  // }

  return (
    <div className="monsters">
      {monsters}
      {/* <button className="prev" onClick={()=>plusSlides(-1)}>{"<"}</button>
      <button className="next" onClick={()=>plusSlides(1)}>{">"}</button> */}
    </div>
  );
};

export default Monsters;
