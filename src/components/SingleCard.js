import React from "react";
import { Image } from "mui-image";
import { Grid, Card } from "@mui/material";

function SingleCard({ card, handleChoice, flipped }) {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        {flipped ? (
        <Grid item>   <img className="card-front" src={card.src} alt="card-front" /></Grid> 
        ) : (
           <Grid item>    <img
            className="card-back"
            src="/img/card.png"
            alt="card-back"
            onClick={handleClick}
          /></Grid> 
        )}
      </Grid>{" "}
    </div>
  );
}

export default SingleCard;
