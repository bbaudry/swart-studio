/* This is a bakcup of the code that aims to be live coded as intro for talk at udem 2022/10/31 */

// no p5sound
let libs = ["https://unpkg.com/tone", "includes/libs/Tone.js"]
let drone,radar
let bowie
let w,h
let lewitt=[]
let ryoji
let ikeda

function preload() {
  	drone=new Tone.Player("/sounds/drone.wav").toDestination();
	radar=new Tone.Player("/sounds/radar.mp3").toDestination();
	drone.volume.value=-15
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
}

function draw() {
	no()
more()
	boring()
code()
}

function code(){
	textFont(bowie)
	textSize(42)
	stroke(0,100,100)
	text("sensibiliser au logiciel par l'art",w/2,h/2)
}

function boring(){
		let vera=Math.floor(Math.random()*lewitt.length)
	let molnar=Math.floor(Math.random()*lewitt.length)
	if(Math.random()*2424<142){
		line(lewitt[vera][0],lewitt[vera][1],lewitt[molnar][0],lewitt[molnar][1])
	}
}

function no(){
	drone.start()
	let john=Math.floor(Math.random()*lewitt.length)
	let baldessari=(Math.floor(Math.random()*5)+1)*0.2*(ikeda/2)
	let beauty=Math.random()*PI*2
	let cx=lewitt[john][0]+baldessari*cos(beauty)
	let cy=lewitt[john][1]+baldessari*sin(beauty)
	stroke(0,0,100)
	ellipse(cx,cy,3,3)
}

function more(){
	let louis = frameCount%242
	if(louis==0){radar.start()}
	noFill()
	if (louis>=0&&louis<42){stroke(230,100,100)}
	else{stroke(0,0,0)}
	for(belzile=0;sbelzileol<lewitt.length;belzile++){
		ellipse(lewitt[belzile][0],lewitt[belzile][1],ikeda,ikeda)
		ellipse(lewitt[belzile][0],lewitt[belzile][1],3,3)
	}
}