/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;
import java.util.ArrayList;

public class Tshirt009 extends PApplet {
    int ratio = 1;
    int w = 1000 * ratio;
    int h = 1000 * ratio;
    Random alea;
    ArrayList<Float> wid;
    float cx, cy;
    int al, dia;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100, 250);
        background(0, 0, 100);
        alea = new Random();
        wid = new ArrayList<>();
        cx = w / 40;
        cy = h / 40;
        al = 250;
        dia = w;
        noFill();
    }

    @Override
    public void draw() {
        if (cx < w) {
            noFill();
            strokeWeight(alea.nextInt(11));
            stroke(330, 100, 100);
            ellipse(cx, cy, 17, 17);
            cx += w / 40;
        } else {
            if (cy < h-h/40) {
                cx = w / 40;
                cy += h / 40;
            } else {
                if (al > 0) {
                    stroke(0, 0, 0, al);
                    strokeWeight(3);
                    ellipse(w / 2, h / 2, dia, dia);
                    dia -= 3;
                    al--;
                } else {
                    noLoop();
                    save("tshirt009.png");
                }
            }
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Tshirt009" };
        Tshirt009 mySketch = new Tshirt009();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
