/* Metadata {"endless":true, "BW": false, "knobs": false, "data": false, "interaction": false}*/
/* This one is glitchy: it draws triangles instead of rectangles
 * I still keep it because glitches are cool and the triangles create a kind of depth that is beautiful
 */
package art.studio;

import processing.core.PApplet;
import java.util.ArrayList;
import java.util.Random;

public class SL017Glitch extends PApplet {
    int w = 1000;
    int h = 1000;
    int street;
    int block;
    ArrayList<ArrayList<Float[]>> coords;
    int[] cyberHue = {182,360};
    int[] cyberSat = {80,100};
    int[] cyberBri = {80,100};
    float hu;
    boolean huInc;
    Random alea;

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
        alea = new Random();
        street = 0;
        block = 0;
        hu = cyberHue[0];
        huInc = true;
        background(0,0,0);
     }

    @Override
    public void draw() {
        street = alea.nextInt(coords.size());
        block = alea.nextInt(coords.get(street).size()-1);
        Float[] rick = coords.get(street).get(block);
        Float[] roll = coords.get(street).get(block+1);
        fill(0,0,0);
        build(rick[0],rick[1],roll[0],roll[1],17);    
        float eps = random(2,17);
        if (hu<cyberHue[1] && huInc){
            fill(hu,random(50,100),random(50,100));
            hu = hu+(float)0.1;
        }
        else {huInc = false;}
        if (hu>cyberHue[0] && !huInc){
            fill(hu,random(50,100),random(50,100));
            hu = hu-(float)0.1;
        }
        build(rick[0],rick[1],roll[0],roll[1],eps);       
    }

    private void build(float x1,float y1,float x2,float y2,float eps){
        if (x1<x2){
            quad(x1, y1, x1-eps, y2-eps, x2-eps, y2-eps, x2, y2);
        }
        else{
            quad(x1, y1, x1+eps, y2-eps, x2+eps, y2-eps, x2, y2);
        }

    }

    private void init(){
        float moon = random((float)0.01, (float)0.03)*w;
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
            case 1 : step = dx/20; break;
            case 2 : step = (w-ox)/20; break;
            case 3 : step = ox/20; break;
            case 4 : step = (w-dx)/20; break;
        }
        float inc = 4/step;//random(1,3)/step;
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
            i=i+random(1,4)*inc;
        }
        coords.add(avenue);
    }

    public static void main(String[] args) {
        String[] processingArgs = { "SL017Glitch" };
        SL017Glitch mySketch = new SL017Glitch();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
