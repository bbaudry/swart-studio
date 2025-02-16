
var w, h, cnv, leftmargin, rightmargin, topmargin, bottommargin, actualwidth, actualheight, palettes, palette
//color palettes generated with https://generativepixels.app/, using pictures from different seasons in Mtl 2024
palettes=[
    ['#EB6756', '#FF9F96', '#FD5925', '#8D371B', '#E0BFB4', '#D6790B', '#A67C47', '#FFB618', '#402D09', '#F9CF7F', '#FCE400', '#A49117', '#869764', '#B2E291', '#F3FFEB', '#315C31', '#399643', '#4CCCB7', '#00CAEF', '#2B6ABE', '#4D6C94', '#A8B8E6', '#342C46', '#5D3676', '#9A3C70', '#EB1241', '#E24E75', '#894E4F', '#848484', '#000000'],
    ['#8DBCF9', '#9BC9FF', '#79ACFD', '#759EE5', '#83ACF3', '#B9D6FF', '#A8C6FF', '#6782C9', '#9AB9F9', '#90A9F4', '#7D8ECE', '#9EB6FF', '#8B9BDC', '#B4C3FF', '#B6C5F5', '#CAD3FA', '#818BD7', '#8F98E5', '#ADB5F0', '#7B7EC0', '#B2B2F9', '#C0C0FF', '#989ACA', '#A6A7D8', '#C1C2F5', '#CFD0FF', '#7571AA', '#8F8AC5', '#AAA4E1', '#B8B2F0'],
    ['#FF5226', '#6A2517', '#C6523E', '#A6665F', '#AA6800', '#AA8C5C', '#F9BD3A', '#F6CF89', '#3A3F09', '#7FAC0C', '#64903A', '#AED284', '#131F0B', '#155200', '#A3C0A6', '#4B7359', '#1CE0B2', '#F4FFFF', '#0C4152', '#558AA6', '#A0CDE2', '#0069D0', '#395F97', '#83BCFF', '#000E39', '#664A5B', '#7D2748', '#D6709B', '#C6A2AC', '#2A0207'],
    ['#210A07', '#7E4134', '#7B554F', '#4F352D', '#C6B5B0', '#AB8A77', '#CCA37E', '#867466', '#735A35', '#9B7F59', '#595242', '#C4B89D', '#333029', '#D8D4CB', '#8B9388', '#616D6A', '#7197A2', '#39494E', '#AABCC2', '#6895BC', '#516E83', '#27313F', '#181C22', '#75859D', '#7C747F', '#3C2B38', '#4F4447', '#A79B9E', '#41191F', '#663A40'],
    ['#C4534F', '#C46A63', '#AB7673', '#7E4134', '#8A6152', '#C4A499', '#6D5B4E', '#938073', '#F5F0E7', '#CAC6BD', '#98A095', '#BFDAD4', '#97AFBD', '#DCF4FF', '#7AB0E1', '#B3D9FA', '#A4BADD', '#5A5F66', '#7F848C', '#9A8BA2', '#CCC4D0', '#806273', '#CB9FB5', '#AB8791', '#8D4A57', '#B4A8AB', '#CC8D96', '#903235', '#A55153', '#5F3E3F'],
    ['#DDFF32', '#789D23', '#B6E45C', '#3F6902', '#B2D27A', '#51643D', '#143800', '#5A9057', '#BFEFBB', '#7FB798', '#D5F9E6', '#708983', '#005146', '#002B2C', '#2D747A', '#8DD2D8', '#2480A1', '#004B75', '#60C2FF', '#9FDCFF', '#78A4B8', '#3F5562', '#082742', '#125CB9', '#3A6BAD', '#5CA0F7', '#1F3CA6', '#2C3771', '#AFB7DD', '#F1EEFF']
]
distribution=[
    {
        stepx:0.5,
        iter:1
    },
    {
        stepx:0.25,
        iter:2
    },
    {
        stepx:0.05,
        iter:10
    }
]

function setup() {
    w = 690
    h = 690
    createCanvas(w, h)
    leftmargin = Math.floor(w * 0.01)
    rightmargin = Math.floor(w * 0.99)
    actualwidth = rightmargin - leftmargin
    topmargin = Math.floor(w * 0.01)
    bottommargin = Math.floor(w * 0.99)
    actualheight = bottommargin - topmargin
    strokeWeight(1)
    palette=palettes[Math.floor($fx.rand()*palettes.length)]
}

var hues = [30, 90, 230]
function draw() {
    background(0)
    sky()
    noLoop()
}

function sky() {
    light()
    $fx.preview()
}

var xoff = $fx.rand()
var xinc = $fx.rand() * 0.3
var d = Math.floor($fx.rand()*distribution.length)
var stepx = distribution[d].stepx
var stepy = 0.05 + $fx.rand() * 0.3
var indexup,indexc,randcol


function light() {
    var x1, y1, x2, y2, x3, y3, x4, y4, cx, minx, maxx
    minx = leftmargin
    maxx = leftmargin
    for (var i = 0; i < distribution[d].iter; i++) {
        palette=palettes[Math.floor($fx.rand()*palettes.length)]
        randcol =  ($fx.rand()<0.5) ? true :false;
        indexup=true
        indexc=0

        cx = leftmargin + (i * (stepx * 2) + stepx) * actualwidth
        y1 = topmargin
        y2 = y1
        x1 = cx - noise(xoff) * stepx * actualwidth; xoff += xinc
        x2 = cx + noise(xoff) * stepx * actualwidth; xoff += xinc
        while (y1 < bottommargin) {
            x3 = cx + noise(xoff) * stepx * actualwidth; xoff += xinc
            y3 = y1 + noise(xoff) * stepy * actualheight; xoff += xinc
            if (y3 >= bottommargin) { y3 = bottommargin }
            x4 = cx - noise(xoff) * stepx * actualwidth; xoff += xinc
            y4 = y3
            colorbreakdown(x1, y1, x2, y2, x3, y3, x4, y4)
            y1 = y4
            y2 = y3
            x1 = x4
            x2 = x3
        }
    }
}

//pre condition: y1=y2 and y4=y3 and y4>y1
function colorbreakdown(x1, y1, x2, y2, x3, y3, x4, y4){
    var diffy=y4-y1
    var ox,oy,dx,dy,inct,c
    inct=1/diffy
    oy=y1+1
    dy=y2+1
    for(var t=0;t<1;t+=inct){
        ox = (1 - t) * x1 + (t * x4);
        dx = (1 - t) * x2 + (t * x3);
        if(randcol){
            c=color(palette[Math.floor($fx.rand()*palette.length)])
        }
        else{
            c=color(palette[indexc])
            updatecol()
        }
            stroke(c)
        line(ox,oy,dx,dy)
        oy++
        dy++
    }
}

function updatecol(){
    if(indexup && indexc+1<palette.length){
        indexc++
    }
    else{
        indexup=false
        if(indexc-1>=0){
            indexc--
        }
        else{
            indexup=true
            indexc++
        }
    }
}

