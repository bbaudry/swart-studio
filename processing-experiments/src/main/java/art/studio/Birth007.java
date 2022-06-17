/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import java.util.Random;
import java.util.ArrayList;
import processing.core.PApplet;

public class Birth007 extends PApplet {
    int w = 1000;
    int h = 1000;
//    int[] palettef = {40, 60, 80, 100, 120 };
    int[] palettef = {50, 140, 230, 320};
    int lou = 69;
    float hu;
    float cx;
    float cy;
    Random rd;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        rd = new Random();
        cx = 0;
        cy = 0;
        background(0,10,80);
        fill(0,100,100);
        back();
        noStroke();
        strokeWeight(1);
        //ellipse(cx,cy,w,w);
    }

    @Override
    public void draw() {
        if (cx<w){
            hu = palettef[rd.nextInt(palettef.length)];
            fill(hu, 100, 100);
            if(rd.nextBoolean()){
            noStroke();}
            else{
                stroke(0,0,100);
            }
            if(rd.nextInt(lou)<0.1*lou){
            quad(cx, cy, cx+lou/4, cy+lou/4, cx, cy+lou/2, cx-lou/4, cy+lou/4);}
            else{
                ellipse(cx,cy+lou/4,lou/2,lou/2);
            }
            cx=cx+lou/4;
        }
        else{
            if (rd.nextBoolean()){
                cx=0;
            }
            else{
                cx=-lou/8;
            }
            cy=cy+lou/4;
        }
        //marianne();
    }

    private void back(){
        float y = h;
        float x = 0;
        line(w/2,0,w/2,h);
        strokeCap(SQUARE);
        strokeWeight(w/10);
        while (x<w/2){
            hu = palettef[rd.nextInt(palettef.length - 1)];
            stroke(hu, 100, 100);
            noFill();
            line(x,h+lou,-lou,y);
            fill(0,0,100);
            noStroke();
            ellipse(0,y,10,10);
            y=y-h/10;
            x=x+w/10;
        }
    }

    private void marianne(){
        noFill();
        strokeWeight(random((float)0.1,(float)0.2)*lou);
        strokeCap(SQUARE);
        float santorin = w;
        float angle1 = random(0,2*PI); 
        float rangle = random((float)0.2,(float)0.4)*PI;
        float angle2 = angle1 + rangle;
        hu = palettef[rd.nextInt(palettef.length - 1)];
        float s = random(80,100);
        float b = random(80,100);
        stroke(hu, s, b);
        float suzanne = random(1);
        arc(cx, cy, santorin*suzanne, santorin*suzanne, angle1, angle2);
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Birth007 " };
        Birth007 mySketch = new Birth007();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
