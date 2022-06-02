package art.studio;

import processing.core.PApplet;

//practice circle with glow
public class Practice015  extends PApplet {
    int w = 1000;
    int h = 1000;
    float cx1 = 0;
    float cy1 = 0;
    float cx2 = 300;
    float cy2 = h;
    float eliane = 5;
    float len;
    float wid;
    int steps;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        background(1,0,0);
        steps = 272; 
        frameRate(7);
    }

    @Override
    public void draw() {
        background(1,0,0);
        stroke(random(360),0,0);
        //coordinates of origin and destination of one stripe
        cx1 = 0; cy1 = 0; 
        cx2 = 300; cy2 = h;
        //coordinates of one quad along the stripe 
        float cx3; float cy3;
        float cx4; float cy4;
        float t;

        float inc = (float)1/steps;
        fill(0,0,100);
        for(int i=0; i<steps; i++){ //steps is the number of stripe
            cx3=cx1+(i*eliane); //eliane is the number of shapes per stripe
            cy3=cy1;
            for (int j=0; j<steps; j++){
                t = (float)((j+1)*inc); 
                float pad = random(eliane); //pad is a random offset for each shape
                cx4 = (1 - t) * (cx1+(i*eliane)) + (t * (cx2+(i*eliane)));
                cy4 = (1 - t) * cy1 + (t * cy2);
                fill(random(30,60),80,100);
                quad(cx3-pad,cy3-pad,cx3+eliane,cy3-pad,cx4+eliane,cy4,cx4-pad,cy4);
                //if(random(11)<2){inner(cx3-pad,cx4,cy3-pad,cy4);}              
                cx3=cx4;
                cy3=cy4+pad;    
            }
        }
        noLoop();
    } 

    private void inner(float cx1, float cx2,float cy1, float cy2){
        float x1=cx1;
        float x2;
        float y1 = cy1;
        float y2;
        float pad = eliane/7;
        float inc = (float)1/steps;
        float t;
        for(int i=0; i<steps; i++){
            x1=cx1+(i*pad);
            y1=cy1;
        for (int j = 0; j < steps; j++) {
            t = (float) ((j + 1) * inc);
            x2 = (1 - t) * (cx1+(i*pad)) + (t * (cx2+(i*pad)));
            y2 = (1 - t) * cy1 + (t * cy2);
            fill(random(200,250), 100, 100);
            quad(x1, y1, x1 + pad, y1, x2 + pad, y2, x2, y2);
            x1 = x2;
            y1 = y2;
        }
    }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Practice015" };
        Practice015 mySketch = new Practice015();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
