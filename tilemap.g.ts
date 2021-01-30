// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100006010101010101010101010101010107040202020202020202020202020202080402020202020202020202020202020804020202020202020202020202020208040202020202020202020202020202080402020202020202020202020202020804020202020202020202020202020208040202020202020202020202020202080402020202020202020202020202020804020202020202020202020202020208040202020202020202020202020202080402020202020202020202020202020804020202020202020202020202020208040202020202020202020202020202080402020202020202020202020202020805030303030303030303030303030309`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.castle.tilePath8,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath9], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000001000000000000000000000000000001000000000000000000000000000001000000000000000000000000000001000000000000000000000000000001000000000000000000000000000001000000000000000000000000000001000000000000000000000000000001000000000000000000000000000001000000000000000000000100000001000000000000000000000000010001000000000000000000000000000001000000000000000000000000000001000100000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
