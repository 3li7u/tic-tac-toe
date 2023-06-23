import theWinner from "../../helpers/winner";
import Cell from "../cell/cell";
import "./board.css";

export default function Board({ size, values, player, onPlay }) {
  const handleCellClick = (index) => {
    const newValues = values.slice();
    player ? (newValues[index] = "X") : (newValues[index] = "O");
    !values[index] && !theWinner(values) && onPlay(newValues);
  };

  const rows = [];
  for (let i = 1; i <= size; ++i) {
    const cells = [];
    for (let j = 1; j <= size; ++j) {
      cells.push(
        <Cell
          key={(i - 1) * size + j}
          value={values[(i - 1) * size + j - 1]}
          onCellClick={() => handleCellClick((i - 1) * size + j - 1)}
        />
      );
    }
    rows.push(
      <div key={i} className={`row row-${i}`}>
        {cells}
      </div>
    );
  }

  return rows;
}
