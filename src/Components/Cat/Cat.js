import React, { Component } from 'react'
import * as PIXI from 'pixi.js'
import './Cat.css'

export default class Cat extends Component {

  constructor(props) {
    super(props)
    // ref updates happen before componentDidMount or componentDidUpdate
    // lifecycle methods. Using a ref to work outside react state with third 
    // party pixi library. pxrender will hold the Pixi app
    this.pxrender = React.createRef()
  }

  componentDidMount() {
    // On component display, mount the pixi animation
    const app = new PIXI.Application( {
      width: 300,
      height: 300,
      transparent: true,
      resolution: window.devicePixelRatio || 1,
    })
    // using "current" to access the dom element
    this.pxrender.current.appendChild(app.view)

    const container = new PIXI.Container()
    app.stage.addChild(container)
    
    // Create a new texture
    const texture = PIXI.Texture.from('../../static/halloween_cat.png')
    // set the texture to a new Sprite
    const cat = new PIXI.Sprite(texture)
    // anchor sets the origin point for the "text"
    cat.anchor.set(.5)
    cat.width = 75
    cat.height = 100
    // Make cat rotate around its center
    cat.x = cat.width / 2
    cat.y = cat.height / 2
    container.addChild(cat)

    // Move container to the center
    container.x = app.screen.width / 2;
    container.y = app.screen.height / 2;

    // Center cat sprite in local container coordinates
    container.pivot.x = container.width / 2;
    container.pivot.y = container.height / 2;

    // Listen for animate update
    // Listen for animate update
    app.ticker.add((delta) => {
    // rotate the container!
    // use delta to create frame-independent transform
      container.rotation -= 0.015 * delta;
    });
  }

  render() {

    return (
      <div className="anim-container">
        <div ref={this.pxrender} id="pxrender"></div>
      </div>
    )
  }
}
