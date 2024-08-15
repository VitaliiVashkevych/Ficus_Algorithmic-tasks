import "./FieldCell.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changePlayer, checkWin, markCell } from "../../redux/features/gameSlice";

interface FieldCell {
  cell: string | null;
  index: number;
}

export const FieldCell: React.FC<FieldCell> = ({ cell, index }) => {
  const winComb = useAppSelector((state) => state.game.winComb);
  const highlightWinCells = winComb.includes(index);
  const dispatch = useAppDispatch();

  return (
    <div
      className="field__cell"
      onClick={() => {
        dispatch(changePlayer(index))
        dispatch(markCell(index))
        dispatch(checkWin())
      }}
      style={highlightWinCells ? { color: "red" } : {}}
    >
      {cell}
    </div>
  );
};
