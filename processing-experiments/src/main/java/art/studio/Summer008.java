package art.studio;

import processing.core.PApplet;
import processing.core.PGraphics;

import java.util.Random;
import java.util.ArrayList;

//practice shades
public class Summer008 extends PApplet {
    int w = 1000;
    int h = 1000;
    Random alea;
    float xoff = (float) 0.0;
    float grain = (float) 0.09;
    float ang = 180;
    boolean grow = true;
    float wid = w / 10;
    ArrayList<ArrayList<Float[]>> vertices;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100, 250);
        alea = new Random();
        background(0, 0, 0);
        setVertices();
    }

    private void setVertices() {
        vertices = new ArrayList<>();
        for(int i=1;i<2;i++){
            float speed = (float)(i*0.21);
        ArrayList<Float[]> v = new ArrayList<>();
        Float[] one = { (float) 0, (float) 0.5 * h, speed };
        v.add(one);
        Float[] two = { (float) 0.25*w, (float) 0.25 * h ,speed };
        v.add(two);
        Float[] three = { (float) 0.5*w, (float) 0.5 * h ,speed };
        //v.add(three);
        Float[] four = { (float) 0.75*w, (float) 0.75 * h ,speed };
        v.add(four);
        Float[] five = { (float) w, (float) 0.5 * h ,speed };
        v.add(five);
        vertices.add(v);
        }
    }

    /*
     * vary by: changing the alpha, the ang and wid increments, the max value in the
     * condition
     */
    @Override
    public void draw() {
        if (frameCount<840){
        background(0, 0, 0);
        noFill();
        stroke(0, 0, 100);
        for (int i=0;i<vertices.size();i++){
        wave();
        }
        updateVertices();}
        else{
         noLoop();
         save("summer008.png");
        }

    }

    private void updateVertices() {
        for (int i=0; i<vertices.size();i++){
            vertices.get(i).get(1)[1]-=vertices.get(i).get(1)[2];
            vertices.get(i).get(2)[1]+=vertices.get(i).get(2)[2];
        }
    }

    private void wave() {
        
        float cx, cy, cpx1, cpy1, cpx2, cpy2;
        Float[] controls;
        for (int i = 0; i < vertices.size(); i++) {
            beginShape();
            cx = vertices.get(i).get(0)[0];
            cy = vertices.get(i).get(0)[1];
            vertex(cx, cy);
            controls = drawTang(cx, cy);
            cpx2 = controls[2];
            cpy2 = controls[3];
            for (int j = 1; j < vertices.get(i).size(); j++) {
                cx = vertices.get(i).get(j)[0];
                cy = vertices.get(i).get(j)[1];
                controls = drawTang(cx, cy);
                cpx1 = controls[0];
                cpy1 = controls[1];
                bezierVertex(cpx2, cpy2, cpx1, cpy1, cx, cy);
                cpx2 = controls[2];
                cpy2 = controls[3];
            }
            endShape();
        }
    }

    private Float[] drawTang(float cx, float cy) {
        
        wid = w / 8;
        float dx1 = cx + wid * cos(radians(ang));
        float dy1 = cy + wid * sin(radians(ang));
        float dx2 = cx + wid * cos(radians(ang + 180));
        float dy2 = cy + wid * sin(radians(ang + 180));
        Float[] res = { dx1, dy1, dx2, dy2 };
        return res;
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Summer008" };
        Summer008 mySketch = new Summer008();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
