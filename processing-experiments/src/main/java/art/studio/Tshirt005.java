/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;


import processing.core.PApplet;
import java.util.ArrayList;
import java.util.Random;

public class Tshirt005 extends PApplet {
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
        background(0,0,0);   
        noFill();
        stroke(0,0,100);
        hues = new ArrayList<>();
        hues.add(180); hues.add(300);hues.add(60);
        alea = new Random();
        frameRate(1);
    }

    @Override
    public void draw() {
        if(frameCount<2){
            test_matrix();
        }
        else{
            save("tshirt005.png");
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
                fill(hues.get(alea.nextInt(hues.size())),100,100);
                ellipse(x,y,diam,diam);
                     

                fill(hues.get(alea.nextInt(hues.size())),100,100,100);
                if(alea.nextBoolean()){
                    quad(x-vera, y-vera, x, y-vera, x+vera, y+vera, x, y+vera);
                }
                else{
                    quad(x, y-vera, x+vera, y-vera, x, y+vera, x-vera, y+vera);
                }
                
                noFill();
                strokeWeight(alea.nextFloat()*84); alea.nextFloat();
                strokeCap(SQUARE);
                stroke(hues.get(alea.nextInt(hues.size())),100,100,100);
                int jarrett = alea.nextInt(4);
                switch (jarrett){
                case 0:arc(x-vera, y-vera, diam*2, diam*2, radians(random(-21, 21)), radians(random(80, 100)));
                break;
                case 1:arc(x+vera, y-vera, diam*2, diam*2, PI/2,PI);
                break;
                case 2: stroke(hues.get(alea.nextInt(hues.size())),100,100,100);
                arc(x+vera, y+vera, diam*2, diam*2, PI, PI+PI/2);
                break;
                case 3: stroke(hues.get(alea.nextInt(hues.size())),100,100,100);
                arc(x-vera, y+vera, diam*2, diam*2, PI+PI/2,2*PI);
                break;
                }
                /*
                stroke(hues.get(alea.nextInt(hues.size())),100,100,100);
                arc(x+vera, y-vera, diam*2, diam*2, PI/2,PI);
                
                stroke(hues.get(alea.nextInt(hues.size())),100,100,100);
                arc(x+vera, y+vera, diam*2, diam*2, PI, PI+PI/2);

                stroke(hues.get(alea.nextInt(hues.size())),100,100,100);
                arc(x-vera, y+vera, diam*2, diam*2, PI+PI/2,2*PI);*/
            }
        }
    }

    
    public static void main(String[] args) {
        String[] processingArgs = { "Tshirt005" };
        Tshirt005 mySketch = new Tshirt005();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
