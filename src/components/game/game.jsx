import { useState } from "react";
import Board from "../board/board";
import theWinner from "../../helpers/winner";
import "./game.css";

const boardSize = 3;

export default function Game() {
  const [history, setHistory] = useState([Array(boardSize ** 2).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const player = currentMove % 2 === 0;
  const values = history[currentMove];

  const handlePlay = (newValues) => {
    setHistory((prev) => [...prev.slice(0, currentMove + 1), newValues]);
    setCurrentMove((prev) => ++prev);
  };

  const winner = theWinner(values);
  const status = winner
    ? `Congratulations! Player ${winner} won`
    : `Player ${player ? "X" : "O"} turn`;

  const handleMove = (move) => {
    setCurrentMove(move);
  };

  const moves = history.map((values, move) => {
    const content = move === 0 ? "Restart the Game" : `Move #${move}`;
    return (
      <div key={move}>
        <button onClick={() => handleMove(move)}>{content}</button>
      </div>
    );
  });
  return (
    <div className="app">
      <div className="status">
        <h4>{status}</h4>
      </div>
      <div className="board">
        <Board
          size={boardSize}
          player={player}
          values={values}
          onPlay={handlePlay}
        />
      </div>
      <div className="moves">{moves}</div>
    </div>
  );
}
