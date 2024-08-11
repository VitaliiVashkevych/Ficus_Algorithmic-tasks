import "./Field.css";
import { FieldCell } from "../FieldCell/FieldCell";
import { useStore } from "../../zustand/store";
import { PLAYER_O, PLAYER_X } from "../../consts/consts";

export const Field: React.FC = () => {
  const { isWin, cells, playersTurn, restartGame } = useStore();

  const currentPlayerTurn = !isWin && cells.some((cell) => !cell);
  const winner = playersTurn === PLAYER_X ? PLAYER_O : PLAYER_X;
  const draw = !isWin && cells.every((cell) => cell !== '');

  return (
    <>
      {currentPlayerTurn && <div className="field__title">{playersTurn}'s turn</div>}

      {isWin && <div className="field__title">Winner: {winner} player!</div>}

      {draw && <div className="field__title">Draw!</div>}

      <div className="field">
        {cells.map((cell, index) => {
          return <FieldCell cell={cell} index={index} key={index} />;
        })}
      </div>

      <button onClick={restartGame} className="restart">
        Restart
      </button>
    </>
  );
};
