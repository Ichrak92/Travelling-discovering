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
      view: "list",
      Blogs: [],
    };
  }

  componentDidMount() {
    axios.get("/api/blog").then((result) => {
      console.log(result.data);
      this.setState({ Blogs: result.data });
    });
  }
  changeView(option) {
    this.setState({
      view: option,
    });
  }
  renderView() {
    const { view } = this.state;
    if (view === "list") {
      return <List blog={this.state.Blogs} />;
    } else {
      return <Create />;
    }
  }

  render() {
    {
      console.log(this.state.Blogs);
    }
    return (
      <div>
        {/* {this.state.Blogs.map((el) => {
          return (
            <div key={el.id}>
              <h1>{el.name}</h1>
              <h1>{el.email}</h1>
              <h1>{el.country}</h1>
              <img src={el.imageUrl} />
              
            </div>
          );
        })}  */}
        <nav>
          <div className="navbar">
            <span className="logo" onClick={() => this.changeView("blogs")}>
              {/* Travelling */}
              {/* <img src="https://media.giphy.com/media/vBMzK6KN6M6zK/giphy.gif"/> */}
            </span>
            <span className="nav" onClick={() => this.changeView("list")}>
              All Blogs
            </span>

            <span className="nav" onClick={() => this.changeView("list1")}>
              Add Blog
            </span>
          </div>
        </nav>

        <div className="main">{this.renderView()}</div>
      </div>
    );
  }
}
0;
ReactDOM.render(<App />, document.getElementById("app"));
