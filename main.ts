input.onButtonPressed(Button.A, function () {
    while (true) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . # .
            # . # . #
            . . . . .
            `)
        control.waitMicros(500000)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            `)
        control.waitMicros(500000)
        basic.showLeds(`
            . . . . .
            # . # . #
            . # . # .
            . . . . .
            . . . . .
            `)
        control.waitMicros(500000)
        basic.showLeds(`
            . # . # .
            # . # . #
            . . . . .
            . . . . .
            . . . . .
            `)
        control.waitMicros(500000)
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            . . # . .
            `)
        control.waitMicros(500000)
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            . . . . .
            # . # . #
            `)
        control.waitMicros(500000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . # .
            # . # . #
            `)
    }
})
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
    basic.clearScreen()
})
basic.showString("" + (input.temperature()))
basic.showString("Deg C")
