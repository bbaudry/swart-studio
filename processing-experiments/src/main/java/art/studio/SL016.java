/* Metadata {"endless":true, "BW": true, "knobs": false, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import processing.core.PFont;

public class SL016 extends PApplet {
    int w = 1000;
    int h = 1000;
    PFont f;
    int fSize;
    String[] statements = {"public void draw", "public void setup","if (random(2)<1)","package art.studio","while(baldessari not boring)"};

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        noStroke();
        fSize=67;
        f = createFont("FreeMono", fSize, true);
        textFont(f);
     }

    @Override
    public void draw() {
        background(0, 0, 0);
        fill(0,0,100);
        if (random(2)<1){
            String code = statements[(int)random(statements.length)];
        text(code, w/2-(code.length()*fSize)/4, h/2);}

    }

    public static void main(String[] args) {
        String[] processingArgs = { "SL016" };
        SL016 mySketch = new SL016();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
