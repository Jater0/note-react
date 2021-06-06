import React, { Component } from 'react'
import PropTypes from "prop-types"
import {nanoid} from "nanoid"
import "./index.css"

export default class Header extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="todo-header">
        <input type="text" placeholder="Please Input Your TODO, press 'enter' to confirm" onKeyUp={this.handleKeyUp}/>
      </div>
    )
  }

  handleKeyUp = (event) => {
    const {keyCode, target} = event
    if (keyCode !== 13) return
    if (target.value.trim() === "") {
      alert("输入不能为空")
      return;
    }
    const todo = {
      name: target.value,
      done: false,
      id: nanoid()
    }
    this.props.addTodo(todo)
    target.value = ""
  }
}