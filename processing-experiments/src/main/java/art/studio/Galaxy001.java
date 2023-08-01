/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Galaxy001 extends PApplet {
    //Galaxy 04 resolution:720 × 1600
    int w = 720;
    int h = 1600;
    Random alea;
        float cx=(float)(0.5*w);
        float cy=(float)(0.5*h);


    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        background(0,0,0);
        noStroke();
        alea = new Random();
    }

    @Override
    public void draw() {
        fill(0,100,100);
        noStroke();
    //    ellipse(cx,cy,50,50);
        noFill();
        if (frameCount <= 84) {
            ray();
        } else {
            noLoop();
            save("galaxy001.png");
        }
    }

    private void ray() {
        float angle1 = 2*PI*alea.nextFloat();
        float angle2 = angle1 + alea.nextFloat() * PI;
        float rad1 = w/8;//alea.nextFloat()*w/3;
        float rad2 = rad1 + alea.nextFloat()*w/3;
        float px1 = cx + rad1 * cos(angle1);
        float py1 = cy + rad1 * sin(angle1);
        float px2 = cx + rad2 * cos(angle1);
        float py2 = cy + rad2 * sin(angle1);
        float px3 = cx + rad1 * cos(angle2);
        float py3 = cy + rad1 * sin(angle2);
        float px4 = cx + rad2 * cos(angle2);
        float py4 = cy + rad2 * sin(angle2);
        noFill();
        stroke(230,100,60,84);
        strokeWeight(3);
        line(px1,py1,px2,py2);
        line(px3,py3,px4,py4);
        arc(cx,cy,rad1*2,rad1*2,angle1,angle2);
        arc(cx,cy,rad2*2,rad2*2,angle1,angle2);
        for(int i=0;i<21;i++){
            float angle3 = angle1 + alea.nextFloat() * (angle2 - angle1);
            float angle4 = angle1 + alea.nextFloat() * (angle2 - angle1);
            float px5 = cx + rad1 * cos(angle3);
            float py5 = cy + rad1 * sin(angle3);
            float px6 = cx + rad2 * cos(angle3);
            float py6 = cy + rad2 * sin(angle3);
            line(px5, py5, px6, py6);
        }
        /* more long lines */
        stroke(230,100,40);
        if(angle1>=1.38*PI && angle1<=1.62*PI){
            rad2 = h;
            px2 = cx + rad2 * cos(angle1);
            py2 = cy + rad2 * sin(angle1);
            line(px1,py1,px2,py2);
        }
        if(angle1>=0.38*PI && angle1<=0.62*PI){
            rad2 = h/2;
            px2 = cx + rad2 * cos(angle1);
            py2 = cy + rad2 * sin(angle1);
            line(px1,py1,px2,py2);
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = {"Galaxy001"};
        Galaxy001 mySketch = new Galaxy001();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
