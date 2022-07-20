/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;

public class Birth011 extends PApplet {
    //A2:420 × 594
    //pixel = dpi * mm / 25.4 mm
    //w=300*420/25.4=4961
    //h=300*594/25.4=7016
    int w = 4961;
    int h = 7016;
    int lou = 69;
    int[] palettef = { 35,215 };
    float cx = w/2;
    float cy = h/2;
    float radius =  (float)0.98*w;
    int rick = 200; //resolution for the different radii
    float astley = radius/rick; //one step in the circle

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        background(palettef[1],100,100);
        noStroke();
        for(int i=rick;i>0;i--){
            fill(palettef[0],i,100);
            ellipse(cx,cy,i*astley,i*astley);
        }
    }

    @Override
    public void draw() {
        noFill();
        strokeCap(SQUARE);
        if (frameCount <= 10*lou) {
            float angle1 = random(0, 2 * PI);
            float angle2 = angle1 + random(PI / 50, 20 * PI / 50);
            strokeWeight(random(7,17));
            float john = random(rick);
            float baldessari = john * astley;
            stroke(random(palettef[0]-25, palettef[0]+25), john / rick * 100, 100);
            arc(cx, cy, baldessari, baldessari, angle1, angle2);
        }
        else{
            if (frameCount<=lou+160){
                float angle1 = random(0, 2 * PI);
                float angle2 = angle1 + random(PI / 50, 20 * PI / 50);
                strokeWeight(random(5,11));
                float john = random(rick);
                float baldessari = john * astley;
                stroke(random(palettef[1]-25, palettef[1]+25), john / rick * 100, 100);
                arc(cx, cy, baldessari, baldessari, angle1, angle2);    
            }
            else{
                float ax = cx + random(-w/4,w/4);
                float ay = cy + random(-w/4,w/4);
                fill(palettef[1],100,100);
                noStroke();
                //ellipse(ax,ay,w/4,w/4);
                    save("birth.png");
                    exit();
            }
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = {"Birth011"};
        Birth011 mySketch = new Birth011();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
