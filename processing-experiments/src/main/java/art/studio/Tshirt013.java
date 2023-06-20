/* Metadata {"endless":false, "BW": false, "knobs": "true", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Tshirt013 extends PApplet {
    int ratio = 1;
    int w = 1000 * ratio;
    int h = 1200 * ratio;
    Random alea;
    boolean dark = true;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100, 250);
        if (dark){
            background(0,0,0);
        }
        else{
            background(0,0,100);
        }        
        fill(0, 0, 100, 7);// noFill();
        alea = new Random();
    }

    @Override
    public void draw() {
        if (frameCount < 84) {
            ray();
        } else {
            noLoop();
            save("tshirt013.png");
        }
    }

    private void ray() {
        if (dark){
            stroke(0, 0, 100);
            fill(0, 0, 100, 42);
        }
        else{
            stroke(0, 0, 0);
            fill(0, 0, 0, 42);
        }    
        float cx = (float) (0.84 * w);
        float cy = (float) (0.21 * w);
        float angle1 = alea.nextFloat() * (2 * PI);
        float angle2 = angle1 + alea.nextFloat() * PI / 10;
        float l = alea.nextFloat() * h;
        float t= alea.nextFloat();
        float cx1, cy1, cx2, cy2;
        float dx1 = cx + l * cos(angle1);
        float dy1 = cy + l * sin(angle1);
        float dx2 = cx + l * cos(angle2);
        float dy2 = cy + l * sin(angle2);
            cx1 = (1 - t) * cx + (t * dx1);
            cy1 = (1 - t) * cy + (t * dy1);
            cx2 = (1 - t) * cx + (t * dx2);
            cy2 = (1 - t) * cy + (t * dy2);
        quad(cx1,cy1,dx1,dy1,dx2,dy2,cx2,cy2);
        float px1, py1, px2, py2;        
        for (int i = 0; i < 42; i++) {
            if(alea.nextInt(42)<5){
                stroke(330,100,100);
            }
            else{
                if (dark) {
                    stroke(0, 0, 100);
                } else {
                    stroke(0, 0, 0);
                }
            }
            t = alea.nextFloat();
            px1 = (1 - t) * cx1 + (t * dx1);
            py1 = (1 - t) * cy1 + (t * dy1);
            t = alea.nextFloat();
            px2 = (1 - t) * cx2 + (t * dx2);
            py2 = (1 - t) * cy2 + (t * dy2);
            line(px1, py1, px2, py2);
        }

    }

    public static void main(String[] args) {
        String[] processingArgs = { "Tshirt013" };
        Tshirt013 mySketch = new Tshirt013();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
