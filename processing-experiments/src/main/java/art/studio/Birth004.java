/* Metadata {"endless":false, "BW": false, "knobs": "true", "data": false, "interaction": false}*/
package art.studio;

import java.util.Random;

import javax.rmi.ssl.SslRMIClientSocketFactory;

import processing.core.PApplet;

public class Birth004 extends PApplet {
    int w = 1000;
    int h = 1000;
//    int[] palettej = { 250, 310, 10, 70, 130, 190 };
    int[] palettej = { 200, 220, 240, 260, 280 };
    Random rand;
    int rimbaud = 70;
    float poem;
    int force; //to set the saturation of HSB colors
    int ciel;  //to set the brightness of HSB colors
    float ivre = sqrt(rimbaud);
    float orx;
    float ory;
    float dex;
    float dey;
    
    int hu;
    boolean grow;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        rand = new Random();
        frameRate(5);
        force=100;
        ciel=100;
        noStroke();
        orx=100;
        ory=0;
        dex=0;
        dey=50;
        grow=true;
        background(50,force,ciel);
    }

    @Override
    public void draw() {
        if (grow && orx > w && dey > h) {
            grow = false;
        }
        else{
            float wi = random(rimbaud/2,rimbaud);
            orx=orx+wi;
            ory=0;
            dex=0;
            dey=dey+wi;
            stripe(orx, ory, dex, dey, wi);
        }
        if (!grow && orx > w && ory > h) {
            orx = 0;
            ory = 0;
            noLoop();// background(palettej[1], force, ciel);
        }
    }


    private void stripe (float orx, float ory, float dex, float dey, float wi){

    }


    public static void main(String[] args) {
        String[] processingArgs = { "Birth004 " };
        Birth004 mySketch = new Birth004();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
