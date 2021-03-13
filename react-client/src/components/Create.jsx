import React from "react";
import axios from "axios";

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      country: "",
      descip: "",
      imageUrl: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    axios.post("/api/blog", this.state).then((res) => {
      console.log("gjgjhgh", res);
      alert("Blog added ");
    });
  }

  render() {
    return (
      <div className="create">
        {console.log(this.state)}
        <div className="create">
          <h2>Add Blog </h2>
          name:
          <input
            className="inp"
            name="name"
            placeholder="name"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <br />
          email:
          <input
            className="inp"
            name="email"
            placeholder="email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <br />
          country:
          <input
            className="inp"
            name="contry"
            placeholder="country"
            onChange={(e) => this.setState({ country: e.target.value })}
          />
          <br />
          descip:
          <input
            className="inp"
            name="descrip"
            placeholder="description"
            onChange={(e) => this.setState({ descip: e.target.value })}
          />
          <br />
          imageUrl:
          <input
            className="inp"
            name="imageUrl"
            placeholder="imageUrl"
            onChange={(e) => this.setState({ imageUrl: e.target.value })}
          />
          <br />
          <div className="btn">
            <button className="btn1" onClick={() => this.handleSubmit()}>
              Add Blog
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Create;
