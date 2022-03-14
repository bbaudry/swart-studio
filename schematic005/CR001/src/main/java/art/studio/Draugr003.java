package art.studio;

import processing.core.PApplet;

//Draugr is an exoplanet https://en.wikipedia.org/wiki/PSR_B1257%2B12_A
//the Draugr series is about circular shapes and random black lines
public class Draugr003  extends PApplet {
    int vis_w = 1000;
    int txt_w = 0;
    int h = 1000;
    int w = vis_w+txt_w;
    float x;
    float y;
    float txt_x;
    float txt_y;
    float txt_x_inc;
    float txt_y_inc;
    float cx;
    float cy;
    float radius;
    int iteration;
    int nb_iterations;
    int crater;
    int nb_craters;


    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        crater=0;
        nb_craters=40;
        cx=vis_w/2;
        cy=h/2;
        radius = (float)(vis_w*0.9);
        background(242,242,217);
        fill(233,233,211);
        stroke(0);
        ellipse(cx,cy,radius,radius);
    }

    @Override
    public void draw() {
        if (crater<nb_craters) {
            x = random(vis_w / 6, 5 * vis_w / 6);
            y = random(h / 6, 5 * h / 6);
            radius = random(h / 8);
            stroke(0);
            strokeWeight(random(3, 8));
            ellipse(x, y, radius, radius);
            crater++;
        }
        else{
            noLoop();
            save("Draugr003#001.png");
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Draugr003"};
        Draugr003 mySketch = new Draugr003();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
