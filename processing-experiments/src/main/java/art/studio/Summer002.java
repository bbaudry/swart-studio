package art.studio;

import processing.core.PApplet;
import java.util.Random;
import java.util.ArrayList;



//practice shades
public class Summer002  extends PApplet {
    int w = 1000;
    int h = 1000;
    Random alea;
    ArrayList<ArrayList<Float>> coords;


    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100,250);
        alea=new Random();
        background(0,0,0);
        initCoords();
    }

    private void initCoords(){
        coords=new ArrayList<>();
        for(int i=0; i<7; i++){
            ArrayList<Float> onepoint=new ArrayList<>();
            float col = i*50; onepoint.add(col);
            float cx = (float)(0.2*w+alea.nextFloat()*0.6*w); onepoint.add(cx);
            float cy = (float)(0.2*h+alea.nextFloat()*0.6*h); onepoint.add(cy);
            float rad = (float)(0.05*w+alea.nextFloat()*0.4*w); onepoint.add(rad);
            float nb = 2+2*alea.nextInt(3); onepoint.add(nb);
            coords.add(onepoint);
        }
    }

    @Override
    public void draw() {
        if(frameCount<336){
        noFill();
        for (int i=0;i<coords.size();i++){
            stroke(coords.get(i).get(0),100,100,42);
            int black = Math.round(coords.get(i).get(4));
            oneLayerCompact(black, coords.get(i).get(1),coords.get(i).get(2),coords.get(i).get(3));
        }
        }
        else{
            noLoop();
            save("summer002.png");
        }
    }

    private void oneLayerCompact(int nbRays, float cx, float cy, float rad){
        int angle = 360/nbRays;
        float px, py, px1, py1, cpx1, cpy1, cpx2, cpy2;
        Float[] controls;
        beginShape();
        px=cx+rad*cos(radians(0));
        py=cy+rad*sin(radians(0));
        vertex(px, py);
        controls = drawTang(0,cx,cy,rad);
        cpx2 = controls[2];
        cpy2 = controls[3];
        for (int i=1; i<=nbRays; i++){
            px1 = cx + rad * cos(radians(angle*i));
            py1 = cy + rad * sin(radians(angle*i));
            controls = drawTang(angle*i,cx,cy,rad);
            cpx1 = controls[0];
            cpy1 = controls[1];
            bezierVertex(cpx2, cpy2, cpx1, cpy1, px1, py1);
            cpx2 = controls[2];
            cpy2 = controls[3];
        }
        controls=drawTang(0,cx,cy,rad);
        cpx1=controls[0];
        cpy1=controls[1];
        //bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);
        endShape();
    }

    private Float[] drawTang(float deg, float cx, float cy, float rad){
        float tx = cx+rad*cos(radians(deg));
        float ty = cy+rad*sin(radians(deg));
        float wid = (float)(168+frameCount*0.1);
        int ang = 90-frameCount;//alea.nextInt(10);
        float dx1 = tx+wid*cos(radians(deg-ang));
        float dy1 = ty+wid*sin(radians(deg-ang));
        float dx2 = tx+wid*cos(radians(deg-ang+180));
        float dy2 = ty+wid*sin(radians(deg-ang+180));
        Float[] res = {dx1,dy1, dx2, dy2};
        return res;
    }


    public static void main(String[] args) {
        String[] processingArgs = { "Summer002" };
        Summer002 mySketch = new Summer002();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
