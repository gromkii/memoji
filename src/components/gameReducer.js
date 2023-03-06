import { createSlice } from '@reduxjs/toolkit';
import { initDeck } from '../utils/gameUtils';

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
      console.log(action.payload);
      console.log(state.gameDeck[action.payload].isFlipped);
      state.gameDeck[action.payload].isFlipped = !state.gameDeck[action.payload].isFlipped;
    }
  },
});

export const { initGameState, initGameDeck, setGameState, setGameDeck, setBoardSize, setSettingsModal, setCardFlipped } = gameSlice.actions; 

export default gameSlice.reducer;