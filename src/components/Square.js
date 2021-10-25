const btnStyle = {
  backgroundColor: "#fff",
  border: "1px solid #eee",
  fontSize: "30px",
  cursor: "pointer",
  outline: "none",
};

const Square = ({ value, onClick }) => {
  return (
    <button style={btnStyle} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
