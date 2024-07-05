import { configureStore } from '@reduxjs/toolkit';
import app from '@modules/app/app.slice';
import config from '@utils/config';
import tokenList from '@modules/token/token.slice';

const store = configureStore({
  reducer: {
    app,
    tokenList,
    // add more store ...
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: config.env === 'dev',
});

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
