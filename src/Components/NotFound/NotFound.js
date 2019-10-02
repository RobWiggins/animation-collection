import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NotFound extends Component {
  render() {
    return (
      <div class="not-found">
        <Link to="/">Find your way back</Link>
        <p class="lost-msg">You're clearly lost. I don't have enough animations for all possible urls.</p>
      </div>
    )
  }
}
