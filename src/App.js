import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { array } from 'prop-types';

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

// class Square extends React.Component {

// // constructor(props){
// //   super(props);
// //   this.state = {
// //     value: null,
// //   };
// // }

//   render() {
//     return (
//       // etapa1-<button className="square" onClick={function() { alert('click'); }}>
//       //Funcion de flecha
//       // etapa2-<button className="square" onClick={() => alert('click')}>
//       //etapa 3-<button className="square" onClick={() => this.setState({value: 'X'})} >
//       <button
//       className="square"
//       onClick={() => this.props.onClick()}
//     >
//         {/* {this.props.value} */}
//         {/* {this.props.value} */}
//         {this.state.value}
//       </button>
//     );
//   }
// }

// class Square extends React.Component {
//   render() {
//     return (
//       <button
//         className="square"
//         onClick={() => this.props.onClick()}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }

function Square (props){
  return(
  <button className="square" onClick={props.onClick}>
    {props.value}
  </button>
  );
}

class Board extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i){
    const squares = this.state.squares.slice();
    //squares[i] = 'X';
    //
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    //
    squares[i] = this.state.xIsNext ? 'X' : 'O';    
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    //Etapa1- return <Square value={i}/>;
    //Etapa2-return <Square value={this.state.squares[i]}/>;
    return <Square value={this.state.squares[i]}
    onClick={() => this.handleClick(i)}/>
  }

  render() {
    //const status = 'Next player: X';
    //const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    //
    const winner = calculateWinner(this.state.squares);
    //
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;

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
      return squares[a];
    }
  }
  return null;
}