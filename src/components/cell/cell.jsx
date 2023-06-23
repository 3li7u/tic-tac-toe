import "./cell.css";

export default function Cell({ value, onCellClick }) {
  return (
    <button className={`cell ${value ? "clicked" : ""}`} onClick={onCellClick}>
      {value}
    </button>
  );
}
