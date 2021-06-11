import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {

  state = {
    messages: [
      {id: "01", title: "Message1"},
      {id: "02", title: "Message2"},
      {id: "03", title: "Message3"},
    ]
  }

  render() {
    const {messages} = this.state
    return (
      <div>
        <ul>
          {
             messages.map(message => {
               return (
                  <li key={message.id}>
                    {/* 向路由组件传递params参数 */}
                    <Link to={`/home/message/${message.id}`}>{message.title}</Link>
                  </li>
               )
             })
          }
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        <Route path="/home/message/:id" component={Detail}/>
      </div>
    )
  }
}
