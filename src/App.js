import "./App.css";
import { useEffect, useState } from "react";
import SingleCard from "./components/SingleCard";
import { Button, Container } from "@mui/material";

const cardImages = [
  { src: "/img/Bulls.png", matched: false },
  { src: "/img/76ers.png", matched: false },
  { src: "/img/Suns.png", matched: false },
  { src: "/img/Warriors.png", matched: false },
  { src: "/img/Bucks.png", matched: false },
  { src: "/img/Raptors.png", matched: false },
  { src: "/img/Hornets.png", matched: false },
  { src: "/img/Nets.png", matched: false },
  { src: "/img/Magic.png", matched: false },
  { src: "/img/Mavericks.png", matched: false },
  { src: "/img/Lakers.png", matched: false },
  { src: "/img/Clippers.png", matched: false },
  { src: "/img/Knicks.png", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [viewchoiceOne, setviewChoiceOne] = useState(false);
  const [viewchoiceTwo, setviewChoiceTwo] = useState(false);

  //shuffle the cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  //handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //reset choices
  const resetTurns = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prev) => prev + 1);
  };

  //validate choices
  const validateTurns = () => {
    if (choiceOne.src === choiceTwo.src) {
      setCards((prevCards) => {
        return prevCards.map((card) => {
          if (card.src === choiceOne.src) {
            return { ...card, matched: true };
          } else {
            return card;
          }
        });
      });
      resetTurns();
      return true;
    } else {
      resetTurns();
      return false;
    }
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) validateTurns();

    console.log("validated");
  }, [choiceOne, choiceTwo]);

  return (
    <div className="App">
      <h1>NBA Card Matching Game</h1>
      <Button
        sx={{ textDecoration: "none !important" }}
        variant="outlined"
        onClick={shuffleCards}
      >
        New Game
      </Button>
      <Container>
        {cards.map((card) => (
          <>
            <SingleCard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
            />{" "}
          </>
        ))}
      </Container>
    </div>
  );
}

export default App;
