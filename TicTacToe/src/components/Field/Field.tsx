import "./Field.css";
import { FieldCell } from "../FieldCell/FieldCell";
import { reatomComponent, useAction, useAtom } from "@reatom/npm-react";
import {
  cellsAtom,
  currentPlayerAtom,
  isWinAtom,
  restartAtom,
} from "../../ReAtom/model";
const PLAYER_X = "X";
const PLAYER_O = "O";

export const Field = reatomComponent(({ ctx }) => {
  const [cells] = useAtom(cellsAtom);
  const restart = useAction(restartAtom);
  const [currentPlayer] = useAtom(currentPlayerAtom);
  const [isWin] = useAtom(isWinAtom);

  const currentPlayerTurn = cells.some((cell) => !cell);
  const winner = currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
  const draw = !isWin && cells.every((cell) => cell !== "");

  return (
    <>
      {currentPlayerTurn && (
        <div className="field__title">{currentPlayer}'s turn</div>
      )}
      {isWin && <div className="field__title">Winner: {winner} player!</div>}
      {draw && <div className="field__title">Draw!</div>}

      <div className="field">
        {ctx.spy(cellsAtom) &&
          cells.map((cell, index) => {
            return <FieldCell ctx={ctx} cell={cell} index={index} key={index} />;
          })}
      </div>

      <button onClick={restart} className="restart">
        Restart
      </button>
    </>
  );
});
