import { useContext } from "react";
import "./Field.css";
import { FieldCell } from "../FieldCell/FieldCell";
import { AppContext } from "../../context/AppContext";


export const Field: React.FC = () => {
  const { cells, win, player, PLAYER_X, PLAYER_O, restart } = useContext(AppContext) as AppContext;

  const currentPlayerTurn = !win && cells.some((cell) => !cell);
  const winner = player === PLAYER_X ? PLAYER_O : PLAYER_X;
  const draw = !win && cells.every((cell) => cell !== null);

  return (
    <>
      {currentPlayerTurn && <div className="field__title">{player}'s turn</div>}

      {win && <div className="field__title">Winner: {winner} player!</div>}

      {draw && <div className="field__title">Draw!</div>}

      <div className="field">
        {cells.map((cell, index) => {
          return (
            <FieldCell cell={cell} index={index} key={index}/>
          );
        })}
      </div>

      <button onClick={restart} className="restart">Restart</button>
    </>
  );
};
