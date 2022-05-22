/* Metadata {"endless":false, "BW": false, "knobs": false, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;

public class Banner004 extends PApplet {
    int w = 1234;
    int h = 567;
    float x1;
    float y1;
    float x2;
    float y2;
    int hu1;
    int hu2;
    int iterations;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        x1=random(5,w-5);
        y1=random(5,h-5);
        iterations=0;
        strokeWeight(1);
        hu1=(int)random(360);
        //following is to ensure that hu2>hu1;
        if (hu1>180){hu2=hu1;hu1=hu2-180;}
        else {hu2=hu1+180;}
        background(hu2,70,70);
    }

    @Override
    public void draw() {
        x2=random(5,w-5);
        y2=random(5,h-5);
        if(iterations%2==0){
            fill(hu1,70,70);
            stroke(hu1,70,70);
        }
        else{
            fill(hu2,70,70);
            stroke(hu2,70,70);
        }
        ellipse(x1,y1,10,10);
        ellipse(x2,y2,10,10);
        line(x1,y1,x2,y1);
        line(x2,y1,x2,y2);

        x1=x2;
        y1=y2;
        if(iterations==1777){save("B004.png");}
        iterations++;
    }
   
    public static void main(String[] args) {
        String[] processingArgs = { "Banner004" };
        Banner004 mySketch = new Banner004();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
