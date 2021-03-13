import { element } from "angular";
import React, { Component } from "react";
import axios from "axios";

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
      </div>
    );
  }
}
