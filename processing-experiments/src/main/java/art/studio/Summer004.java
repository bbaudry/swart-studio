package art.studio;

import processing.core.PApplet;
import processing.core.PGraphics;

import java.util.Random;
import java.util.ArrayList;

//practice shades
public class Summer004 extends PApplet {
    int w = 1000;
    int h = 1000;
    Random alea;
    float xoff = (float) 0.0;
    float grain = (float) 0.09;
    int nbAngles;
    int nbLayers;
    ArrayList<ArrayList<Float[]>> coords;
    ArrayList<Cell> core;

    float ang = 90;
    boolean grow = true;
    float wid=w/10;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100, 250);
        alea = new Random();
        background(0, 0, 0);
        nbLayers = 4;
        // frameRate(1);
        initCoords();
        initCore();
    }

    @Override
    public void draw() {
            background(42, 42, 42);
            noFill();
            stroke(193, 100, 100);
            for (int i = 0; i < coords.size(); i++) {
                //oneLayerCompact(w / 2, h / 2, coords.get(i));
            }
            stroke(0,0,100);noFill();ellipse(w/2,h/2,w,w);
            for(int j=0;j<core.size();j++){
                Cell c = core.get(j);
                c.move();
                fill(30,100,100,84);
                ellipse(c.cx, c.cy, c.rad, c.rad);
            }
            if (grow) {
                ang += 0.1;
                wid += 0.05;
            } else {
                ang -= 0.1;
                wid -= 0.05;
            }
            if (ang >= 180) {
                grow = false;
            }
            if (ang <= 0) {
                grow = true;
            }
            if(alea.nextFloat()<0.01){initOneLayer();}
    }

    private void initCoords() {
        coords = new ArrayList<>();
        for (int i = 0; i < nbLayers; i++) {
            initOneLayer();
        }
    }

    private  void initOneLayer(){
            float initangle = alea.nextInt(180);
            float angle = initangle;
            float radius;
            ArrayList<Float[]> layer = new ArrayList<>();
            while (angle < 340 + initangle) {
                radius = (float) (0.2 * w + w * 0.3 * noise(xoff));
                xoff += grain;
                angle += 42 + 21 * noise(xoff);
                xoff += grain;
                Float[] vec = { angle, radius };
                layer.add(vec);
            }
            coords.add(layer);
    }

    private void initCore(){
        core=new ArrayList<>();
        int nbCells=2;
        for(int i=0; i<nbCells; i++){
            Cell c = new Cell(w/2, h/2, 7+7*i, 2);
            core.add(c);
        }
    }

    private void oneLayerCompact(float cx, float cy, ArrayList<Float[]> angles) {
        float px, py, px1, py1, cpx1, cpy1, cpx2, cpy2, rad;
        Float[] controls;
        beginShape();
        rad = angles.get(0)[1];
        px = cx + rad * cos(radians(angles.get(0)[0]));
        py = cy + rad * sin(radians(angles.get(0)[0]));
        vertex(px, py);
        controls = drawTang(angles.get(0)[0], cx, cy, rad);
        cpx2 = controls[2];
        cpy2 = controls[3];
        for (int i = 1; i < angles.size(); i++) {
            rad = angles.get(i)[1];
            px1 = cx + rad * cos(radians(angles.get(i)[0]));
            py1 = cy + rad * sin(radians(angles.get(i)[0]));
            controls = drawTang(angles.get(i)[0], cx, cy, rad);
            cpx1 = controls[0];
            cpy1 = controls[1];
            bezierVertex(cpx2, cpy2, cpx1, cpy1, px1, py1);
            cpx2 = controls[2];
            cpy2 = controls[3];
        }
        controls = drawTang(angles.get(0)[0], cx, cy, rad);
        cpx1 = controls[0];
        cpy1 = controls[1];
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);
        endShape();
    }

    private Float[] drawTang(float deg, float cx, float cy, float rad) {
        float tx = cx + rad * cos(radians(deg));
        float ty = cy + rad * sin(radians(deg));
        //float wid1 = w / 10;// *alea.nextFloat();
        //float wid2 = w / 10;// *alea.nextFloat();
        // int ang = 90;//+(-11+alea.nextInt(22));
        float dx1 = tx + wid * cos(radians(deg - ang));
        float dy1 = ty + wid * sin(radians(deg - ang));
        float dx2 = tx + wid * cos(radians(deg - ang + 180));
        float dy2 = ty + wid * sin(radians(deg - ang + 180));
        Float[] res = { dx1, dy1, dx2, dy2 };
        return res;
    }

    private class Cell{
        boolean left;
        boolean up;
        float speed;
        float cx,cy,rad;
        float areaX,areaY,areaRad;
        float xoff,grain;

        public Cell(float x, float y, float r, float s){
            cx=x;cy=y;rad=r;
            left=alea.nextBoolean();
            up=alea.nextBoolean();
            speed=s;
            areaRad=w/2;
            areaX=w/2;
            areaY=h/2;
            xoff=alea.nextFloat()*82;
            grain=(float)55;
        }
        
        public void move(){
            if(!isInside()){
                left=!left;
                up=!up;
                System.out.println("change");
            }
            if(left){if(alea.nextBoolean()){cx-=speed;}}
            else{if(alea.nextBoolean()){cx+=speed;}}
            if(up){if(alea.nextBoolean()){cy-=speed;}}
            else{if(alea.nextBoolean()){cx+=speed;}}
        }

        private boolean isInside(){
            boolean is = (cx-areaX)*(cx-areaX)+(cy-areaY)*(cy-areaY) <= areaRad*areaRad;
            return is;
        }

    }

    public static void main(String[] args) {
        String[] processingArgs = { "Summer004" };
        Summer004 mySketch = new Summer004();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
