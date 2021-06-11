import React, { Component } from 'react'

export default class Message extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/message1">Message1</a>
          </li>
          <li>
            <a href="/message2">Message2</a>
          </li>
          <li>
            <a href="/message3">Message3</a>
          </li>
        </ul>
      </div>
    )
  }
}
