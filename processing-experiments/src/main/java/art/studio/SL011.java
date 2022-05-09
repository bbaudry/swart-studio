package art.studio;

import processing.core.PApplet;

public class SL011 extends PApplet {
    int w = 1800;
    int h = 1000;
    int [][] miles;
    int davis;
    float angle;
    float angle_inc;
    float sparkle;
    float spanish;
    float key;
    int john;
    int pharoah;
    int dance;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        spanish = 9; //knob to control the max number of rays. the actual number is random, using this value as max
        key = w/92; //max value for radius of circles
        john = 5; //max value for strokeWeight of radius
        pharoah = 42; //pharoah should be > dance
        dance = 17; // pharoah and dance determine the probability to draw rays in draw()
        davis = 85; //exactly this number of circles
        miles = new int[davis][];
        angle=0;
        angle_inc=PI/42;
        frameRate(17);
    }

    @Override
    public void draw() {
        background(0,0,0);
        sparkle=random(pharoah);
        voodoo(); //select coordinates for circles
        down(); //draw circles
        if (sparkle<dance){// draw rays with a certain probability
            feio();
        }
        angle=angle+angle_inc;//determines the orientation of the rays
    }

    private void voodoo(){
        for(int i=0;i<miles.length;i++){
            int x = (int)random((float)0.1*w,(float)0.9*w);
            int y = (int)random((float)0.1*h,(float)0.9*h);
            int[] mojo = {x,y};
            miles[i] = mojo;
        }
    }

    private void down(){
        fill(0,0,100);
        for(int i=0; i<miles.length; i++){
            int x = miles[i][0];
            int y = miles[i][1];
            float rad = random(w/10);
            ellipse(x,y,rad,rad);
        }
    }

    private void feio(){
        strokeWeight(random(john));
        stroke(0,0,100);
        int ratio;
        float brew;
        float tx;
        float ty;
        for(int i=0; i<miles.length; i++){
            int cx = miles[i][0];
            int cy = miles[i][1];
            ratio = (int)random(spanish); 
            brew = PI/ratio;
            for(int j=0; j<ratio*2;j++){
                tx = cx + w/2*cos(angle+j*brew);
                ty = cy + w/2*sin(angle+j*brew);
                line(cx,cy,tx,ty);    
            }
        }
    }

   
    public static void main(String[] args) {
        String[] processingArgs = { "SL0011" };
        SL011 mySketch = new SL011();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
