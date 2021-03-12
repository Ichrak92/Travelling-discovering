import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import List from "./components/List.jsx";
import axios from "axios";
import Create from "./components/Create.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get("/api/blog").then((result) => {
      this.setState({ data: result.data });
      console.log(this.state.data);
    });
  }
  // componentDidMount() {
  //   $.ajax({
  //     url: '/items',
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  render() {
    {
      console.log(this.state.data);
    }
    return (
      <div>
        {/* {this.state.data.map((el) => {
          return (
            <div key={el.id}>
              <h1>{el.name}</h1>
              <h1>{el.email}</h1>
              <h1>{el.country}</h1>
              <img src={el.imageUrl} />
              
            </div>
          );
        })} */}
           <Create />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
