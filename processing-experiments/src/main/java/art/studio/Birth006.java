/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import java.util.Random;
import java.util.ArrayList;
import processing.core.PApplet;

public class Birth006 extends PApplet {
    int w = 1000;
    int h = 1000;
    int[] palettef = { 0, 20, 40, 60, 80 };
    int lou = 69;
    float x;
    float y;
    float wid;
    int hu;
    int force; // to set the saturation of HSB colors
    int ciel; // to set the brightness of HSB colors
    int constellations; // count the number of constellations
    int rays; // count the number of rays
    Random rd;
    ArrayList<Float[]> stervilin;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        x = 0;
        y = 0;
        wid = lou;
        constellations = 0;
        rays = 0;
//        background(42, 42, 84);
        background(0,0,0);
        rd = new Random();
        stervilin = new ArrayList<>();
        init();
    }

    @Override
    public void draw() {
        if (constellations < stervilin.size()) {
            //point();
            if(rd.nextInt(lou)<lou/20){
                //suzanne(stervilin.get(constellations)[0],stervilin.get(constellations)[1]);
                marianne();
            }
            constellations++;
        } else {
            save("gift002.png");
            noLoop();
        }
    }

    private void suzanne(float cx,float cy) {
        noFill();
        strokeWeight(lou / 10);
        strokeCap(SQUARE);
        float santorin = lou/2;
        float angle1 = random(0,2*PI); 
        float angle2;
        int shares = 20;
        boolean high = true;
        //float rand_angle = random(PI / 50, 20 * PI / 50);
        for (int i=0; i<shares; i++) {
            angle2 = angle1 + (2*PI)/shares;
            hu = palettef[rd.nextInt(palettef.length - 1)];
            stroke(hu, 100, 100);
            if (high) {
                arc(cx, cy, santorin, santorin, angle1, angle2);
                arc(cx, cy, santorin / 2, santorin / 2, angle1, angle2);
                high=false;
            }
            else{
                arc(cx, cy, (3*santorin) / 4, (3*santorin) / 4, angle1, angle2);
                arc(cx, cy, santorin / 4, santorin / 4, angle1, angle2);
                high=true;
            }
            angle1 = angle1 + (2*PI)/shares;
        }
    }

    private void marianne(){
        int i = rd.nextInt(stervilin.size()-1);
        int j = i;
        while (j==i){
            j = rd.nextInt(stervilin.size()-1);
        }
        float cx1 = stervilin.get(i)[0];
        float cy1 = stervilin.get(i)[1];
        float cx2 = stervilin.get(j)[0];
        float cy2 = stervilin.get(j)[1];
        noFill();
        strokeWeight(1);
        hu = palettef[rd.nextInt(palettef.length - 1)];
        stroke(hu, 100, 100);
        if(rd.nextBoolean()){
            bezier(cx1, cy1, cx1+lou*2, cy1, cx2-lou*2, cy2-lou*2, cx2, cy2);
        }
        else{
            bezier(cx1, cy1, cx1-lou*4, cy1, cx2+lou*4, cy2+lou*4, cx2, cy2);
        }
        suzanne(cx1, cy1);
        suzanne(cx2, cy2);
    }

    private void init() {
        int step = lou/4;
        float x = step;
        float y = step;
        while (x < w) {
            while (y < h) {
                Float[] sunshine = new Float[2];
                sunshine[0] = x-step/2;//random(x - step, x);
                sunshine[1] = y-step/2;//random(y - step, y);
                stervilin.add(sunshine);
                y = y + step;
            }
            y = step;
            x = x + step;
        }
    }

    private void point() {
        hu = palettef[rd.nextInt(palettef.length - 1)];
        fill(hu, 100, 100);
        noStroke();
        ellipse(stervilin.get(constellations)[0], stervilin.get(constellations)[1], 10, 10);
    }



    public static void main(String[] args) {
        String[] processingArgs = { "Birth006 " };
        Birth006 mySketch = new Birth006();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
