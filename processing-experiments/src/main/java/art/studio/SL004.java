package art.studio;

import processing.core.PApplet;
import java.util.Random;
import art.Knob;
import java.util.ArrayList;

public class SL004 extends PApplet {
    int vis_w = 1000;
    int txt_w = 1000;
    int w = vis_w+txt_w;
    int h = 1000;
    int x;
    int y;
    float txt_x;
    float txt_y;
    float txt_x_inc;
    float txt_y_inc;

    int len;
    int wid;
    float hu;
    float not;
    float boring;
    Random rand;
    ArrayList<Knob> knobs;
    int iter;
    int max_iter;

    @Override
    public void settings() {
        size(w, h);
        knobs = new ArrayList<Knob>();
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        rand = new Random();
        fill(0,0,0); knobs.add(new Knob("0", false)); knobs.add(new Knob("0", false)); knobs.add(new Knob("0", false));
        noStroke();
        rect(0,0,w,h);
        hu=random(360); knobs.add(new Knob(Float.toString(hu), true));
        iter=0;
        max_iter=50000; knobs.add(new Knob(Integer.toString(max_iter), false));
        textSize(8); knobs.add(new Knob(Float.toString(8),false));
        txt_x=vis_w;
        txt_y=5;
        txt_x_inc=41; knobs.add(new Knob(Float.toString(txt_x_inc),false)); 
        txt_y_inc=9; knobs.add(new Knob(Float.toString(txt_y_inc),false)); 
        knobs.add(new Knob("400", false));
        knobs.add(new Knob("600", false));
        knobs.add(new Knob("400", false));
        knobs.add(new Knob("600", false));
        knobs.add(new Knob("11", false));
        knobs.add(new Knob("777", false));
        knobs.add(new Knob("111", false));
        knobs.add(new Knob("888", false));
        knobs.add(new Knob("600", false));
        knobs.add(new Knob("400", false));
        knobs.add(new Knob("400", false));
        knobs.add(new Knob("100", false));
        knobs.add(new Knob("800", false));
        knobs.add(new Knob("250", false));

    }

    @Override
    public void draw() {
        if (iter<max_iter){
        x=rand.nextInt(vis_w);
        y=rand.nextInt(h);
        drawPoint(x, y);
        writeIter();
        iter++;
        }
        else{
            print_knobs();
            noLoop();
            save("SL004.png");
        }
    }

    public void drawPoint(float x, float y){
        if (!isIN(x,y)){
            not=random(50); knobs.add(new Knob(Float.toString(not), true));
            boring=random(90,100); knobs.add(new Knob(Float.toString(boring), true));
            fill(hu,not,boring);
            float len = random(1,5); knobs.add(new Knob(Float.toString(len), true));
            float hei = random(1,5); knobs.add(new Knob(Float.toString(hei), true));
            rect(x,y,len,hei);
        }

    }

    public boolean isIN(float x, float y){
        //first check if the point is in square between (400,400) and (600,600), or in rectangle between (11,777) and (111,888)
        if ((x>=400 & x<600 & y>=400 & y<600)||(x>=11 & x<111 & y>=777 & y<888)){
            return true;
        }
        //second check if the point is in triangle 
        else{
            if (inTri(x,y)){
                return true;
            }
            else{
                return false;
            }
        }
    }

    //check if the point is in triangle (600,400) (400,100) (800,250)
    public boolean inTri(float x, float y){
        float triangleSurf = surfTri(600, 400, 400, 100, 800, 250);
        float tri1 = surfTri(x,y,600,400,400,100);
        float tri2 = surfTri(x,y, 400,100,800,250);
        float tri3 = surfTri(x,y,600,400,800,250);
        return(triangleSurf == tri1+tri2+tri3);
    }

    private float surfTri(float x1, float y1, float x2, float y2,float x3, float y3){
        return (float)Math.abs((x1*(y2-y3) + x2*(y3-y1)+ x3*(y1-y2))/2.0);
    }

    private void writeIter(){
        fill(hu,42,100);
        noStroke();
        rect(vis_w,0,txt_w,h);
        fill(hu,0,0);
        text(Integer.toString(iter),vis_w+txt_w/2,h/2);
    }

    public void print_knobs(){
        fill(hu,42,100);
        noStroke();
        rect(vis_w,0,txt_w,h);
        noStroke();
        float localx=vis_w; // start printing at x out of the viz width
        float localy=txt_y; // start printing at y init value for text
        localy+=txt_y_inc;
        fill(0,0,0);
        float txt_hu=(hu*2)%360;
        text("Generative art is about drawing and tuning knobs. Some knob values are tuned by the artist. Some knob values are chosen randomly. Here are all the knob values for this piece", localx, localy);
        localy+=txt_y_inc;
        for (int i=0; i<knobs.size();i++){
            Knob k = knobs.get(i);
            if (k.getrand()){fill(0,0,0);}
            else {fill(txt_hu,100,100);}
            if (localx<w-txt_x_inc){
                text(k.getValue(), localx, localy);
                localx+=txt_x_inc;
            }
            else{
                localx=vis_w;
                localy+=txt_y_inc;
                text(k.getValue(), localx, localy);
                localx+=txt_x_inc;
            }
        }
        noFill();
    }

    public static void main(String[] args) {
        String[] processingArgs = { "SL004" };
        SL004 mySketch = new SL004();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
