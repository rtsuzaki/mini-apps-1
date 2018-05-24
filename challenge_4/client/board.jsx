import React from "react";
import Row from "./row.jsx";

var Board = (props) => {
  let numberOfRows = [1,2,3,4,5,6];
    return (
      <table>
        <tbody>
        {numberOfRows.map((el)=> (<Row key={el}/>))}
        </tbody>
      </table>
    )
}

export default Board;