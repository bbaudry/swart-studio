package art.studio;

import processing.core.PApplet;

public class Schotter extends PApplet {

    int w = 42*21;
    int h = 42*21;
    int side = w/10; //assume that w can be divided by 10
    int x = 0;
    int y = 0;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        frameRate(1);
        background(0xffffff);
        noLoop();
    }

    @Override
    public void draw() {
        stroke(0x000000);
        strokeWeight(6);
        noFill();
        while(x<w){
            rect(x,y,x+side,y+side);
            x=x+side;
        }
        x=0;
        y=y+side;
        row(5);
        x=0;
        y=y+side;
        row(15);
        x=0;
        y=y+side;
        row(25);
        x=0;
        y=y+side;
        row(30);
        x=0;
        y=y+side;
        row(35);
        x=0;
        y=y+side;
        row(40);
        x=0;
        y=y+side;
        row(45);
        x=0;
        y=y+side;
        row(50);
        x=0;
        y=y+side;
        row(55);
    }

    public void row(float seed){
        float r;
        boolean orientation=false;
        while(x<w){
            r = random(seed);
            if (orientation){
                quad(x, y, x+side, y-r, x+side+r, y+side-r, x+r, y+side);
                orientation = false;
            }
            else{
                quad(x, y, x+side, y+r, x+side-r, y+side+r, x-r, y+side);
                orientation = true;
            }
            x=x+side;
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Schotter" };
        Schotter mySketch = new Schotter();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
