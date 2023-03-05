import React, { useState } from 'react';
import { 
  Box,
  Button,
  Modal, 
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import {
  useSelector,
  useDispatch
} from 'react-redux';

import { setSettingsModal } from './gameReducer';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
};

const GameSettingsModal = () => {
  const [boardSize, setBoardSize] = useState(8);
  const { settingsModalOpen: open } = useSelector(state => state.game)
  const dispatch = useDispatch();

  const handleClose = () => { dispatch(setSettingsModal(false))}
  
  const handleBoardSize = (e) => {
    console.log(e);

    setBoardSize(e.value);
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      style={style}
    >
      <Box style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
        <Typography variant="h6" component="h2">
          Select Board Size
        </Typography>

        <ToggleButtonGroup onChange={(e) => handleBoardSize(e)}>
          <ToggleButton value={8}>
            8
          </ToggleButton>
          <ToggleButton value={16}>
            16
          </ToggleButton>
          <ToggleButton value={32}>
            32
          </ToggleButton>
        </ToggleButtonGroup>

        <Button onClick={handleClose}>
          Start Game
        </Button>
      </Box>
    </Modal>
  )
};

export default GameSettingsModal;
