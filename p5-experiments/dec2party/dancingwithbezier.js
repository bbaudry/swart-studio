
var ang = 180;
var grow
var bend
var fold
var finished
var secondPhase
var closing
var startSecond
var startClosing
var nbVertices;
var wid = w / 10;
var vertices

function setupdancingwithbezier() {
    background(0, 0, 0)
    nbVertices = Math.floor(random(42, 84))
    setVertices();
    grow = true; if(!grow){console.log("grow should be true")}
    bend = true; if(!bend){console.log("bend should be true")}
    fold = true; if(!fold){console.log("fold should be true")}
    finished = false; if(finished){console.log("finished should be false")}
    secondPhase = false; if(secondPhase){console.log("secondPhase should be false")}
    closing = false; if(closing){console.log("closing should be false")}
    startSecond = 0; if(startSecond!=0){console.log("startsection should be 0")}
    startClosing = 0; if(startClosing!=0){console.log("startclosing should be 0")}
}


function setVertices() {
    vertices = [];
    for (let i = 1; i < nbVertices; i++) {
        let speed = i * 0.05;
        let v = [];
        let one = [0, 0.5 * h, speed, 180, 0.125 * w, 0.125 * w]
        v.push(one);
        let two = [0.25 * w, 0.5 * h, speed, 180, 0.125 * w, 0.125 * w]
        v.push(two);
        let three = [0.75 * w, 0.5 * h, speed, 180, 0.125 * w, 0.125 * w]
        v.push(three);
        let four = [w, 0.5 * h, speed, 180, 0.125 * w, 0.125 * w]
        v.push(four);
        vertices.push(v);
    }
    console.log("dancing with bezier is all set with "+vertices.length+" vertices")
}

function drawdancingwithbezier() {
    noFill();
    stroke(0, 0, 100);
    if (!finished) {
        console.log("dancing with bezier is running")
        if (vertices[vertices.length - 1][1][1] > 0 && grow) {
            background(0, 0, 0);
            wave();
            updateVerticesUp();
            console.log("dancing with bezier is going up")
        }
     else {
        grow = false;
        if (vertices[vertices.length - 1][1][4] > -0.25 * w && bend) {
            background(0, 0, 0);
            wave();
            updateVerticesCenter();
        } else {
            bend = false;
            if (vertices[vertices.length - 1][1][1] < 0.5 * h && fold) {
                background(0, 0, 0);
                wave();
                updateVerticesCenter();
                updateVerticesDown();
            } else {
                fold = false;
                if (!secondPhase) {
                    secondPhase = true;
                    startSecond = frameCount;
                }
                if (secondPhase && frameCount - startSecond < 168) {
                    updateVerticesUp();
                }
                if (secondPhase && frameCount - startSecond < startSecond + 168) {
                    background(0, 0, 0);
                    wave();
                    spinVertices();
                } else {
                    if (!closing) {
                        closing = true;
                        startClosing = frameCount;
                    }
                }
            }
        }
    }
    if (closing) {
        background(0, 0, 0);
        wave(); spinVertices(); trimVertices();

    }
    if (vertices.length === 0) {
        background(0, 0, 0);
        finished = true
        //noLoop();
    }
} else { fill(0, 0, 100); rect(0, 0, w, h) }
}

function updateVerticesUp() {
    for (let i = 0; i < vertices.length; i++) {
        vertices[i][1][1] -= vertices[i][1][2]
        vertices[i][2][1] += vertices[i][2][2]
    }
}

function updateVerticesDown() {
    for (let i = 0; i < vertices.length; i++) {
        vertices[i][1][1] += vertices[i][1][2]
        vertices[i][2][1] -= vertices[i][2][2]
    }
}

function updateVerticesCenter() {
    for (let i = 0; i < vertices.length; i++) {
        vertices[i][1][4] -= vertices[i][1][2]
        vertices[i][1][5] += vertices[i][1][2]
        vertices[i][2][4] += vertices[i][2][2]
        vertices[i][2][5] -= vertices[i][2][2]
    }
}

function spinVertices() {
    for (let i = 0; i < vertices.length; i++) {
        vertices[i][1][3] -= vertices[i][1][2]
        vertices[i][2][3] += vertices[i][2][2]
    }
}

function trimVertices() {
    let i = Math.floor(random(vertices.length));
    vertices.splice(i, 1);
}

function wave() {
    let cx, cy, cpx1, cpy1, cpx2, cpy2;
    controls = [];
    for (let i = 0; i < vertices.length; i++) {
        beginShape();
        cx = vertices[i][0][0];
        cy = vertices[i][0][1];
        vertex(cx, cy);
        controls = drawTangdark(cx, cy, vertices[i][0][3], vertices[i][0][4], vertices[i][0][5]);
        cpx2 = controls[2];
        cpy2 = controls[3];
        for (let j = 1; j < vertices[i].length; j++) {
            cx = vertices[i][j][0];
            cy = vertices[i][j][1];
            controls = drawTangdark(cx, cy, vertices[i][j][3], vertices[i][j][4], vertices[i][j][5]);
            cpx1 = controls[0];
            cpy1 = controls[1];
            bezierVertex(cpx2, cpy2, cpx1, cpy1, cx, cy);
            cpx2 = controls[2];
            cpy2 = controls[3];
        }
        endShape();
    }
}

function drawTangdark(cx, cy, angle, radleft, radright) {
    ang = angle;
    wid = w / 8;
    let dx1 = cx + radleft * cos(radians(ang));
    let dy1 = cy + radleft * sin(radians(ang));
    let dx2 = cx + radright * cos(radians(ang + 180));
    let dy2 = cy + radright * sin(radians(ang + 180));
    res = [dx1, dy1, dx2, dy2];
    return res;
}
