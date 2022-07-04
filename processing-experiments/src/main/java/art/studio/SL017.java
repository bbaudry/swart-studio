/* Metadata {"endless":true, "BW": true, "knobs": false, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.ArrayList;

public class SL017 extends PApplet {
    int w = 1000;
    int h = 1000;
    int streets;
    int block;
    ArrayList<ArrayList<Float[]>> coords;
    int[] cyberHue = {182,360};
    int[] cyberSat = {80,100};
    int[] cyberBri = {80,100};
    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        noStroke();
        coords = new ArrayList<>();
        init();
        noFill();
        streets = 0;
        block = 0;
        background(0,0,0);
     }

    @Override
    public void draw() {
        if (streets < coords.size()){
            int s = coords.get(streets).size();
            if (block<s-1){
                Float[] cairo = coords.get(streets).get(block);
                Float[] purple = coords.get(streets).get(block+1);
                //fill(50 + (block * 3), 100, 100);
                fill(random(cyberHue[0],cyberHue[1]),random(50,100),random(cyberBri[0],cyberBri[1]));
                /*if (random(5)<2){fill(2,90,97);}
                else{fill(182,90,97);}*/
                float eps = random(7,13);
                /*if (cairo[0]<purple[0]){
                    quad(cairo[0],cairo[1],cairo[0]-eps,cairo[1]-eps,purple[0]-eps,purple[1]-eps,purple[0],purple[1]);
                }
                else{
                    quad(cairo[0],cairo[1],cairo[0]+eps,cairo[1]-eps,purple[0]+eps,purple[1]-eps,purple[0],purple[1]);    
                }*/
                ellipse(cairo[0], cairo[1], eps, eps);
                ellipse(purple[0], purple[1], eps, eps);
                block++;
            }
            else{
                streets++;
                block=0;
            }
        }
        else{
            save("SL017.png");
            noLoop();
        }
        
    }

    private void init(){
        float moon = random((float)0.03, (float)0.05)*w;
        while (moon<w){
            bang(0,moon,moon,0, 1);
            bang(w-moon,h,w,h-moon,2);
            bang(moon,h,0,h-moon,3);
            bang(w,moon,w-moon,0,4);
            moon = moon + random((float)0.04, (float)0.06)*w;
        }

    }

    private void bang(float ox, float oy, float dx, float dy, int knob){
        ArrayList<Float[]> avenue = new ArrayList<>();
        float step=100; //default value, changed in the following switch
        switch (knob){
            case 1 : step = dx/80; break;
            case 2 : step = (w-ox)/80; break;
            case 3 : step = ox/80; break;
            case 4 : step = (w-dx)/80; break;
        }
        float inc = random(1,3)/step;
        float x1=ox;
        float x2;
        float y2;
        float y1=oy;
        Float[] origin = {x1,y1};
        avenue.add(origin);
        float t=0;
        float i=inc;
        while(y1>dy){
            t = i * inc;
            x2 = (1 - t) * ox + (t * dx);
            y2 = (1 - t) * oy + (t * dy);
            Float[] destination = {x2,y2};
            avenue.add(destination);
            x1 = x2;
            y1 = y2;
            i=i+random(inc);
        }
        coords.add(avenue);
    }

    public static void main(String[] args) {
        String[] processingArgs = { "SL017" };
        SL017 mySketch = new SL017();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
