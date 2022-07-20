/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import java.util.Random;

import java.util.ArrayList;

import processing.core.PApplet;

public class Birth004Off extends PApplet {
    //int w = 1000;
    //int h = 1500;
    int w = 4961;
    int h = 7016;
    float xorig = w/17;
    float xdest = w-xorig;
    float yorig = (h-(w-(2*xorig)))/2;
    float ydest = h-yorig;
    int[] palettej = { 180, 200, 220, 240, 260 };
    Random rand;
    int rimbaud = 70;
    float poem;
    int force; // to set the saturation of HSB colors
    int ciel; // to set the brightness of HSB colors
    float ivre = sqrt(rimbaud);
    float orx;
    float ory;
    float dex;
    float dey;
    ArrayList<Float> increments;

    int hu;
    boolean grow;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        increments = new ArrayList<>();
        rand = new Random();
        // frameRate(5);
        force = 100;
        ciel = 100;
        noStroke();
        orx = xorig;
        ory = yorig;
        dex = xorig;
        dey = yorig;
        grow = true;
        stroke(0,0,0);
        background(50, 0, ciel);
//        noLoop();save("gift004off.png");exit();
    }

    @Override
    public void draw() {
        float wi = rimbaud / 10;
        if (grow && orx > xdest && dey > ydest) {
            grow = false;
            orx = xdest;
            ory = yorig;
            dex = xdest;
            dey = yorig;
        } 
        if(grow) {
            orx = orx + wi;
            ory = yorig;
            dex = xorig;
            dey = dey + wi;
            stripe_grow(orx, ory, dex, dey, wi);
        }
        else{
            orx = orx - wi;
            ory = ory + wi;
            dex = xdest;
            dey = dey + wi;
            stripe_down(orx, ory, dex, dey, wi);
            if(ory>ydest && dey>ydest){noLoop();save("gift004off.png");exit();}
        }
    }

    private void stripe_grow(float orx, float ory, float dex, float dey, float wi) {
        float x1 = orx;
        float y1 = ory;
        float x2;
        float y2;
        float t;
        float steps = orx / (rimbaud / 10);
        float inc = (float) 1 / steps;
        float mul;
        float i=1;
        while (i < steps) {
            mul = (int)random(1,4);
            i=i+mul;
            t = (float) ((i) * inc);
            x2 = (1 - t) * orx + (t * dex);
            y2 = (1 - t) * ory + (t * dey);
            hu = (int) random(palettej.length);
            fill(palettej[hu], force, ciel);
            float choose = random(rimbaud);
            if (choose < rimbaud/10) {
                float twowi = 3 * wi;
                quad(x1, y1, x1 - twowi, y1 - twowi, x2 - twowi, y2 - twowi, x2, y2);
            }
            if (choose >= rimbaud/10 && choose < rimbaud/8) {
                float twowi = 7 * wi;
                quad(x1, y1, x1 - twowi, y1 - twowi, x2 - twowi, y2 - twowi, x2, y2);
            }
            if (choose >= rimbaud/8) {
                quad(x1, y1, x1 - wi, y1 - wi, x2 - wi, y2 - wi, x2, y2);
            }
            x1 = x2;
            y1 = y2;
        }
    }

    private void stripe_down(float orx, float ory, float dex, float dey, float wi) {
        float x1 = orx;
        float y1 = ory;
        float x2;
        float y2;
        float t;
        float steps = ory / (rimbaud / 10);
        float inc = (float) 1 / steps;
        float mul;
        float i=1;
        while (i < steps) {
            mul = (int)random(1,4);
            i=i+mul;
            t = (float) ((i) * inc);
            x2 = (1 - t) * orx + (t * dex);
            y2 = (1 - t) * ory + (t * dey);
            hu = (int) random(palettej.length);
            fill(palettej[hu], force, ciel);
            float choose = random(rimbaud);
            if (choose < rimbaud/10) {
                float twowi = 3 * wi;
                quad(x1, y1, x1, y1 - twowi, x2, y2 - twowi, x2, y2);
            }
            if (choose >= rimbaud/10 && choose < rimbaud/8) {
                float twowi = 7 * wi;
                quad(x1, y1, x1, y1 - twowi, x2, y2 - twowi, x2, y2);
            }
            if (choose >= rimbaud/8) {
                quad(x1, y1, x1, y1 - wi, x2, y2 - wi, x2, y2);
            }
            x1 = x2;
            y1 = y2;
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Birth004Off " };
        Birth004Off mySketch = new Birth004Off();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
