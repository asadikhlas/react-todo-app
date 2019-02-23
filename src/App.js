import React, { Component } from "react";
import TodoInput from "./components/Todoinput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

class App extends Component {
  state = {
    items:[],
    id:0,
    item:'',
    editItem:false
  }
  handleChange = (event) => {
    this.setState({
      item:event.target.value
    })
  }
  render() {
    return (
      <div className="container">
        <div className="rows">
          <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">
          todo input
          </h3>
            <TodoInput item={this.state.item} handleChange={this.handleChange} />
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
