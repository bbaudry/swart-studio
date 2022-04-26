package art.studio;

import processing.core.PApplet;
import java.util.Random;
import art.Knob;

import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.Map;

import org.json.simple.JSONObject;

public class SL005 extends PApplet {
    int vis_w = 2000;
    int txt_w = 0;
    int w = vis_w+txt_w;
    int h = 1000;
    int y_inc;
    float x_inc;

    @Override
    public void settings() {
        size(w, h);
    }
    
    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        y_inc=22;
        x_inc=62;
    }

    @Override
    public void draw() {
        float john;
        float not;
        float boring;
        background(0,0,0);
        for(int baldessari=0; baldessari<h; baldessari=baldessari+y_inc){
            john=0;
            while(john<w){
                not=random(x_inc);
                boring=random(y_inc);
                fill(0,0,100);
                rect(john,baldessari,not,boring);
                john=john+not;
            }
        }
        fill(0,0,0);
        triangle(random(w), random(h), random(w), random(h), random(w), random(h));
    }


    public static void main(String[] args) {
        String[] processingArgs = { "SL004" };
        SL005 mySketch = new SL005();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
