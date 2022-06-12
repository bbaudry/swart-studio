/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;
import java.util.Random;
import java.util.ArrayList;
import processing.core.PApplet;

public class Birth005 extends PApplet {
    int w = 3000;
    int h = 3000;
    int[] palettef = { 0, 20, 40, 60, 80 };
    int lou = 69;
    float x;
    float y;
    float wid;
    int hu;
    int force; // to set the saturation of HSB colors
    int ciel; // to set the brightness of HSB colors
    int iter;
    Random rd;

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
        iter=0;
        background(42,42,84);
        rd=new Random();
        //frameRate(1);
    }

    @Override
    public void draw() {
        if(iter<lou){
            flower();
            iter++;
        }
        else{
            noLoop();
            save("gift002.png");
        }
    }

    private void flower(){
        float cx=random((float)0.1,(float)0.9)*w;
        float cy=random((float)0.1,(float)0.9)*h;
        float rad = (float)0.25*w;
        for (int i =0; i<(int)random(lou,lou*2); i++){
            stroke(palettef[3],100,100);
        float a1 = (2*PI)*random(1);
        float a2 = a1;
        while (a2==a1){
            a2 = (2*PI)*random(1);
        }
        hu=palettef[(int)random(palettef.length-1)];
        float x1 = cx + random(rad/2)*cos(a1); 
        float y1 = cy + random(rad/2)*sin(a1); 
        float x2 = cx + random(rad/2)*cos(a2); 
        float y2 = cy + random(rad/2)*sin(a2); 
        noStroke();
        fill(hu,random(lou,100),random(lou,100));
        //ellipse(x1, y1, 4,4);
        ellipse(x2, y2, 4,4);
        noFill();
        stroke(hu,random(lou,100),random(lou,100));
        if (rd.nextBoolean()){
            bezier(x1, y1, x1+10, y2-10, x2-10, y2-10, x2, y2);
        }
        else{
            bezier(cx, cy, cx+10, cy-10, x2-10, y2-10, x2, y2);
        }   
    }
    } 

    public static void main(String[] args) {
        String[] processingArgs = { "Birth005 " };
        Birth005 mySketch = new Birth005();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
