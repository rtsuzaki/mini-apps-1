import React, { Component} from "react";
import "./style/styles.css";
import Board from "./board.jsx";

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      // isRedsTurn:true,
      marker: 'R',
      colPick: null,
      boardState: [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
      ],

    }
  }

  takeTurn(rowIndex,colIndex) {
   
    var numOfRows = this.state.boardState.length;
    var newBoardState = this.state.boardState;
    var placed = false;

    for (var i = numOfRows - 1; i >= 0; i--) {
      if (!newBoardState[i][colIndex] && !placed) {
        newBoardState[i][colIndex] = this.state.marker;
        var placedRow = i;
        placed =!placed;
      }
    }

    this.setState({boardState: newBoardState})
    this.checkHorizontalWin(placedRow);
    this.checkVerticalWin(colIndex);
    this.checkDiagonalWin(placedRow,colIndex)
    // this.checkTie();

    if (this.state.marker ==='R') {
      this.setState({marker:'B'})
    } else {
      this.setState({marker:'R'})
    }  
  }

  checkHorizontalWin(rowIndex) {
    let placedRow = this.state.boardState[rowIndex]
    let count = 1;
    let isWinner = false;
    for (var i = 1; i < placedRow.length; i++) {
      if (placedRow[i] && placedRow[i] === placedRow[i-1]) {
        count++;
      } else {
        count = 1;
      }
      if (count === 4) {
        isWinner = true
      }
    }

    if (isWinner) {
      alert('YOU WIN!')
    }
  }
  
  checkVerticalWin(colIndex) {
    let count = 1;
    let isWinner = false;
    for (var i = 1; i < this.state.boardState.length; i++) {
      if (this.state.boardState[i][colIndex] && this.state.boardState[i][colIndex] === this.state.boardState[i-1][colIndex]) {
        count++;
      } else {
        count = 1;
      }
      if (count === 4) {
        isWinner = true
      }
    }
    if (isWinner) {
      alert('YOU WIN!')
    }

  }

  checkDiagonalWin(row,col) {
    
    if ()

  }

  checkTie() {
    //check if all spaces have been filled after running the other win test.


  }

  render(){
    return(
      <div className="App">
        <Board boardState={this.state.boardState} colPick={this.state.colPick} takeTurn={this.takeTurn.bind(this)}/>
      </div>
    );
  }
}

export default App;


