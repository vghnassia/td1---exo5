let x = 0
led.plot(x, 0)
basic.pause(500)
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        led.unplot(x, 0)
        x += 1
        led.plot(x, 0)
        basic.pause(500)
    }
    for (let index = 0; index <= 4; index++) {
        led.unplot(x, 0)
        x += -1
        led.plot(x, 0)
        basic.pause(500)
    }
})
