import React, { Component } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Cat from './Components/Cat/Cat'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Cat></Cat>
      </div>
    )
  }
}
