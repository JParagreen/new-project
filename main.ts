input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . . . #
        # . . # .
        # . # . .
        # # . . .
        # # # # .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        # . . . .
        . # . . #
        . . # . #
        . . . # #
        . # # # #
        `)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    while (true) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        control.waitMicros(100000)
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            . . . . .
            `)
        control.waitMicros(100000)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        control.waitMicros(100000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            `)
        control.waitMicros(100000)
    }
})
basic.showString("" + (input.temperature()))
basic.showString("Deg C")
