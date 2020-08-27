import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import "./fonts/Fabada-regular.ttf";

function Square(props) {
  return (
    // className="square anotherClass"
    <button className="square" onClick={props.onClick}>
      {" "}
      <span className={props.isWinner ? (props.value === "X" ? "winning-x" : "winning-o") : null}>{props.value}</span>{" "}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        isWinner= {this.props.winningSquares?.includes(i)}
      />
    );
  }
// sukmyass
  render() {
    return (
      <div>
        <div className="board-row">
          {" "}
          {this.renderSquare(0)} {this.renderSquare(1)} {this.renderSquare(2)}{" "}
        </div>{" "}
        <div className="board-row">
          {" "}
          {this.renderSquare(3)} {this.renderSquare(4)} {this.renderSquare(5)}{" "}
        </div>{" "}
        <div className="board-row">
          {" "}
          {this.renderSquare(6)} {this.renderSquare(7)} {this.renderSquare(8)}{" "}
        </div>{" "}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const previousStep = this.state.stepNumber > 0 ? this.state.stepNumber - 1 : 0;
    const winningLine = calculateWinner(current.squares);
    const winner = winningLine !== null ? current.squares[winningLine[0]] : null;

    // const moves = history.map((step, move) => {
    //   const desc = move ?
    //   'Undo':
    //   'Restart';
    // return (
    //     <li key={move}>
    //       <button onClick={() => this.jumpTo(move)}>{desc}</button>
    //     </li>
    //   );
    // });

    let status;
    if (winner) {
      status = "Winner: " + winner; 
    } else if (!winner && this.state.stepNumber === 9) {
      status = "CAT"
    } else {
      status = "TURN: Player " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-status"> {status} </div>{" "}
        <div className="game-board">
          <Board
            squares={current.squares}
            winningSquares= {winningLine}
            onClick={(i) => this.handleClick(i)}
          />{" "}
        </div>{" "}
        <div className="game-controls">
          <button className="game-button" id="restart" onClick={() => this.jumpTo(0)}> RESTART </button>{" "}
          <button className="game-button" id="undo" onClick={() => this.jumpTo(previousStep)}> UNDO </button>{" "}
        </div>{" "}
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i];
    }
  }
  return null;
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
