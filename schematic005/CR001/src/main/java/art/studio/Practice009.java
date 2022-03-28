package art.studio;

import java.util.function.DoubleToIntFunction;

import processing.core.PApplet;
import processing.core.PShape;
import java.io.*;
import java.util.*;
import org.json.simple.*;
import org.json.simple.parser.*;

//practice drawing parts of circles circles
public class Practice009  extends PApplet {
    int w = 1000;
    int h = 1000;
    float x;
    float y;
    String dir = "schematic005/CR001/src/main/java/art/studio";
    JSONParser parser = new JSONParser();
    JSONArray jsonArray;
    int nb_deps;
    LinkedHashMap<String,Integer> suppliers_count;
    LinkedHashMap<String,Integer> suppliers_color;
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
        } catch (IOException | ParseException e) {
           // TODO Auto-generated catch block
           e.printStackTrace();
       }
}

    @Override
    public void setup() {
        suppliers_count = new LinkedHashMap<String,Integer>();
        suppliers_color = new LinkedHashMap<String,Integer>();
        dep_iterator = jsonArray.iterator();
        colorMode(HSB, 360, 100, 100);
    
    }

    //Double newData = new Double(data);
    //int value = newData.intValue();

    @Override
    public void draw() {
        if (dep_iterator.hasNext()) {
            JSONObject o = (JSONObject)(dep_iterator.next());
            float depth = (float)((Long) o.get("depth"));
            String sup = o.get("supplier").toString();
            Integer sup_occ = suppliers_count.putIfAbsent(sup, 1);
            if (sup_occ!=null) {Integer occ = suppliers_count.get(sup); suppliers_count.put(sup, occ+1);}
            if (suppliers_color.putIfAbsent(sup, 1)==null){suppliers_color.put(sup, (int)random(360));}
            float hue = suppliers_color.get(sup);
            //suppliers.get(sup)
            fill(10+hue,100,100-8);
            x=random(w);
            y=random(h);
            rect(x, y, 42, 42);
        }
        else{
            System.out.println("there are "+suppliers_count.size()+" unique suppliers in the chain");
            System.out.println("there are "+suppliers_color.size()+" unique colors in the chain");
            Collection<Integer> nb_sup = suppliers_count.values();
            Iterator<?> it = nb_sup.iterator();
            int totdeps=0;
            while (it.hasNext()){
                Integer i = (Integer)(it.next());
                totdeps = totdeps + i.intValue();
            }
            System.out.println("there are "+totdeps+" deps in total");
            suppliers_color.entrySet().forEach( entry -> {
                System.out.println("color of "+ entry.getKey() + "=>" + entry.getValue() );
            });            
            noLoop();
        }

   } 


    public static void main(String[] args) {
        String[] processingArgs = { "Practice 009" };
        Practice009 mySketch = new Practice009();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
