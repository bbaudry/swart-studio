/* Metadata {"endless":true, "BW": false, "knobs": false, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class SL003 extends PApplet {
    int w = 1000;
    int h = 1000;
    int x;
    int y;
    int len;
    int wid;
    Random rand;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        //frameRate(4);
        colorMode(HSB,360,100,100);
        rand = new Random();
        fill(0,0,0);
        noStroke();
        rect(0,0,w,h);
    }

    @Override
    public void draw() {
        x=rand.nextInt(w);
        y=rand.nextInt(h);
        len=rand.nextInt((int)w/11);
        wid=rand.nextInt((int)w/22);
        noisyFill(x,y,len,wid);
    }

    public void noisyFill(int x, int y, int len, int wid){
        float hu;
        noStroke();
        int cx;
        int cy;
        for(int i=0;i<len;i++){
            for(int j=0;j<wid;j++){
                cx=x+i;
                cy=y+j;
                if (cx>=450 & cx<550 & cy>= 450 & cy<550) {
                    fill(20,100,100);
                }
                else{
                    hu=random(360);
                    fill(hu,100,100);
                }
                rect(cx,cy,1,1);
                
            }
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "SL003" };
        SL003 mySketch = new SL003();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
