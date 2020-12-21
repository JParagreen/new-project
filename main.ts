input.onButtonPressed(Button.A, function () {
    if (true) {
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
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
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
