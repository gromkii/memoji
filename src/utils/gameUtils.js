import { shuffle } from 'lodash';

export const initDeck = (boardSize) => {
  const deck = [];
  const boardHalf = boardSize / 2;
  for (var i = 0; i < boardHalf; i++) {
    const card = initCard(emojiList[i]);
    deck.push(card);
    deck.push(card);
  }

  return shuffle(deck);
};

const emojiList = [ '👀', '🙌', '👌', '🥊', '😩', '💅', '😨', '💧', '🥶', '🌶', '👺', '🤡', '💀', '👽', '🧸', '🦊' ];

const initCard = (symbol) => {
  return {
    isFlipped: false,
    matched: false,
    symbol
  };
};

export const checkGameEnd = (deck) => {
  // could just do this with reduce.
  let checkWin = true;

  deck.forEach((card) => {
    if (!card.matched) {
      checkWin = false;
    }
  });

  return checkWin;
};