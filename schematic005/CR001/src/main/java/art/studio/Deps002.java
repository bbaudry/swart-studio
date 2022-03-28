package art.studio;

import processing.core.PApplet;
import java.util.Random;
import java.io.*;
import java.util.*;
import org.json.simple.*;
import org.json.simple.parser.*;



public class Deps002 extends PApplet{
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
    int john;
    int baldessari;
    float x_inc;
    float y_inc;

    @Override
    public void settings() {
        size(w, h);
        /* Get the file content into the JSONObject */
        Object obj;
        try {
            obj = parser.parse(new FileReader(dir+"/asynch-http-dependency-tree-dependencies.json"));
            jsonArray = (JSONArray)obj;
            nb_deps = jsonArray.size();
            dep_iterator = jsonArray.iterator();
        } catch (IOException | ParseException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        noStroke();
        x=0;
        y=0;
        baldessari = Double.valueOf(Math.sqrt(nb_deps)).intValue()+1; //sqrt of nb of deps: nb of shapes per row
        john = 1;
        x_inc=w/baldessari;
        y_inc=h/baldessari;
        hue_factor = 0;
        suppliers_count = new LinkedHashMap<String,Integer>();
        suppliers_color = new LinkedHashMap<String,Integer>();
        background(45,25,80);
    }

    @Override
    public void draw() {
        if (dep_iterator.hasNext()) {
            JSONObject o = (JSONObject)(dep_iterator.next());
            float depth = (float)((Long) o.get("depth"));
            String sup = o.get("supplier").toString();
            Integer sup_occ = suppliers_count.putIfAbsent(sup, 1);
            if (sup_occ!=null) {Integer occ = suppliers_count.get(sup); suppliers_count.put(sup, occ+1);}
            if (suppliers_color.putIfAbsent(sup, 1)==null){suppliers_color.put(sup, hue_factor);hue_factor=hue_factor+17;}
            float hue = suppliers_color.get(sup);
//            float bri = bright_factor*depth;
            fill(10+hue,100,100);
            rect(x+(4*depth), y+(4*depth), x_inc-(8*depth), y_inc-(8*depth));
            if (john<baldessari){
                x=x+x_inc;
                john++;
            }
            else{
                x=0;
                y=y+y_inc;
                john=1;
            }
        }
        else{
            noLoop();
            save("chain_#001.png");
        }
    }



    public static void main(String[] args) {
        String[] processingArgs = { "Deps002"};
        Deps002 mySketch = new Deps002();
        PApplet.runSketch(processingArgs, mySketch);
    }

    
}
