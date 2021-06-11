import React, { Component } from 'react'
import { withRouter } from "react-router-dom"

class Header extends Component {
  render() {
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={this.back}>Back</button>
        <button onClick={this.forward}>Forward</button>
        <button onClick={this.go}>Go</button>
      </div>
    )
  }

  back = () => {
    this.props.history.goBack()
  }

  forward = () => {
    this.props.history.goForward()
  }

  go = () => {
    this.props.history.go(-2)
  }
}

// withRouter可以加工一般组件, 让一般组件具备路由组件所持有的API
// withRouter的返回值是一个新组件
export default withRouter(Header)