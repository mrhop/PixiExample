/**
 * Created by Donghui Huo on 2017/6/23.
 */
import './index.scss'
var PIXI = global.PIXI

var app = new PIXI.Application(800, 600, {backgroundColor: 0x1099bb})
document.body.appendChild(app.view)
var container = new PIXI.Container()
app.stage.addChild(container)

// create a new Sprite from an image path
var texture = PIXI.Texture.fromImage('/static/img/cat.png')

// center the sprite's anchor point

for (var i = 0; i < 25; i++) {
  var bunny = new PIXI.Sprite(texture)
  bunny.anchor.set(0.5)
  bunny.x = (i % 5) * 80
  bunny.y = Math.floor(i / 5) * 80
  container.addChild(bunny)
}

// Center on the screen
container.x = (app.renderer.width - container.width) / 2
container.y = (app.renderer.height - container.height) / 2

// Listen for animate update
app.ticker.add(function (delta) {
  // just for fun, let's rotate mr rabbit a little
  // delta is 1 if running at 100% performance
  // creates frame-independent tranformation
})

