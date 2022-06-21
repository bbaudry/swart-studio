/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import java.util.Random;
import java.util.ArrayList;
import processing.core.PApplet;

public class Birth008 extends PApplet {
    int w = 1000;
    int h = 1000;
    int[] palettef = { 50,  230, 320 };// 95, 140, 185, 275
    int lou = 69;
    float hu;
    float cx;
    float cy;
    Random rd;
    ArrayList<Float[]> milkyWay;
    int stellar;
    int iterations;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        rd = new Random();
        cx = 0;
        cy = 0;
        stellar = 0;
        iterations = 0;
        milkyWay = new ArrayList<>();
        init();
        background(230, 80, 80);
        fill(0, 100, 100);
        noStroke();
    }

    @Override
    public void draw() {
        if (stellar < milkyWay.size()) {
            star(milkyWay.get(stellar)[0], milkyWay.get(stellar)[1]);
            stellar++;
        } else {
            if (iterations < 2){
                stellar = 0;
                iterations++;
            }
            else {
                rays();
            }
//            noLoop();
        }
    }

    private void star(float cx, float cy) {
        float rad = w / lou;
        stroke(0, 0, 100);
        int steps = rd.nextInt(lou);
        for (int i = 0; i < steps; i++) {
            float r = random((float)0.5, (float)2) * rad;
            float ang = random(2 * PI);
            hu = palettef[(int) random(palettef.length)];
            stroke(hu, random(80, 100), random(80, 100));
            strokeWeight(random(1,2));
            fill(hu, random(80, 100), random(80, 100));
            float x = cx + r * cos(ang);
            float y = cy + r * sin(ang);
            ellipse(x, y, 2, 2);
            noFill();
            float offset=random(lou);
            if (x < cx && y < cy) {
                bezier(cx, cy, cx - offset, cy, x, cy - offset, x, y);
            }
            if (x >= cx && y < cy) {
                bezier(cx, cy, cx + offset, cy, x, cy - offset, x, y);
            }
            if (x >= cx && y >= cy) {
                bezier(cx, cy, cx + offset, cy, x, cy + offset, x, y);
            }
            if (x < cx && y >= cy) {
                bezier(cx, cy, cx - offset, cy, x, cy + offset, x, y);
            }
        }
    }

    private void rays(){
        int birth = rd.nextInt(milkyWay.size()-1);
        int death = birth;
        while (death==birth){
            death = rd.nextInt(milkyWay.size()-1);
        }
        float x1=milkyWay.get(birth)[0];
        float y1=milkyWay.get(birth)[1];
        float x2=milkyWay.get(death)[0];
        float y2=milkyWay.get(death)[1];
        int offset=rd.nextInt(lou*11);
        if (x1 < x2 && y1 < y2) {
            bezier(x2, y2, x2 - offset, cy, x1, cy - offset, x1, y1);
        }
        if (x1 >= x2 && y1 < y2) {
            bezier(x2, y2, x2 + offset, cy, x1, cy - offset, x1, y1);
        }
        if (x1 >= x2 && y1 >= y2) {
            bezier(x2, y2, x2 + offset, cy, x1, cy + offset, x1, y1);
        }
        if (x1 < x2 && y1 >= y2) {
            bezier(x2, y2, x2 - offset, cy, x1, cy + offset, x1, y1);
        }        
    }

    private void init() {
        for (int i = 0; i < lou/2; i++) {
            Float[] coord = new Float[2];
            coord[0] = random((float)0.05,(float)0.95)*w;
            coord[1] = random((float)0.05,(float)0.95)*h;
            milkyWay.add(coord);
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = {"Birth008"};
        Birth008 mySketch = new Birth008();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
