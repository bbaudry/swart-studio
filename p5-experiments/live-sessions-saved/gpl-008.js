// no p5sound
let libs = ["https://unpkg.com/tone", "includes/libs/Tone.js"]
let drone
let bowie
let w,h
var radar1, radar2, radarLoop1, radarLoop2
var fSize;
var ptsg, ptsp, ptsl;
var initialPixelDensity;
var letters=[]
var beatcount=0
var radarcount=0
var kickDrum, kickLoop
var rick=84
var cx,cy
var vera, molnar, ryoji, ikeda, gen,art



///sounds/deepsea.wav
function preload() {
  	drone=new Tone.Player("/sounds/drone.wav").toDestination();
	drone.volume.value=-20
	bowie=loadFont("./fonts/ChunkFive-Regular.otf");
	sound()
}


function setup() {
	colorMode(HSB,360,100,100,250)
	w=windowWidth
	h=windowHeight
	createCanvas(w, h)
	cx=w/2
	cy=h/2
	setTypo()
	fill(0,0,100)
	noStroke()
}

function setTypo(){
	alpha=10
    fSize = 0.45*w
    initialPixelDensity = 0.42
    ptsg = bowie.textToPoints('G', 0.05*w, 0.85 * h, fSize, {
    	sampleFactor: initialPixelDensity,
        simplifyThreshold: 0
    })
    letters.push(ptsg)
    ptsp = bowie.textToPoints('P',0.4*w, 0.85 * h,fSize, {
    	sampleFactor: initialPixelDensity,
        simplifyThreshold: 0
    })
    letters.push(ptsp)
    ptsl = bowie.textToPoints('L',0.69*w, 0.85 * h, fSize, {
    	sampleFactor: initialPixelDensity,
        simplifyThreshold: 0
    })
    letters.push(ptsl)
}

function sound(){
	Tone.Master.volume.value = -3;
	Tone.Transport.start()

    osc1 = new Tone.Oscillator();
    osc1.toDestination();
    osc1.frequency.value= 60
    osc1.volume.value = -2;
    
    kickDrum = new Tone.MembraneSynth({
                volume: 5
    }).toDestination();
    drumspeed="16n"
    kickLoop = new Tone.Loop(time => {
    if (beatcount<3){
       kickDrum.triggerAttackRelease(20, '4n', time);
    }
       beatcount=(beatcount+1)%8
    }, drumspeed)
            
    var dist = new Tone.Distortion(0.21).toDestination();
    var ampEnvstart = new Tone.AmplitudeEnvelope({
        "attack": 0.03,
        "decay": 0.2,
        "sustain": 0,
        "release": 0
    }).toDestination();
    var ampEnvend = new Tone.AmplitudeEnvelope({
       "attack": 0.2,
       "decay": 5,
       "sustain": 1.0,
       "release": 0.8
    }).toDestination();
    radar1 = new Tone.Synth({
    	oscillator:
        { 
            type: "sine" //the type of waveform the synthesizer produces. Can be square, since, triangle, or sawtooth
        },
        envelope: { //sets the various sound properties for the synth
        	attack: 0.03,
            decay: 0.5,
            sustain: 0.1,
        	release: 3
    	}
    });
    radar2 = new Tone.Synth({
    	oscillator:
        { 
            type: "sine" //the type of waveform the synthesizer produces. Can be square, since, triangle, or sawtooth
        },
        envelope: { //sets the various sound properties for the synth
        	attack: 0.03,
            decay: 0.5,
            sustain: 0.1,
        	release: 3
    	}
    });
	radar1.volume=-5
	radar2.volume=-5
    var rev = new Tone.Reverb({decay:15,wet:0.99})
    rev.toDestination()
    radar1.connect(rev)
    radar2.connect(rev)
    ampEnvend.connect(rev)
    radar1.toDestination()
    freq1 =980//map(mouseX, 0, w, 110, 880)
    freq2 =1480//map(mouseX, 0, w, 110, 880)
    radarLoop1 = new Tone.Loop(time => {
    	ampEnvstart.triggerAttackRelease(1)
        ampEnvend.triggerAttackRelease(3)
        radar1.triggerAttackRelease(freq1, "1", time);
    }, "4")
    radarLoop2 = new Tone.Loop(time => {
	    if (radarcount==3){
    	   kickDrum.triggerAttackRelease(10, '1', time);
    	ampEnvstart.triggerAttackRelease(1)
        ampEnvend.triggerAttackRelease(3)
        radar2.triggerAttackRelease(freq2, "1", time);
	    }
	    radarcount=(radarcount+1)%8
    }, "4n")

    osc1.start();
    //kickLoop.start();
	radarLoop1.start();
	radarLoop2.start();
}

function draw(){
//	background(0,0,0,2)
	if(frameCount%84==0){
//	rect(cx-424,cy-42,848,84)
		
	}
	for(i=0;i<h;i+=random(84)){
//		rect(cx-rick/2,i,rick,random(4))
	}
//	rick++
	pick()
	vera=3+random(9)
	molnar=exp(random(5))
	gen=ryoji.x+molnar*cos(ryoji.alpha)
	art=ryoji.y+molnar*sin(ryoji.alpha)
	ellipse(gen,art,vera,vera)
	
}


function pick(){
	ikeda = letters[floor(random()*3)]
	ryoji = ikeda[floor(random()*ikeda.length)]
}
