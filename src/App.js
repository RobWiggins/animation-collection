import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import AnimationNav from './Components/AnimationNav/AnimationNav'
import RotateImageRoute from './Routes/RotateImageRoute'
import RiseUpRoute from './Routes/RiseUpRoute'
import NotFound from './Components/NotFound/NotFound'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <AnimationNav></AnimationNav>
        < Switch >
          <Route path={'/rotate-image'} component={RotateImageRoute} />
          <Route path={'/rise-up'} component={RiseUpRoute} />
          {/* <Route component={NotFound}></Route> */}
        </Switch>
      </div>
    )
  }
}
