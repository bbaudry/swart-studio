/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import processing.core.PFont;
import java.util.Random;

public class Birth043 extends PApplet {
    //A2:420 × 594
    //photo:100*130
    //pixel = dpi * mm / 25.4 mm
    //w=300*130/25.4=1535
    //h=300*100/25.4=1181
    int w = 1535;
    int h = 1181;
    Random alea = new Random();
    String[] guests = { "Severine", "Peter", "Olga", "Alyona", "Sebastien", "Benoit" };

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        background(0,10,100);
        noStroke();
        PFont f = createFont("FreeMono", 43*6, true);
        textFont(f);
        fill(50,100,100);   
    }

    @Override
    public void draw() {
        background(0,10,100);
        fill(0,100,100);   
        int i = alea.nextInt(guests.length);
        String name = guests[i];
        text(name, 0, h/2);
        //save("Birth043"+name+".png");
        //noLoop();        
    }

    public static void main(String[] args) {
        String[] processingArgs = {"Birth043"};
        Birth043 mySketch = new Birth043();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
