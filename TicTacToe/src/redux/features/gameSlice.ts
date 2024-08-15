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

    checkWin(state) {
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
        cells[index] = player;
      }
    },
    changePlayer(state, action) {
      const cell = state.cells[action.payload];

      if (cell || state.isWin) {
        return
      }

      if (state.player === PLAYER_X) {
        state.player = PLAYER_O
      } else {
        state.player = PLAYER_X
      }
    }
  }
})

export const { restart, markCell, checkWin, changePlayer } = gameSlice.actions

export default gameSlice.reducer