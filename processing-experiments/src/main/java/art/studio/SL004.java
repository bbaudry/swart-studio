package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class SL004 extends PApplet {
    int w = 1000;
    int h = 1000;
    int x;
    int y;
    int len;
    int wid;
    float hu;
    float not;
    float boring;
    Random rand;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        rand = new Random();
        fill(0,0,0);
        noStroke();
        rect(0,0,w,h);
        hu=random(360);
    }

    @Override
    public void draw() {
        x=rand.nextInt(w);
        y=rand.nextInt(h);
        drawPoint(x, y);
    }

    public void drawPoint(float x, float y){
        if (!isIN(x,y)){
            not=random(50);
            boring=random(90,100);
            fill(hu,not,boring);
            rect(x,y,random(1,5),random(1,5));
        }

    }

    public boolean isIN(float x, float y){
        //first check if the point is in square between (400,400) and (600,600), or in rectangle between (11,777) and (111,888)
        if ((x>=400 & x<600 & y>=400 & y<600)||(x>=11 & x<111 & y>=777 & y<888)){
            return true;
        }
        //second check if the point is in triangle 
        else{
            if (inTri(x,y)){
                return true;
            }
            else{
                return false;
            }
        }
    }

    //check if the point is in triangle (600,400) (400,100) (800,250)
    public boolean inTri(float x, float y){
        float triangleSurf = surfTri(600, 400, 400, 100, 800, 250);
        float tri1 = surfTri(x,y,600,400,400,100);
        float tri2 = surfTri(x,y, 400,100,800,250);
        float tri3 = surfTri(x,y,600,400,800,250);
        return(triangleSurf == tri1+tri2+tri3);
    }

    private float surfTri(float x1, float y1, float x2, float y2,float x3, float y3){
        return (float)Math.abs((x1*(y2-y3) + x2*(y3-y1)+ x3*(y1-y2))/2.0);
    }

    public static void main(String[] args) {
        String[] processingArgs = { "SL004" };
        SL004 mySketch = new SL004();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
