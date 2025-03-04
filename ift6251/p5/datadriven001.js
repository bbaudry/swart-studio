var w, h, cnv, font, black


// this is a simplified, browser-based mockup of the syscalls installation: https://rethread.art/
// the piece is fed by a websocket that transmits all the syscalls triggered by an application
// before running this piece, one needs to launch two processes, in this order:
// - a server that handles the websocket: ```node index.js``` in the folder for https://github.com/rethread-studio/rethread/tree/master/code/syscalls/strace_collector_node_relay
// - the syscall collector for an application, e.g., gedit: ```cargo run --release -- --command gedit``` https://github.com/rethread-studio/rethread/tree/master/code/syscalls/strace_collector_json

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
    //textid(obj)
    //bw()
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

var callboxes=new Set()
var errorboxes=new Set()
function strips(obj){
    console.log("ONE")
    var boxheight=42
    if(black){
        var b = new Box(0,callboxes.size*42,42,color(0,0,100))
        callboxes.add(b)
        black=false
    }
    else{
        var b = new Box(0,callboxes.size*42,42,color(0,0,100))
        callboxes.add(b)
        black=true
    }
    callboxes.forEach((b) => {
        if(b.update()){
        b.display()}
        else{
            callboxes.delete(b)
        }
     });
     console.log(callboxes.size)
}