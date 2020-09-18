// Each day a plant is growing by upSpeed meters.
// Each night that plant's height decreases by downSpeed meters due to the lack of sun heat. 
// Initially, plant is 0 meters tall. 
// We plant the seed at the beginning of a day. 
// We want to know when the height of the plant will reach a certain level.
// Example
// For upSpeed = 100, downSpeed = 10 and desiredHeight = 910, 
// the output should be growingPlant(upSpeed, downSpeed, desiredHeight) = 10.

const growingPlant = (upSpeed, downSpeed, desiredHeight) => {
    let dayCount = 0
    let curHeight = 0

    while (curHeight < desiredHeight) {
        dayCount++
        curHeight += upSpeed

        if (curHeight < desiredHeight) {
            curHeight -= downSpeed
        }
    }
    return dayCount
}

console.log(growingPlant(100, 10, 910))