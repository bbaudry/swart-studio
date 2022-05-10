package art.studio;

import processing.core.PApplet;

public class Pillars001 extends PApplet {
    int w = 1500;
    int h = 1000;
    int layers;
    int width;
    float x;
    float y;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        layers = 87;
        colorMode(HSB,360,100,100);
        background(0,0,0);
        layers=128;
        width=64;
    }

    @Override
    public void draw() {
        x=0;
        y=0;
        column(x,y,7);
        x=x+width*7+84;
        y=84;
        column(x,y,5);
        x=x+width*5+84;
        y=42;
        column(x,y,6);
    }

    private void column(float x, float y, int w){
        float red;
        for (int i=0;i<layers;i++){
            for (int j=0;j<width;j++){
                red=random(42);
                if (red<1){fill(0,100,100);}
                else{fill(220,random(40,100),100);}
                rect(x+j*w,y+i*w,w,w);

            }
        }
    }

   
    public static void main(String[] args) {
        String[] processingArgs = { "Pillars001" };
        Pillars001 mySketch = new Pillars001();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
