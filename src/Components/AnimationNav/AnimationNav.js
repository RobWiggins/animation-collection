import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AnimationNav extends Component {

  render() {
    return (
      <div id="nav-bar">
        <ul>
          <Link to="/rotate-image">Rotate Image</Link>
        </ul>
      </div>
    )
  }

}