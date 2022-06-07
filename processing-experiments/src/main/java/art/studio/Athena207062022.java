/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;

public class Athena207062022 extends PApplet {
    int w = 1000;
    int h = 1000;
    float x1;
    float x2;
    float y1;
    float y2;
    boolean east;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        x1=0;
        y1=0;
        x2=0;
        y2=0;
        east=true;
        background(230,100,20);
    }

    @Override
    public void draw() {
        float inc = 42;
        x1 = inc;
        y2 = inc;
        while(x1<w && y2<h){
            x2=0;
            y1=0;
            chercheur();
            x1=x1+inc;
            y2=y2+inc;
        }
        while(x2<w && y1<h){
            chercheur();
            x2=x2+inc;
            y1=y1+inc;
        }
        inc = inc*2;
        x1 = w-inc;
        y2 = inc;
        while(x1>0 && y2<h){
            x2=w;
            y1=0;
            chercheur();
            x1=x1-inc;
            y2=y2+inc;
        }
        while(x2>0 && y1<h){
            System.out.println("x2 "+x2+" y1 "+y1);
            chercheur();
            x2=x2-inc;
            y1=y1+inc;
        }
        noLoop();
        save("Athena207062022.png");
    }

    private void chercheur(){
        stroke(50, random(84,100), random(42,84));
        strokeWeight(random(1,4));
        if(random(42)>1.5){
        line(x1, y1, x2, y2);}
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Athena207062022 " };
        Athena207062022 mySketch = new Athena207062022();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
