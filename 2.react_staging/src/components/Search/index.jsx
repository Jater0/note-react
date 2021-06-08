import React, { Component } from 'react'
import PubSub from "pubsub-js"

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

  search = async () => {
    const {keywordElement: {value: keyword}} = this
    PubSub.publish("jater", {
      isFirst: false,
      isLoading: true
    })
    // fetch(`/api1/search/users2?q=${keyword}`).then(
    //   response => {
    //     console.log("Success", response);
    //     return response.json()
    //   }
    // ).then(
    //   response => {
    //     console.log("Success", response);
    //   }
    // ).catch(
    //   error => {
    //     console.log("Failed", error);
    //   }
    // )

    try {
      const response = await fetch(`/api1/search/users2?q=${keyword}`)
      const data = await response.json()
      PubSub.publish("jater", {
        isLoading: false,
        users: data.items
      })
    } catch (error) {
      PubSub.publish("jater", {
        isLoading: false,
        err: error.message
      })
    }
  }
}
