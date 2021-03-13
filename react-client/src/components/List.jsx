import React, { Component } from "react";
import axios from "axios";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      togle: true,
      descip: "",
    };
    this.deleteblog = this.deleteblog.bind(this);
    this.updateblog = this.updateblog.bind(this);
  }

  componentDidMount() {
    axios.get("/api/blog").then((result) => {
      console.log(result.data);
      this.setState({ data: result.data });
    });
  }

  deleteblog(id) {
    axios.delete(`/api/blog/${id}`, {});
  }

  updateblog(id) {
    axios
      .patch(`/api/blog/${id}`, {
        id: id,
        descip: this.state.descip,
      })
      .then((data) => {})
      .catch((err) => console.log(err));
  }
  render() {
    const { togle } = this.state;
    return (
      <div className="cnt">
        <div className="feed">
          <ul>
            {this.state.data.map((e) => (
              <li className="feed-list-item" key={e.id}>
                <div className="feed-list-item-title">{e.country}</div>
                <div className="feed-list-item-title"></div>
                <img src={e.imageUrl} className="feed-list-item-image" />
                <span className="feed-list-item-lede"> {e.descip}</span>
                <center>
                <button
                  className="delete"
                  onClick={() => this.deleteblog(e.id)}
                >
                  Delete
                </button>
                <br/>
                </center>
                <br/>
                <center>
                <button
                  className="update"
                  onClick={() => this.updateblog(e.id)}
                >
                  Edit
                </button>
                </center>
                <br/>
                {!!togle && (
                  <center>
                  <input className="toggle"
                    type="text"
                    placeholder="change what youwant"
                    onChange={(e) => this.setState({ descip: e.target.value })}
                  />
                 </center>
                )}
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    );
  }
}
