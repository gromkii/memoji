import React, { useState } from 'react';
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
    if (!canInteract && gameDeck[i].matched) {
      return;
    }

    // ? setCanInteract here and resolve logic before returning?

    dispatch(setCardFlipped(i));
    if (!firstChoice) {
      // Set first click.
      setFirstChoice(i);
      return
      // return
    }

    if (gameDeck[i].symbol === gameDeck[firstChoice].symbol) {
      dispatch(setCardMatched([firstChoice, i]));
      handleCheckGameEnd();
      return;
    }
    
    handleResetCards(i);
  }

  const handleResetCards = (i) => {
    setCanInteract(false);
    setTimeout(() => {
      dispatch(setCardFlipped(i));
      dispatch(setCardFlipped(firstChoice));
      setFirstChoice(undefined);
      setCanInteract(true);
    }, 2000);
  }

  // this might need to happen in the reducer to avoid race conditions.
  const handleCheckGameEnd = () => {
    console.log('check game end');
    if (!gameDeck.every((card) => card.matched)) {
      console.log('every');
      setFirstChoice(undefined);
      return;
    }

    console.log('u win');

  }

  
  return (
    <Grid container spacing={2}>
      { gameDeck.map((card, i) => (
        <Grid xs={4} display="flex" justifyContent="center" onClick={(_) => handleOnclick(i)}>
          <CardComponent card={card} key={i}/>
        </Grid>
      ))}
    </Grid>
  );
};

export default GameBoard;
