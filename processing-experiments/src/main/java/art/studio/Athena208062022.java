/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;

public class Athena208062022 extends PApplet {
    int w = 3000;
    int h = 3000;
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
        colorMode(HSB, 360, 100, 100);
        background(230, 100, 80);
    }

    @Override
    public void draw() {
        background(230, 100, 80);
        noStroke();// stroke(0,0,100);
        chercheur();
        dor();
        noLoop();
        save("Athena208062022.png");
    }

    private void chercheur() {
        float x = 0;
        float y = 0;
        float chanteuse = w / 2;
        float moqueuse;
        float rieuse = chanteuse / 42;
        while (y < h) {
            moqueuse = 42;//random(42);
            while (x < chanteuse) {
                if (random(42) > 2) {
                    fill(random(45, 55), 100, 100);
                    rect(x, y, rieuse, moqueuse);
                }
                if (random(42) > 40) {
                    fill(random(45, 55), 100, 100);
                    rect(x, y, rieuse*3, moqueuse);
                    x=x+2*rieuse;
                }
                x=x+rieuse;
            }
            x=0;
            y = y + moqueuse;
        }
    }

    private void dor() {
        float x = w / 2;
        float y = 0;
        float chanteuse = w / 2;
        float moqueuse;
        float rieuse = chanteuse / 21;
        while (y < h) {
            moqueuse = 84;//random(84);
            while (x < w) {
                if (random(42) > 2) {
                    fill(random(45, 55), 100, 100);
                    rect(x, y, rieuse, moqueuse);
                }
                if (random(42) > 40) {
                    fill(random(45, 55), 100, 100);
                    rect(x, y, rieuse*3, moqueuse);
                    x=x+2*rieuse;
                }
                x=x+rieuse;
            }
            x=w/2;
            y = y + moqueuse;
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Athena208062022 " };
        Athena208062022 mySketch = new Athena208062022();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
