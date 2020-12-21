input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        # . # . #
        . . . . .
        `)
    control.waitMicros(10000000)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        # . . . #
        . . . . .
        `)
    control.waitMicros(10000000)
    basic.showLeds(`
        . . . . .
        # . # . #
        . # . # .
        . . . . .
        . . . . .
        `)
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
    basic.showIcon(IconNames.StickFigure)
})
basic.showString("" + (input.temperature()))
basic.showString("Deg C")
