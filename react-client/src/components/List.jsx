import { element } from "angular";
import React, { Component } from "react";
import axios from "axios";
import { data } from "jquery";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    axios.get("/api/blog").then((result) => {
      console.log(result.data);
      this.setState({ data: result.data });
    });
  }

//   deleteblog(id){
//     axios.delete(`/api/blog/${id}`)
//     alert("deleted")
//   })
//   .catch(err=>console.log(err))
// }
// updateblog(id){
//   axios.put(`/api/blog/${id}`,{newBlog:this.state.newBlog})
//   .then((data) =>{
//     alert("blog updated")

//   })
//   .catch(err => console.log(err))
// }
  render() {
    return (
      <div className="cnt">
        <div className="feed">
          <ul>
            {this.state.data.map((e) => (
              <li className="feed-list-item" key={e.id}>
                <div className="feed-list-item-title">{e.country}</div>
                <div className="feed-list-item-title">{e.description}</div>
                <img src={e.imageUrl} className="feed-list-item-image" />
                <span className="feed-list-item-lede"> {e.description}</span>
              </li>
            ))}
          </ul>
        </div>
        <button className="delete" onClick={()=>{this.deleteblog(e.blog)}}>Delete</button>
        <button className="update" onClick={()=>{this.updateblog(e.blog)}}>Edit</button>
      </div>
    );
  }
}
