import React from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import Grid from '@mui/material/Unstable_Grid2';

import CardComponent from './CardComponent';
import { setCardFlipped } from './gameReducer';

// Be more specific about props later.
const GameBoard = (props) => {
  const dispatch = useDispatch();
  const { gameDeck } = useSelector(state => state.game);

  const handleOnclick = (i) => {
    dispatch(setCardFlipped(i));
  }

  console.log(gameDeck);
  
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
