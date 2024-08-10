import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useReducer,
  useState,
} from "react";

export interface AppContext {
  cells: string[] | null[];
  check: () => boolean;
  handle: (index: number) => void;
  win: boolean;
  PLAYER_X: string;
  PLAYER_O: string;
  player: string;
  setPlayer: Dispatch<SetStateAction<string>>;
  setWin: Dispatch<SetStateAction<boolean>>;
  mark: (index: number) => string[] | null[] | undefined;
  winComb: number[];
  restart: () => void;
}

export const AppContext = createContext<AppContext | null>(null);

interface Props {
  children: React.ReactNode;
}

const cells = Array(9).fill(null);
const PLAYER_X = "X";
const PLAYER_O = "O";
const COMBS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [winComb, setWinComb] = useState([] as number[]);
  const [win, setWin] = useState(false);
  const [player, setPlayer] = useState(PLAYER_X);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const check = useCallback(() => {
    for (const comb of COMBS) {
      if (
        cells[comb[0]] === cells[comb[1]] &&
        cells[comb[1]] === cells[comb[2]] &&
        cells[comb[0]] !== null
      ) {
        setWinComb(comb);
        return true;
      }
    }
    return false;
  }, []);

  const restart = useCallback(() => {
    for (let i = 0; i < cells.length; i++) {
      cells[i] = null;
    }

    setPlayer(PLAYER_X);

    setWin(false);

    forceUpdate();

    return cells;
  }, []);

  const mark = useCallback(
    (index: number) => {
      if (win) {
        return;
      }

      if (!cells[index]) {
        cells[index] = player;
        if (player === PLAYER_X) {
          setPlayer(PLAYER_O);
        } else {
          setPlayer(PLAYER_X);
        }
      }

      return cells;
    },
    [player, win]
  );

  const handle = useCallback(
    (index: number) => {
      mark(index);
      const winner = check();

      setWin(winner);
    },
    [check, mark]
  );

  const contextValue = {
    cells,
    check,
    handle,
    win,
    PLAYER_X,
    PLAYER_O,
    player,
    setPlayer,
    setWin,
    mark,
    winComb,
    restart,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
