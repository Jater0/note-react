import React, { Component } from 'react'
import "./index.css"

export default class Item extends Component {

  state = {
    mouse: false
  }

  render() {
    const {id, name, done} = this.props
    const {mouse} = this.state
    return (
      <li onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)} style={{backgroundColor: mouse?"#DDD": "white"}}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{display: mouse?"block":"none"}} onClick={() => this.handleDelete(id)}>Delete</button>
      </li>
    )
  }

  handleMouse = (flag) => {
    return () => {
      this.setState({
        mouse: flag
      })
    }
  }

  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodoStatus(id, event.target.checked)
    }
  }

  handleDelete = (id) => {
    if (window.confirm("确认删除吗?")) {
      this.props.deleteTodo(id)
    }
  }
}