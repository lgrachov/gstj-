let mySprite3: Sprite = null
let mySprite2: Sprite = null
if (18 < 8) {
    mySprite2 = sprites.create(img`
        4 
        `, SpriteKind.Player)
}
if (true) {
    mySprite3 = sprites.create(img`
        2 
        `, SpriteKind.Player)
}
let mySprite = sprites.create(img`
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
animation.runImageAnimation(
mySprite,
[img`
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
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 c 7 7 
    7 7 7 2 7 2 7 2 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 2 7 2 7 2 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 2 7 2 7 2 7 7 7 c 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 c 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 c 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `,img`
    a a 5 c c c c c c c c c c c c c 
    a a a 5 c c c c c c c c c c c c 
    a a a a c c c c c c c c c c c c 
    a a a c c c c c c c c c c 3 c c 
    a a a c c c c c c c c c c 8 c c 
    a a a c c c c 5 c c c c c c c c 
    a a a c c c c a c c c c c c c c 
    a a a c c c c c c c c c c c c c 
    a a a c c c c c c c c c c c c c 
    a a a c c c c c c c c c c c c 8 
    a a a c c c c c c c c c c c c c 
    a a a c c c c c c c c c c c c c 
    a a a c c c c c c c c c c c c c 
    a a a c c c 5 c c c c c c c c c 
    a a a c c c a c c c c c c c c c 
    a a a c c c c c c c c c c c c c 
    `,img`
    a a 5 c c c c c c c c c c c 4 4 
    a a a 5 c c c c c c c c c c 4 4 
    a a a a c c c c c c c c c c 4 4 
    a a a c c c c c c c c c c 3 4 4 
    a a a c c c c c c c c c c 8 7 7 
    a a a c c c c 5 c c c c c c 7 7 
    a a a c c c c a c c c c c c 7 7 
    a a a c c c c c c c c c c c 7 7 
    a a a c c c c c c c c c c c 7 7 
    4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 
    4 4 4 2 7 2 7 2 7 7 7 c 7 7 7 7 
    4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 
    4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 
    4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 
    4 4 4 7 7 7 c 7 7 7 7 7 7 7 7 7 
    4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `],
500,
false
)
let mySprite4 = sprites.create(img`
    7 4 2 
    4 1 5 
    e 7 2 
    `, SpriteKind.Player)
