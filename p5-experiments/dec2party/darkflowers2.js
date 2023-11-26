var petals
var nbPetals
var count
function setupdarkflowers() {
    background(0, 0, 0)
    count=0
    nbPetals = 42//Math.floor(random(16, 84))
    setPetals();
}

function setPetals() {
    petals = [];
    for (let i = 1; i < nbPetals; i++) {
        var petal = {
            root1: {
                x: 0.42 * w,
                y: 0.95 * h,
                angle: 180,
                leftrad: 0.2 * w,
                rightrad: 0.2 * w,
                speed: i * 0.01
            },
            root2: {
                x: 0.58 * w,
                y: 0.95 * h,
                angle: 180,
                leftrad: 0.2 * w,
                rightrad: 0.2 * w,
                speed: i * 0.01
            },
            canopy: {
                x: 0.5* w,
                y: 0.01 * h,
                angle: 180,
                leftrad: 0.0 * w,
                rightrad: 0.0 * w,
                speed: i * 0.01
            },
            elbow1: {
                x: 0.5 * w,
                y: 0.75 * h,//+i*2,
                angle: 90,
                leftrad: 0 * w,
                rightrad: 0* w,
                speed: i * 0.01
            },
            elbow2: {
                x: 0.5 * w,
                y: 0.75 * h,// +i*2,
                angle: 270,
                leftrad: 0 * w,
                rightrad: 0 * w,
                speed: i * 0.01
            },
            hu:0,
            sa:0,
            br:100
        }
        petals.push(petal)
    }
}
function drawdarkflowers() {
    noFill(); stroke(0, 0, 100); strokeWeight(1); rect(0, 0, w, h)
    background(0, 0, 0)
    count++
    flower()
    if(count<2000){open()}
    if(count>=2000&&count<4000){close()}
    if(count>=4000&&count<6000){wide()}
    if(count>=6000&&count<7000){wider()}
    console.log("a flower with "+petals.length)
    /*if(count<1000){rightpetal()}
    if(count>=1000&&count<1500){foldpetal()}
    if(count>=1500&&count<2000){downpetal()}
    if(count>=2000&&count<2500){unfoldpetal()}
    if(count>=2500&&count<4000){leftpetal()}
    if(count>=4000&&count<4500){bendpetal();rightpetal()}
    if(count>=4500&&count<5500){bendpetal()}*/
    //test()
}

function open(){
    for (var i = 0; i < petals.length; i++) {
        var petal = petals[i]
        petal.elbow1.x -= petal.elbow1.speed
        petal.elbow2.x += petal.elbow2.speed
        petal.canopy.leftrad+= petal.canopy.speed
        petal.canopy.rightrad+= petal.canopy.speed
        petal.sa+=0.01
    }
}
function close(){
    for (var i = 0; i < petals.length; i++) {
        var petal = petals[i]
        petal.elbow1.x += petal.elbow1.speed
        petal.elbow2.x -= petal.elbow2.speed
        petal.elbow1.y -= petal.elbow1.speed
        petal.elbow2.y -= petal.elbow2.speed
        petal.canopy.leftrad-= petal.canopy.speed
        petal.canopy.rightrad-= petal.canopy.speed
        petal.sa-=0.01
    }
}
function wide(){
    for (var i = 0; i < petals.length; i++) {
        var petal = petals[i]
        petal.elbow1.x += petal.elbow1.speed
        petal.elbow2.x -= petal.elbow2.speed
        petal.canopy.leftrad+= petal.canopy.speed
        petal.canopy.rightrad+= petal.canopy.speed
        petal.hu+=0.1
        petal.sa+=0.01
    }
}
function wider(){
    for (var i = 0; i < petals.length; i++) {
        var petal = petals[i]
        petal.elbow1.leftrad += petal.elbow1.speed
        petal.elbow1.rightrad += petal.elbow1.speed
        petal.elbow2.leftrad += petal.elbow2.speed
        petal.elbow2.rightrad += petal.elbow2.speed
        petal.elbow1.y += petal.elbow1.speed
        petal.elbow2.y+= petal.elbow2.speed

    }
}


function rightpetal() {
    for (var i = 0; i < petals.length; i++) {
        var petal = petals[i]
        petal.elbow1.x += petal.elbow1.speed
        petal.elbow2.x += petal.elbow2.speed
        petal.sa+=0.05
    }
}
function foldpetal() {
    for (var i = 0; i < petals.length; i++) {
        var petal = petals[i]
        petal.elbow1.x -= petal.elbow1.speed
        petal.elbow2.x += petal.elbow2.speed
        petal.hu+=0.1
    }
}
function downpetal() {
    for (var i = 0; i < petals.length; i++) {
        var petal = petals[i]
        petal.elbow1.rightrad += petal.elbow1.speed
        petal.elbow2.leftrad += petal.elbow2.speed
        petal.hu+=0.01
    }
}
function unfoldpetal() {
    for (var i = 0; i < petals.length; i++) {
        var petal = petals[i]
        petal.elbow1.x += petal.elbow1.speed
        petal.elbow2.x -= petal.elbow2.speed
        petal.hu+=0.1
    }
}
function leftpetal() {
    for (var i = 0; i < petals.length; i++) {
        var petal = petals[i]
        petal.elbow1.x -= petal.elbow1.speed
        petal.elbow2.x -= petal.elbow2.speed
    }
}
function bendpetal() {
    for (var i = 0; i < petals.length; i++) {
        var petal = petals[i]
        petal.elbow1.angle -= petal.elbow1.speed
        petal.elbow2.angle -= petal.elbow2.speed
        petal.hu-=0.1
    }
}

function flower() {
    let cx, cy, cpx1, cpy1, cpx2, cpy2;
    controls = [];
    for (var i = 0; i < petals.length; i++) {
        var petal = petals[i]
        stroke(petal.hu, petal.sa, petal.br);
        beginShape();
        cx = petal.root1.x;
        cy = petal.root1.y;
        vertex(cx, cy);
        var angle = 180//0.1*frameCount
        controls = drawTang(cx, cy, petal.root1.angle, petal.root1.leftrad, petal.root1.rightrad);
        cpx2 = controls[2];
        cpy2 = controls[3];

        cx = petal.elbow1.x;
        cy = petal.elbow1.y;
        controls = drawTang(cx, cy, petal.elbow1.angle, petal.elbow1.leftrad, petal.elbow1.rightrad);
        cpx1 = controls[0];
        cpy1 = controls[1];
        bezierVertex(cpx2, cpy2, cpx1, cpy1, cx, cy);
        cpx2 = controls[2];
        cpy2 = controls[3];

        cx = petal.canopy.x;
        cy = petal.canopy.y;
        controls = drawTang(cx, cy, petal.canopy.angle,petal.canopy.leftrad,petal.canopy.rightrad);
        cpx1 = controls[2];
        cpy1 = controls[3];
        bezierVertex(cpx2, cpy2, cpx1, cpy1, cx, cy);
        cpx2 = controls[0];
        cpy2 = controls[1];

        cx = petal.elbow2.x;
        cy = petal.elbow2.y;
        controls = drawTang(cx, cy, petal.elbow2.angle, petal.elbow2.leftrad, petal.elbow2.rightrad);
        cpx1 = controls[0];
        cpy1 = controls[1];
        bezierVertex(cpx2, cpy2, cpx1, cpy1, cx, cy);
        cpx2 = controls[2];
        cpy2 = controls[3];

        cx = petal.root2.x;
        cy = petal.root2.y;
        controls = drawTang(cx, cy, petal.root2.angle, petal.root2.leftrad, petal.root2.rightrad);
        cpx1 = controls[0];
        cpy1 = controls[1];
        bezierVertex(cpx2, cpy2, cpx1, cpy1, cx, cy);
        cpx2 = controls[2];
        cpy2 = controls[3];

        endShape();
    }
}



function wave() {
    let cx, cy, cpx1, cpy1, cpx2, cpy2;
    controls = [];
    for (let i = 0; i < vertices.length; i++) {
        beginShape();
        cx = vertices[i][0][0];
        cy = vertices[i][0][1];
        vertex(cx, cy);
        controls = drawTang(cx, cy, vertices[i][0][3], vertices[i][0][4], vertices[i][0][5]);
        cpx2 = controls[2];
        cpy2 = controls[3];
        for (let j = 1; j < vertices[i].length; j++) {
            cx = vertices[i][j][0];
            cy = vertices[i][j][1];
            controls = drawTang(cx, cy, vertices[i][j][3], vertices[i][j][4], vertices[i][j][5]);
            cpx1 = controls[0];
            cpy1 = controls[1];
            bezierVertex(cpx2, cpy2, cpx1, cpy1, cx, cy);
            cpx2 = controls[2];
            cpy2 = controls[3];
        }
        endShape();
    }
}

function drawTang(cx, cy, angle, radleft, radright) {
    ang = angle;
    wid = w / 8;
    let dx1 = cx + radleft * cos(radians(ang));
    let dy1 = cy + radleft * sin(radians(ang));
    let dx2 = cx + radright * cos(radians(ang + 180));
    let dy2 = cy + radright * sin(radians(ang + 180));
    res = [dx1, dy1, dx2, dy2];
    //line(dx1, dy1, dx2, dy2)
    return res;
}
