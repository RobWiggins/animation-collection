import React, { Component } from 'react'
import * as PIXI from 'pixi.js'
import './RiseUp.css'

export default class RotateImage extends Component {
  constructor(props) {
    super(props)
    // Using a ref to work outside react state with third
    // party pixi library. pxrender will hold the Pixi app
    this.pxrender = React.createRef()
  }

  componentDidMount() {
    // On component display, mount the pixi animation
    const app = new PIXI.Application({
      width: 500,
      height: 300,
      transparent: true,
      resolution: window.devicePixelRatio || 1,
    })
    // using "current" to access the dom element
    this.pxrender.current.appendChild(app.view)

    const container = new PIXI.Container()
    app.stage.addChild(container)

    // Create a new texture
    const texture = PIXI.Texture.from('../../static/balloons.png')

    container.width = app.width

    // set the texture to a new Sprite

    // Move container to the center
    container.x = app.screen.width / 2
    container.y = app.screen.height / 2

    // Center balloons sprite in local container coordinates
    // create a 4x1 row of balloons
    for (let i = 1; i <= 5; i++) {
      const balloons = new PIXI.Sprite(texture)
      // anchor sets the origin point to center for the "text"
      balloons.anchor.set(0.5)
      balloons.width = 60 // make sure to maintain original picture size ratio
      balloons.height = 60
      // Line balloons on bottom
      balloons.x = (i / 5) * (container.width + container.x)
      balloons.y = 0
      container.addChild(balloons)
    }

    // Listen for animate update
    // Listen for animate update
    app.ticker.add(delta => {
      // rotate the container!
      // use delta to create frame-independent transform
      let currHeight = 0
      while (container.y <= app.height) {
        container.y += 1 * delta
      }
    })
  }

  render() {
    return (
      <div className="anim-container-rise">
        <h2>Float image from bottom to top</h2>
        <div ref={this.pxrender} id="pxrender"></div>
      </div>
    )
  }
}
