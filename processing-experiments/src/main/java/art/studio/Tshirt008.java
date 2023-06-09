/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;
import java.util.ArrayList;

public class Tshirt008 extends PApplet {
    int ratio = 1;
    int w = 1000*ratio;
    int h = 1000*ratio;
    Random alea;
    ArrayList<Float> wid;
    float x1,x2;
    float cx;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100,250);
        background(0,0,0); 
        alea=new Random();
        fill(0,0,100);stroke(0,0,0);
        wid = new ArrayList<>();
        cx=w/2;
        initW();
    }

    private void initW(){

    }

    @Override
    public void draw() {
        background(0,0,0);
        x1=0;x2=1;
        while(cx+x2<w){
            rect(cx+x1,h/2-4,x2-x1,8);
            x1=x2;
            x2+=0.3*x2+random(-x2,x2);
        }
        x1=0;x2=-1;
        while(cx+x2>0){
            rect(cx+x1,h/2-4,x2-x1,8);
            x1=x2;
            x2+=0.3*x2+random(x2,-x2);
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Tshirt008" };
        Tshirt008 mySketch = new Tshirt008();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
