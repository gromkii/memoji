import React, { 
  useState,
  useEffect
} from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import Grid from '@mui/material/Unstable_Grid2';

import CardComponent from './CardComponent';
import { setCardFlipped, setCardMatched } from './gameReducer';
import { checkGameEnd } from '../utils/gameUtils';


// Be more specific about props later.
const GameBoard = (props) => {
  const [firstChoice, setFirstChoice] = useState(undefined);
  const [canInteract, setCanInteract] = useState(true);
  const { gameDeck } = useSelector(state => state.game);
  const dispatch = useDispatch();

  // TODO: This logic is close, but not close enough. Get it in order, firstChoice strat might suck.
  const handleOnclick = (i) => {
    if (!canInteract || gameDeck[i].matched) {
      return;
    }

    // ? setCanInteract here and resolve logic before returning?
    setCanInteract(false);
    dispatch(setCardFlipped(i));
    
    if (firstChoice === undefined) {
      setFirstChoice(i);
      setCanInteract(true);
      return;
    }

    if (gameDeck[i].symbol === gameDeck[firstChoice].symbol) {
      dispatch(setCardMatched([firstChoice, i]));
      setFirstChoice(undefined);
      setCanInteract(true);
      return;
    }
    
    handleResetCards(i);
  }

  const handleResetCards = (i) => {
    setTimeout(() => {
      dispatch(setCardFlipped(i));
      dispatch(setCardFlipped(firstChoice));
      setFirstChoice(undefined);
      setCanInteract(true);
    }, 2000);
  }
  
  return (
    <Grid container spacing={2}>
      { gameDeck.map((card, i) => (
        <Grid xs={4} display="flex" justifyContent="center" onClick={(_) => handleOnclick(i)} key={i}>
          <CardComponent card={card} index={i} />
        </Grid>
      ))}
    </Grid>
  );
};

export default GameBoard;
