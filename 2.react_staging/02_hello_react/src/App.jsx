// 创建"外壳"组件App
import { Component } from "react"
import Hello from "./components/Hello/Hello"
import Welcome from "./components/Welcome/Welcome"

export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome />
      </div>
    )
  }
}