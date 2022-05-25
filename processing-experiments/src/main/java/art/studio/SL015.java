/* Metadata {"endless":true, "BW": true, "knobs": true, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import processing.core.PFont;
import java.util.ArrayList;

public class SL015 extends PApplet {
    int w = 1000;
    int h = 1000;
    int ghosts;//number of particles
    ArrayList<Float[]> busters;//coordinates of the particles
    int bill;//radius of the particles
    int murray;//number of rays
    PFont f;
    int fSize;
    String[] sep = {" \\ "," - "," / "};
    int stockholm; //origin coordinates of the ray
    int rotterdam; //destination coordinates of the ray

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        noStroke();
        ghosts = (int)random(7,17);
        busters = new ArrayList<>();
        bill=(int)random(7,17);
        murray=(int)random(7,117);
        for (int i=0; i<ghosts; i++){
            Float[] fire = {random(bill,w-bill),random(bill,h-bill-fSize)};
            busters.add(i, fire);
        }
        fSize=42;
        f = createFont("FreeMono", fSize, true);
        textFont(f);
        
    }

    @Override
    public void draw() {
        background(0, 0, 0);
        fill(0,0,100);
        rays();
        particles();
        String knobs = stockholm+sep[(int)random(sep.length)]+rotterdam;
        text(knobs, w/2-(knobs.length()*fSize)/4, h-fSize);
    }

    private void particles(){
        float john;// x to draw particles
        float baldessari;// y to draw particles
        noStroke();
        for (int i=0; i<ghosts; i++){
            john = busters.get(i)[0];
            baldessari = busters.get(i)[1];
            ellipse(john, baldessari, bill, bill);
        }
    }

    private void rays(){
        for (int i=0; i<murray; i++){
            stockholm = (int)random(ghosts);
            rotterdam = (int)random(ghosts);
            stroke(0,random(40),100);
            if (stockholm!=rotterdam){
                line(busters.get(stockholm)[0],busters.get(stockholm)[1],busters.get(rotterdam)[0],busters.get(rotterdam)[1]);
            }
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "SL015" };
        SL015 mySketch = new SL015();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
