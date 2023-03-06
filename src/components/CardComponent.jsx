import React from 'react';

const CardComponent = ({ card }) => {
  return (
    <div className="game-card">
      {card.isFlipped ? (
        <span>{card.symbol}</span>
      ) : (
        <span>Flipped</span>
      )}
    </div>
  );
};

export default CardComponent;