/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Galaxy002 extends PApplet {
    // Galaxy 04 resolution:720 × 1600
    int w = 720;
    int h = 1600;
    Random alea;
    int ratio = 10;
    int wcell = w / ratio;
    int hcell = h / ratio;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        background(230, 100, 50);
        noStroke();
        alea = new Random();
    }

    @Override
    public void draw() {
        noStroke();
        fill(0, 0, 0);

        grid();
        noLoop();
        save("galaxy002.png");
    }

    private void grid() {
        int i = hcell;
        while (i < h - hcell) {
            int a = alea.nextInt(6);
            int b = alea.nextInt(6);
            int c = alea.nextInt(6);
            int share2 = 1 + alea.nextInt(ratio / 2);
            int share3 = share2 + alea.nextInt(ratio / 2 - 1);
            shape(a, i, wcell, share2 * wcell);
            shape(b, i, share2 * wcell, share3 * wcell);
            shape(c, i, share3 * wcell, w - wcell);
            i += hcell;
        }
    }

    private void shape(int proba, int hindex, int wstart, int wend) {
        switch (proba) {
            case 0:
                sliders(hindex, wstart, wend);
                break;
            case 1:
                plug(hindex, wstart, wend);
                break;
            case 2:
                knob(hindex, wstart, wend);
                break;
            case 3:
                board(hindex, wstart, wend);
                break;
            case 4:
                needleBoard(hindex, wstart, wend);
                break;
            case 5:
                tape(hindex, wstart, wend);
                break;
        }

    }

    private void sliders(int hindex, int wstart, int wend) {
        int j = wstart;
        while (j < wend) {
            noStroke();
            float x = (float) 0.42 * wcell;
            rect(j + x, hindex + (float) 0.1 * hcell, (float) 0.18 * wcell, (float) 0.8 * hcell, 5);

            float y = (float) (0.1 * hcell) + alea.nextFloat() * ((float) 0.8 * hcell);
            rect(j + wcell / 10, hindex + y, wcell - 2 * wcell / 10, (float) 0.08 * hcell, 9);
            pushStyle();
            fill(230, 100, 50);
            rect(j + wcell / 6, hindex + y + (float) 0.04 * hcell, wcell - 2 * wcell / 6, 2);
            popStyle();
            j += wcell;
        }
    }

    private void plug(int hindex, int wstart, int wend) {
        float w4 = wcell / 4;
        float h8 = hcell / 6;
        int j = wstart;
        while (j < wend) {
            for (float x = w4; x < wcell; x += w4 * 2) {
                for (float y = h8; y < hcell; y += h8 * 2) {
                    ellipse(j + x, hindex + y, (float) 1.7 * w4, (float) 1.7 * w4);
                    pushStyle();
                    noStroke();
                    fill(230, 100, 50);
                    ellipse(j + x, hindex + y, (float) 0.5 * w4, (float) 0.5 * w4);
                    popStyle();
                }
            }
            j += wcell;
        }
    }

    private void tape(int hindex, int wstart, int wend) {
        float cx = wstart + (float) 0.1 * wcell;
        float cy = hindex + (float) 0.1 * hcell;
        float tapewid = wend - wstart - (float) 0.2 * wcell;
        float tapehei = hcell - (float) 0.2 * hcell;
        pushStyle();
        noFill();
        stroke(0, 0, 0);
        strokeWeight(3);
        rect(cx, cy, tapewid, tapehei, 5);
        popStyle();
        boolean reels = true;
        while(reels){
        if (wend - wstart >= 2 * wcell) {
            cx = wstart + wcell;
            cy = hindex + hcell / 2;
            reel(cx, cy);
            wstart+=2*wcell;
        } else {
            if (wend - wstart >= wcell) {
            speaker(wstart + (float) 0.2 * wcell, hindex + (float) 0.2 * hcell);
            }
            reels=false;
        }
        }

    }

    private void speaker(float cx, float cy) {
        pushStyle();
        noFill();
        stroke(0, 0, 0);
        strokeWeight(3);
        for (int i = 0; i < 7; i++) {
            line(cx, cy + (float) 0.1 * i * hcell, cx + (float) 0.6 * wcell, cy + (float) 0.1 * i * hcell);
        }
        popStyle();

    }

    private void reel(float cx, float cy) {
        pushStyle();
        noFill();
        stroke(0, 0, 0);
        float tapewid = 2 * wcell;
        float rad = (float) 0.5 * tapewid;
        strokeWeight((float) 0.3 * tapewid);
        strokeCap(SQUARE);
        int initangle = alea.nextInt(90);
        for (int i = 0; i < 360; i += 120) {
            arc(cx, cy, rad, rad, radians(initangle + i), radians(initangle + i + 60));
        }
        strokeWeight(3);
        float rad1 = (float) 0.1 * tapewid * 2;
        float rad2 = (float) 0.4 * tapewid * 2;
        ellipse(cx, cy, rad1, rad1);
        ellipse(cx, cy, rad2, rad2);
        popStyle();
    }

    private void board(int hindex, int wstart, int wend) {
        float w4 = wcell / 4;
        float w2 = wcell / 2;
        float h3 = hcell / 3;
        int j = wstart;
        while (j < wend) {
            for (float x = w2; x < wcell; x += w2 * 2) {
                ellipse(j + x, hindex + h3, (float) 1.5 * w2, (float) 1.5 * w2);
                pushStyle();
                noStroke();
                fill(230, 100, 50);
                ellipse(j + x, hindex + h3, (float) 0.42 * w2, (float) 0.42 * w2);
                popStyle();
                pushStyle();
                stroke(0, 0, 0);
                line(j + x, hindex + (float) 0.53 * hcell, j + x, hindex + (float) 0.9 * hcell);
                popStyle();
            }
            for (float x = w4; x < wcell; x += w4 * 2) {
                pushStyle();
                stroke(0, 0, 0);
                strokeWeight(3);
                line(j + x, hindex + hcell / 2, j + x, hindex + (float) 0.9 * hcell);
                popStyle();
            }
            j += wcell;
        }
    }

    private void needleBoard(int hindex, int wstart, int wend) {
        float w2 = wcell / 2;
        float h4 = hcell / 4;
        int j = wstart;

        while (j < wend) {
            for (float x = w2; x < wcell; x += w2 * 2) {
                pushStyle();
                stroke(0, 0, 0);
                strokeWeight(3);
                noFill();
                ellipse(j + x, hindex + h4, (float) 1.5 * w2, (float) 1.5 * w2);
                float cx = j + x;
                float cy = hindex + h4;
                float rad = (float) 0.57 * w2;
                marks(cx, cy, (float) 0.75 * w2);
                needle(cx, cy, rad);
                strokeWeight(3);
                ellipse(j + x, hindex + (float) 2.7 * h4, (float) 1.5 * w2, (float) 1.5 * w2);
                cx = j + x;
                cy = hindex + (float) 2.7 * h4;
                marks(cx, cy, (float) 0.75 * w2);
                needle(cx, cy, rad);

                popStyle();
            }
            j += wcell;
        }
    }

    private void needle(float cx, float cy, float rad) {
        float angle = 130 + alea.nextInt(280);
        float px = cx + rad * cos(radians(angle));
        float py = cy + rad * sin(radians(angle));
        strokeWeight(1);
        line(cx, cy, px, py);
    }

    private void marks(float cx, float cy, float rad) {
        for (float a = 130; a <= 410; a += 20) {
            float px = cx + rad * cos(radians(a));
            float py = cy + rad * sin(radians(a));
            float dx = cx + (float) 0.7 * rad * cos(radians(a));
            float dy = cy + (float) 0.7 * rad * sin(radians(a));
            strokeWeight(1);
            line(dx, dy, px, py);
        }
    }

    private void knob(int hindex, int wstart, int wend) {
        float w4 = wcell / 4;
        float h8 = hcell / 6;
        int j = wstart;
        while (j < wend) {
            for (float x = w4; x < wcell; x += w4 * 2) {
                for (float y = h8; y < hcell; y += h8 * 2) {
                    float cx = j + x;
                    float cy = hindex + y;
                    ellipse(cx, cy, (float) 1.3 * w4, (float) 1.3 * w4);
                    int ang = 160 + alea.nextInt(200);
                    float rad = (float) 0.85 * w4;
                    float dx = cx + rad * cos(radians(ang));
                    float dy = cy + rad * sin(radians(ang));
                    pushStyle();
                    strokeWeight(7);
                    stroke(0, 0, 0);
                    line(cx, cy, dx, dy);
                    popStyle();
                }
            }
            j += wcell;
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Galaxy002" };
        Galaxy002 mySketch = new Galaxy002();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
