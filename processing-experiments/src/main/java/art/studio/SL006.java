package art.studio;

import processing.core.PApplet;

public class SL006 extends PApplet {
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
        y_inc=11;
        x_inc=42;
        y_step=0.1f;
        x_step=1;
    }

    @Override
    public void draw() {
        float john;
        float not;
        float boring;
        background(0,0,0);
        for(float baldessari=0; baldessari<h; baldessari=baldessari+y_inc){
            john=0;
            while(john<w){
                not=random(x_inc);
                boring=random(y_inc);
                fill(0,0,100);
                rect(john,baldessari,not,boring);
                john=john+not;
            }
        }
        fill(0,0,0);
        triangle(random(w), random(h), random(w), random(h), random(w), random(h));
        if(y_inc>h/5){x_step=-1;y_step=-0.1f;}
        if(y_inc<11){x_step=1;y_step=0.1f;}
        x_inc=x_inc+x_step;
        y_inc=y_inc+y_step;

    }


    public static void main(String[] args) {
        String[] processingArgs = { "SL006" };
        SL006 mySketch = new SL006();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
