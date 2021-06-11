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
                    <Link to={`/home/message/${message.id}`}>{message.title}</Link>
                    &nbsp;<button onClick={() => this.pushShow(message.id)}>Push</button>
                    &nbsp;<button onClick={() => this.replaceShow(message.id)}>Replace</button>
                  </li>
               )
             })
          }
        </ul>
        <hr />
        {/* 声明接收state参数 */}
        <Route path="/home/message/:id" component={Detail}/>
      </div>
    )
  }

  replaceShow = (id) => {
    this.props.history.replace(`/home/message/${id}`)
  }

  pushShow = (id) => {
    this.props.history.push(`/home/message/${id}`)
  }
}
