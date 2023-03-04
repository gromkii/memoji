import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './components/gameReducer';

export default configureStore({
  gameReducer
});
