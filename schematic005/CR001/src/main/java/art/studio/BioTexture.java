/*
This piece from Feb 2022 is inspired by a large wall installation at the Museum of Art in Göteborg
matta nr 83 (2010) by Jonathan Josefsson
https://goteborgskonstmuseum.se/wp-content/uploads/2016/06/skulpturhallen-kalle-sanner-frontalperspektiv-1200x800-960x640.jpg
*/

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
    Integer[] colors = new Integer[]{0xFEF0D5, 0xD81E5B, 0xF35B68, 0x00BEB2, 0x1A5D63};

    int w = 42 * 21;
    int h = 42 * 21;
    float px;
    float py;
    float red=random(256);
    float green=random(256);
    float blue=random(256);
    @Override
    public void settings() {
        size(w, h);
        //size(500,500);
    }

    @Override
    public void setup() {
        frameRate(1);
        textSize(12);
        noStroke();     
        background(0);
        //noLoop();
    }

    @Override
    public void draw() {
        //background(0);
        noise();
        px=w/2+50+frameCount*5;
        py=h/2-50-frameCount*5;
        helix(px,py);
        save("bacterie.png");
    }

    //draw bacteria in an helicoidal shape
    public void helix(float cx, float cy){
        float step = (float)(2*Math.PI/22);
        for (float angle = 1; angle < 2*Math.PI * 1.4; angle+=step) {        
            float x = (float)(cx + cos(angle)*(h/angle)*1.25);
            float y = (float)(cy + sin(angle)*(h/angle)*1.25);
            radiation_with_color_rings(x, y, random(25,40));
//            ellipse(x, y, 20, 20);
        }
    }

    public void noise(){
        double rate = (h*w)*0.01;
        double count=0;
        float posx=100;
        float posy=110;
        float op=255;
        //noStroke();
        while (count<rate){
            posx=random(0,w);
            posy=random(0,h);
            op=random(50, 150);
//            stroke(255,255,255,op);
            line(posx, posy, posx+1,posy);
            count++;
        }
    }
    public void radiation_with_color_rings(float x, float y, float radius) {
        strokeWeight(2);
        float step = (float)(2*Math.PI/300);
        float noise_level; //random value for noise in the length of the spokes
        float nextx;
        float nexty;
        float nextx2;
        float nexty2;
        float nextx3;
        float nexty3;
        float radius_noise;
        float alpha=255;
        //large in the background
        noise_level = random(-(radius/8),(radius/8));
        choose_rgb();
        for (float angle = 0; angle < 2*Math.PI; angle+=step) {
            radius_noise=random(noise_level); //random number added to the radius
            // x=h+r*cosθ; y=k+r*sinθ ; r is the radius of the circle; h,k are the coordinates of the center.
            nextx = x + (radius+2*radius/3+radius_noise) * cos(angle);
            nexty = y + (radius+2*radius/3+radius_noise) * sin(angle);
            alpha = random(100, 255);
//            choose_rgb();
            stroke(red, green, blue, alpha);
            line(x, y, nextx, nexty);
        }
        //middle ring
        //noise_level = random(15,25);
        choose_rgb();
        for (float angle = 0; angle < 2*Math.PI; angle+=step) {
            radius_noise=random(noise_level); //random number added to the radius
            nextx2 = x + (radius+radius_noise) * cos(angle);
            nexty2 = y + (radius+radius_noise) * sin(angle);
            alpha = random(100, 255);
//            choose_rgb();
            stroke(red, green, blue, alpha);
            line(x, y, nextx2, nexty2);
        }
        //inner ring
        //noise_level = random(5,20);
        choose_rgb();
        for (float angle = 0; angle < 2*Math.PI; angle+=step) {
            radius_noise=random(noise_level); //random number added to the radius
            nextx3 = x + (radius-(8*radius/10)+radius_noise) * cos(angle);
            nexty3 = y + (radius-(8*radius/10)+radius_noise) * sin(angle);
//            choose_rgb();
            alpha = random(100, 155);
            stroke(red, green, blue, alpha);
            line(x, y, nextx3, nexty3);
        }
//        text((int)red+" "+(int)green+" "+(int)blue+" "+(int)alpha, x-radius/2, y-12);
//        text((int)x+" "+(int)y+" "+(int)radius, x-radius/2, y);
    }

    //randomly pick rgb in a palette
    public void choose_rgb(){
        /*
        float cChange=20;
        red += random(-cChange, cChange);
        red = constrain(red, 0, 256);
      
        green += random(-cChange, cChange);
        green = constrain(green, 0, 256);
      
        blue += random(-cChange, cChange);
        blue = constrain(blue, 0, 256);
        */
        
        float r = random(5);
        switch ((int)r) {
            //pink (255,0,127) 0xFF007F
            case 1:  red=255; green=0; blue=127;
                     break;
            //dark blue (0,0,204) 0x0000CC
            case 2:  red=0; green=0; blue=204;
                     break;
            //yellow (255,255,0) 0xFFFF00
            case 3:  red=255; green=255; blue=127;
                     break;
            //orange (150,131,11) 0xFA830B
            case 4:  red=150; green=131; blue=11;
                     break;
            //mauve (104, 102, 200) 0x6866C8
            case 5:  red=104; green=102; blue=200;
                     break;
            //beige (154, 152, 100) 0x9A9864                 
            case 0:  red=154; green=152; blue=100;
                     break;
        }
    }

    public void radiation(float x, float y, float radius) {
        strokeWeight(2);
        float step = (float)(2*Math.PI/200);
        float noise_level = random(5,20); //random value for noise in the length of the spokes
        float nextx;
        float nexty;
        float radius_noise;
        float alpha=255;
        choose_rgb();
        for (float angle = 0; angle < 2*Math.PI; angle+=step) {
            radius_noise=random(noise_level); //random number added to the radius
            // x=h+r*cosθ; y=k+r*sinθ ; r is the radius of the circle; h,k are the coordinates of the center.
            nextx = x + (radius+radius_noise) * cos(angle);
            nexty = y + (radius+radius_noise) * sin(angle);
            alpha = random(100, 255);
            stroke(red, green, blue, alpha);
            //stroke(palette[(int)(random(3))],alpha);
            line(x, y, nextx, nexty);
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

    // simple function that draws points along a spiral, 3 circles
    public void pure_spiral(){
        float step = (float)(2*Math.PI/20);
        for (float angle = 0; angle < 2*Math.PI * 3; angle+=step) {        
            float x = width/2 + cos(angle)*(20*angle);
            float y = height/2 + sin(angle)*(20*angle);
            noStroke();
            fill(235, 188, 102);
            ellipse(x, y, 10, 10);
        }
    }

    // https://happycoding.io/examples/processing/for-loops/spiral
    public void colorful_spiral() {
        float distance = 0;
        float r = random(256);
        float g = random(256);
        float b = random(256);
        float cChange = 2;
        float distanceChange = (float) (0.001);

        for (float angle = 0; angle < 360 * 100; angle += 0.1) {

            float x = width / 2 + cos(radians(angle)) * distance;
            float y = height / 2 + sin(radians(angle)) * distance;

            r += random(-cChange, cChange);
            r = constrain(r, 0, 256);

            g += random(-cChange, cChange);
            g = constrain(g, 0, 256);

            b += random(-cChange, cChange);
            b = constrain(b, 0, 256);
            stroke(r, g, b);
            point(x, y);

            distance += distanceChange;
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "BioTexture" };
        BioTexture mySketch = new BioTexture();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
