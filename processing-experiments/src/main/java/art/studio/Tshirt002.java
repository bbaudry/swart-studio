/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import java.nio.ReadOnlyBufferException;

import processing.core.PApplet;

public class Tshirt002 extends PApplet {
    int ratio = 1;
    int w = 1000*ratio;
    int h = 1000*ratio;
    int resolution = 4;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100,250);
        background(0,0,100);   
        noFill();
        stroke(0,0,100);
    }

    @Override
    public void draw() {
        if(frameCount < 10){
            //background(0,0,100);
            layer((float)(w*0.5), w/2, h/2);
        }
        else{
            save("tshirt002.png");
            noLoop();
        }

    }


    private void layer(float wid, float cx, float cy){
        noStroke();
        if(random(42)>31){fill(320,100,100,42);}
        else{fill(180,100,100,42);}
        if (wid>33){
            if (random(42)<31){
                layer(wid/2, (float)(cx-wid*0.5)+random(-7,7), (float)(cy-wid*0.5)+random(-7,7));
            }
            else{
                rect(cx-wid,cy-wid,wid+random(-7,7),wid+random(-7,7));
            }

            if (random(42)<31){
                layer(wid/2, (float)(cx+wid*0.5)+random(-7,7), (float)(cy-wid*0.5)+random(-7,7));
            }
            else{
                rect(cx-wid,cy-wid,wid+random(-7,7),wid+random(-7,7));
            }
            
            if (random(42)<31){
                layer(wid/2, (float)(cx+wid*0.5)+random(-7,7), (float)(cy-wid*0.5)+random(-7,7));
            }
            else{
                rect(cx-wid,cy-wid,wid+random(-7,7),wid+random(-7,7));
            }

            if (random(42)<31){
                layer(wid/2, (float)(cx+wid*0.5)+random(-7,7), (float)(cy+wid*0.5)+random(-7,7));
            }
            else{
                rect(cx-wid,cy-wid,wid+random(-7,7),wid+random(-7,7));
            }
        }
        else{
                rect(cx-wid,cy-wid,wid+random(-7,7),wid+random(-7,7));
                rect(cx-wid,cy-wid,wid+random(-7,7),wid+random(-7,7));
                rect(cx-wid,cy-wid,wid+random(-7,7),wid+random(-7,7));
            rect(cx-wid,cy-wid,wid+random(-7,7),wid+random(-7,7));
        }
    }
    
    public static void main(String[] args) {
        String[] processingArgs = { "Tshirt002 " };
        Tshirt002 mySketch = new Tshirt002();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
