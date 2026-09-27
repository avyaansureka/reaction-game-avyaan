input.onPinPressed(TouchPin.P2, function () {
    player_2 += 1
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        `)
})
input.onPinPressed(TouchPin.P1, function () {
    player_1 += 1
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
})
basic.showString("Hello!")
let player_1 = 0
let player_2 = 0
basic.forever(function () {
    if (player_1 == 10) {
        basic.showString("player 1 won")
    } else if (player_2 == 10) {
        basic.showString("player 2 won")
    } else {
    	
    }
})
