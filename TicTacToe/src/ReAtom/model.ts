import { action, atom } from "@reatom/framework";

const PLAYER_X = "X";

export const cellsAtom = atom(Array(9).fill("1"));
export const currentPlayerAtom = atom(PLAYER_X);
export const isWinAtom = atom(false);
export const winningCombinationAtom = atom([] as number[]);

export const restartAtom = action((ctx) => {
  cellsAtom(ctx, Array(9).fill(""));
  currentPlayerAtom(ctx, PLAYER_X);
});

export const changePlayerAtom = action((ctx) => {
  currentPlayerAtom(ctx, PLAYER_X === "X" ? "O" : "X");
});

export const markCellAtom = action((ctx, index: number) => {
  const newCells = ctx.get(cellsAtom);
  newCells[index] = "123";
  cellsAtom(ctx, newCells);
  console.log(ctx.get(cellsAtom));
  
});
