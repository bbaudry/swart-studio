package art.studio;

import processing.core.PApplet;

public class SL007 extends PApplet {
    int vis_w = 2000;
    int txt_w = 0;
    int w = vis_w+txt_w;
    int h = 1000;
    float y_inc;
    float y_step;
    float x_inc;
    float x_step;

    @Override
    public void settings() {
        size(w, h);
    }
    
    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        x_inc=142;
        //frameRate(1);
    }

    @Override
    public void draw() {
        float john;
        float not;
        float boring;
        y_inc=random(142);
        background(0,0,0);
        for(float baldessari=0; baldessari<h; baldessari=baldessari+y_inc){
            john=0;
            boring=y_inc;
            fill(0,0,100);
            while(john<w){
                not=random(x_inc);
                rect(john,baldessari,not,boring);
                john=john+not+random(x_inc);
            }
            y_inc=random(142);
        }
        fill(0,0,0);
        ellipse(random(w),random(h),random(w/5),random(w/5));
    }


    public static void main(String[] args) {
        String[] processingArgs = { "SL004" };
        SL007 mySketch = new SL007();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
