/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import java.util.Random;
import java.util.ArrayList;
import processing.core.PApplet;

public class Birth006 extends PApplet {
    int w = 3000;
    int h = 3000;
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
        background(42, 42, 84);
        rd = new Random();
        stervilin = new ArrayList<>();
        // frameRate(1);
    }

    @Override
    public void draw() {
        if (constellations < lou*2) {
            leonard();
            constellations++;
        } else {
            if (rays < lou*4){
                //cohen();
                rays++;
            }
            else{
                noLoop();
                save("gift002.png");    
            }
        }
    }

    private void leonard() {
        float cx = random(w);//random((float) 0.1, (float) 0.9) * w;
        float cy = random(h);//random((float) 0.1, (float) 0.9) * h;
        float rad = random(1/lou, (float) 0.25) * w;
        int stars = lou-(rd.nextInt(lou)+1);
        for (int i = 0; i < stars; i++) {
            stroke(palettef[3], 100, 100);
            float a1 = (2 * PI) * random(1);
            float a2 = a1;
            while (a2 == a1) {
                a2 = (2 * PI) * random(1);
            }
            hu = palettef[(int) random(palettef.length - 1)];
            float x1 = cx + random(rad / 2) * cos(a1);
            float y1 = cy + random(rad / 2) * sin(a1);
            float x2 = cx + random(rad / 2) * cos(a2);
            float y2 = cy + random(rad / 2) * sin(a2);
            noStroke();
            fill(hu, random(lou, 100), random(lou, 100));
            ellipse(x2, y2, 4, 4);
            noFill();
            stroke(hu, random(lou, 100), random(lou, 100));
            if (rd.nextBoolean()) {
                ellipse(x1, y1, 4, 4);
                bezier(x1, y1, x1 + 10, y2 - 10, x2 - 10, y2 - 10, x2, y2);
            } else {
                bezier(cx, cy, cx + 10, cy - 10, x2 - 10, y2 - 10, x2, y2);
            }
            if (random(lou)<2){
                Float[] laita = new Float[2];
                laita[0]=x1;
                laita[1]=y1;
                stervilin.add(laita);
            }
        }
    }

    private void cohen(){
        int start;
        int end;
        start = rd.nextInt(stervilin.size()-1);
        end = start;
        while(end==start){
            end = rd.nextInt(stervilin.size()-1);
        }
        float cx1=stervilin.get(start)[0];
        float cy1=stervilin.get(start)[1];
        float cx2=stervilin.get(end)[0];
        float cy2=stervilin.get(end)[1];
        hu = palettef[(int) random(palettef.length - 1)];
        noFill();
        stroke(hu, random(lou, 100), random(lou, 100));
        strokeWeight(2);
        if((Math.abs(cx1-cx2)<w/2)&&(Math.abs(cy1-cy2)<h/2)){
        bezier(cx1, cy1, cx1 + (lou*2), cy1 - (lou*2), cx2 - (lou*2), cy2 - (lou*2), cx2, cy2);}
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Birth006 " };
        Birth006 mySketch = new Birth006();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
