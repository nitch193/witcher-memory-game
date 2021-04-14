import React from "react";

const Navbar = () => {
  // const [score, setscore] = useState(0);
  // setscore(score + 1);
  // const [maxScore, setmaxScore] = useState(score);

  return (
    <div style={{ backgroundImage: `url(./side-image.jpg)` }} className="nav">
      <h1>Witcher Memory Game</h1>
      <div className="score">
        <h4>Score : {0}</h4>
        <h4>Highest- Score : {0}</h4>
      </div>
    </div>
  );
};

export default Navbar;
