export const initDeck = (boardSize) => {
  const deck = new Array(boardSize);
  deck.map((card) => initCard());

  return deck;
};

const initCard = (symbol) => {
  return {
    flipped: false,
    symbol
  };
};