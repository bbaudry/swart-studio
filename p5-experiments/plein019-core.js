var xoff = 0.0
var xinc = 0.1
var grid = []
var resolution = 3

function hal() {
    let dice, x1,y1,x2,y2,x3,y3,x4,y4,pad
    dice=Math.floor(random(2,5))
    pad=7
    switch (dice){
        case 2: //fill(0,100,100);ellipse(w*0.5,h*0.5,42,42)
            x1=leftmargin;y1=topmargin
            x2=leftmargin+actualwidth*0.5-pad;y2=topmargin
            x3=leftmargin+actualwidth*0.5-pad;y3=bottommargin
            x4=leftmargin;y4=bottommargin
            quad(x1,y1,x2,y2,x3,y3,x4,y4)
            x1=rightmargin-actualwidth*0.5+pad;y1=topmargin
            x2=rightmargin;y2=topmargin
            x3=rightmargin;y3=bottommargin
            x4=rightmargin-actualwidth*0.5+pad;y4=bottommargin
            quad(x1,y1,x2,y2,x3,y3,x4,y4)
            break;
        case 3: //fill(300,100,100);ellipse(w*0.5,h*0.5,420,420)
            x1=leftmargin;y1=topmargin
            x2=leftmargin+actualwidth*0.5-pad;y2=topmargin
            x3=leftmargin+actualwidth*0.5-pad;y3=topmargin+actualheight*0.5-pad
            x4=leftmargin;y4=topmargin+actualheight*0.5-pad
            quad(x1,y1,x2,y2,x3,y3,x4,y4)
            x1=rightmargin-actualwidth*0.5+pad;y1=topmargin
            x2=rightmargin;y2=topmargin
            x3=rightmargin;y3=topmargin+actualheight*0.5-pad
            x4=rightmargin-actualwidth*0.5+pad;y4=topmargin+actualheight*0.5-pad
            quad(x1,y1,x2,y2,x3,y3,x4,y4)
            x1=leftmargin;y1=topmargin+actualheight*0.5+pad
            x2=rightmargin;y2=topmargin+actualheight*0.5+pad
            x3=rightmargin;y3=bottommargin
            x4=leftmargin;y4=bottommargin
            quad(x1,y1,x2,y2,x3,y3,x4,y4)
            break;
        case 4: //fill(180,100,100);ellipse(w*0.5,h*0.5,142,142)
            x1=leftmargin;y1=topmargin
            x2=leftmargin+actualwidth*0.5-pad;y2=topmargin
            x3=leftmargin+actualwidth*0.5-pad;y3=topmargin+actualheight*0.5-pad
            x4=leftmargin;y4=topmargin+actualheight*0.5-pad
            quad(x1,y1,x2,y2,x3,y3,x4,y4)
            x1=rightmargin-actualwidth*0.5+pad;y1=topmargin
            x2=rightmargin;y2=topmargin
            x3=rightmargin;y3=topmargin+actualheight*0.5-pad
            x4=rightmargin-actualwidth*0.5+pad;y4=topmargin+actualheight*0.5-pad
            quad(x1,y1,x2,y2,x3,y3,x4,y4)
            x1=leftmargin;y1=topmargin+actualheight*0.5+pad
            x2=leftmargin+actualwidth*0.5-pad;y2=topmargin+actualheight*0.5+pad
            x3=leftmargin+actualwidth*0.5-pad;y3=bottommargin
            x4=leftmargin;y4=bottommargin
            quad(x1,y1,x2,y2,x3,y3,x4,y4)
            x1=rightmargin-actualwidth*0.5+pad;y1=topmargin+actualheight*0.5+pad
            x2=rightmargin;y2=topmargin+actualheight*0.5+pad
            x3=rightmargin;y3=bottommargin
            x4=rightmargin-actualwidth*0.5+pad;y4=bottommargin
            quad(x1,y1,x2,y2,x3,y3,x4,y4)
            break;
    }
}

function quadwlines(x1, y1, x2, y2, x3, y3, x4, y4) {
    let d, t, tinc, ox, oy, dx, dy, amp
    amp = 1//random(1,2)
    dist(x1, y1, x4, y4) > dist(x2, y2, x3, y3) ? d = dist(x1, y1, x4, y4) : d = dist(x2, y2, x3, y3)
    //penwidth<1?tinc=d*penwidth:
    tinc = 1 / (d / penwidth) * amp
    console.log("d: " + d + "; tinc: " + tinc + "; penwidth: " + penwidth)
    for (t = tinc; t < 1; t += tinc) {
        ox = lerp(x1, x4, t)
        oy = lerp(y1, y4, t)
        dx = lerp(x2, x3, t)
        dy = lerp(y2, y3, t)
        line(ox, oy, dx, dy)
    }
}