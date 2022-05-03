package art.studio;

import processing.core.PApplet;

public class SL009 extends PApplet {
    int vis_w = 1000;
    int txt_w = 0;
    int w = vis_w+txt_w;
    int h = 1000;
    float y_inc;
    float y_step;
    float x_inc;
    float x_step;
    float john;
    float baldessari;
    int ratio;

    @Override
    public void settings() {
        size(w, h);
    }
    
    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        ratio=5;
   }

    @Override
    public void draw() {
        background(0, 0, 0);
        float flip = random(42);
        if (flip<2){
            shape();
        }
    }

    private void shape(){
        float r = (int)random(ratio);
        float o = (int)random(ratio);
        float not = w/ratio;
        float boring = h/ratio;
        john =(r * w / ratio);
        baldessari =  (o * h /ratio);
        fill(0, 0, 100);
        rect(john, baldessari, not, boring);
    }

    public static void main(String[] args) {
        String[] processingArgs = { "SL009" };
        SL009 mySketch = new SL009();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
