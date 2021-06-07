import React, { Component } from 'react'
import axios from "axios"

export default class App extends Component {
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>click to get student info</button>
        <button onClick={this.getCarData}>click to get car info</button>
      </div>
    )
  }

  getStudentData = () => {
    axios.get("http://localhost:3000/api1/students").then(
      response => {
        console.log("Success", response.data);
      },
      error => {
        console.log("Failed", error);
      }
    )
  }

  getCarData = () => {
    axios.get("http://localhost:3000/api2/cars").then(
      response => {
        console.log("Success", response.data);
      },
      error => {
        console.log("Failed", error);
      }
    )
  }
}
