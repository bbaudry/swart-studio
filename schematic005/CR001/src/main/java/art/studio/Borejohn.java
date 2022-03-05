package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Borejohn  extends PApplet {

    int w = 700;
    int h = 500;
    float x = 60;
    float y = 60;
    float radius = 51;
    float nextx;
    float nexty;
    float[] posx = new float[100];
    int indexx = 0;
    boolean ci = true;
    Random rd = new Random();

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        frameRate(1);
        background(0);
        posx[indexx]=x;
        indexx++;
        //noLoop();
    }

    @Override
    public void draw() {
        nextx = x + random(60);
        if (ci){
            System.out.println("circle");
            strokeWeight(7);
            stroke(255,255,255);
            noFill();
            ellipse(x,y,radius,radius);
            ci=false;
            x = x+radius/2;
            posx[indexx]=x;
            indexx++;
            }
        else{
            if (nextx<w) {
                System.out.println("line horizontal");
                line(x,y,nextx,y);
                ci=true;
                x = nextx+radius/2;
                posx[indexx]=x;
                indexx++;
                }                    
            else{
                float cy=y;
                y+=random(60)+radius/2;
                x=60;
                line(x,cy,x,y);
                y+=random(60)+radius/2;                
            }
        }
    }    

    public static void main(String[] args) {
        String[] processingArgs = { "Not Boring John" };
        Borejohn mySketch = new Borejohn();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
