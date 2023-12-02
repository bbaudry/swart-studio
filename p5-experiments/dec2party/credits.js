var invites
var creditsCounter
var speed
var vera
var x, y, offx, inc
function preload() {
    invites = loadStrings('guests.txt');
    bowie = loadFont("../fonts/ChunkFive-Regular.otf");
}

function setupcredits() {
    textFont(bowie)
    vera = 168
    textSize(vera)
    creditsCounter = 0
    speed = 2
    y = h / 2 + random(h / 2)
    x = random(w)
    offx = 0.0
    inc = 0.1
    background(0, 0, 0)
}

function drawcredits() {
    if (creditsCounter < 3600) {
        dec2credits()
    }
    if (creditsCounter == 3600) {
        console.log("why almyre")
        almyre()
    }
    creditsCounter++;
}

function dec2credits() {
    if (creditsCounter % speed == 0) {
        fill(0, 0, 0)
        noStroke()
        rect(0, 0.28 * h, w, 0.22 * h)
        fill(1, 0, 100);
        var friend = invites[Math.floor(random(invites.length))]
        var tw = textWidth(friend)
        var left = w / 2 - tw / 2
        var bottom = h / 2 - 42
        text(friend, left, bottom);
        block(tw, left)
        if (speed < 21 && random() < 0.21) { speed++ }

    }
}

function block(len, left) {
    fill(0, 0, 0)
    noStroke();
    rect(0, 0.5 * h, w, 0.5 * h)
    var x1 = left
    var y1 = h / 2 + noise(offx) * h / 2
    offx += inc
    var blockh = random(h / 4)
    fill(0, 0, 100)
    rect(x1, y1, len, blockh)
}


function almyre() {
    background(0, 0, 0)
    textSize(111)
    var texth = textAscent("d")
    var x1 = 0
    var y1 = textAscent("d")
    var x2, y2
    for (var i = 0; i < invites.length; i++) {
        friend = invites[i]
        if (textWidth(friend) > w - x1) {
            x1 = 0
            y1 += texth
            text(friend, x1, y1);
            x1 += textWidth(friend)
        }
        else {
            text(friend, x1, y1);
            x1 += textWidth(friend)
        }
    }
    fill(1, 0, 100);
    textSize(vera)
    var txt = "al.my.re"
    var tw = textWidth(txt)
    var left = w / 2 - tw / 2
    var bottom = h - 42
    text(txt, left, bottom);
}

function merci() {
    background(0, 0, 0)
    var merci = "merci"
    var tw = textWidth(merci)
    var left = w / 2 - tw / 2
    var bottom = h / 2 - 42
    text(merci, left, bottom);
}
