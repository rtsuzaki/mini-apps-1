import React, { Component} from "react";
import "./style/styles.css";
import Board from "./board.jsx";
import WinMessage from "./WinMessage.jsx"

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      // isRedsTurn:true,
      marker: 'R',
      turns:0,
      colPick: null,
      message: null,
      boardState: [
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null],
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
    this.checkDiagonalWinDownRight(placedRow,colIndex);
    this.checkDiagonalWinDownLeft(placedRow,colIndex);
    // this.checkTie();

    if (this.state.marker ==='R') {
      this.setState({marker:'B'})
    } else {
      this.setState({marker:'R'})
    } 
    this.setState({turns:this.state.turns+1})
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
      this.setState({message: 'YOU WIN!'})
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
      this.setState({message: 'YOU WIN!'})
    }

  }

  checkDiagonalWinDownRight(row,col) {
    let j = col-row;
    let count = 1;
    let isWinner = false;
    for (var i = 0; i < this.state.boardState.length; i++) {
      if (this.state.boardState[i][j] === undefined) {
        j++;
      } else if (this.state.boardState[i][j] && this.state.boardState[i][j] === this.state.boardState[i-1][j-1]) {
        count++;
        j++;
      } else {
        count = 1;
        j++;
      }
      if (count === 4) {
        isWinner = true
      }
    }
    
    if (isWinner) {
      this.setState({message: 'YOU WIN!'})
    } 
  }

  checkDiagonalWinDownLeft(row,col) {
    let j = col+row;
    let count = 1;
    let isWinner = false;
    for (var i = 0; i < this.state.boardState.length; i++) {
      if (this.state.boardState[i][j] === undefined) {
        j--;
      } else if (this.state.boardState[i][j] && this.state.boardState[i][j] === this.state.boardState[i-1][j+1]) {
        count++;
        j--;
      } else {
        count = 1;
        j--;
      }
        
      if (count === 4) {
          isWinner = true;
      }
    }
    if (isWinner) {
      this.setState({message: 'YOU WIN!'})
    }
  }


  checkTie() {
   if (this.state.turns >= 42) {
     this.setState({message: 'TIE GAME!'})
   }


  }

  render(){
    return(
      <div className="App">
        <WinMessage message={this.state.message}/>
        <Board boardState={this.state.boardState} colPick={this.state.colPick} takeTurn={this.takeTurn.bind(this)}/>
      </div>
    );
  }
}

export default App;


