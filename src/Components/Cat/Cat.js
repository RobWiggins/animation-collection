import React, { Component } from 'react'
import * as PIXI from 'pixi.js'
import './Cat.css'

export default class Cat extends Component {

  
  componentDidMount() {
    PIXI.utils.sayHello()

    let renderer = PIXI.autoDetectRenderer(512,512, {
      transparent: true,
      resolution: 1
    })

    PIXI.loader()
  }

  render() {

    return (
      <div className="anim-container">
        <div ref="pxrender" id="pxrender"></div>
        <img className="halloween-cat" src="../../static/halloween_cat.png" alt="spinning scary halloween cat"></img>
      </div>
    )
  }
}
