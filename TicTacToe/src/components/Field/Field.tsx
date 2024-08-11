import "./Field.css";
import { FieldCell } from "../FieldCell/FieldCell";
import { restart } from "../../redux/features/gameSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { PLAYER_O, PLAYER_X } from "../../consts/consts";

export const Field: React.FC = () => {
  const cells = useAppSelector((state) => state.game.cells);
  const player = useAppSelector((state) => state.game.player);
  const isWin = useAppSelector((state) => state.game.isWin);
  const dispatch = useAppDispatch();

  const currentPlayerTurn = !isWin && cells.some((cell) => !cell);
  const winner = player === PLAYER_X ? PLAYER_O : PLAYER_X;
  const draw = !isWin && cells.every((cell) => cell !== '');

  return (
    <>
      {currentPlayerTurn && <div className="field__title">{player}'s turn</div>}

      {isWin && <div className="field__title">Winner: {winner} player!</div>}

      {draw && <div className="field__title">Draw!</div>}
      <div className="field">
        {cells.map((cell, index) => {
          return <FieldCell cell={cell} index={index} key={index} />;
        })}
      </div>

      <button
        onClick={() => {
          dispatch(restart());
        }}
        className="restart"
      >
        Restart
      </button>
    </>
  );
};
