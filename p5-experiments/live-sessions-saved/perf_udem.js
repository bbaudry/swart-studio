// no p5sound
let libs = ["https://unpkg.com/tone", "includes/libs/Tone.js"]
let drone,radar
let bowie
let w,h
let lewitt=[]
let ryoji
let ikeda
///sounds/deepsea.wav
function preload() {
  	drone=new Tone.Player("/sounds/drone.wav").toDestination();
	radar=new Tone.Player("/sounds/radar2.mp3").toDestination();
	drone.volume.value=-20
	radar.volume.value=-15
	bowie=loadFont("./fonts/FreeMono.ttf");
}

function setup() {
	createCanvas(windowWidth, windowHeight)
	colorMode(HSB,360,100,100)
	w=windowWidth
	h=windowHeight
	ryoji=0.2
	ikeda=ryoji*h
	for(i=0.1;i<1;i+=ryoji){
		for(j=0.1;j<1;j+=ryoji){
			lewitt.push([i*w,j*h])
		}
	}
	noFill()
}

function draw(){
	no()
	more()
	boring()
	code()
}

function more(){

}

function no(){

}

function boring(){

}

function code(){

}



