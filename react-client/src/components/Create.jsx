import React from "react";
import axios from "axios";


class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      country: "",
      description: "",
      imageUrl: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.value]: event.target.name });
  }
  handleSubmit(event) {
    axios.post("/api/blog", this.state)
    .then((res) => {
    console.log("gjgjhgh", res)
    alert("Blog added ");
    });
  }

  render() {
    return (
      <div className="create">
        <div className="create">
        <h2>Add Blog </h2>
          name:
          <input className="inp" placeholder="name"  onChange={(e)=>this.setState({name:e.target.value})}/>
          <br/>
          email:
          <input className="inp"  placeholder="email"  onChange={(e)=>this.setState({email:e.target.value})} />
          <br/>
          country:
          <input className="inp" placeholder="country"   onChange={(e)=>this.setState({country:e.target.value})}/>
          <br/>
          description:
          <input className="inp" placeholder="description"  onChange={(e)=>this.setState({name:e.target.value})}/>
          <br/>
          imageUrl:
          <input className="inp" placeholder="imageUrl"  onChange={(e)=>this.setState({name:e.target.value})}/>
          <br/>
          <div className="btn">
          <button className="btn1" onClick={this.handleSubmit}>Add Blog</button>
          </div>
          </div>
      </div>
    );
  }
}
export default Create;
