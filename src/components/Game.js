import { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../helpers";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };
    const renderMoves = () => {
      return <button onClick={()=>setBoard(Array(9).fill(null))}>Start Game</button>
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={board} onClick={handleClick} />
      </div>
      <div className="game-info">
        <div>
          {/* status */}
          <p style={{textAlign:"center"}}>
            {winner
              ? "Winner : " + winner
              : "Next Player:" + (xIsNext ? "X" : "O")}
                  </p>
                  {renderMoves()}
        </div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};

export default Game;
