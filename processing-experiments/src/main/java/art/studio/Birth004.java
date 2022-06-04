/* Metadata {"endless":false, "BW": false, "knobs": "true", "data": false, "interaction": false}*/
package art.studio;

import java.util.Random;

import java.util.ArrayList;

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
        //frameRate(5);
        force=100;
        ciel=100;
        noStroke();
        orx=0;
        ory=0;
        dex=0;
        dey=0;
        grow=true;
        background(50,force,ciel);
    }

    @Override
    public void draw() {
        float wi = rimbaud/10;//random(rimbaud/2,rimbaud);
        if (grow && orx > w && dey > h) {
            grow = false;
            orx=0;
            ory=0;
            dex=0;
            dey=0;
    
            noLoop();// background(palettej[1], force, ciel);
        }
        else{
            if (grow){
            orx=orx+wi;
            ory=0;
            dex=0;
            dey=dey+wi;
            stripe(orx, ory, dex, dey, wi);}
            else{
                orx=orx+wi*4;
                ory=0;
                dex=0;
                dey=dey+wi*4;
                if(random(11)<1){stripe(orx, ory, dex, dey, wi*2);}}    
            }
        }/*
        if (!grow && orx > w && ory > h) {
            orx = 0;
            ory = 0;
            noLoop();// background(palettej[1], force, ciel);
        }*/
    


    private void stripe (float orx, float ory, float dex, float dey, float wi){
        float x1=orx;
        float y1=ory;
        float x2;
        float y2;
        float t;
        float steps = orx/(rimbaud/10);
        float inc = (float)1/steps;
        for (int i=0;i<steps;i++){
            t = (float)((i+1)*inc); 
            x2 = (1 - t) * orx + (t * dex);
            y2 = (1 - t) * ory + (t * dey);
            hu = (int)random(palettej.length);
            fill(palettej[hu],force,ciel);    
            float choose = random(rimbaud);
            if(choose<7){
                float twowi = 5*wi;
                quad(x1, y1, x1-twowi, y1-twowi, x2-twowi, y2-twowi, x2, y2);
            }
            if(choose>=7 && choose<14){
                float twowi = 10*wi;
                quad(x1, y1, x1-twowi, y1-twowi, x2-twowi, y2-twowi, x2, y2);
                            }
                            if(choose>=14){
                                quad(x1, y1, x1-wi, y1-wi, x2-wi, y2-wi, x2, y2);}
            x1=x2;
            y1=y2;

        }
    }


    public static void main(String[] args) {
        String[] processingArgs = { "Birth004 " };
        Birth004 mySketch = new Birth004();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
