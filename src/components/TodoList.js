import React, { Component } from 'react'
import TodoItem from './Todoitem';

export default class TodoList extends Component {
  render() {
      const {items,clearList} = this.props
    return (
      <ul className="list-group my-5">
      <h3 className="text-capitalize text-center">todo list</h3>
      {items.map(item => {
          return <TodoItem key={item.id} title={item.title}/>
      })}
      <button type="button" onClick={clearList} className="btn btn-danger btn-block text-capitalize mt-5">clear list</button>

      </ul>
    )
  }
}
