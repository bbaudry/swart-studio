/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;
import java.util.Random;
import java.util.ArrayList;
import processing.core.PApplet;

public class Birth005 extends PApplet {
    int w = 1000;
    int h = 1000;
    int[] palettef = { 0, 20, 40, 60, 80 };
    int lou = 69;
    float x;
    float y;
    float wid;
    int col;
    int hu;
    int force; // to set the saturation of HSB colors
    int ciel; // to set the brightness of HSB colors


    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        x=0;
        y=0;
        wid=lou;
        col=0;
        background(palettef[2],100,100);//(float)(lou*1.3),(float)(lou*1.3));
    }

    @Override
    public void draw() {
        //fill(palettef[col],random(lou,100),random(lou,100));
        //rect(x,y,wid,wid);
        if(col==palettef.length-1){col=0;}else{col++;}
        if(x>=w-wid){x=0;y=y+wid;}else{x=x+wid;}
        if(y>=h){noLoop();}    
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Birth005 " };
        Birth005 mySketch = new Birth005();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
