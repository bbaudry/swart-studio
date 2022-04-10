package art.studio;

import processing.core.PApplet;

//practice drawing horizontal, non straight chords in circles
public class Practice006  extends PApplet {
    int w = 1000;
    int h = 1000;
    float move = 1;
    float r = random(256);
    float g = random(256);
    float b = random(256);
    float cChange = 2;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        //frameRate(1);
        background(255,255,255);
        //noLoop();
    }

    @Override
    public void draw() {
        strokeWeight(6);
        float cx;
        float cy;
        float radius;
        for (int i=0; i<11; i++){
            radius = 200;//random(42, 111);;
            cx = random(w / 10, 9 * w / 10);
            cy = random(h / 10, 9 * h / 10);
            stroke(0);
            ellipse(cx, cy, radius*2, radius*2);
            for (int j = 0; j<11; j++){
                h_ray(cx, cy, radius);
            }
        }
        noLoop();
    }

    // draw chords in the circle centered on (x,y) and radius. The chords are not straight
    public void h_ray(float x, float y, float radius) {
        ellipse(x, y, 10, 10); //draw the center of the circle
        noStroke();
        float angle = random((float)(Math.PI/2),(float)(3*Math.PI/2)); //random angle on the left half of the circle
        float left_x = x + radius*cos(angle);
        float left_y = y + radius*sin(angle);
        fill(42,242,84);
        ellipse(left_x, left_y, 10, 10);
        float angle_sym = (float)(2*3*Math.PI/2-angle);//angle to get the symmetric on the right half of the circle
        float right_x = x + radius*cos(angle_sym);
        float right_y = y + radius*sin(angle_sym);//sy2 should be equal to sy1 according to the way we compute angle_sym as the symmetric of angle on an horizontal axis
        fill(242,42,84);
        ellipse(right_x, right_y, 10, 10);
        strokeWeight(4);
        stroke(111,111,111);
        float chord_length=right_x-left_x;
        float tmpx=left_x;
        float tmpxdest=tmpx + random(chord_length/5);
        float tmpy = left_y;
        float tmpydest = tmpy + random(-2,2);
        while(tmpxdest<right_x){
            line(tmpx,tmpy,tmpxdest,tmpydest);
            tmpx=tmpxdest;
            tmpy=tmpydest;
            tmpxdest = tmpx + random(chord_length/5);
            tmpydest = tmpy + random(-2,2);
        }
        System.out.println("tmpx = "+tmpx+"; tmpy = "+tmpy+"; sx2 = "+right_x+"; sy2 = "+right_y);
        line(tmpx,tmpy,right_x,right_y);

        noFill();
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Practice 001" };
        Practice006 mySketch = new Practice006();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
