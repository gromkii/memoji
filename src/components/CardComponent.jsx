import React from 'react';
import cx from 'classnames';

const CardComponent = ({ card, index }) => {
  return (
    <div className={cx(
      'game-card',
      { flipped: card.isFlipped }
    )}>
      {(card.isFlipped || card.matched ) ? (
        <span>{card.symbol}</span>
      ) : (
        <span>{index + 1}</span>
      )}
    </div>
  );
};

export default CardComponent;