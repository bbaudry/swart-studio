let xoff, xinc
xoff = 0.0
xinc = 0.0001

function hal() {
    flaque2()
    //courbe()
}


function flaque2(){
    let xeast,yeast,xsouth,ysouth,xwest,ywest,xnorth,ynorth,x1, y1, cx1, cy1, cx2, cy2, x2, y2, offset, flaquewidth, flaqueheight
    offset=6    
    xeast=leftmargin+actualwidth*noise(xoff);  yeast=topmargin+actualheight*0.3;
    xsouth=leftmargin+actualwidth*0.3;         ysouth=topmargin+actualheight*0.5*noise(xoff);
    xwest=leftmargin+actualwidth*0.1;          ywest=topmargin+actualheight*0.36;
    xnorth=leftmargin+actualwidth*0.5;         ynorth=topmargin+actualheight*0.1;
    flaquewidth=xeast-xwest;                            flaqueheight=ysouth-ynorth
    for(let i=0; i<42; i++){
    xeast-=i*offset; ysouth-=i*offset;
    xwest+=i*offset;   ynorth+=i*offset;

    beginShape()
    x1=xeast;y1=yeast
    cx1=xeast;cy1=yeast+flaqueheight*0.3-i*offset
    cx2=xsouth+flaquewidth*0.3-i*offset;cy2=ysouth
    x2=xsouth;y2=ysouth
    vertex(x1,y1)
    bezierVertex(cx1, cy1, cx2, cy2, x2, y2)

    x1=xsouth;y1=ysouth
    cx1=xsouth-flaquewidth*0.3+i*offset;cy1=ysouth
    cx2=xwest;cy2=ywest+flaqueheight*0.3-i*offset
    x2=xwest;y2=ywest
    bezierVertex(cx1, cy1, cx2, cy2, x2, y2)

    x1=xwest;y1=ywest
    cx1=xwest;cy1=ywest-flaqueheight*0.3+i*offset
    cx2=xnorth-flaquewidth*0.3+i*offset;cy2=ynorth
    x2=xnorth;y2=ynorth
    bezierVertex(cx1, cy1, cx2, cy2, x2, y2)

    x1=xnorth;y1=ynorth
    cx1=xnorth+flaquewidth*0.3-i*offset;cy1=ynorth
    cx2=xeast;cy2=yeast-flaqueheight*0.3+i*offset
    x2=xeast;y2=yeast
    bezierVertex(cx1, cy1, cx2, cy2, x2, y2)
    endShape()
    }
}

