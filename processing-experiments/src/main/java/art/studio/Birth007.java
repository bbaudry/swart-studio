/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import java.util.Random;
import processing.core.PApplet;

public class Birth007 extends PApplet {
    int w = 3000;
    int h = 3000;
    int[] palettef = {50, 185, 230, 275, 320};// 95,  140,  
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
        step=lou*2;
        background(230,80,80);
        fill(0,100,100);
        noStroke();
    }

    @Override
    public void draw() {
        if (cx<w+step){
            hu = palettef[rd.nextInt(palettef.length)];
            fill(hu, 100, 100);
            noStroke();
            if(electronic){
                if(random(lou)<0.7*lou){
                    quad(cx, cy, cx+step/2, cy+step/2, cx, cy+step, cx-step/2, cy+step/2);
                }
                else{
                    if(random(lou)>=0.8*lou && radians(lou)<0.9*lou){
                        quad(cx, cy, cx+step, cy+step, cx, cy+2*step, cx-step, cy+step);
                    }    
                    else{
                        if(random(lou)>=0.7*lou && radians(lou)<0.8*lou){
                            quad(cx, cy, (float)(cx+1.5*step), (float)(cy+1.5*step), cx, cy+3*step, (float)(cx-1.5*step), (float)(cy+1.5*step));
                        }        
                    }
                }
                electronic=false;
            }
            else{
                if(random(lou)<0.7*lou){
                    quad(cx, cy-step/2, cx+step/2, cy, cx, cy+step/2, cx-step/2, cy);
                }
                else{
                    if(random(lou)>=0.8*lou && radians(lou)<0.9*lou){
                        quad(cx, cy-step, cx+step, cy, cx, cy+step, cx-step, cy);
                    }     
                    else{
                        if(random(lou)>=0.7*lou && radians(lou)<0.8*lou){
                            quad(cx, (float)(cy-1.5*step), (float)(cx+1.5*step), cy, cx, (float)(cy+1.5*step), (float)(cx-1.5*step), cy);
                        }        
                    }
                }
                electronic=false;
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

    public static void main(String[] args) {
        String[] processingArgs = { "Birth007 " };
        Birth007 mySketch = new Birth007();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
