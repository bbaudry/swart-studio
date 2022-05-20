package art.studio;

import processing.core.PApplet;
import processing.core.PFont;
import java.util.ArrayList;


//Draugr is an exoplanet https://en.wikipedia.org/wiki/PSR_B1257%2B12_A
//the Draugr series is about circular shapes and random black lines
public class Draugr004  extends PApplet {
    int w = 1000;
    int h = 1000;
    float cx;
    float cy;
    float radius;
    ArrayList<Float> knobs;
    int knobs_index;
    int fSize;
    int yInc;
    PFont f;  
    float y;  


    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        cx=w/2;
        cy=h/2;
        radius = (float)(w*0.8);
        background(242,242,217);
        fill(233,233,211);
 
        knobs = new ArrayList<Float>();
        knobs_index=0;
        fSize = 16;
        yInc = fSize+2;
        f = createFont("Comfortaa",fSize,true);
        y=h-yInc;
        textFont(f,fSize);
        textAlign(LEFT);

    }

    @Override
    public void draw() {
        for (int i = 0; i < 11; i++) {
            if (random(3) < 1) {
                stroke(0, 0, 0, random(51, 199));
            } else {
                stroke(233, 233, 211);
            }
            approx_chord(cx, cy, radius / 2);
        }
        noStroke();
        fill(233, 233, 211);
        rect(0, 0, (float) (w * 0.1), h);
        fill(0,0,0);
        for (int i = knobs.size() - 1; i > 0; i--) {
            text(knobs.get(i).toString(), 10, y + (i * yInc));
            System.out.println("print");
        }
        y = y - yInc;
    }


    // draw chords in the circle centered on (x,y) and radius. The chords are not straight
    public void approx_chord(float x, float y, float radius) {
        float angle = random((float)(Math.PI/2),(float)(3*Math.PI/2)); //random angle on the left half of the circle
        float left_x = x + radius*cos(angle);
        float left_y = y + radius*sin(angle);
        knobs.add(knobs_index,angle);
        knobs_index++;
        float angle_sym = (float)(2*3*Math.PI/2-angle);//angle to get the symmetric on the right half of the circle
        float right_x = x + radius*cos(angle_sym);
        float right_y = y + radius*sin(angle_sym);//sy2 should be equal to sy1 according to the way we compute angle_sym as the symmetric of angle on an horizontal axis
        strokeWeight(random(2,8));
        float chord_length=right_x-left_x;
        float tmpx=left_x;
        float tmpxdest=tmpx + random(chord_length/5);
        float tmpy = left_y;
        float tmpydest = tmpy + random(-3,3);
        while(tmpxdest<right_x){
            line(tmpx,tmpy,tmpxdest,tmpydest);
            tmpx=tmpxdest;
            tmpy=tmpydest;
            tmpxdest = tmpx + random(chord_length/5);
            tmpydest = tmpy + random(-2,2);
        }
        line(tmpx,tmpy,right_x,right_y);
        noFill();
    }


        // draws lines around a center
    // x=h+r*cosθ; y=k+r*sinθ ; r is the radius of the circle; h,k are the coordinates of the center.
    public void crater(float x, float y, float radius) {
        strokeWeight(random((float)(0.5),3));
        stroke(0,0,0,87);
        float ori_x = x + radius;
        float ori_y = y;
        float dest_x;
        float dest_y;
        float rotate=0;
        float angle=0;
        float twopi = (float)(2*Math.PI);
        while (rotate<twopi){
            angle = random((float)(2*Math.PI / 21),(float)(2*Math.PI / 11));
            if (rotate + angle>=twopi){
                angle=twopi-rotate; 
            }
            dest_x = x + radius*cos(angle+rotate);
            dest_y = y + radius*sin(angle+rotate);
            line(ori_x, ori_y, dest_x, dest_y);
            ori_x = dest_x;
            ori_y = dest_y;
            rotate = rotate+angle;
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Draugr004"};
        Draugr004 mySketch = new Draugr004();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
