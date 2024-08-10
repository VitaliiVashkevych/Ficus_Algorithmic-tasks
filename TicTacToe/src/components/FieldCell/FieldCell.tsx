import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import "./FieldCell.css";

interface FieldCell {
  cell: string | null,
  index: number
}

export const FieldCell: React.FC<FieldCell> = ({ cell, index }) => {
  const { handle, winComb } = useContext(AppContext) as AppContext;

  const highlightWinCells = winComb.includes(index);

  return (
    <div
      className="field__cell"
      onClick={() => {
        handle(index);
      }}
      style={highlightWinCells ? { color: "red" } : {}}
    >
      {cell}
    </div>
  );
};
