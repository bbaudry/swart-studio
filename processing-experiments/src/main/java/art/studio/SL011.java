package art.studio;

import processing.core.PApplet;

public class SL011 extends PApplet {
    int w = 1800;
    int h = 1000;
    int x_step;
    int y_step;
    int [][] miles;
    int davis;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        x_step = 19;
        y_step = 49;
        davis = 7;
        miles = new int[davis][];
    }

    private void voodoo(){
        for(int i=0;i<miles.length;i++){
            int x = (int)random((float)0.4*w,(float)0.8*w);
            int y = (int)random((float)0.3*h,(float)0.7*h);
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
            ellipse(x,y,rad,rad); System.out.println("draw");
        }

    }

    @Override
    public void draw() {
        background(0,0,0);
        voodoo();
        down();
    }

   
    public static void main(String[] args) {
        String[] processingArgs = { "SL0011" };
        SL011 mySketch = new SL011();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
