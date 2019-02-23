import React, { Component } from 'react';
import TodoInput from './components/Todoinput';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div>
        hello from app Component
        <TodoInput/>
        <TodoList/>
      </div>
    );
  }
}

export default App;
