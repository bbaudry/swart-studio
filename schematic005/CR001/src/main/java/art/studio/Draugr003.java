package art.studio;

import processing.core.PApplet;

//Draugr is an exoplanet https://en.wikipedia.org/wiki/PSR_B1257%2B12_A
//the Draugr series is about circular shapes and random black lines
public class Draugr003  extends PApplet {
    int vis_w = 1000;
    int txt_w = 0;
    int h = 1000;
    int w = vis_w+txt_w;
    float x;
    float y;
    float txt_x;
    float txt_y;
    float txt_x_inc;
    float txt_y_inc;
    float cx;
    float cy;
    float radius;
    int iteration;
    int nb_iterations;
    int crater;
    int max_craters;
    int chord;
    int max_chords;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        crater=0;
        max_craters=40;
        chord=0;
        max_chords=333;
        cx=vis_w/2;
        cy=h/2;
        radius = (float)(vis_w*0.9);
        background(242,242,217);
        fill(233,233,211);
        stroke(0);
        //ellipse(cx,cy,radius,radius);
    }

    @Override
    public void draw() {
        if (chord<max_chords) {
            approx_chord(cx, cy, radius/2);
            chord++;
        }
        else{
            noLoop();
            save("Draugr003#001.png");
        }
    }


    // draw chords in the circle centered on (x,y) and radius. The chords are not straight
    public void approx_chord(float x, float y, float radius) {
        float angle = random((float)(Math.PI/2),(float)(3*Math.PI/2)); //random angle on the left half of the circle
        float left_x = x + radius*cos(angle);
        float left_y = y + radius*sin(angle);
        float angle_sym = (float)(2*3*Math.PI/2-angle);//angle to get the symmetric on the right half of the circle
        float right_x = x + radius*cos(angle_sym);
        float right_y = y + radius*sin(angle_sym);//sy2 should be equal to sy1 according to the way we compute angle_sym as the symmetric of angle on an horizontal axis
        strokeWeight(random((float)(0.5),3));
        stroke(0,0,0,51);
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
        stroke(0);
        float ori_x = x + radius;
        float ori_y = y;
        float dest_x;
        float dest_y;
        float rotate=0;
        float angle=0;
        float twopi = (float)(2*Math.PI);
        while (rotate<twopi){
            angle = random((float)(2*Math.PI / 51),(float)(2*Math.PI / 21));
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
        String[] processingArgs = { "Draugr003"};
        Draugr003 mySketch = new Draugr003();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
