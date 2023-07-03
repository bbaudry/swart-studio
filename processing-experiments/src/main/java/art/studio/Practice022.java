package art.studio;

import processing.core.PApplet;


//practice shades
public class Practice022  extends PApplet {
    int w = 1000;
    int h = 1000;
    int res = 2;
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
        yoff=0;xoff=0;
        for (int j=0; j<h; j+=res){
            for (int i=0; i<w; i+=res){
                float n = noise(xoff,yoff,zoff);
                if (n<0.4){
                    fill(50,100,100);
                    stroke(50,100,100);
                }   
                if (n>=0.4&&n<0.5){
                    fill(230,100,100);
                    stroke(230,100,100);
                }
                if (n>=0.5&&n<0.58){
                    fill(140,100,100);
                    stroke(140,100,100);}
                if (n>=0.58){
                    noFill();noStroke();
//                    fill(0,0,0);
//                    stroke(0,0,0);//stroke(310,100,100);
                }
                ellipse(i,j,res,res);
                xoff += grain;
            }
            xoff=0;
            yoff+=grain;
        }  
        zoff+=0.01;
        noLoop();
        save("practice.png");
    } 


    public static void main(String[] args) {
        String[] processingArgs = { "Practice022" };
        Practice022 mySketch = new Practice022();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
