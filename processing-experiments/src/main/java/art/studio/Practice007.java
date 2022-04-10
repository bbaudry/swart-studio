package art.studio;

import processing.core.PApplet;
import processing.core.PShape;

//practice drawing parts of circles circles
public class Practice007  extends PApplet {
    int w = 1000;
    int h = 1000;
    float move = 1;
    float r = random(256);
    float g = random(256);
    float b = random(256);
    float cChange = 2;
    PShape sh;
    int count;
    int max;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        //frameRate(1);
        count = 0;
        max = 2;
        background(255,255,255);
        //noLoop();
        noFill();
        sh = createShape();
    }

    @Override
    public void draw() {
        if (count<max){
            circle_chunk(w/2, h/2, 333);
            //shape(sh,100,100);
            count++;
        }
        else{
            noLoop();
            save("practice.png");
        }
    } 

    public void circle_chunk(float cx, float cy, float radius){
        float angle1=random(0,2*PI); 
        float rand_angle = random(PI/50, 20*PI/50);
        float angle2=angle1+rand_angle;
        float x1 = cx + radius*cos(angle1);
        float x2 = cx + radius*cos(angle2);
        float y1 = cy + radius*sin(angle1);
        float y2 = cy + radius*sin(angle2);
        float x3 = cx + radius/2*cos(angle1);
        float x4 = cx + radius/2*cos(angle2);
        float y3 = cy + radius/2*sin(angle1);
        float y4 = cy + radius/2*sin(angle2);
        strokeWeight(142);
        strokeCap(SQUARE);
        stroke(242,11,88);
        arc(cx,cy,radius,radius,angle1,angle2);
        arc(cx,cy,radius*2,radius*2,angle1,angle2);
        strokeWeight(4);
        stroke(0);
        arc(cx,cy,radius,radius,angle1,angle2);
        arc(cx,cy,radius*2,radius*2,angle1,angle2);

        line(x3,y3,x1,y1);
        line(x4,y4,x2,y2);
        noFill();
        sh.beginShape();
        sh.fill(42,42,250,20);
        sh.vertex(x3, y3);
        sh.vertex(x1, y1);
        sh.vertex(x2, y2);
        sh.vertex(x4, y4);
        sh.vertex(x3, y3);
        sh.endShape(CLOSE);
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Practice 007" };
        Practice007 mySketch = new Practice007();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
