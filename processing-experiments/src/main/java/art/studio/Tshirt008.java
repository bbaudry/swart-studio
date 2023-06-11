/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;
import java.util.ArrayList;

public class Tshirt008 extends PApplet {
    int ratio = 1;
    int w = 2000*ratio;
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
        background(0,0,100); 
        alea=new Random();
        fill(0,0,100);noStroke();
        wid = new ArrayList<>();
        cx=w/2;cy=0;
    }

    @Override
    public void draw() {
        if(cy<=h){
            float t = 1+alea.nextInt(7);
        row(cy,t);
        cy+=t+3;
        }
        else{
            noLoop();
            save("tshirt008.png");
        }
    }

    private void row(float y, float grain){
        float x1,x2;
        x1=0;x2=1;
        while(cx+x2<w){
            int t = alea.nextInt(42);
            if (t<11){fill(330,100,100,142+alea.nextInt(100));}
            else{
                if (t<22){fill(180,100,100,142+alea.nextInt(100));}
                else{
                    if (t<23){fill(180,0,0);}
                    else {
                    fill(330,0,100,42+alea.nextInt(100));}
            }}
            rect(cx+x1,y,x2-x1,grain);
            x1=x2;
            x2+=(0.2+alea.nextFloat())*x2;//+random(-x2,x2);
        }
        x1=0;x2=-1;
        while(cx+x2>0){

            int t = alea.nextInt(42);
            if (t<3){fill(330,100,100,142+alea.nextInt(100));}
            else{
                if (t<7){fill(180,100,100,142+alea.nextInt(100));}
                else{fill(330,0,100,84+alea.nextInt(100));}
            }
            rect(cx+x1,y,x2-x1,grain);
            x1=x2;
            x2+=(0.2+alea.nextFloat())*x2;//-random(x2,-x2);
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Tshirt008" };
        Tshirt008 mySketch = new Tshirt008();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
