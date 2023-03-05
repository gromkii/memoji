import { shuffle } from 'lodash';

export const initDeck = (boardSize) => {
  const deck = new Array(boardSize);
  const boardHalf = boardSize / 2;
  for (var i = 0; i < boardHalf; i++) {
    // We need sets of pairs.
    const card = initCard(emojiList[i]);
    deck.push(card);
    deck.push(card);
  }

  return shuffle(deck);
};

const emojiList = [ '👀', '🙌', '👌', '🥊', '😩', '💅', '😨', '💧', '🥶', '🌶', '👺', '🤡', '💀', '👽', '🧸', '🦊' ];

const initCard = (symbol) => {
  return {
    flipped: false,
    symbol
  };
};