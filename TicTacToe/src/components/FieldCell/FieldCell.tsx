import { useStore } from "../../zustand/store";
import "./FieldCell.css";

interface FieldCell {
  cell: string,
  index: number
}

export const FieldCell: React.FC<FieldCell> = ({ cell, index }) => {
  const { winCombination, markCell } = useStore();
  const highlightWinCells = winCombination.includes(index);

  return (
    <div
      className="field__cell"
      onClick={() => markCell(index)}
      style={highlightWinCells ? { color: "red" } : {}}
    >
      {cell}
    </div>
  );
};
