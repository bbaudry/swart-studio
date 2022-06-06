/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;

public class Athena206062022 extends PApplet {
    int w = 1000;
    int h = 1000;
    int st;
    float cx;
    float cy;
    float rad;
    float x1;
    float x2;
    float y1;
    float y2;

    int hu;
    boolean grow;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        st=0;
        cx=random((float)0.4,(float)0.7)*w;
        cy=random((float)0.6,(float)0.7)*h;
        rad=random((float)0.3,(float)0.5)*w;
        colorMode(HSB,360,100,100);
        background(0,0,0);
    }

    @Override
    public void draw() {
        if(st<42){
            chercheur();
            dor();
            st++;
        }
        else{
            save("Athena206062022.png");
        }
    }

    private void chercheur(){
        stroke(230, 100, 100);
        strokeWeight(random(7,17));
        noFill();
        float angle1=random(0,2*PI);
        float rand_angle = random(PI/50, 20*PI/50); 
        float angle2=angle1+rand_angle;
        float off=random(-(float)0.2,(float)0.2)*w;
        arc(cx,cy,rad+off,rad+off,angle1,angle2);
    }

    private void dor() {
        x1 = random((float) 0.1, (float) 0.7) * w;
        y1 = random((float) 0.4) * h;
        stroke(50, 100, 100);
        strokeWeight(random(5, 7));
        line(x1, y1, cx, cy);
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Athena206062022 " };
        Athena206062022 mySketch = new Athena206062022();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
