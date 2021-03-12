import React from "react";
import axios from "axios";
import { render } from "react-dom";

// class List extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       blog : [],
//     }
//   }
// }

const List = (props) => (
  <div>
    <h4> List Component </h4>
    There are {props.items.length} items.
    {props.items.map((item) => (
      <ListItem item={item} />
    ))}
  </div>
);

export default List;
