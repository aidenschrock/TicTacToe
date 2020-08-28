import React, {Component} from "react";
class Board extends Component {
    renderSquare(i) {
      return (
        <Square
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
          isWinner= {this.props.winningSquares?.includes(i)}
        />
      );
    }

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

  function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {" "}
        <span className={props.isWinner ? (props.value === "X" ? "winning-x" : "winning-o") : null}>{props.value}</span>{" "}
      </button>
    );
  }
  
  export default Board;
  