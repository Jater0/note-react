import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from "./components/Footer"
import "./App.css"

export default class App extends Component {
  
  state = {
    todos: [
      {id: "001", name: "Eat", done: true},
      {id: "002", name: "Code", done: true},
      {id: "003", name: "Sleep", done: true},
      {id: "004", name: "React", done: false}
    ]
  }

  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodoStatus={this.updateTodoStatus} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    )
  }

  addTodo = (todo) => {
    const {todos} = this.state
    const newTodos = [todo, ...todos]
    this.setState({
      todos: newTodos
    })
  }

  updateTodoStatus = (id, done) => {
    const {todos} = this.state
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {...todo, done}
      } else {
        return todo
      }
    })
    this.setState({
      todos: newTodos
    })
  }

  deleteTodo = (id) => {
    const {todos} = this.state
    const newTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    this.setState({
      todos: newTodos
    })
  }

  checkAllTodo = (done) => {
    const {todos} = this.state
    const newTodos = todos.map((todo) => {
      return {...todo, done}
    })
    this.setState({
      todos: newTodos
    })
  }

  clearAllDone = () => {
    const {todos} = this.state
    const newTodos = todos.filter((todo) => {
      return todo.done === false
    })
    this.setState({
      todos: newTodos
    })
  }
}