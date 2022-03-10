package art.studio;

import processing.core.PApplet;

//Draugr is an exoplanet https://en.wikipedia.org/wiki/PSR_B1257%2B12_A
public class Draugr  extends PApplet {
    int w = 1000;
    int h = 1000;
    float x;
    float y;
    float cx;
    float cy;
    float radius;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        frameRate(12);
        cx=w/2;
        cy=h/2;
        radius = (float)(w*0.9);
        fill(233,233,211);
        stroke(0);
        background(242,242,217);
        ellipse(cx,cy,radius,radius);
    }

    @Override
    public void draw() {
        stroke(0);
        if (radius>0){
            rays((int)(random(3,8)));
            radius-=25;
        }
        else{
            radius = (float)(w*0.9);
            //noLoop();
        }
    }

    public void rays(int nb_rays){
        float angle1=random(0,2*PI);
        float angle2=angle1+random(PI/50, 20*PI/50);
        for(int i=0;i<nb_rays;i++){
            radius=radius-i;
            strokeWeight(2);
            arc(cx,cy,radius,radius,angle1,angle2);
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Draugr"};
        Draugr mySketch = new Draugr();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
