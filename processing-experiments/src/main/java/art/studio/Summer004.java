package art.studio;

import processing.core.PApplet;
import java.util.Random;
import java.util.ArrayList;



//practice shades
public class Summer004  extends PApplet {
    int w = 1000;
    int h = 1000;
    Random alea;
    ArrayList<ArrayList<Float>> coords;
    float xoff=(float)0.0;
    float grain=(float)0.05;
    int nbAngles;
    int nbLayers;


    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100,250);
        alea=new Random();
        background(0,0,0);
        nbLayers=5;
        initCoords();
    }

    private void initCoords(){
        coords=new ArrayList<>();
        float angle=0;
        for (int i=0;i<nbLayers;i++){
            ArrayList<Float> layer=new ArrayList<>();
            while(angle<360){
                layer.add(angle);
                angle+=21+21*noise(xoff);
                xoff+=grain;
            }
            coords.add(layer);
        }
    }

    @Override
    public void draw() {
        float rad_seed = (float)0.1*w;
        float rad;
        if(frameCount<2){
            background(0,0,0,42);
            noFill();
            stroke(193,100,100);
            for (int i=0; i<nbLayers; i++){
                rad = (float)(0.3*w+rad_seed*noise(xoff));xoff+=grain;
                oneLayerCompact(w/2, h/2, rad, coords.get(i));
            }
        }
        else{
            noLoop();
            //save("summer004.png");
        }
    }

    private void showAngles(ArrayList<Float> angles){
        float hu = 20;
        float rad_seed = (float)0.1*w;
        float rad;
        System.out.println("will draw "+coords.size()+" ellipses");
        for (int j=0; j<coords.size(); j++){
            stroke(hu,100,100); hu+=27;
            for(int i=0; i<7;i++){
                rad = (float)(0.3*w+rad_seed*noise(xoff));xoff+=grain;
                float x = w/2 + rad*cos(radians(angles.get(j)));
                float y = h/2 + rad*sin(radians(angles.get(j)));
                ellipse(x,y,17,17);
        }
    }
    }

    private void oneLayerCompact(float cx, float cy, float rad, ArrayList<Float> angles){
        
        float px, py, px1, py1, cpx1, cpy1, cpx2, cpy2;
        Float[] controls;
        beginShape();
        px=cx+rad*cos(radians(angles.get(0)));
        py=cy+rad*sin(radians(angles.get(0)));
        vertex(px, py);
        controls = drawTang(angles.get(0),cx,cy,rad);
        cpx2 = controls[2];
        cpy2 = controls[3];
        for (int i=1; i<angles.size(); i++){
            px1 = cx + rad * cos(radians(angles.get(i)));
            py1 = cy + rad * sin(radians(angles.get(i)));
            controls = drawTang(angles.get(i),cx,cy,rad);
            cpx1 = controls[0];
            cpy1 = controls[1];
            bezierVertex(cpx2, cpy2, cpx1, cpy1, px1, py1);
            cpx2 = controls[2];
            cpy2 = controls[3];
        }
        controls=drawTang(angles.get(0),cx,cy,rad);
        cpx1=controls[0];
        cpy1=controls[1];
        bezierVertex(cpx2, cpy2, cpx1, cpy1, px, py);
        endShape();
    }

    private Float[] drawTang(float deg, float cx, float cy, float rad){
        float tx = cx+rad*cos(radians(deg));
        float ty = cy+rad*sin(radians(deg));
        float wid = 68;
        int ang = 90+42;//alea.nextInt(10);
        float dx1 = tx+wid*cos(radians(deg-ang));
        float dy1 = ty+wid*sin(radians(deg-ang));
        float dx2 = tx+wid*cos(radians(deg-ang+180));
        float dy2 = ty+wid*sin(radians(deg-ang+180));
        Float[] res = {dx1,dy1, dx2, dy2};
        return res;
    }


    public static void main(String[] args) {
        String[] processingArgs = { "Summer004" };
        Summer004 mySketch = new Summer004();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
