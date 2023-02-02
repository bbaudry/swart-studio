/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import java.util.Random;

import processing.core.PApplet;
import processing.core.PFont;

public class Birth043 extends PApplet {
    // A2:420 × 594
    // photo:100*130
    // pixel = dpi * mm / 25.4 mm
    // w=300*150/25.4=1771
    // h=300*100/25.4=1181
    int w = 1771;// 12+38*46*29+11
    int h = 1771;// 
    // 46*46=2080=1980+136
    // 1980 cells of 38*38
    // 26 cells for 02
    // 104 cells for 08
    // 6 empty cells
    int step = 38;
    float xoff = 12;
    float yoff = 12;

    Random alea = new Random();
    String[] guests = { "Séverine", "Peter", "Olga", "Alyona", "Sébastien", "Benoit" };
    //0:background,1:feb and day,2:name, 3:rings
    int[][] palette = { { 253, 100, 17 }, { 330, 100, 84 }, { 15, 92, 89 }, { 60, 97, 100 } };
    /*
     * 253, 100, 17
     * 215, 100, 24
     * 198, 72, 39
     * 160, 97, 40
     */

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        background(palette[0][0], palette[0][1], palette[0][2]);//DejaVuSansCondensed-Bold, FreeMonoBold
        noStroke();
        PFont f = createFont("FreeMonoBold", 43 * 6, true);
        textFont(f);
        fill(50, 100, 100);
    }

    int i = 0;

    @Override
    public void draw() {
        if (i < guests.length) {//guests.length
            background(palette[0][0], palette[0][1], palette[0][2]);
            String name = guests[i];
            back();
            month02();
            day08();
            //fill(palette[2][0], palette[2][1], palette[2][2]);
            stroke(palette[3][0], palette[3][1], palette[3][2]); strokeWeight(7);
            fill(0,0,100);
            text(name, xoff+step, 33*step);
            fill(palette[0][0], palette[0][1], palette[0][2]);
            text(name, xoff+step+3, 33*step-3);
            save("Birth043" + name + ".png");
            i++;
        } else {
            noLoop();
        }
    }

    public void back() {
        float x = xoff;
        float y = yoff;
        for (int i = 0; i < 43; i++) {
            for (int j = 0; j < 46; j++) {
                float cx = x + step / 2;
                float cy = y + step / 2;
                float diam = 7 + alea.nextFloat() * (step - 7);
                noStroke();
                stroke(palette[3][0], palette[3][1], palette[3][2]);
                draw_ring(cx, cy, diam);
                y += step;
            }
            y = yoff;
            x += step;
        }
        for (int j = 0; j < 45; j++) {
            float cx = x + step / 2;
            float cy = y + step / 2;
            float diam = 7 + alea.nextFloat() * (step - 7);
            noStroke();
            stroke(palette[3][0], palette[3][1], palette[3][2]);
            draw_ring(cx, cy, diam);
            y += step;
        }
        y = yoff;
        x += step;
        for (int j = 0; j < 44; j++) {
            float cx = x + step / 2;
            float cy = y + step / 2;
            float diam = 7 + alea.nextFloat() * (step - 7);
            noStroke();
            stroke(palette[3][0], palette[3][1], palette[3][2]);
            draw_ring(cx, cy, diam);
            y += step;
        }
        y = yoff;
        x += step;
        for (int j = 0; j < 43; j++) {
            float cx = x + step / 2;
            float cy = y + step / 2;
            float diam = 7 + alea.nextFloat() * (step - 7);
            noStroke();
            stroke(palette[3][0], palette[3][1], palette[3][2]);
            draw_ring(cx, cy, diam);
            y += step;
        }
        y = yoff;
    }

    private void month02() {
        float x = xoff + 10 * step + (alea.nextInt(4) * 8 * step);
        float y = yoff + 15 * step;//5
        for (int i = 0; i < 2; i++) {
            block(x,y,step);
            y += 5 * step;
        }
    }

    private void day08() {
        float x = xoff + 10 * step;
        float y = yoff + 5 * step;
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 4; j++) {
                block(x,y,step);
                x += 8 * step;
            }
            x = xoff + 10 * step;
            y += 5 * step;
        }
    }

    private void block(float x, float y, float offset) {
        noStroke();
        fill(palette[0][0], palette[0][1], palette[0][2]);
        rect(x, y, offset * 5, offset * 2);
        rect(x, y+2*offset, offset * 3, offset);
        stroke(palette[1][0], palette[1][1], palette[1][2]);
        row(x, y, 5, offset);
        row(x, y + offset, 5, offset);
        row(x, y + 2*offset, 3, offset);
    }    

    private void row(float x, float y, int iter, float offset) {
        for (int i = 0; i < iter; i++) {
            int density = alea.nextInt(4) + 1;
            float vera = offset / density / 2;
            strokeWeight(vera);
            noFill();
            float knob = offset;
            while (knob > 0) {
                rect(x, y, knob, knob);
                knob -= vera * 2;
            }
            x += offset;
        }
    }



    public void draw_ring(float cx, float cy, float diam) {
        int density = alea.nextInt(4) + 1;
        float vera = diam / 2 / density;
        strokeWeight(vera);
        noFill();
        stroke(palette[3][0], palette[3][1], palette[3][2]);
        float knob = diam / 2;
        while (knob > 0) {
            ellipse(cx, cy, knob * 2, knob * 2);
            knob -= vera * 2;
        }

    }

    public static void main(String[] args) {
        String[] processingArgs = { "Birth043" };
        Birth043 mySketch = new Birth043();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
