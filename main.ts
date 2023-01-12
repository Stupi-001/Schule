basic.forever(function () {
    basic.showString("" + (Math.round(grove.measureInCentimeters(DigitalPin.C16))))
    if (grove.measureInCentimeters(DigitalPin.C16) < 20) {
        music.playTone(165, music.beat(BeatFraction.Whole))
        basic.setLedColor(0x65471f)
    } else if (grove.measureInCentimeters(DigitalPin.C16) < 50) {
        music.playTone(247, music.beat(BeatFraction.Whole))
        basic.setLedColor(0x00ff00)
    } else if (grove.measureInCentimeters(DigitalPin.C16) < 100) {
        music.playTone(330, music.beat(BeatFraction.Whole))
        basic.setLedColor(0x00ffff)
    } else if (grove.measureInCentimeters(DigitalPin.C16) < 300) {
        music.playTone(494, music.beat(BeatFraction.Whole))
        basic.setLedColor(0x007fff)
    } else if (grove.measureInCentimeters(DigitalPin.C16) < 600) {
        music.playTone(988, music.beat(BeatFraction.Whole))
        basic.setLedColor(0x7f00ff)
    } else {
        music.playTone(131, music.beat(BeatFraction.Whole))
        basic.setLedColor(0xff0000)
    }
})
