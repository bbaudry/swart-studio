/* Metadata {"endless":false, "BW": false, "knobs": false, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;

public class Banner001 extends PApplet {
    int w = 1000;
    int h = 400;
    float x1;
    float y1;
    float x2;
    float y2;
    int[] palette;
    int hu;
    int iterations;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        palette = new int[]{33,200,260};
        x1=random(5,w-5);
        y1=random(5,h-5);
        iterations=0;
        strokeWeight(1);
        background(0,0,100);
    }

    @Override
    public void draw() {
        x2=random(5,w-5);
        y2=random(5,h-5);
        hu=palette[(int)random(palette.length)];
        fill(hu,100,100);
        stroke(hu,100,100);
        if(iterations%42==0){stroke(hu,0,100);fill(hu,0,0);}
        ellipse(x1,y1,10,10);
        ellipse(x2,y2,10,10);
        line(x1,y1,x2,y2);
        x1=x2;
        y1=y2;
        if(iterations==557){noLoop();save("B001.png");}
        iterations++;
    }

   
    public static void main(String[] args) {
        String[] processingArgs = { "Banner001" };
        Banner001 mySketch = new Banner001();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
