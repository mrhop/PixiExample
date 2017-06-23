/**
 * Created by Donghui Huo on 2017/6/23.
 */
import './index.scss'
var PIXI = global.PIXI

var stage = new PIXI.Container()
var renderer = PIXI.autoDetectRenderer(256, 256)
document.body.appendChild(renderer.view)

// Use Pixi's built-in `loader` object to load an image
PIXI.loader
  .add('/static/img/cat.png')
  .load(setup)

// This `setup` function will run when the image has loaded
function setup() {
  // Create the `cat` sprite from the texture
  var cat = new PIXI.Sprite(
    PIXI.loader.resources['/static/img/cat.png'].texture
  )
  cat.x = 96
  cat.y = 96
  cat.rotation = 0.5

  // Add the cat to the stage
  stage.addChild(cat)

  // Render the stage
  renderer.render(stage)
}
