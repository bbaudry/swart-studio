package art.studio;

import processing.core.PApplet;


//practice shades
public class Practice022  extends PApplet {
    int w = 1000;
    int h = 1000;
    int res = 5;
    float xoff = (float)0.0;
    float yoff = (float)0.0;
    float zoff =(float) 0.0;
    float grain = (float)0.05;


    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        background(0,0,0);
        
    }

    @Override
    public void draw() {
        background(0,0,0);
        yoff=0;
        for (int j=0; j<h; j+=res){
            for (int i=0; i<w; i+=res){
                float s = noise(xoff,yoff,zoff)*100+170;
                fill(s,100,100);
                stroke(s,100,100);
                rect(i,j,res,res);
                xoff += grain;
            }
            xoff=(float)0.0;
            yoff+=grain;
        }  
        zoff+=0.01;
        //noLoop();

    } 


    public static void main(String[] args) {
        String[] processingArgs = { "Practice022" };
        Practice022 mySketch = new Practice022();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
