scene.onOverlapTile(SpriteKind.Player, assets.tile`tile`, function (sprite, location) {
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.setTilemap(tilemap`level2`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -200
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
    	
    }
})
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite4: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . 2 2 8 8 . . . . . . . . 
    . . . . 2 2 2 2 . . . . . . . . 
    . . . . 7 7 7 7 . . . . . . . . 
    4 4 4 4 4 4 4 4 4 4 4 4 . . . . 
    4 4 4 4 4 4 4 4 4 4 4 4 . . . . 
    4 4 4 4 4 4 4 4 4 4 4 4 . . . . 
    . . . 4 4 4 4 4 4 . . . . . . . 
    . . . 4 4 4 4 4 4 . . . . . . . 
    . . . 4 4 4 4 4 4 . . . . . . . 
    . . . 4 4 4 4 4 4 . . . . . . . 
    . . . 4 4 4 4 4 4 . . . . . . . 
    . . . 4 4 4 4 4 4 . . . . . . . 
    . . . 4 4 4 4 4 4 . . . . . . . 
    . . . 8 8 8 8 8 8 . . . . . . . 
    . . . 8 4 4 4 4 8 . . . . . . . 
    . . . 4 4 4 4 4 4 . . . . . . . 
    `, SpriteKind.Player)
mySprite.setStayInScreen(true)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 400
tiles.setTilemap(tilemap`level1`)
forever(function () {
    mySprite2 = sprites.create(img`
        . . . . . 6 6 6 6 . . . . . . . 
        . . . . . 6 1 1 6 . . . . . . . 
        . . . . . 6 6 6 6 . . . . . . . 
        . . . . 6 6 6 6 6 6 . . . . . . 
        . . . . 6 6 6 6 6 6 . . . . . . 
        . . . . 6 6 6 6 6 6 . . . . . . 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        . . . . 6 6 6 6 6 6 . . . . . . 
        . . . . 6 6 6 6 6 6 . . . . . . 
        . . . . 6 6 6 6 6 6 . . . . . . 
        . . . . 6 6 . . 6 6 . . . . . . 
        . . . . 6 6 . . 6 6 . . . . . . 
        . . . . 6 6 . . 6 6 . . . . . . 
        . . . . 6 6 . . 6 6 . . . . . . 
        . . . . 6 6 . . 6 6 . . . . . . 
        . . . . 7 7 . . 7 7 . . . . . . 
        `, SpriteKind.Player)
    pause(5000)
    mySprite3 = sprites.create(img`
        . . . . . . 2 2 2 . 2 . . . . . 
        . . . . . 2 . . . 2 . . . . . . 
        . 2 2 2 2 2 2 2 2 . . . . . . . 
        . . 2 . . 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 . . . . . . 2 2 . 
        . . . 2 . . 2 2 . 2 2 2 2 2 2 . 
        . . . . 2 . . . 2 2 . . . 2 2 . 
        . . . . 2 . . 2 2 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 2 2 . . . 2 . 2 
        . . . . . . 2 2 2 . . . . 2 2 . 
        . . . . 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . . . 2 . . . . . . 2 . . 
        . . . . . 2 . . . . . . . 2 . . 
        . . . . . 2 . . . . . . 2 . . . 
        . . . . . 2 2 . . . 2 2 . . . . 
        . . . . . . . 2 2 2 . . . . . . 
        `, SpriteKind.Player)
})
