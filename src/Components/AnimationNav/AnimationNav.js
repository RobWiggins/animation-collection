import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './AnimationNav.css'


export default class AnimationNav extends Component {

  render() {
    return (
      <div id="nav-bar">
        <Link className="nav-btn" to="/rotate-image">Rotate Image</Link>
        <Link className="nav-btn" to="/rise-up">Rise Image</Link>
      </div>
    )
  }

}