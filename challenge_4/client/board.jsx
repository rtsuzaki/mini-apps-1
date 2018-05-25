import React from "react";
import Row from "./row.jsx";



//passed colPick, isRedsTurn, boardState, takeTurn as props
var Board = (props) => {
  let numberOfRows = [0,1,2,3,4,5];
    return (
      <table>
        <tbody>
        {numberOfRows.map((el)=> (<Row rowkey={el} rowState={props.boardState[el]} takeTurn={props.takeTurn}/>))}
        </tbody>
      </table>
    )
}

export default Board;