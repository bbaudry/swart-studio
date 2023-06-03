/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;


import processing.core.PApplet;
import java.util.ArrayList;
import java.util.Random;

public class Tshirt003 extends PApplet {
    int ratio = 1;
    int w = 1000*ratio;
    int h = 1000*ratio;
    int resolution = 4;
    ArrayList<Integer> hues;
    Random alea;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100,250);
        background(0,0,100);   
        noFill();
        stroke(0,0,100);
        hues = new ArrayList<>();
        hues.add(50); hues.add(330);hues.add(140);hues.add(230);
        alea = new Random();
    }

    @Override
    public void draw() {
        noStroke();
        float diam = (float)0.5*w;
        float x,y;
        fill(hues.get(alea.nextInt(hues.size())),100,100);
        x=(float)0.25*w;
        y=(float)0.25*h;
        ellipse(x,y,diam,diam);
        fill(hues.get(alea.nextInt(hues.size())),100,100);
        x=(float)0.75*w;
        y=(float)0.25*h;
        ellipse(x,y,diam,diam);
        fill(hues.get(alea.nextInt(hues.size())),100,100);
        x=(float)0.25*w;
        y=(float)0.75*h;
        ellipse(x,y,diam,diam);
        fill(hues.get(alea.nextInt(hues.size())),100,100);
        x=(float)0.75*w;
        y=(float)0.75*h;
        ellipse(x,y,diam,diam);

    }

    
    public static void main(String[] args) {
        String[] processingArgs = { "Tshirt003" };
        Tshirt003 mySketch = new Tshirt003();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
