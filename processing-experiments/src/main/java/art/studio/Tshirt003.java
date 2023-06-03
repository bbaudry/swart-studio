/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;


import processing.core.PApplet;
import java.util.ArrayList;
import java.util.Random;

public class Tshirt003 extends PApplet {
    int ratio = 1;
    int w = 1000*ratio;
    int h = 1000*ratio;
    int resolution = 4;
    ArrayList<Integer> hues;
    Random alea;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100,250);
        background(0,0,100);   
        noFill();
        stroke(0,0,100);
        hues = new ArrayList<>();
        hues.add(50); hues.add(330);hues.add(140);hues.add(230);
        alea = new Random();
        frameRate(1);
    }

    @Override
    public void draw() {
        if(frameCount<7){
            test_matrix();
        }
        else{
            save("Tshirt003.png");
        }
    }

    private void test_matrix(){
        float x,y;
        double init = 0.19;
        double target = 0.81;
        double inc = 0.2;
        float diam = (float)inc*w;
        float vera = (float)0.5*diam;
        for (double i=init;i<target;i+=inc){
            for (double j=init;j<target;j+=inc){
                noStroke();
                x=(float)i*w;
                y=(float)j*h;       

                fill(hues.get(alea.nextInt(hues.size())),100,100,100);
                vera = vera + random(-42, 42);
                if(alea.nextBoolean()){
                    quad(x-vera, y-vera, x, y-vera, x+vera, y+vera, x, y+vera);
                }
                else{
                    quad(x, y-vera, x+vera, y-vera, x, y+vera, x-vera, y+vera);
                }
                
                noFill();
                strokeWeight(alea.nextFloat()*84); alea.nextFloat();
                stroke(hues.get(alea.nextInt(hues.size())),100,100,100);
                arc(x-vera, y-vera, diam*2, diam*2, 0, PI/2);
                
                stroke(hues.get(alea.nextInt(hues.size())),100,100,100);
                arc(x+vera, y-vera, diam*2, diam*2, PI/2,PI);
                
                stroke(hues.get(alea.nextInt(hues.size())),100,100,100);
                arc(x+vera, y+vera, diam*2, diam*2, PI, PI+PI/2);

                stroke(hues.get(alea.nextInt(hues.size())),100,100,100);
                arc(x-vera, y+vera, diam*2, diam*2, PI+PI/2,2*PI);
            }
        }
    }

    
    public static void main(String[] args) {
        String[] processingArgs = { "Tshirt003" };
        Tshirt003 mySketch = new Tshirt003();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
