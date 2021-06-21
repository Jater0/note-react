import React, { Component } from 'react'
import {Button, DatePicker} from "antd"
export default class App extends Component {
  render() {
    return (
      <div>
        <Button type="primary">Primary Button</Button>
        <br />
        <Button type="ghost">Ghost Button</Button>
        <br />
        <DatePicker />
      </div>
    )
  }
}
