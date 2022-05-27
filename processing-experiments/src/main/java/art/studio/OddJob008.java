/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class OddJob008 extends PApplet {
    int w = 1000;
    int h = 1000;
    int[] palette = { 250, 310, 10, 70, 130, 190 };
    float x1;
    float y1;
    float x2;
    float y2;
    float epsilon;
    Random rand;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        rand = new Random();
        background(palette[0]+epsilon, 80, 40);
        frameRate(1);
    }

    @Override
    public void draw() {
        epsilon=random(360);
        background(palette[0]+epsilon, 80, 40);
        //a quadrilateral
        x1 = random((float)0.1*w,(float)0.4*w);
        y1 = random((float)0.7,(float)0.8)*h;
        x2 = x1 + random((float)0.2*w,(float)0.4*w);
        boolean john = rand.nextBoolean();
        float baldessari = h-y1;
        if (john) {
            y2 = y1 - random((float)0.1*baldessari,baldessari);
        } else {
            y2 = y1 + random((float)0.1*baldessari,baldessari);
        }
        int c = (int) random(1, palette.length);
        fill(palette[c]+epsilon, 80, 80);
        noStroke();
        if (john) {
            quad(x1, y1, x2, y2, x2, y1, x1, y1 + (y1 - y2));
        } else {
            quad(x1, y1, x2, y2, x2, y1, x1, y1 + (y2 - y1));
        }
        //a circle
        x1 = x2;
        if (john) {
            y1 = y2;
        } 
        c = (int) random(1,palette.length);
        fill(palette[c]+epsilon, 80, 80);
        noStroke();
        float rad = random((float)0.2*w,(float)0.4*w);
        ellipse(x1, y1 - rad / 2, rad, rad);
        //a triangle
        c = (int) random(1,palette.length);
        fill(palette[c]+epsilon, 80, 80);
        y1 = y1 - rad;
        x2 = x1 - random(x1/2,x1);
        y2 = y1 - random(y1/2,y1);
        triangle(x1, y1, x2, y1, random(x2, x1), y2);
        //a small white circle
        fill(10, 0, 100);
        ellipse(x1, y1, 10, 10);
        //sometimes another circle
        if (random(42)<11){
            x1=random((float)0.7*w,(float)0.8*w);
            rad = random((float)0.1,(float)0.2)*w;
            if (john){
                y1=random((float)0.8,(float)0.9)*h;
            }
            else{
                y1=random((float)0.1,(float)0.2)*h;
            }
            c = (int) random(1,palette.length);
            fill(palette[c]+epsilon, 80, 80);
            ellipse(x1, y1, rad, rad);
        }

        //noLoop();
        //save("OddJob08.png");
    }

    public static void main(String[] args) {
        String[] processingArgs = { "OddJob008 " };
        OddJob008 mySketch = new OddJob008();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
