import { create } from "zustand";
import { PLAYER_X, PLAYER_O, COMBS } from "../consts/consts";
import { Store } from "../types/StoreType";

export const useStore = create<Store>((set, get) => ({
  cells: Array(9).fill(""),
  winCombination: [],
  isWin: false,
  playersTurn: PLAYER_X,
  setPlayer() {
    const currentPlayer = get().playersTurn;

    if (currentPlayer === PLAYER_X) {
      set({ playersTurn: PLAYER_O })
    } else {
      set({ playersTurn: PLAYER_X })
    }
  },
  isWinChecker() {
    const cells = get().cells;

    for (const comb of COMBS) {
      if (
        cells[comb[0]] === cells[comb[1]] &&
        cells[comb[1]] === cells[comb[2]] &&
        cells[comb[0]] !== ''
      ) {
        set({ winCombination: comb })
        set({isWin: true})
      }
    }
  },
  markCell(index: number) {
    const cells = get().cells;
    const isWin = get().isWin;
    const setPlayer = get().setPlayer;
    const playersTurn = get().playersTurn;
    const isWinChecker = get().isWinChecker;
  
    if (isWin) {
      return;
    }

    if (!cells[index]) {
      const changedCells = [...cells]
      changedCells[index] = playersTurn;
      set({ cells: changedCells })
      setPlayer()
      isWinChecker()
    }
  },
  restartGame() {
    set({ cells: Array(9).fill("") })
    set({ playersTurn: PLAYER_X })
    set({ isWin: false })
    set({winCombination: []})
  }
}));
