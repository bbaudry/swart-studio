package art.studio;

import processing.core.PApplet;

/* metadata: 
{
"move"=true, 
"BW"=true,
"glitch"=true 
}*/

public class SL012 extends PApplet {
    int w = 1800;
    int h = 1000;
    float cx1;
    float cy1;
    float drone1;
    float cx2;
    float cy2;
    float drone2;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        textSize(28);

        cx1=random(w/4,3*w/4);
        cy1=random(h/4,3*h/4);
        cx2=random(w/4,3*w/4);
        cy2=random(h/4,3*h/4);
        drone1=w;
        drone2=w/2;
        background(0,0,0);
    }

    @Override
    public void draw() {
        fill(0,0,100,205);
        ellipse(cx1,cy1, drone1, drone1);
        ellipse(cx2,cy2, drone2, drone2);
        drone1=(float)(drone1-1);
        drone2=(float)(drone2-1);
        fill(0,0,0);
        text(drone1, w/5, h/5);
        text(drone2, w/5, h/5+42);
        if(drone1==0){        
            cx1=random(w/4,3*w/4);
            cy1=random(h/4,3*h/4);
            drone1=w;
        }
        if(drone2==20){
            save("SL012.png");        
        }        
        if(drone2==0){
            cx2=random(w/4,3*w/4);
            cy2=random(h/4,3*h/4);
            drone2=w;
        }

    }


   
    public static void main(String[] args) {
        String[] processingArgs = { "SL012" };
        SL012 mySketch = new SL012();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
