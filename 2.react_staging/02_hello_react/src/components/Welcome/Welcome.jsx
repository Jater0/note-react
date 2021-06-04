import { Component } from "react"
import welcome from "./Welcome.module.css"
export default class Welcome extends Component {
  render() {
    return <h2 className={welcome.title}>Welcome Jam</h2>
  }
}