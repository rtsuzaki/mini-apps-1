import React from "react";

let Row = (props) => {
  let numberOfCols = [1,2,3,4,5,6,7];
  return (
    <tr>
    {numberOfCols.map((el)=> (<td key={el}></td>))}
    </tr>
  )
}

export default Row;