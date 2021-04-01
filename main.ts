// Dose the same as button B
input.onButtonPressed(Button.A, function () {
    num1 += 1
    basic.showNumber(num1)
})
// When you press this it will take the two stored numbers and put them in reverse 
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(num2)
    basic.showNumber(num1)
})
// when you press button B it will store the number you choose and save it for later 
input.onButtonPressed(Button.B, function () {
    num2 += 1
    basic.showNumber(num2)
})
let num1 = 0
let num2 = 0
num2 = 0
num1 = 0
