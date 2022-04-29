package art.studio;

import processing.core.PApplet;

public class SL005 extends PApplet {
    int vis_w = 2000;
    int txt_w = 0;
    int w = vis_w+txt_w;
    int h = 1000;
    float y_inc;
    float y_step;
    float min_y_inc;
    float max_y_inc;
    float x_inc;
    float x_step;

    @Override
    public void settings() {
        size(w, h);
    }
    
    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        //min_y_inc must be lower than max_y_inc; all _inc values must be originally positive
        min_y_inc=h/111;
        max_y_inc=h/7;
        y_inc=min_y_inc;
        x_inc=42;
        //both values must be positive
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
        /*values of x_step and y_step are originally positive, so y_inc and x_inc grow; 
        when y_inc reaches a max value, we negate the values to let the _inc values decrease;
        when y_inc reaches a min value, we negate again, turning the _step values positive to let the _inc values increase againy;
        this creates a perpetual movement of increase/decrease, a sort of pulse
        */
        if(y_inc>max_y_inc){x_step=-x_step;y_step=-y_step;}
        if(y_inc<min_y_inc){x_step=-x_step;y_step=-y_step;}
        x_inc=x_inc+x_step;
        y_inc=y_inc+y_step;
    }


    public static void main(String[] args) {
        String[] processingArgs = { "SL007" };
        SL005 mySketch = new SL005();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
