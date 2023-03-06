import { createSlice } from '@reduxjs/toolkit';
import { initDeck, checkGameEnd } from '../utils/gameUtils';

export const GAME_STATE = {
  INIT: 'INIT',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETE: 'COMPLETE'
};

const initialState = {
  gameState: GAME_STATE.INIT,
  gameDeck: [],
  boardSize: 8, // default difficulty = easy.
  settingsModalOpen: false,
};

export const gameSlice = createSlice({
  name: 'gameState',
  initialState,
  reducers: {
    initGameState(state) {
      state = initialState
    },
    initGameDeck(state, action) {
      state.gameDeck = initDeck(action.payload);
      state.gameState = GAME_STATE.IN_PROGRESS;
    },
    setGameState(state, action) {
      state.gameState = action.payload;
    },
    setGameDeck(state, action) {
      state.deck = action.payload;
    },
    setBoardSize(state, action) {
      state.boardSize = action.payload;
    },
    setSettingsModal(state, action) {
      state.settingsModalOpen = action.payload;
    },
    setCardFlipped(state, action) {
      // TODO: Make this work.
      state.gameDeck[action.payload].isFlipped = !state.gameDeck[action.payload].isFlipped;
    },
    setCardMatched(state, action) {
      const deckArr = state.gameDeck;
      for (var i = 0; i < deckArr.length; i++) {
        if (i === action.payload[0] || i === action.payload[1]) {
          deckArr[i].matched = true;
        }
      }

      state.gameDeck = deckArr;
      console.log('checking gameEnd', checkGameEnd(state.gameDeck));
      console.log(state.gameDeck);
      if (checkGameEnd(state.gameDeck)) {
        console.log('gameOver, set state.');
      }
      
    }
  },
});

export const { initGameState, initGameDeck, setGameState, setGameDeck, setBoardSize, setSettingsModal, setCardFlipped, setCardMatched } = gameSlice.actions; 

export default gameSlice.reducer;