var w, h, cnv, font, fSize, allcode,index,x,y

function preload() {
    font = loadFont("./FreeMono.otf");
    sourcecode = loadStrings('codecredits.js');
}

function setup() {
    w = windowWidth
    h = windowHeight
    fSize = 42
    cnv = createCanvas(w, h);
    stroke(0,0,0)
    textFont(font)
    textSize(fSize)
    colorMode(HSB, 360, 100, 100, 250);
    strokeCap(SQUARE)
    x=0
    y=fSize
    index=0
}

function draw(){
    stroke(130,100,100);fill(130,100,100)
    linearcode()
    showcode()
    if(index < allcode.length-1){index++}
    else{noLoop()}
}

function linearcode() {
    allcode = ''
    for (var i = 0; i < sourcecode.length; i++) {
        var token = sourcecode[i]
        var notab = token.toString().replace(/\s/g, '').split('\r\n')[0]
        allcode += notab
    }
}

function showcode(){
    var c, tw 
        c = allcode.charAt(index)
        tw = textWidth(c)
        if (x + tw > w) {
            x = 0
            y += fSize + 1
        }
        text(c, x, y)
        x += tw
}

function showAllcode(posx,posy){
    var c, tw 
    for (let i = 0; i < allcode.length; i++) {
        c = allcode.charAt(i)
        tw = textWidth(c)
        if (posx + tw > w) {
            posx = 0
            posy += fSize + 1
        }
        text(c, posx, posy)
        posx += tw
    }
    posx = 0
    posy += 2*fSize + 1
    return([posx,posy])
}