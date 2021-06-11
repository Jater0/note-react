import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom"
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'
import About from "./pages/About"
import Home from "./pages/Home"

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <MyNavLink to="/jater/about">About</MyNavLink>
              <MyNavLink to="/jater/home" name="Home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Switch>
                  <Route path="/jater/about" component={About} />
                  <Route path="/jater/home" component={Home} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
