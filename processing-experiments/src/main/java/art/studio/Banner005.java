/* Metadata {"endless":false, "BW": false, "knobs": false, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.ArrayList;
import java.util.Random;
import processing.core.PFont;

public class Banner005 extends PApplet {
    int w = 1000;
    int h = 1000;
    float cx;
    float cy;
    int rings;
    float rad;
    float off;
    float hu;
    int deps;
    Random alea;
    ArrayList<ArrayList<Float[]>> unfold;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        cx = w / 2;
        cy = h / 2;
        rings = 5;
        rad = w - 176;
        off = rad / rings;
        unfold = new ArrayList<>();
        alea = new Random();
        background(0, 0, 100);
        noStroke();
        fill(0, 0, 0);
        ellipse(cx, cy, w, w);
        fill(0, 0, 100);
        ellipse(cx, cy, 42, 42);
        strokeWeight(1);
        hu = 250;
        noFill();
    }

    @Override
    public void draw() {
        stroke(hu, 0, 100);
        if (frameCount <= rings) {
            deps = 7 + alea.nextInt(42);
            ring(off, deps);
            off = off + rad / rings;
            // hu+=50;
        } else {
            link();
            john("CHAINS",127,false);
            rad+=80;
            john("https://chains.proj.kth.se",42,true);
            save("chains.png");
            noLoop();
        }
    }

    private void ring(float r, int particles) {
        ArrayList<Float[]> baldessari = new ArrayList<>();
        fill(hu, 100, 100);
        float john = (2 * PI) / particles;
        float code;
        float on;
        float disk = 2;
        for (int i = 0; i < deps; i++) {
            code = cx + r / 2 * cos(john * i);
            on = cy + r / 2 * sin(john * i);
            Float[] oneRing = { code, on };
            baldessari.add(oneRing);
            // ellipse(code,on,disk,disk);
        }
        unfold.add(baldessari);
    }

    private void link() {
        for (int i = 0; i < unfold.size() - 1; i++) {
            ArrayList<Float[]> oneRing = unfold.get(i);
            ArrayList<Float[]> anotherRing = unfold.get(i + 1);
            for (int j = 0; j < oneRing.size(); j++) {
                int suppliers = 1 + alea.nextInt(7);
                for (int k = 0; k < suppliers; k++) {
                    int dest = alea.nextInt(anotherRing.size() - 1);
                    line(oneRing.get(k)[0], oneRing.get(k)[1], anotherRing.get(dest)[0], anotherRing.get(dest)[1]);
                }
            }
        }
    }

    // https://processing.org/tutorials/text/#displaying-text-character-by-character
    private void john(String baldessari, int art, boolean opposite) {
        PFont f = createFont("FreeMono", art, true);//DejaVuSansMono
        textFont(f);
        // The text must be centered
        textAlign(CENTER);
        smooth();
        noFill();
        stroke(0, 0, 100);
        // We must keep track of our position along the curve
        float arclength = 0;
        // For every box
        for (int i = 0; i < baldessari.length(); i++) {
            // Instead of a constant width, we check the width of each character.
            char currentChar = baldessari.charAt(i);
            float tw = textWidth(currentChar)*4;

            // Each box is centered so we move half the width
            arclength += tw / 2;
            // Angle in radians is the arclength divided by the radius
            // Starting on the left side of the circle by adding PI
            float theta ;
            if (opposite){theta= arclength / rad/2;}
            else {theta= PI + arclength / rad/2;}

            pushMatrix();
            // Polar to cartesian coordinate conversion
            translate(cx+rad/2 * cos(theta), cy+rad/2 * sin(theta));
            // Rotate the box
            rotate(theta + PI /2); // rotation is offset by 90 degrees
            // Display the character
            fill(0, 0, 100);
            text(currentChar, 0, 0);
            popMatrix();
            // Move halfway again
            arclength += tw / 2;
        }
    }


    public static void main(String[] args) {
        String[] processingArgs = { "Banner005" };
        Banner005 mySketch = new Banner005();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
