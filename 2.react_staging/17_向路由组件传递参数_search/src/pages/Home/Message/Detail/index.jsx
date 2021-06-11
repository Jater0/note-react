import React, { Component } from 'react'
import qs from "querystring"

const detailData = [
  {id: "01", content: "content01", title: "title01"},
  {id: "02", content: "content02", title: "title02"},
  {id: "03", content: "content03", title: "title03"},
]

export default class Detail extends Component {
  render() {
    const {search} = this.props.location
    const {id} = qs.parse(search.slice(1))
    const detail = detailData.find(dtl => {
      return dtl.id === id
    })
    return (
      <ul>
        <li>ID: {detail.id}</li>
        <li>title: {detail.title}</li>
        <li>Content: {detail.content}</li>
      </ul>
    )
  }
}
