import React from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import { Button } from '@mui/material';

// Components
import GameBoard from './GameBoard';
import GameSettingsModal from './GameSettingsModal';
import { GAME_STATE, setSettingsModal } from './gameReducer';

/* Main container to facilitate game logic and such. */
const GameBoardContainer = () => {
  const { gameState } = useSelector(state => state.game);
  const dispatch = useDispatch();
  
  const handleOpen = () => {
    dispatch(setSettingsModal(true));
  }

  return (
    <div className="container">
      <Button 
        variant="outlined" 
        onClick={handleOpen}
      >New Game</Button>
      {gameState === GAME_STATE.INIT &&
        <GameBoard />
      }
      
      <GameSettingsModal/>
    </div>
  );
}

export default GameBoardContainer;
