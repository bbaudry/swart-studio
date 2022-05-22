/* Metadata {"endless":false, "BW": false, "knobs": false, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;

public class Wright001 extends PApplet{
    int w = 1000;
    int h = 1000;
    float[] palette = {};
    int step = 0;
    int maxSteps = 42 * 4;
    int variation = 10;
    int radius = 0;
    float shape;
    float orientation;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        frameRate(1);
        colorMode(HSB,360,100,100);
        fill(0,0,0);
        noLoop();      
    }

    @Override
    public void draw() {  
        background(0,0,100);
        while (step<maxSteps){
          fill(0,0,0);
          shape=random(42*2);
          float x = random(42*2,w-42*2);
          float y = random(42*2,h-42*2); 
          if (shape<42){
            //draw rectangle
            if (shape<42/10){radius=4;}
            if (shape<42-16.8){noFill();}
            orientation=random(42);
            if (orientation<42/3){rect(x,y,random(42*5),random(42),radius);}   
            else {rect(x,y,random(42),random(42*5),radius);} 
            radius=0;
          }
          else if (shape<42*1.8){
            //draw line
            if (shape<37.8) {line(x,y,x+random(42*6),y);}
            else {line(x,y,x,y+random(42*4));}
          }
          else{
            //draw circle
            if (shape>80) {fill(120,100,100);}
            float rad = random(42*2);
            ellipse(x,y,rad,rad);
          }
          step++;
        }
        save("Wright001.png");
    }



    public static void main(String[] args) {
        String[] processingArgs = { "Wright001"};
        Wright001 mySketch = new Wright001();
        PApplet.runSketch(processingArgs, mySketch);
    }

    
}
