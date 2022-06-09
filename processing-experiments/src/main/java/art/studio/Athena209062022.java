/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;
import java.util.ArrayList;

public class Athena209062022 extends PApplet {
    int w = 1000;
    int h = 1000;
    float cx;
    float cy;
    float rad;
    ArrayList<Float[]> etoiles;
    Random alea;
    
    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        background(230, 100, 80);
        cx = random((float)0.45,(float)0.55)*w;
        cy = random((float)0.45,(float)0.55)*h;
        rad = random((float)0.3,(float)0.4)*w;
        etoiles = new ArrayList<>();
        alea = new Random();
    }

    @Override
    public void draw() {
        background(230, 100, 80);
        noStroke();
        chercheur();
        dor();
        frameRate(2);
        //noLoop();
//        save("Athena209062022.png");
    }

    private void chercheur() {
        int constellation = (int)random(42);
        float angle;
        for (int i=0;i<constellation;i++){
            angle = (2*PI)*random(1);
            Float[] coord = new Float[2];
            coord[0] = cx + rad * cos(angle);
            coord[1] = cy + rad * sin(angle);
            etoiles.add(coord);
        }
        
    }

    private void dor() {
        for(int rays=0;rays<168;rays++){
            int i = alea.nextInt(etoiles.size()); // (int)random(etoiles.size());
            int j = alea.nextInt(etoiles.size()); //(int)random(etoiles.size());
            stroke(50,100,100);
            strokeWeight(2);
            //line(etoiles.get(i)[0],etoiles.get(i)[1],etoiles.get(j)[0],etoiles.get(j)[1]);
            noFill();
            int danseuse = alea.nextInt(7)*42;
            if(alea.nextBoolean()){
                bezier(etoiles.get(i)[0],etoiles.get(i)[1],etoiles.get(i)[0],etoiles.get(i)[1]-danseuse,etoiles.get(j)[0]+danseuse,etoiles.get(j)[1]+danseuse,etoiles.get(j)[0],etoiles.get(j)[1]);
            }
            else{
                bezier(etoiles.get(i)[0],etoiles.get(i)[1],etoiles.get(i)[0],etoiles.get(i)[1]+danseuse,etoiles.get(j)[0]-danseuse,etoiles.get(j)[1]-danseuse,etoiles.get(j)[0],etoiles.get(j)[1]);    
            }
            fill(50,100,100);
            ellipse(etoiles.get(i)[0],etoiles.get(i)[1],3,3);
            ellipse(etoiles.get(j)[0],etoiles.get(j)[1],3,3);
        }  
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Athena209062022 " };
        Athena209062022 mySketch = new Athena209062022();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
