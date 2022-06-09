/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;

import java.util.ArrayList;

public class Athena209062022 extends PApplet {
    int w = 1000;
    int h = 1000;
    float cx;
    float cy;
    float rad;
    ArrayList<Float[]> etoiles;
    
    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        background(230, 100, 80);
    }

    @Override
    public void draw() {
        background(230, 100, 80);
        noStroke();
        etoiles = new ArrayList<>();
        cx = random((float)0.45,(float)0.55)*w;
        cy = random((float)0.45,(float)0.55)*h;
        rad = random((float)0.3,(float)0.4)*w;
        chercheur();
        dor();
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
        for(int rays=0;rays<84;rays++){
        int i = (int)random(etoiles.size());
        int j = (int)random(etoiles.size());
        stroke(50,100,100);
            //line(etoiles.get(i)[0],etoiles.get(i)[1],etoiles.get(j)[0],etoiles.get(j)[1]);
            noFill();
            bezier(etoiles.get(i)[0],etoiles.get(i)[1],etoiles.get(i)[0],etoiles.get(i)[1]-84,etoiles.get(j)[0]+42,etoiles.get(j)[1]+42,etoiles.get(j)[0],etoiles.get(j)[1]);
        }  
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Athena209062022 " };
        Athena209062022 mySketch = new Athena209062022();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
