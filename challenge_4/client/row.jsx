import React from "react";
import Box from "./box.jsx";

let Row = (props) => {
  let numberOfCols = [0,1,2,3,4,5,6];
  return (
    <tr>
        {numberOfCols.map((el)=> (<Box rowkey={props.rowkey} colkey={el} takeTurn={props.takeTurn} boxState={props.rowState[el]}/>))}
    </tr>
  )
}

export default Row;