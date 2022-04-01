package art.studio;

import processing.core.PApplet;
import java.util.Random;
import java.io.*;
import java.util.*;
import org.json.simple.*;
import org.json.simple.parser.*;



public class OddJob002 extends PApplet{
    int w = 1000;
    int h = 1000;
    float x;
    float y;
    int nb_deps;
    int hue_factor;
    float bright_factor;
    JSONParser parser = new JSONParser();
    JSONArray jsonArray;
    String dir = "schematic005/CR001/src/main/java/art/studio";
    Iterator<?> dep_iterator;
    LinkedHashMap<String,Integer> suppliers_count;
    LinkedHashMap<String,Integer> suppliers_color;
    int baldessari;
    float x_inc;
    float y_inc;
    boolean dark_mode;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        frameRate(2);
        colorMode(HSB, 360, 100, 100);
        noStroke();
        baldessari = (int)random(7,29);
        x_inc=w/baldessari;
        y_inc=h/baldessari;
        Random r = new Random();
        dark_mode = r.nextBoolean(); //knob: dark_mode
    }

    @Override
    public void draw() {
        if (dark_mode){background(45,0,0);}
        else{background(45,0,100);}
        x=0;
        y=0;
        layer();
    }


    public void layer(){
        float depth;
        if (dark_mode){fill(45,0,100);}
        else{background(45,0,0);}
        while (y< h-y_inc){
            for (int john=0; john< baldessari; john++){
                depth = random(1,6);
                rect(x+(3*depth), y+(3*depth), x_inc-(6*depth), y_inc-(6*depth)); //knob : 4, 8 
                x=x+x_inc;
            }
            x=0;
            y=y+y_inc;
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "OddJob002"};
        OddJob002 mySketch = new OddJob002();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
