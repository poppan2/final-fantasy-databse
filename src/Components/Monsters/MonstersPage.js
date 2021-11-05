import "./MonstersPage.css";
import { Link } from "react-router-dom";
import defaultMonsterImg from "./ff-monster.png";

const MonstersPage = () => {
  // const monsters =
  //   monster &&
  //   monster.map((monSter) => {
  //     return monSter
  //   });

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
      <div className="monster">
        <Link to="/final-fantasy-databse/monsters">
          <div className="monster-image">
            <img alt="FF-monster" src={defaultMonsterImg} />
            <p>
              <span>More Monsters</span>
            </p>
          </div>
        </Link>
      </div>
    </div>
    /* <button className="prev" onClick={()=>plusSlides(-1)}>{"<"}</button>
      <button className="next" onClick={()=>plusSlides(1)}>{">"}</button> */
  );
};

export default MonstersPage;
