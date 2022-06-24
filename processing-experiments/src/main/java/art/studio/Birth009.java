/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import java.util.Random;
import java.util.ArrayList;
import processing.core.PApplet;

public class Birth009 extends PApplet {
    int w = 1000;
    int h = 1000;
    int[] palettef = { 50,  230 };// 95, 140, 185, 275
    int lou = 69;
    float hu;
    float cx;
    float cy;
    Random rd;
    boolean laita;
    boolean atlantique;
    int ind;
    ArrayList<Float> milkyWay;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        rd = new Random();
        laita = true;
        atlantique = false;
        milkyWay = new ArrayList<>();
        ind = 0;
        init();
        cx = milkyWay.get(0);
        cy = 0;
        background(230, 80, 60);
        noStroke();
    }

    @Override
    public void draw() {
         if (laita){
            hu = palettef[(int) random(palettef.length)];
            //fill(hu, random(80, 100), random(80, 100));
            fill(hu, 0, 100);
            ellipse(cx, cy, lou/10, lou/10);
            ellipse(w-cx, cy, lou/10, lou/10);
            cy = cy + random(lou/3);
            if (cy > h){
                laita=false;
                if (ind<milkyWay.size()-1){
                    ind++;
                }
                else{
                    atlantique = true;
                }
            }
        }
        else{
            if (atlantique){
                pool();
                noLoop();
            }
            cx = milkyWay.get(ind);
            cy = 0;
            laita = true;
        }
    }

    //draw rectangular shapes in the middle of the image, before ending
    private void pool(){
        float off = random(lou, lou*2);
        fill(230, 80, 60);
        quad(off, h/2-off/2, w-off, h/2-off/2, w-off, h/2+off/2, off, h/2+off/2);
        fill(230, 0, 100);
        float epsilon = random((float)0.03,(float)0.07)*off;
        float x = off+epsilon;
        float xsym;
        while(x<w/2){
            quad(x,h/2-off/2+epsilon,x+lou,h/2-off/2+epsilon,x+lou,h/2-off/4-epsilon,x,h/2-off/4-epsilon);
            quad(x,h/2-off/4+epsilon,x+lou,h/2-off/4+epsilon,x+lou,h/2-epsilon,x,h/2-epsilon);
            quad(x,h/2+off/4-epsilon,x+lou,h/2+off/4-epsilon,x+lou,h/2+epsilon,x,h/2+epsilon);
            quad(x,h/2+off/2-epsilon,x+lou,h/2+off/2-epsilon,x+lou,h/2+off/4+epsilon,x,h/2+off/4+epsilon);
            //symmetry
            xsym=w-x-lou;
            quad(xsym,h/2-off/2+epsilon,xsym+lou,h/2-off/2+epsilon,xsym+lou,h/2-off/4-epsilon,xsym,h/2-off/4-epsilon);
            quad(xsym,h/2-off/4+epsilon,xsym+lou,h/2-off/4+epsilon,xsym+lou,h/2-epsilon,xsym,h/2-epsilon);
            quad(xsym,h/2+off/4-epsilon,xsym+lou,h/2+off/4-epsilon,xsym+lou,h/2+epsilon,xsym,h/2+epsilon);
            quad(xsym,h/2+off/2-epsilon,xsym+lou,h/2+off/2-epsilon,xsym+lou,h/2+off/4+epsilon,xsym,h/2+off/4+epsilon);
            x=x+lou*2;
        }
    }
    private void init() {
        float x = 0;
        while(x<w/2){
            milkyWay.add(x);
            x=x+random(lou/7, 2*lou/7);
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = {"Birth009"};
        Birth009 mySketch = new Birth009();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
