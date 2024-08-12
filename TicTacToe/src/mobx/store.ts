import { makeAutoObservable } from "mobx";
import { COMBS, PLAYER_O, PLAYER_X } from "../consts/consts";

class Store {
  cells: string[] = Array(9).fill("");
  isWin = false;
  player = PLAYER_X;
  winningCombination: number[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  restart = () => {
    this.cells = Array(9).fill("");
    this.isWin = false;
    this.player = PLAYER_X;
    this.winningCombination = [];
  };

  changePlayer = () => {
    if (this.player === PLAYER_X) {
      this.player = PLAYER_O;
    } else {
      this.player = PLAYER_X;
    }
  };

  winChecker = () => {
    const cells = this.cells;
    
    for (const comb of COMBS) {
      if (
        cells[comb[0]] === cells[comb[1]] &&
        cells[comb[1]] === cells[comb[2]] &&
        cells[comb[0]] !== ''
      ) {
        this.winningCombination = comb;
        this.isWin = true;
      }
    }
  };

  markCell = (index: number) => {
    if (this.cells[index] || this.isWin) {
      return;
    }

    const newCells = [...this.cells];
    newCells[index] = this.player;
    this.cells = newCells;
    this.changePlayer();
    this.winChecker();
  };
}

const store = new Store();
export default store;
