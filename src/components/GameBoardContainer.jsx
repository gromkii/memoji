import React from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import { Box, Button, Container } from '@mui/material';

// Components
import GameBoard from './GameBoard';
import GameSettingsModal from './GameSettingsModal';
import { GAME_STATE, setSettingsModal } from './gameReducer';

/* Main container to facilitate game logic and such. */
const GameBoardContainer = () => {
  const { gameState, settingsModalOpen } = useSelector(state => state.game);
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(setSettingsModal(true));
  }

  return (
    <Container className="container" style={{
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      
      <div className="main">
        {(!settingsModalOpen && gameState === GAME_STATE.INIT) &&
          <Button 
            variant="outlined" 
            onClick={handleOpen}
          >New Game</Button>
        }
        
        {gameState === GAME_STATE.IN_PROGRESS &&
          <GameBoard />
        }
        
        <GameSettingsModal/>
      </div>
    </Container>
  );
}

export default GameBoardContainer;
