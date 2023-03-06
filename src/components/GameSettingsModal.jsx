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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
};

const BOARD_OPTIONS = [8, 16, 32];

const GameSettingsModal = () => {
  const [boardSize, setBoardSize] = useState(8);
  const { settingsModalOpen: open } = useSelector(state => state.game)
  const dispatch = useDispatch();

  const handleClose = () => { 
    dispatch(initGameDeck(boardSize));
    dispatch(setSettingsModal(false));
  }
  
  const handleBoardSize = (e, v) => {
    setBoardSize(v);
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      style={style}
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
