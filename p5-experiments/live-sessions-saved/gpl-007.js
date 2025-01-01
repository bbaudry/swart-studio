// no p5sound
let libs = ["https://unpkg.com/tone", "includes/libs/Tone.js"]
let drone, radar
let font
let w, h
var fSize;
var hu1, hu2, hu3, hu4;
var ptsg, ptsp, ptsl;
var initialPixelDensity;
var letters = []
var beatcount = 0
var kickDrum


///sounds/deepsea.wav
function preload() {
    drone = new Tone.Player("/sounds/drone.wav").toDestination();
    radar = new Tone.Player("/sounds/radar2.mp3").toDestination();
    drone.volume.value = -20
    radar.volume.value = -15
    font = loadFont("./fonts/ChunkFive-Regular.otf");
    Tone.Master.volume.value = -1;
    Tone.Transport.start()

    osc1 = new Tone.Oscillator();
    osc1.toDestination();
    osc1.frequency.value = 60
    //osc1.start()
    osc1.volume.value = -1;
    kickDrum = new Tone.MembraneSynth({
        volume: 6
    }).toDestination();
    drumspeed = "16n"
    loop = new Tone.Loop(time => {
        if (beatcount < 3) {
            kickDrum.triggerAttackRelease('C1', '4n', time);
        }
        beatcount = (beatcount + 1) % 8
    }, drumspeed)//.start();

}

function setup() {
    colorMode(HSB, 360, 100, 100, 250)
    w = windowWidth
    h = windowHeight
    createCanvas(w, h)
    setTypo()
    fill(0, 0, 100)
    noStroke()
}

function setTypo() {
    alpha = 10
    fSize = 0.45 * w
    initialPixelDensity = 0.42
    ptsg = font.textToPoints('G', 0.05 * w, 0.85 * h, fSize, {
        sampleFactor: initialPixelDensity,
        simplifyThreshold: 0
    })
    letters.push(ptsg)
    ptsp = font.textToPoints('P', 0.4 * w, 0.85 * h, fSize, {
        sampleFactor: initialPixelDensity,
        simplifyThreshold: 0
    })
    letters.push(ptsp)
    ptsl = font.textToPoints('L', 0.69 * w, 0.85 * h, fSize, {
        sampleFactor: initialPixelDensity,
        simplifyThreshold: 0
    })
    letters.push(ptsl)
}



function pickpoint() {
    let pts = letters[floor(random() * 3)]
    return pts[floor(random() * pts.length)];
}


var pulse
var madonna = 4
function draw() {
    //	background(0,0,0,1)
    //g()
    //	d();madonna+=0.3
    r()
}


function g() {
    if (frameCount % 82 == 0) {
        rect(w / 2 - 424, h / 2 - 42, 848, 84)
    }

}
function d() {
    if (frameCount % 21 == 0) {
        for (i = 0; i < h; i += 42 + random() * 42) {
            rect(w / 2 - madonna / 2, i, madonna, random() * 63)
        }
    }

}


function r() {
    let ikeda = letters[floor(random() * 3)]
    let ryoji = ikeda[floor(random() * ikeda.length)]
    let vera = random() * 15
    let molnar = exp(random() * 5)
    let x1 = ryoji.x + molnar * cos(ryoji.alpha)

    let y1 = ryoji.y + molnar * sin(ryoji.alpha)
    ellipse(x1, y1, vera, vera)
}