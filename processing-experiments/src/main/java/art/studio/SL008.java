/* Metadata {"endless":true, "BW": true, "knobs": false, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;

public class SL008 extends PApplet {
    int vis_w = 2000;
    int txt_w = 0;
    int w = vis_w+txt_w;
    int h = 1000;
    float y_inc;
    float y_step;
    float x_inc;
    float x_step;
    float john;
    float baldessari;

    @Override
    public void settings() {
        size(w, h);
    }
    
    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        x_inc=142;
        y_inc=random(42);
        baldessari=0;
   }

    @Override
    public void draw() {
        background(0, 0, 0);
        john = 0;
        float not;
        float boring = y_inc;
        fill(0, 0, 100);
        while (john < w) {
            not = random(x_inc);
            rect(john, baldessari, not, boring);
            john = john + not + random(x_inc);
        }
        if (baldessari < h) {
            baldessari = baldessari + y_inc;
        }
        else {
            baldessari=0;    
        }
        y_inc=random(42);
        fill(0, 0, 0);
        float radius = random((float) 0.3 * w, (float) 0.5 * w);
        ellipse(random(w), random(h), radius, radius);
    }


    public static void main(String[] args) {
        String[] processingArgs = { "SL008" };
        SL008 mySketch = new SL008();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
