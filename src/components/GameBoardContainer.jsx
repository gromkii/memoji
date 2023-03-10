import React from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Container, Typography } from '@mui/material';

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
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '50px'
    }}>
      <Grid xs={12}>
        <Typography variant='h2' fontWeight={800} className="title">
          Memoji 🤔
        </Typography>
        <Typography variant='h4' className="title">
          The Emoji Memory Game
        </Typography>
      </Grid>
      <Grid xs={12} className="main">
        { gameState === GAME_STATE.COMPLETE &&
          <Grid xs={12}>
            <Typography variant="h4">
              You Win! Go again?
            </Typography>
          </Grid>
        }

        {(!settingsModalOpen && (gameState !== GAME_STATE.IN_PROGRESS)) &&
          <Grid xs={12} className="actions-menu">
            <Button 
              onClick={handleOpen}
              variant="contained"
              className="game-button"
            >
              New Game
            </Button>
          </Grid>
        }
        
        {gameState === GAME_STATE.IN_PROGRESS &&
          <>
            <Grid xs={12}>
              <GameBoard />
            </Grid>
            <Grid xs={12} className="actions-menu">
              <Button 
                onClick={handleOpen}
                variant="contained"
                className="game-button"
              >
                New Game
              </Button>
            </Grid>
          </>
        }

        
        <GameSettingsModal/>
      </Grid>
    </Container>
  );
}

export default GameBoardContainer;
