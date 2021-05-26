import React, { useEffect, useState } from "react";
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
const GameDiv = () => {
  const [score, setscore] = useState(0);
  const [highScore, sethighScore] = useState(0);
  const initialState = [
    {
      image: sylvan,
      name: "Torque the Sylvan",
      clicked: false,
    },
    {
      image: calanthe,
      name: "Queen Calanthe",
      clicked: false,
    },
    {
      image: ciri,
      name: "Princess Cirilla",
      clicked: false,
    },
    {
      image: geralt,
      name: "Geralt of Rivia",
      clicked: false,
    },
    {
      image: istredd,
      name: "Istredd",
      clicked: false,
    },
    {
      image: jaskier,
      name: "The Bard Jaskier",
      clicked: false,
    },
    {
      image: marilka,
      name: "Marilka",
      clicked: false,
    },
    {
      image: pavetta,
      name: "Princess Pavetta",
      clicked: false,
    },
    {
      image: renfri,
      name: "Renfri",
      clicked: false,
    },
    {
      image: sabrina,
      name: "Sabrina",
      clicked: false,
    },
    {
      image: tissaia,
      name: "Rectress Tissaia de vries",
      clicked: false,
    },
    {
      image: triss,
      name: "Triss Merigold",
      clicked: false,
    },
    {
      image: vilgefortz,
      name: "Vilgefortz",
      clicked: false,
    },
    {
      image: visenna,
      name: "Visenna",
      clicked: false,
    },
    {
      image: yen,
      name: "Yennefer of Vengerberg",
      clicked: false,
    },
  ];
  const [cards, setcards] = useState(initialState);
  const randomArray = (cards) => {
    const newCards = cards.map((card) => card);
    for (let i = newCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newCards[i], newCards[j]] = [newCards[j], newCards[i]];
    }
    setcards(newCards);
  };

  const handleClick = (e) => {
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].name === e.target.alt) {
        if (!cards[i].clicked) {
          setscore(score + 1);
          cards[i].clicked = !cards[i].clicked;
        } else {
          if (score > highScore) sethighScore(score);
          setscore(0);
          const initial = cards.map((card) => (card.clicked = false));
          setcards(initial);
        }
      }
    }
    randomArray(cards);
  };
  useEffect(() => {}, [cards]);

  return (
    <div className="game">
      <div className="score">
        <h4>Score : {score}</h4>
        <h4>Highest- Score : {highScore}</h4>
      </div>
      <div
        className="cards"
        style={{ backgroundImage: `url(./background.jpg)` }}
      >
        {cards.map((img) => (
          <div key={img.name} className="card">
            <img
              className="character"
              src={img.image}
              alt={img.name}
              onClick={handleClick}
            />
            <h5>{img.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameDiv;
