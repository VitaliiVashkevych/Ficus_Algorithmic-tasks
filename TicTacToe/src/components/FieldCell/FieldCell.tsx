import "./FieldCell.css";
import store from "../../mobx/store";

interface FieldCell {
  cell: string | null;
  index: number;
}

export const FieldCell: React.FC<FieldCell> = ({ cell, index }) => {
  const { winningCombination, markCell } = store;
  const highlightWinCells = winningCombination.includes(index);

  return (
    <div
      className="field__cell"
      onClick={() => {
        markCell(index);
      }}
      style={highlightWinCells ? { color: "red" } : {}}
    >
      {cell}
    </div>
  );
};
