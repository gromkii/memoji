import React, { useState } from 'react';
import { 
  Box,
  Button,
  Dialog, 
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import {
  useSelector,
  useDispatch
} from 'react-redux';

import { setSettingsModal, initGameDeck } from './gameReducer';

const BOARD_OPTIONS = [8, 12, 16];

const GameSettingsModal = () => {
  const [boardSize, setBoardSize] = useState(8);
  const { settingsModalOpen: open } = useSelector(state => state.game)
  const dispatch = useDispatch();

  const handleClose = () => { 
    dispatch(initGameDeck(boardSize));
    dispatch(setSettingsModal(false));
  }
  
  const handleBoardSize = (e, v) => {
    // Handles unselecting a board size.
    if (!v) {
      return;
    }

    setBoardSize(v);
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <Box style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 50,
      }}>
        <Typography variant="h5">
          Select Board Size
        </Typography>

        <ToggleButtonGroup 
          exclusive
          value={boardSize} 
          onChange={handleBoardSize}
          defaultValue={8}
        >
          {BOARD_OPTIONS.map((option, i) => (
            <ToggleButton value={option} key={i}>
              {option}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>

        <Button onClick={handleClose}>
          Start Game
        </Button>
      </Box>
    </Dialog>
  )
};

export default GameSettingsModal;
