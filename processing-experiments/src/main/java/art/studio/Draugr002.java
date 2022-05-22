/* Metadata {"endless":false, "BW": true, "knobs": false, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;

//Draugr is an exoplanet https://en.wikipedia.org/wiki/PSR_B1257%2B12_A
public class Draugr002  extends PApplet {
    int w = 1000;
    int h = 1000;
    float x;
    float y;
    float cx;
    float cy;
    float radius;
    int count;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        frameRate(42);
        cx=w/2;
        cy=h/2;
        radius = (float)(w*0.9);
        count = 0;
        background(0);
        fill(10,10,10);
        stroke(233,233,211);
        ellipse(cx,cy,radius,radius);
    }

    @Override
    public void draw() {
        stroke(233,233,211);
        if (radius>0){
            rays((int)(random(3,8)));
            radius-=25;
        }
        else{
            if (count<5){
                radius = (float)(w*0.9);
                count++;
            }
            else{
                noLoop();
                save("Draugr002_rays.png");
            }
        }
        strokeWeight(random(2,5));
        stroke(10,10,10);
        x=random(w/100, w-w/100);
        y=random(h/100, h-h/100);
        fill(233,233,211);
        rect(x, y, random(0,w/10), random(0,h/10));
        noFill();
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
        String[] processingArgs = { "Draugr002"};
        Draugr002 mySketch = new Draugr002();
        PApplet.runSketch(processingArgs, mySketch);
    }
}