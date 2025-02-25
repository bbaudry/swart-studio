var w, h, cnv, font, black


const socket = new WebSocket("ws://localhost:8081", [
    "protocolOne",
    "protocolTwo",
]);
socket.onmessage = (event) => {
    console.log(event.data);
    const obj = JSON.parse(event.data);
    console.log(obj.Syscall.syscall_id);
    console.log(obj.Syscall.kind);
    console.log(obj.Syscall.return_value);
    console.log(obj.Syscall.returns_error);
    //bw()
    //textid(obj)
    bwErrors(obj) 
}

function preload() {
    font = loadFont("./FreeMono.otf");
}

function setup() {
    w = windowWidth
    h = windowHeight
    cnv = createCanvas(w, h);
    var x = (windowWidth - w) / 2;
    var y = (windowHeight - h) / 2;
    cnv.position(x, y);
    colorMode(HSB, 360, 100, 100, 250);
    black=true
}

function textid(obj) {
    background(0, 0, 0)
    var txt = obj.Syscall.syscall_id
    var fSize = 42
    textFont(font)
    textSize(fSize)
    x = w * 0.5 - textWidth(txt) * 0.5
    y = h * 0.5 + fSize * 0.5
    stroke(0, 0, 100)
    fill(0, 0, 100)
    text(txt, x, y)
}

function bw(){
    noStroke()
    if(black){
        fill(0,0,0)
        rect(0,0,w,h)
        black=false
    }
    else{
        fill(0,0,100)
        rect(0,0,w,h)
        black=true
    }
}

function bwErrors(obj){
    noStroke()
    if(black){
        fill(0,0,0)
        rect(0,0,w*0.5,h)
        black=false
    }
    else{
        fill(0,0,100)
        rect(0,0,w*0.5,h)
        black=true
    }
    if(obj.Syscall.returns_error){
        fill(0,100,100)
        rect(w*0.5,0,w*0.5,h)
    }
    else{
        fill(0,0,100)
        rect(w*0.5,0,w*0.5,h)
    }
}