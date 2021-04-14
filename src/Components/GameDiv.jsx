import React from "react";
import Card from "./Card";
import sylvan from "../Images/sylvan.png";
import calanthe from "../Images/calanthe.jpg";
import ciri from "../Images/ciri.jpg";
import geralt from "../Images/geralt.jpg";
import istredd from "../Images/istredd.png";
import jaskier from "../Images/jaskier.png";
import marilka from "../Images/marilka.png";
import pavetta from "../Images/pavetta.jpg";
import renfri from "../Images/renfri.jpg";
import sabrina from "../Images/sabrina.png";
import tissaia from "../Images/tissaia.jpg";
import triss from "../Images/triss.png";
import visenna from "../Images/visenna.png";
import yen from "../Images/yen.jpg";
import vilgefortz from "../Images/vilgefortz.png";
// import background from "../Images/background.jpg";
const GameDiv = () => {
  const images = [
    sylvan,
    calanthe,
    ciri,
    geralt,
    istredd,
    jaskier,
    marilka,
    pavetta,
    renfri,
    sabrina,
    tissaia,
    triss,
    vilgefortz,
    visenna,
    yen,
  ];
  return (
    <div className="game">
      <div
        className="cards"
        style={{ backgroundImage: `url(./background.jpg)` }}
      >
        {images.map((img) => (
          <Card key={img} image={img} />
        ))}
      </div>
    </div>
  );
};

export default GameDiv;
