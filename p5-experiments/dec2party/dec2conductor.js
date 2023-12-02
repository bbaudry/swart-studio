var w, h
var cnv
var party

function setup() {
    w = windowWidth
    h = windowHeight
    cnv = createCanvas(w, h);
    colorMode(HSB, 360, 100, 100, 250);
}

/*TODO: 
translate Sand022.java, SL013,SL014,SL015
translate Ribbons003.java (possible conclusion)

*/

/*
dancingwithbezier 1600 frames
dakflowers2 7000 frames
*/

var counter = 1
var durationDancingWithBezier = 1000
var durationDarkFlowers2 = 7000
var durationNeonFLower = 2400
var durationVeraOne = 4200
var durationRadar = 4200
var durationIkedaOne = 3000
var durationCredits = 4000
var startDancingWithBezier = 1
var endDancingWithBezier = startDancingWithBezier + durationDancingWithBezier
var startDarkFlowers2 = endDancingWithBezier
var endDarkFlowers2 = startDarkFlowers2 + durationDarkFlowers2
var startNeonFlower = endDarkFlowers2
var endNeonFlower = startNeonFlower + durationNeonFLower
var startVeraOne = endNeonFlower
var endVeraOne = startVeraOne + durationVeraOne
var startRadar = endVeraOne
var endRadar = startRadar + durationRadar
var startIkedaOne = endRadar
var endIkedaOne = startIkedaOne + durationIkedaOne
var startCredits = endIkedaOne
var endCredits = startCredits + durationCredits
var startEnd = endCredits
var endEnd = startEnd + 84

function draw() {
    if (counter == startDancingWithBezier) { setupdancingwithbezier(); console.log(counter) }
    if (counter > startDancingWithBezier && counter < endDancingWithBezier) { drawdancingwithbezier() }

    if (counter == startDarkFlowers2) { setupdarkflowers2() }
    if (counter > startDarkFlowers2 && counter < endDarkFlowers2) { drawdarkflowers2() }

    if (counter == startNeonFlower) { setupneonflower() }
    if (counter > startNeonFlower && counter < endNeonFlower) { drawneonflower() }

    if (counter == startVeraOne) { setupveraone() }
    if (counter > startVeraOne && counter < endVeraOne) { drawveraone() }

    if (counter == startRadar) { setupradar() }
    if (counter > startRadar && counter < endRadar) { drawradar() }

    if (counter == startIkedaOne) { setupikedaone() }
    if (counter > startIkedaOne && counter < endIkedaOne) { drawikedaone() }

    if (counter == startCredits) { setupcredits() }
    if (counter > startCredits && counter < endCredits) { drawcredits() }

    if (counter >= startEnd && counter < endEnd) { merci() }
    if (counter == endEnd) {counter = 0;}

    counter++
}


function windowResized() {
    w = document.documentElement.clientWidth;//width of window that is available for drawing
    h = document.documentElement.clientHeight;//width of window that is available for drawing
    resizeCanvas(w, h);
}
