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

function more(){
	let louis=frameCount%202
	if(louis==0){radar.start()}
	if(louis>=0&&louis<42){
	stroke(230,100,100)}
	else{stroke(0,0,0)}
	for(belzile=0;belzile<lewitt.length;belzile++){
		ellipse(lewitt[belzile][0],lewitt[belzile][1],ikeda,ikeda)
		ellipse(lewitt[belzile][0],lewitt[belzile][1],3,3)
	}
}

function no(){
	drone.start()
	let john = Math.floor(Math.random()*lewitt.length)
	let baldessari = (Math.floor(Math.random()*5)+1)*0.2*(ikeda/2)
	let beauty = Math.random()*PI*2
	let cx=lewitt[john][0]+baldessari*cos(beauty)
	
	let cy=lewitt[john][1]+baldessari*sin(beauty)
	stroke(0,0,100)
	ellipse(cx,cy,3,3)
	
}

function boring(){
		let vera = Math.floor(Math.random()*lewitt.length)
	let molnar = Math.floor(Math.random()*lewitt.length)
line(lewitt[vera][0],lewitt[vera][1],lewitt[molnar][0],lewitt[molnar][1])
}

function code(){
	textFont(bowie)
	textSize(42)
	stroke(0,100,100)
	
	text("sensibiliser au logiciel par l'art",0.4*w,0.4*h)
}



