console.log('app is connected')

// let turn = 0;
// let allowMoreTurns = true;
// let marker;
// let playerOneWins = 0;
// let playerTwoWins = 0;


let boardState = 
  {
      0:null, 1: null, 2: null,
      3:null, 4: null, 5: null,
      6:null, 7: null, 8: null,
      turn:0,
      allowMoreTurns:true,
      marker:null,
      playerOneWins:0,
      playerTwoWins:0,
  }

let boardBoxes = document.querySelectorAll('td')
let rows = [[0,1,2],[3,4,5],[6,7,8]];
let cols = [[0,3,6],[1,4,7],[2,5,8]];

//Resets Board
let handleReset = function() {
    let turn = 0;
    boardState.allowMoreTurns = true;
    boardBoxes.forEach(function(box) {
        box.innerHTML = '';
    })
    for (var i = 0; i < 9; i++) {
        boardState[i]=null;
    } 
    document.getElementById('result').innerHTML = '';
}

//Determine whether it is 'X' turn or 'O' turn
let checkTurn = function() {
    if (boardState.turn % 2 === 0) {
        boardState.marker = 'X'
    } else {
        boardState.marker = 'O'
    }
}

let checkRow = function(id) {
  if (id >= 0 && id <= 2) {
      return 0;
  } else if (id >= 3 && id <= 5) {
      return 1;
  } else {
      return 2;
  }
}

let checkCol = function(id) {
    if (id === '0' || id === '3' || id === '6') {
        return 0;
    } else if (id === '1' || id === '4' || id === '7') {
        return 1;
    } else {
        return 2;
    }
}


let sayWinner = () => {
    boardState.allowMoreTurns = false;
    if (boardState.marker === 'X') {
        document.getElementById('result').innerHTML = 'Player 1 Wins!';
        boardState.playerOneWins++;
        document.getElementById('playerOneWins').innerHTML = boardState.playerOneWins;
    } else {
        document.getElementById('result').innerHTML = 'Player 2 Wins!'
        boardState.playerTwoWins++;
        document.getElementById('playerTwoWins').innerHTML = boardState.playerTwoWins;
    }
}

let checkWinByRows = function(row) {
    if (boardState[rows[row][0]] === boardState.marker && boardState[rows[row][1]] === boardState.marker && boardState[rows[row][2]] === boardState.marker) {
        sayWinner();
    }
}

let checkWinByCols = function(col) {
    if (boardState[cols[col][0]] === boardState.marker && boardState[cols[col][1]] === boardState.marker && boardState[cols[col][2]] === boardState.marker) {
        sayWinner();
    }
}

let checkWinByDiag = function() {
    if ((boardState[0] === boardState.marker && boardState[4] === boardState.marker && boardState[8] === boardState.marker) || (boardState[2] === boardState.marker && boardState[4]=== boardState.marker && boardState[6]=== boardState.marker)) {
        sayWinner();
    }
}


let takeTurn = function () {
    if (boardState.allowMoreTurns === true && this.innerHTML === '') {
        checkTurn();
        this.innerHTML = boardState.marker
        boxNum = event.target.id;
        boardState[boxNum] = boardState.marker;
        boardState.turn++;
        
        let row = checkRow(boxNum)
        let col = checkCol(boxNum)

        checkWinByRows(row);
        checkWinByCols(col);
        checkWinByDiag();   
    }
}

//Adding Event Listners
boardBoxes.forEach(function(box) {
    box.addEventListener("click", takeTurn);
});

document.getElementById('reset').addEventListener('click',handleReset);
