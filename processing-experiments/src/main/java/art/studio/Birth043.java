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
    float xoff = 13;
    float yoff = 10;

    Random alea = new Random();
    String[] guests = { "Severine", "Peter", "Olga", "Alyona", "Sebastien", "Benoit" };
    int[][] palette ={{253, 100, 17},{215, 100, 24},{198, 72, 69},{160, 97, 60}};
    /*253, 100, 17
     *215, 100, 24
     *198, 72, 39
     *160, 97, 40 
    */

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        background(palette[0][0],palette[0][1],palette[0][2]);
        noStroke();
        PFont f = createFont("FreeMono", 43*6, true);
        textFont(f);
        fill(50,100,100);   
    }

    @Override
    public void draw() {
        background(palette[0][0],palette[0][1],palette[0][2]);
           
        int i = alea.nextInt(guests.length);
        String name = guests[i];
        back();
        feb();
        //stroke(120,10,100);
        fill(palette[2][0],palette[2][1],palette[2][2]);
        text(name, 0, h/2);
        save("Birth043"+name+".png");
        noLoop();        
    }

    public void back(){
        float x = xoff;
        float y = yoff;
        for (int i = 0; i<52; i++){
            for (int j= 0; j<40; j++){
                float cx = x+step/2;
                float cy = y+step/2;
                float diam = 7+alea.nextFloat()*(step-7);
                float hu = 300;//230+alea.nextFloat()*60;
                noStroke();
                fill(hu,100,100);
                draw_ring(cx,cy,diam,hu);
                y+=step;
            }
            y=yoff;
            x+=step;
        }
    }

    private void feb(){
        float x = xoff + 7*step;
        float y = yoff + 5*step;
        for (int i=0;i<2;i++){

        noStroke();
        fill(palette[0][0],palette[0][1],palette[0][2]);
        rect(x,y,step*5,step*2);
        stroke(300,90,60);
        line(x,y,x+step*5,y+step*2);
        line(x,y+step*2,x+step*5,y);

        y+=4*step;
    }
/* 
        noStroke();
        fill(palette[0][0],palette[0][1],palette[0][2]);
        rect(x,y,step*5,step*2);
        stroke(300,90,60);
        line(x,y,x+step*5,y+step*2);
        line(x,y+step*2,x+step*5,y);*/
    }

    public void draw_ring(float cx, float cy, float diam, float hu){
        int nb = alea.nextInt(4)+1;
        float vera = diam/2/nb;
        strokeWeight(vera);
        noFill();
        stroke(palette[3][0],palette[3][1],palette[3][2]);
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
