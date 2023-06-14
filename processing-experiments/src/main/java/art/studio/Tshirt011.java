/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Tshirt011 extends PApplet {
    int ratio = 1;
    int w = 1000 * ratio;
    int h = 1000 * ratio;
    Random alea;
    float x,y;
    float xratio,yratio;


    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100, 250);
        background(0, 0, 0);
        stroke(0,0,100); fill(0,0,100,7);// noFill();
        alea = new Random();
        x=0;y=0;
        xratio=w/10;yratio=h/10;
    }

    @Override
    public void draw() {
        if(x<w){
            carre();
            demi();
            //quart();
            x+=xratio;
        }
        else{
            x=0;
            if(y<h){y+=yratio;}
            else{
                noLoop();
                save("tshirt011.png");
            }
        }
    }

    private void carre(){
        noStroke();
        int t = alea.nextInt(42);
        if(t<1){
            fill(0,0,0);
            rect(x,y,xratio,yratio);
        }
        else{
            if(t<11){
            fill(0,0,100);
            rect(x,y,xratio,yratio);
        }
            else{
                fill(0,0,50);
            rect(x,y,xratio,yratio);
            }
        }
    }
    private void demi(){
        noStroke();
        int t = alea.nextInt(44);
        float cx=x+xratio/2;
        float cy=y+yratio/2;
        float rad=xratio;
        if(t<11){
            fill(0,0,50);
            arc(cx,cy,rad,rad,(float)(1.5*PI),(float)(0.5*PI));
        }
        else{
            if(t<22){
                fill(0,0,50);
                arc(cx,cy,rad,rad,(float)(0.5*PI),(float)(1.5*PI));
            }
            else{
                if(t<33){
                    fill(0,0,100);
                    arc(cx,cy,rad,rad,(float)(0.5*PI),(float)(1.5*PI));
                }
                else{
                    fill(0,0,100);
                    arc(cx,cy,rad,rad,(float)(1.5*PI),(float)(0.5*PI));
                }
            }
        }
    }


    public static void main(String[] args) {
        String[] processingArgs = { "Tshirt011" };
        Tshirt011 mySketch = new Tshirt011();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
