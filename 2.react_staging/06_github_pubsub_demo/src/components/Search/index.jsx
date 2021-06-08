import React, { Component } from 'react'
import PubSub from "pubsub-js"
import axios from 'axios'

export default class Search extends Component {
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Searh Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" ref={c => this.keywordElement = c}/>&nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }

  search = () => {
    const {keywordElement: {value: keyword}} = this
    PubSub.publish("jater", {
      isFirst: false,
      isLoading: true
    })
    axios.get(`/api1/search/users2?q=${keyword}`).then(
      response => {
        PubSub.publish("jater", {
          isLoading: false,
          users: response.data.items
        })
      },
      error => {
        PubSub.publish("jater", {
          isLoading: false,
          err: error.message
        })
      }
    )
  }
}
