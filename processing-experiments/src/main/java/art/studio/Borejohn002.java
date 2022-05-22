/* Metadata {"endless":false, "BW": false, "knobs": false, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;
import java.util.ArrayList;

public class Borejohn002  extends PApplet {
    int ratio = 3;
    int w = 1000*ratio;
    int h = 1000*ratio;
    float x = 20*ratio;
    float y = 20*ratio;
    float r = random(256);
    float g = random(256);
    float b = random(256);
    int iterations = 0;
    int maxiter = 4;
    float cChange = 20;
    float prevy;
    boolean drawC = true; //if true draw circle, else a line
    float radius = 27*ratio;
    boolean first_row = true;
    boolean end = false;
    float nextx;
    float nexty;
    ArrayList<Float> posx = new ArrayList<Float>();
    int indexx = 0;
    Random rd = new Random();

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        //frameRate(1);
        background(0);
        posx.add(x);
        //noLoop();
    }

    @Override
    public void draw() {
        if (first_row & iterations < maxiter) {
            end=false;
            if (drawC) {
                x = x + radius / 2;                
                draw_circle(x,y,radius);
                drawC = false;
                x = x + radius / 2;
                nextx = x + random(10*ratio, 30*ratio);
            } else {
                if (nextx < w - radius) {
                    draw_line(x, y, nextx, y);
                    drawC = true;
                    x = nextx;
                    posx.add(x);
                } else {
                    indexx=0;
                    drawC = true;
                    first_row = false;
                }
            }
        }
    else{
        if (indexx==0){
            prevy = y + radius/2;
            y = prevy+random(10*ratio,30*ratio);
            if (y<h-radius){
                x=posx.get(indexx)+radius/2;
                draw_line(x, prevy, x, y);
                y += radius/2;
                drawC=true;
            }
            else{
                first_row=true;
                drawC=true;
                x=20*ratio;
                y=20*ratio;
                posx.clear();
                posx.add(x);
                end=true;
                iterations++;
                if (iterations == maxiter) {
                    save("bore.png");
                    noLoop();
                }
                //background(0);
            }
        }
        if (indexx < posx.size() && !end){
            if (drawC){
                x=posx.get(indexx)+radius/2;
                draw_circle(x, y, radius);
                draw_line(x, prevy, x, y-radius/2);
                x+=radius/2;
                drawC=false;
                indexx++;
            }
            else{
                draw_line(x, y, posx.get(indexx), y);
                drawC=true;
            }
        }
        else{
            indexx=0;
        }
    }
    }   
    
    public void draw_circle(float x, float y, float rad){
        strokeWeight(3*ratio);
        r += random(-cChange, cChange);
        r = constrain(r, 0, 256);

        g += random(-cChange, cChange);
        g = constrain(g, 0, 256);

        b += random(-cChange, cChange);
        b = constrain(b, 0, 256);
        //stroke(r,g,b);
        stroke(255,255,255);
        fill(g,r,b);
        //noFill();
        ellipse(x,y,rad,rad);
    }

    public void draw_line(float origx, float origy, float destx, float desty){
        strokeWeight(4*ratio);
        r += random(-cChange, cChange);
        r = constrain(r, 0, 256);

        g += random(-cChange, cChange);
        g = constrain(g, 0, 256);

        b += random(-cChange, cChange);
        b = constrain(b, 0, 256);
        stroke(r,g,b);
        line(origx, origy, destx, desty);
    }
    public static void main(String[] args) {
        String[] processingArgs = { "Not Boring John" };
        Borejohn002 mySketch = new Borejohn002();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
