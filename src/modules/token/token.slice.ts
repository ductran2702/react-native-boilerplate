import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { State, Dispatch } from '@utils/store';

const INITIAL_STATE = {
  tokenList: [] as any,
};

const tokenListSlice = createSlice({
  name: 'tokenList',
  initialState: INITIAL_STATE,
  reducers: {
    addTokenToList(state, action) {
      state.tokenList.push(action.payload);
    },

    deleteTokenInList(state, action) {
      state.tokenList.filter(tokenId => tokenId !== action.payload);
    },
  },
});

export function useTokenSlice() {
  const dispatch = useDispatch<Dispatch>();
  const state = useSelector(({ tokenList }: State) => tokenList);
  return { dispatch, ...state, ...tokenListSlice.actions };
}

export default tokenListSlice.reducer;
