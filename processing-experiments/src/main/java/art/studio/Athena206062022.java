/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;

public class Athena206062022 extends PApplet {
    int w = 1000;
    int h = 1000;
    int st;
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
        colorMode(HSB,360,100,100);
        background(0,0,0);
    }

    @Override
    public void draw() {
        if(st<42){
            x1 = random((float) 0.1, (float) 0.2) * w;
            x2 = random((float) 0.8, (float) 0.9) * w;
            y1 = random((float) 0.1, (float) 0.2) * h;
            y2 = random(1, 2) * y1;
            chercheur();
            dor();
            st++;
        }
        else{
            save("Athena206062022.png");
        }
    }

    private void chercheur(){
        stroke(50, 100, 100);
        strokeWeight(random(5, 7));
        fill(230,100,100);
        float rad = random((float)0.3,(float)0.5)*w;
        ellipse(x1+rad,y1+rad,rad,rad);
    }

    private void dor() {
        stroke(50, 100, 100);
        strokeWeight(random(5, 7));
        line(x1, y1, x2, y2);
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Athena206062022 " };
        Athena206062022 mySketch = new Athena206062022();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
