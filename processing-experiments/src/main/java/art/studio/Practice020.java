package art.studio;

import processing.core.PApplet;


//practice shades
public class Practice020  extends PApplet {
    int w = 1000;
    int h = 1000;
    float cx;
    float cy;
    float ra;
    float x1;
    float y1;
    float x2;
    float y2;
    float eps;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
      colorMode(HSB,360,100,100);
      cx=w/2;
      cy=h/2;
      ra=w;
    }

    @Override
    public void draw() {noStroke();
        background(1,0,0); 

        fill(50,50,100,60);
        rect(500,500,50,50);
        fill(50,50,100,160);
        rect(500,600,50,50);
        fill(50,50,100,260);
        rect(500,700,50,50);

        fill(50,100,100);
        rect(600,500,50,50);
        fill(50,50,100);
        rect(600,600,50,50);
        fill(50,10,100);
        rect(600,700,50,50);

        fill(50,100,100);
        rect(700,500,60,60);
        fill(50,50,100);
        rect(704,504,52,52);
        fill(50,10,100);
        rect(708,508,44,44);

        fill(50,10,100);
        rect(700,600,60,60);
        fill(50,50,100);
        rect(704,604,52,52);
        fill(50,100,100);
        rect(708,608,44,44);

        fill(50,100,100,60);
        rect(800,500,60,60);
        fill(50,100,100,60);
        rect(804,504,52,52);
        fill(50,100,100,60);
        rect(808,508,44,44);

        fill(50,100,100,60);
        rect(800,600,60,60);
        fill(50,100,100,160);
        rect(804,604,52,52);
        fill(50,100,100,260);
        rect(808,608,44,44);

        x1=100;
        y1=600;
        x2=500;
        y2=200;
        eps=45;
        build(x1, y1, x2, y2, eps,random(180,320));

        x1=900;
        y1=600;
        x2=600;
        y2=200;
        eps=45;
        build(x1, y1, x2, y2, eps,random(180,320));
        fill(50,100,100); ellipse(x2,y2,10,10);

        //noLoop();
    } 

    private void build(float x1,float y1,float x2,float y2,float eps,float hu){
        int steps = 15;
        float inc = eps/steps;
        float fugee;
        noStroke();
        if (x1<x2){
            for (int i=1; i<=steps; i++){
                fill(hu,100,100,25);
                fugee = i*inc;
                quad(x1+fugee, y1+fugee, x1-fugee, y1-fugee, x2-fugee, y2-fugee, x2+fugee, y2+fugee);
            }
        }
        else{
            for (int i=1; i<=steps; i++){
                fill(hu,100,100,25);
                fugee = i*inc/2;
                quad(x1-fugee, y1+fugee, x1+fugee, y1-fugee, x2+fugee, y2-fugee, x2-fugee, y2+fugee);
            }    
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Practice020" };
        Practice020 mySketch = new Practice020();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
