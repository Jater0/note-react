import React, { Component } from 'react'

export default class News extends Component {
  
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push("/home/message")
    }, 3000)
  }

  render() {
    return (
      <div>
        <ul>
          <li>News1</li>
          <li>News2</li>
          <li>News3</li>
        </ul>
      </div>
    )
  }
}
