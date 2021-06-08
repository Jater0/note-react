import React, { Component } from 'react'
import Search from './components/Search'
import List from "./components/List"

export default class App extends Component {

  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: ""
  }

  updateAppState = (state) => {
    this.setState(state)
  }

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List {...this.state}/>
      </div>
    )
  }
}
