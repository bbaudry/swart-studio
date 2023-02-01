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
    int w = 1535;//17+50*30+18 / 13+52*29+14
    int h = 1181;//5+39*30+6 / 10+40*29+11
    //52*40=2080=1980+100
    //1980 cells of 29*29
    //20 cells for 02
    //80 cells for 08
    int step = 29;
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
        back();
        text(name, 0, h/2);
        save("Birth043"+name+".png");
        noLoop();        
    }

    public void back(){
        float x = 13;
        float y = 10;
        for (int i = 0; i<52; i++){
            for (int j= 0; j<40; j++){
                float cx = x+step/2;
                float cy = y+step/2;
                float diam = 7+alea.nextFloat()*(step-7);
                float hu = 230+alea.nextFloat()*60;
                noStroke();
                fill(hu,100,100);
                draw_ring(cx,cy,diam,hu);
                y+=step;
            }
            y=10;
            x+=step;
        }
    }

    public void draw_ring(float cx, float cy, float diam, float hu){
        int nb = alea.nextInt(4)+1;
        float vera = diam/2/nb;
        strokeWeight(vera);
        noFill();
        stroke(hu,100,100);
        float knob = diam/2;
        while (knob>0){
            ellipse(cx,cy,knob*2,knob*2);
            knob-=vera*2;
        }

    }

    public static void main(String[] args) {
        String[] processingArgs = {"Birth043"};
        Birth043 mySketch = new Birth043();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
