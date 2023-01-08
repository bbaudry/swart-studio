/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;
import java.util.ArrayList;

public class NewYear extends PApplet {
    int w = 1000;
    int h = 1000;
    float cx;
    float cy;
    float x1;
    float x2;
    float y1;
    float y2;
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
        cx = w/2;//random((float)0.45,(float)0.55)*w;
        cy = h/2;//random((float)0.45,(float)0.55)*h;
        rad = (float)0.4*w;//random((float)0.3,(float)0.4)*w;
        etoiles = new ArrayList<>();
        alea = new Random();
    }

    @Override
    public void draw() {
        background(310, 100, 80);
        noStroke();
        chercheur();
        dor();
        frameRate(2);
        noLoop();
        save("NewYear.png");
    }

    private void chercheur() {
        int constellation = 23;// (int)random(21);
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
        int rays=0;
        while(rays<21*42){
            int i = alea.nextInt(etoiles.size()); 
            int j = alea.nextInt(etoiles.size()); 
            if (i!=j){
            int danseuse = alea.nextInt(7)*42;
            stroke(130,100,100,danseuse);
            strokeWeight((float)1.5);
            noFill();
            x1 = etoiles.get(i)[0];
            y1 = etoiles.get(i)[1];
            x2 = etoiles.get(j)[0];
            y2 = etoiles.get(j)[1];
            float ctx;
            float cty;
            if (x1<x2){ctx = random((float)0.4,(float)0.6)*(x2-x1);}
            else{ctx = -random((float)0.4,(float)0.6)*(x1-x2);}
            if (y1<y2){cty = random((float)0.4,(float)0.6)*(y2-y1);}
            else{cty = random((float)0.4,(float)0.6)*(y1-y2);}
            if(y1<cy || y2<cy){
                bezier(x1,y1,x1+ctx,y1-cty,x2+ctx,y2-cty,x2,y2);
            }
            else{
                bezier(x1,y1,x1+ctx,y1+cty,x2+ctx,y2+cty,x2,y2);    
            }
            fill(50,100,100);
            ellipse(etoiles.get(i)[0],etoiles.get(i)[1],3,3);
            ellipse(etoiles.get(j)[0],etoiles.get(j)[1],3,3);
            rays++;
        }
        }  
    }

    public static void main(String[] args) {
        String[] processingArgs = { "NewYear " };
        NewYear mySketch = new NewYear();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
