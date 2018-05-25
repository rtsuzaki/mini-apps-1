import React from "react";

let Box = (props) => {
  return (
    <td className={props.boxState} onClick={()=>props.takeTurn(props.rowkey,props.colkey)}>
    {props.boxState}
    </td>
  )
}

export default Box;