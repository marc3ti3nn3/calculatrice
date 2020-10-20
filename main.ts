input.onButtonPressed(Button.A, function () {
    if (_switch == 0) {
        nombre1 += 1
        basic.showNumber(nombre1)
    }
    if (_switch == 1) {
        nombre2 += 1
        basic.showNumber(nombre2)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    _switch += 1
    if (_switch == 2) {
        basic.showNumber(nombre1 + nombre2)
    }
})
let _switch = 0
let nombre2 = 0
let nombre1 = 0
nombre1 = 0
nombre2 = 0
_switch = 0
basic.forever(function () {
	
})
