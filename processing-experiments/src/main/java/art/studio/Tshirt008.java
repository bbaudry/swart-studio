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
    float cx,cy;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100,250);
        background(0,0,0); 
        alea=new Random();
        fill(0,0,100);noStroke();// stroke(0,0,0);
        wid = new ArrayList<>();
        cx=w/2;cy=0;
        frameRate(1);
    }

    @Override
    public void draw() {
        background(0,0,0);
        row(h/2,20+alea.nextInt(20));
        //noLoop();
    }

    private void row(float y, float grain){
        float x1,x2;
        x1=0;x2=1;
        while(cx+x2<w){
            int t = alea.nextInt(42);
            if (t<1){stroke(0,0,0);fill(330,100,100);}
            else{
                if (t<2){stroke(0,0,0);fill(180,100,100);}
                else{stroke(0,0,0);fill(330,0,100);}
            }
            rect(cx+x1,y-grain/2,x2-x1,grain);
            x1=x2;
            x2+=0.2*x2;//+random(-x2,x2);
        }
        x1=0;x2=-1;
        while(cx+x2>0){

            int t = alea.nextInt(42);
            if (t<1){stroke(0,0,0);fill(330,100,100);}
            else{
                if (t<2){stroke(0,0,0);fill(180,100,100);}
                else{stroke(0,0,0);fill(330,0,100);}
            }
            rect(cx+x1,y-grain/2,x2-x1,grain);
            x1=x2;
            x2+=0.2*x2;//-random(x2,-x2);
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Tshirt008" };
        Tshirt008 mySketch = new Tshirt008();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
