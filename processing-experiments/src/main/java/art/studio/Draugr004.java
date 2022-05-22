/* Metadata {"endless":true, "colors": false, "knobs": true, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import processing.core.PFont;
import java.util.ArrayList;

//Draugr is an exoplanet https://en.wikipedia.org/wiki/PSR_B1257%2B12_A
//the Draugr series is about circular shapes and random black lines
public class Draugr004 extends PApplet {
    int w = 1000;
    int h = 1000;
    float cx;
    float cy;
    float radius;
    int radigue; //number of chords at each step
    ArrayList<Float> knobs;
    int knobs_index;
    int fSize;
    int yInc;
    float baldessari; // width of the rectangle on which numbers are written (its height is always h)
    PFont f;
    float y;
    boolean grow;
    int max;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        baldessari = (float)(0.1*w);
        cx = w / 2 + baldessari / 2; // cx is shifted right of half of w to account for the text width on the left
        cy = h / 2;
        radius = (float) (w * 0.8);
        background(242, 242, 217);
        fill(233, 233, 211);
        radigue=11;
        knobs = new ArrayList<Float>();
        knobs_index = 0;
        fSize = 16;
        yInc = fSize + 2;
        f = createFont("Comfortaa", fSize, true);
        y = h - yInc;
        grow = true;
        max = 0;
        textFont(f, fSize);
        textAlign(LEFT);
    }

    @Override
    public void draw() {
        chords();
        numbers();
    }

    public void chords (){
        for (int i = 0; i < radigue; i++) {
            if (random(3) < 1) {
                stroke(0, 0, 0, random(51, 199));
            } else {
                stroke(242, 242, 217);
            }
            approx_chord(cx, cy, radius / 2);
        }
    }

    // draw chords in the circle centered on (x,y) and radius. The chords are not
    // straight
    public void approx_chord(float x, float y, float radius) {
         // random angle on the left half of the circle; (x,y) on the edge of the circle at angle
        float angle = random((float) (Math.PI / 2), (float) (3 * Math.PI / 2));
        float left_x = x + radius * cos(angle);
        float left_y = y + radius * sin(angle);
        knobs.add(knobs_index, angle);
        knobs_index++;
        // symmetric angle on the right half of the circle; (x,y) on the edge of the circle at angle
        float angle_sym = (float) (2 * 3 * Math.PI / 2 - angle);
        float right_x = x + radius * cos(angle_sym);
        float right_y = y + radius * sin(angle_sym);
        //draw a chord from left to right, made of lines with a random slop between -3 and 3 
        strokeWeight(random(2, 8));
        float chord_length = right_x - left_x;
        float tmpx = left_x;
        float tmpxdest = tmpx + random(chord_length / 5);
        float tmpy = left_y;
        float tmpydest = tmpy + random(-3, 3);
        while (tmpxdest < right_x) {
            line(tmpx, tmpy, tmpxdest, tmpydest);
            tmpx = tmpxdest;
            tmpy = tmpydest;
            tmpxdest = tmpx + random(chord_length / 5);
            tmpydest = tmpy + random(-2, 2);
        }
        line(tmpx, tmpy, right_x, right_y);
        noFill();
    }

    public void numbers(){
        // erase numbers
        noStroke();
        fill(242, 242, 217);
        rect(0, 0, baldessari, h);
        // write numbers
        fill(0, 0, 0);
        if (grow) {
            int taille = knobs.size();
            if (taille * yInc < h) {
                y = y - taille * yInc;
                max = taille;
                for (int i = 0; i < max; i++) {
                    text(knobs.get(i).toString(), 10, y + (i * yInc));
                }
                
            } else {
                grow = false;
            }
        } else {
            y = 0;
            int taille = knobs.size();
            for (int i = 0; i < max+1; i++) {
                text(knobs.get(taille - max -1 + i).toString(), 10, y + (i * yInc));
            }
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Draugr004" };
        Draugr004 mySketch = new Draugr004();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
