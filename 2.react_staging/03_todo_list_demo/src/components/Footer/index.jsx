import React, { Component } from 'react'
import "./index.css"
export default class Footer extends Component {
  render() {
    const {todos} = this.props
    const doneCount = todos.reduce((pre, todo) => {
      return pre + (todo.done?1:0)
    }, 0)
    const total = todos.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={doneCount === total && total !== 0?true:false} onChange={this.handleCheckAll}/>
        </label>
        <span>
          <span>已完成 {doneCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.handleClearAllDone}>Clear All Done</button>
      </div>
    )
  }

  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }

  handleClearAllDone = () => {
    this.props.clearAllDone()
  }
}