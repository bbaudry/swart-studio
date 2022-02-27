package art.studio;

import java.util.Random;
import processing.core.PApplet;

public class BioTexture extends PApplet {
    /*
    pink (255,0,127) 0xFF007F
    dark blue (0,0,204) 0x0000CC
    yellow (255,255,0) 0xFFFF00
    orange (150,131,11) 0xFA830B
    mauve (104, 102, 200) 0x6866C8
    beige (154, 152, 100) 0x9A9864
    white (255,255,255) 0xFFFFFF
    black (0,0,0) 0x000000
    */

    int[] palette = {0x000000,0xFF007F,0x0000CC};
    String[] paletteS = {"00000000","00FF007F","000000CC"};

    int w = 42 * 21;
    int h = 42 * 21;
    float x;
    float y;
    float red;
    float green;
    float blue;
    int iterations = 10;
    int count = 0;
    

    Random rd = new Random();

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        frameRate(1);
        textSize(12);
        noStroke();     
        background(0);
//        fill(255,255,255);
//        noLoop();
    }

    @Override
    public void draw() {
        strokeWeight(6);
        //choose random position for the shape
        x = 42 * random(21);
        y = 42 * random(21);
        //random radius for the shape
        radiation_with_rings(x,y,random(21, 84));
        count++;
        if (count>iterations){
            noLoop();
            save("bacterie.png");
        }
    }

    public void radiation(float x, float y, float radius) {
        float step = (float)(2*Math.PI/100);
        float noise_level = random(5,20); //random value for noise in the length of the spokes
        float nextx;
        float nexty;
        float radius_noise;
        float alpha=255;
        red = random(42,210);
        green = random(42,84);
        blue = random(42,210);
        for (float angle = 0; angle < 2*Math.PI; angle+=step) {
            radius_noise=random(noise_level); //random number added to the radius
            // x=h+r*cosθ; y=k+r*sinθ ; r is the radius of the circle; h,k are the coordinates of the center.
            nextx = x + (radius+radius_noise) * cos(angle);
            nexty = y + (radius+radius_noise) * sin(angle);
            alpha = random(200, 255);
            stroke(red, green, blue, alpha);
            //stroke(palette[(int)(random(3))],alpha);
            line(x, y, nextx, nexty);
        }
//        text((int)red+" "+(int)green+" "+(int)blue+" "+(int)alpha, x-radius/2, y-12);
//        text((int)x+" "+(int)y+" "+(int)radius, x-radius/2, y);
    }


    public void radiation_with_rings(float x, float y, float radius) {
        float step = (float)(2*Math.PI/100);
        float noise_level = random(5,20); //random value for noise in the length of the spokes
        float nextx;
        float nexty;
        float nextx2;
        float nexty2;
        float radius_noise;
        float alpha=255;
        red = random(42,210);
        green = random(42,84);
        blue = random(42,210);
        for (float angle = 0; angle < 2*Math.PI; angle+=step) {
            radius_noise=random(noise_level); //random number added to the radius
            // x=h+r*cosθ; y=k+r*sinθ ; r is the radius of the circle; h,k are the coordinates of the center.
            nextx = x + (radius+radius_noise) * cos(angle);
            nexty = y + (radius+radius_noise) * sin(angle);
            alpha = random(200, 255);
            stroke(255,0,127, alpha);
            //stroke(palette[(int)(random(3))],alpha);
            line(x, y, nextx, nexty);
            nextx2 = x + (radius+radius_noise+50) * cos(angle);
            nexty2 = y + (radius+radius_noise+50) * sin(angle);
            stroke(0,0,204, alpha);
            line(nextx, nexty, nextx2, nexty2);
        }
//        text((int)red+" "+(int)green+" "+(int)blue+" "+(int)alpha, x-radius/2, y-12);
//        text((int)x+" "+(int)y+" "+(int)radius, x-radius/2, y);
    }

    public void four_rings(float x, float y) {
        int radius = 52;
        int first = 10;
        int second = 30;
        int third = 10;
        fill(0x000000);
        ellipse(x, y, radius, radius);
        stroke(204, 102, 0);
        strokeWeight(first);
        noFill();
        ellipse(x, y, radius + first, radius + first);
        stroke(104, 102, 200);
        strokeWeight(second);
        noFill();
        ellipse(x, y, radius + first + second, radius + first + second);
        stroke(154, 152, 100);
        strokeWeight(third);
        noFill();
        ellipse(x, y, radius + first + second + third, radius + first + second + third);
    }

    public static void main(String[] args) {
        String[] processingArgs = { "BioTexture" };
        BioTexture mySketch = new BioTexture();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
