/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Yusuf Ahmed
 * Created on: Mar 2026
 * This program is a cookie clicker.
*/

let cookieCount: number = 0

// setup
basic.showIcon(IconNames.Happy)

// cookie count goes up by 1 each time A is clicked
input.onButtonPressed(Button.A, function () {   
    basic.clearScreen()
    basic.pause(100)
    cookieCount = cookieCount +1
    basic.pause(100)
    basic.showNumber(cookieCount)
})

// bring cookie count back to 0 when B is clicked
input.onButtonPressed(Button.B, function () {
    basic.pause(100)
    cookieCount = 0
    basic.pause(100)
    basic.showNumber(cookieCount)
})
