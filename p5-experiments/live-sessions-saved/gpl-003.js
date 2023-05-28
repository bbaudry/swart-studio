// no p5sound
let libs = ["https://unpkg.com/tone", "includes/libs/Tone.js"]
let drone,radar
let bowie
let w,h
        var fSize;
        var hu1, hu2, hu3, hu4;
        var ptsg, ptsp, ptsl;
        var initialPixelDensity;
        var letters=[]
        var beatcount=0


///sounds/deepsea.wav
function preload() {
  	drone=new Tone.Player("/sounds/drone.wav").toDestination();
	radar=new Tone.Player("/sounds/radar2.mp3").toDestination();
	drone.volume.value=-20
	radar.volume.value=-15
	bowie=loadFont("./fonts/ChunkFive-Regular.otf");
	Tone.Master.volume.value = -1;
	            Tone.Transport.start()

    osc1 = new Tone.Oscillator();
    osc1.toDestination();
    osc1.frequency.value= 60
    osc1.start()
    osc1.volume.value = -1;
                const kickDrum = new Tone.MembraneSynth({
                volume: 6
            }).toDestination();
            drumspeed="16n"
            loop = new Tone.Loop(time => {
                if (beatcount<3){
                  kickDrum.triggerAttackRelease('C1', '4n', time);
                }
                beatcount=(beatcount+1)%8
            }, drumspeed).start();

}

function setup() {
	colorMode(HSB,360,100,100,250)
	w=windowWidth
	h=windowHeight
	createCanvas(w, h)
	setTypo()
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

function draw(){
	background(0,0,0,1)
	if(frameCount%42==0){
		//d()
		//g()
	//	r()
		//loop.start()
		loop.stop()
	}
	let p = pickpoint()
    drawlettersinblack(p)
	//osc1.frequency.value+=random(-1,1)
}

function d(){
	fill(0,0,100)
	ellipse(w/2,h/2,450,450)
}

function g(){
	fill(0,0,100)
noStroke()
	rect(w/2-333,h/2-42,666,84)
}

function r(){
	for (i=0;i<h;i+=84){
		rect(0,i,w,random(84))
	}
}

        function pickpoint(){
            let j = Math.floor(random()*letters.length);
            let pts=letters[j]
            let i = Math.floor(random()*pts.length);
            let p = pts[i];
            return p
        }

        function drawlettersinblack(p){
            let pix_diam = random()*15+1;
            noStroke();
            fill(0, 0, 100); 
            //ellipse(p.x, p.y, pix_diam, pix_diam);
            let rad = Math.exp(random()*4)
            let angle = radians(p.alpha + 90-(random()*180))
            let x1=p.x+rad*cos(angle)
            let y1=p.y+rad*sin(angle)
            ellipse(x1, y1, pix_diam, pix_diam);
        }