import React from 'react';
import { 
  Box,
  Modal, 
  Typography,
} from '@mui/material';
import {
  useSelector,
  useDispatch
} from 'react-redux';

import { setSettingsModal } from './gameReducer';

const GameSettingsModal = () => {
  const { settingsModalOpen: open } = useSelector(state => state.game)
  const dispatch = useDispatch();

  const handleClose = () => { dispatch(setSettingsModal(false))}

  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Box>
        <Typography variant="h6" component="h2">
          This is a modal.
        </Typography>
      </Box>
    </Modal>
  )
};

export default GameSettingsModal;
