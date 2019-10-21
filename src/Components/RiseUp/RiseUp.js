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
    // width and height controls the size of the canvas
    const app = new PIXI.Application({
      width: 300,
      height: 300,
      // transparent: true,
      backgroundColor: 1,
      resolution: window.devicePixelRatio || 1,
      border: 1,
    })
    // using "current" to access the dom element
    this.pxrender.current.appendChild(app.view)

    const container = new PIXI.Container()
    app.stage.addChild(container)
    const texture = PIXI.Texture.from('../../static/balloons.png')
    container.width = app.width

    // Move container to the center
    container.x = app.screen.width / 2
    container.y = app.screen.height / 2
    
    let numImages = 4
    const balloonSet = []
    for (let i = 1; i <= numImages; i++) {
      const balloons = new PIXI.Sprite(texture)
      balloons.anchor.set(.5)
      balloons.width = 60 // make sure to maintain original picture size ratio
      balloons.height = 60
      // Line balloons evenly on bottom
      balloons.x = (-app.screen.width / 2) + (app.screen.width * (i / (numImages + 1)))
      balloons.y = container.y
      container.addChild(balloons)
      balloonSet.push(balloons)
    }

    // accelerate used to make images increase speed upward
    let accelerationDegree = 1.1
    app.ticker.add(delta => {
      // use delta to create frame-independent image translation
      balloonSet.forEach(balloon => {
        balloon.y += -delta * accelerationDegree
        accelerationDegree += 0.015
      })
      // this is a bit hacky. It saves resources by killing the
      // vertical animation translation when the image height exceeds a 
      // certain multiple of the container height. Problem being, You may 
      // need to modify multiples for varying widths and height.
      if (-balloonSet[balloonSet.length - 1].y > container.height * 4) {
        app.ticker.stop()
      }
    })
  }

  render() {
    return (
      <div className="anim-container-rise">
        <h2>Translate image from bottom to top (accelerates)</h2>
        <div ref={this.pxrender} id="pxrender"></div>
      </div>
    )
  }
}
