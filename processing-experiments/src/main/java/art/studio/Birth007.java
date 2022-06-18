/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import java.util.Random;
import java.util.ArrayList;
import processing.core.PApplet;

public class Birth007 extends PApplet {
    int w = 1000;
    int h = 1000;
//    int[] palettef = {40, 60, 80, 100, 120 };
    int[] palettef = {50, 95, 140, 185, 230, 275, 320, 5};
    int lou = 69;
    float hu;
    float cx;
    float cy;
    float step;
    boolean electronic;
    boolean electroacoustic;
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
        electronic=true;
        electroacoustic=true;
        step=lou/2;
        hu = palettef[rd.nextInt(palettef.length)];
        background(230,80,80);
        fill(0,100,100);
        //back();
        noStroke();
        strokeWeight(1);
        //frameRate(7);
    }

    @Override
    public void draw() {
        if (cx<w+step){
            hu = palettef[rd.nextInt(palettef.length)];
            fill(hu, 100, 100);
            noStroke();
            if(electronic){
                if(radians(lou)<0.9*lou){
                    quad(cx, cy, cx+step/2, cy+step/2, cx, cy+step, cx-step/2, cy+step/2);
                }
                electronic=false;
            }
            else{
                if(radians(lou)<0.9*lou){
                    quad(cx, cy-step/2, cx+step/2, cy, cx, cy+step/2, cx-step/2, cy);
                }
                electronic=true;
            }
            cx=cx+step/2;
        }
        else{
            if(electroacoustic){
                cx=-step/2;
                cy=cy+step/2;
                electroacoustic=false;
            }
            else{
                cx=0;
                cy=cy+step/2;
                electroacoustic=true;
            }
        }
        if(cy>h+step){
            noLoop();
            save("gift007.png");
        }
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
