package art.studio;

import processing.core.PApplet;
import java.util.Random;
import java.io.*;
import java.util.*;
import org.json.simple.*;
import org.json.simple.parser.*;



public class Deps extends PApplet{
    int w = 1000;
    int h = 1000;
    float cx;
    float cy;
    float x;
    float y;
    float descent;
    int nb_deps;
    float hue_factor;
    float bright_factor;
    float depth_shift;
    JSONParser parser = new JSONParser();
    JSONArray jsonArray;
    String dir = "schematic005/CR001/src/main/java/art/studio";
    Iterator<?> dep_iterator;

    @Override
    public void settings() {
        size(w, h);
        /* Get the file content into the JSONObject */
        Object obj;
        try {
            obj = parser.parse(new FileReader(dir+"/asynch-http-dependency-tree-dependencies.json"));
            jsonArray = (JSONArray)obj;
            nb_deps = jsonArray.size();
            System.out.println(dir+"/asynch-http-dependency-tree-dependencies.json contains "+jsonArray.size()+" entries");
            dep_iterator = jsonArray.iterator();
            descent = h/nb_deps;
        } catch (IOException | ParseException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        hue_factor=15;
        bright_factor=8;
        depth_shift=w/30;
        x=0;
        y=0;
        background(45,25,80);
    }

    @Override
    public void draw() {
        if (dep_iterator.hasNext()) {
            JSONObject o = (JSONObject)(dep_iterator.next());
            float depth = (float)((Long) o.get("depth"));
            float hue = hue_factor*depth;
            float bri = bright_factor*depth;
            float shift = depth_shift*depth;
            x=shift;
            y+=descent;
            fill(10+hue,100,100-bri);
            stroke(10,0,100);
            rect(x, y, w, descent);
            //strokeWeight(descent);
            //line(x, y, w, y);
        }
        else{
            noLoop();
            stroke(10,0,0);
            strokeWeight(4);
            line(0,descent*nb_deps,w,descent*nb_deps);
            System.out.println(descent*nb_deps+"  "+h+"  "+h/nb_deps+"  "+descent+"  "+nb_deps);
        }
    }



    public static void main(String[] args) {
        String[] processingArgs = { "Deps"};
        Deps mySketch = new Deps();
        PApplet.runSketch(processingArgs, mySketch);
    }

    
}
