package art.algo;

import processing.core.PApplet;
import java.util.Random;

public class Truchet extends PApplet {
    int w = 1000;
    int h = 1000;
    Random rand;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        colorMode(HSB, 360, 100, 100);
        background(0, 0, 0);
        strokeCap(SQUARE);
        rand = new Random();
    }

    @Override
    public void draw() {
        int size = 111;
        noFill();
        stroke(0, 0, 100);
        strokeWeight((float) (size * 0.1));
        tiling(size);        
        noLoop();
    }

    public void tiling(int size) {
        for (int x = size; x < w - size*2; x += size) {
            for (int y = size; y < h - size*2; y += size) {
                int vera = rand.nextInt(0, 2);
                switch (vera) {
                    case 0:
                        tile2(x, y, size);
                        break;
                    case 1:
                        tile1(x, y, size);
                        break;
                    default:
                        break;
                }
            }
        }
    }

    public void tile1(int x, int y, int size) {
        strokeWeight((float) (size * 0.1));
        arc(x, y, size, size, 0, PI / 2);
        arc(x + size, y + size, size, size, PI, 3 * PI / 2);
    }

    public void tile2(int x, int y, int size) {
        strokeWeight((float) (size * 0.1));
        arc(x + size, y, size, size, PI / 2, PI);
        arc(x, y + size, size, size, 3 * PI / 2, 2 * PI);
    }

    public void mouseClicked() {
        exit();
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Truchet" };
        Truchet mySketch = new Truchet();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
