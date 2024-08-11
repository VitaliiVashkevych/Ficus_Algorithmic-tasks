export type Store = {
  cells: string[];
  winCombination: number[];
  isWin: boolean;
  playersTurn: string;
  setPlayer: () => void;
  isWinChecker: () => void;
  markCell: (index: number) => void;
  restartGame: () => void;
};