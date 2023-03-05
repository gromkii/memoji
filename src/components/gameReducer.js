import { createSlice } from '@reduxjs/toolkit';

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
    initGameDeck(state) {

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
  },
});

export const { initGameState, initGameDeck, setGameState, setGameDeck, setBoardSize, setSettingsModal } = gameSlice.actions; 

export default gameSlice.reducer;