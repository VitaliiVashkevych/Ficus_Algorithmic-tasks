import "./Field.css";
import { FieldCell } from "../FieldCell/FieldCell";
import store from "../../mobx/store";
import { observer } from 'mobx-react';
import { PLAYER_O, PLAYER_X } from "../../consts/consts";

const Field: React.FC = () => {
  const { restart, cells, isWin, player } = store;

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
          return (
            <FieldCell cell={cell} index={index} key={index}/>
          );
        })}
      </div>

      <button onClick={restart} className="restart">Restart</button>
    </>
  );
};

export const FieldObserver = observer(Field)
