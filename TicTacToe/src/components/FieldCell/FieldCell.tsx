import { reatomComponent, useAction, useAtom } from "@reatom/npm-react";
import { cellsAtom, markCellAtom, winningCombinationAtom } from "../../ReAtom/model";
import "./FieldCell.css";
interface Context {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  spy: (atom: any) => any;
}
interface FieldCellProps {
  ctx: Context;
  index: number;
  cell: string;
}

export const FieldCell = reatomComponent(
  ({ ctx, index, cell }: FieldCellProps) => {
    const [winningCombination] = useAtom(winningCombinationAtom);
    const highlightWinCells = winningCombination.includes(index);
    const markCell = useAction(markCellAtom);

    return ctx.spy(cellsAtom) && (
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
  }
);
