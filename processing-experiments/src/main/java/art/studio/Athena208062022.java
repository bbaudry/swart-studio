/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;

public class Athena208062022 extends PApplet {
    int w = 1000;
    int h = 1500;
    float x1;
    float x2;
    float y1;
    float y2;
    boolean east;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        background(230,100,80);
    }

    @Override
    public void draw() {
        background(230,100,80);
        noStroke();//stroke(0,0,100);
        chercheur();
        dor();
        noLoop();
    }

    private void chercheur(){
        float x=0;
        float y=0;
        float chanteuse = w/2;
        float moqueuse = random(42);
        while(y<h){
            if (random(42)>2){
                fill(random(45,55),100,100);
                rect(x,y,chanteuse,moqueuse);
            }
            y=y+moqueuse;
        }
    }

    private void dor(){
        float x=w/2;
        float y=0;
        float chanteuse = w/2;
        float moqueuse = random(84);
        while(y<h){
            if (random(42)>2){
                fill(random(45,55),100,100);
                rect(x,y,chanteuse,moqueuse);
            }
            y=y+moqueuse;
        }

    }

    public static void main(String[] args) {
        String[] processingArgs = { "Athena208062022 " };
        Athena208062022 mySketch = new Athena208062022();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
