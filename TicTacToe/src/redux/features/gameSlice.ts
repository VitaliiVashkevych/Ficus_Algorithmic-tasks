import { createSlice } from '@reduxjs/toolkit';
import { COMBS, PLAYER_O, PLAYER_X } from '../../consts/consts';


export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    cells: Array(9).fill(''),
    player: PLAYER_X,
    isWin: false,
    winComb: [] as number[]
  },
  reducers: {
    restart(state) {
      state.cells = Array(9).fill('');
      state.player = PLAYER_X;
      state.isWin = false;
      state.winComb = [];
    },

    check(state) {
      const cells = state.cells;

      for (const comb of COMBS) {
        if (
          cells[comb[0]] === cells[comb[1]] &&
          cells[comb[1]] === cells[comb[2]] &&
          cells[comb[0]] !== ''
        ) {
          state.isWin = true;
          state.winComb = comb;
        }
      }
    },
    markCell(state, action) {
      const cells = state.cells;
      const index = action.payload;
      const player = state.player === PLAYER_X ? PLAYER_O : PLAYER_X;

      if (state.isWin) {
        return
      }

      if (!cells[index]) {
        cells[index] = state.player;
        state.player = player;
      }
    },
  }
})

export const { restart, markCell, check } = gameSlice.actions

export default gameSlice.reducer