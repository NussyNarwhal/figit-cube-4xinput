input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Surprised)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.soaring), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Confused)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.mysterious), SoundExpressionPlayMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    music.playTone(988, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Breve))
    music.playTone(880, music.beat(BeatFraction.Eighth))
})
basic.showIcon(IconNames.Yes)
basic.clearScreen()
