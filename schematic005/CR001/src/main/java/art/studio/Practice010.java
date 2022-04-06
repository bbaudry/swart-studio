package art.studio;

import processing.core.PApplet;
import java.io.*;
import java.util.*;
import org.json.simple.*;
import org.json.simple.parser.*;

//practice drawing parts of circles circles
public class Practice010  extends PApplet {
    int w = 1000;
    int h = 1000;
    float cx;
    float cy;
    float x1;
    float y1;
    float x2;
    float y2;
    float x3;
    float y3;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        background(0,0,0);
        cx = random(w/4,3*w/4);
        cy = random(3*h/4,h);
    }

    @Override
    public void draw() {
        int steps = (int)random(5,11);
        john(steps);
        //noLoop();
    } 

public void john(int steps){
    x1=0;
    y1=cy;
    for (int i=0; i<steps; i++){
        y2=y1-cy/steps;
        x2=x1+cx/steps;
        float c = random(120);
        fill(c,80,80);
        quad(x1,y1,x2,y2,x2+77-(i+1)*20,y2,x1+77-i*20,y1);
        x1=x2;
        y1=y2;
    }
    x1=cx;
    y1=0;
    for (int i=0; i<steps; i++){
        x2=x1+42*i*cos(0); 
        y2=y1+42*i*sin(0); 
        x3=x1+42*i*cos(PI/3); 
        y3=y2+42*i*sin(PI/3); 
        float c = random(120);
        stroke(c,80,80);
        strokeWeight(7);
        line(x2,y2,x3,y3);
    }
    
    fill(0,0,100);
    ellipse(cx,0,10,10);
}
    public static void main(String[] args) {
        String[] processingArgs = { "Practice 009" };
        Practice010 mySketch = new Practice010();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
