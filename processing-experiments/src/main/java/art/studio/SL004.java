/* Metadata {"endless":false, "BW": false, "knobs": true, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;
import art.Knob;

import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.Map;

import org.json.simple.JSONObject;

public class SL004 extends PApplet {
    int vis_w = 1000;
    int txt_w = 1000;
    int w = vis_w+txt_w;
    int h = 1000;
    //at each iteration draw at x,y
    int x;
    int y;
    JSONObject knobsJSON;
    // variables to set colors hu for hue, not for brightness, boring for saturation
    float hu;
    float not;
    float boring;

    int iter;
    int max_iter;
    Random rand;

    //coordinate for shapes  rectA, rectB and triA
    float rectAx1, rectAx2, rectAy1, rectAy2; //rectAx1 < rectAx2 and rectAy1 < rectAy2
    float rectBx1, rectBx2, rectBy1, rectBy2; //rectBx1 < rectBx2 and rectBy1 < rectBy2
    float triAx1, triAx2, triAx3, triAy1, triAy2, triAy3; 

    ArrayList<Knob> knobs;
    // variables used to display text
    float txt_x;
    float txt_y;
    float txt_x_inc;
    float txt_y_inc;

    @Override
    public void settings() {
        size(w, h);
        knobs = new ArrayList<Knob>();
        knobsJSON = new JSONObject();
    }
    /* {"knob1"=val1,
        "knob2"=val2,
        etc. for all knobs defined in the setup
        {
            "knob11"=val11,
            "knob12"=val12,
        },
        {
            "knob21"=val21,
            "knob22"=val22,
        },
        etc., one series of knobs for each iteration of draw()
       }*/
    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        rand = new Random();
        fill(0,0,0); knobs.add(new Knob("0", false)); knobs.add(new Knob("0", false)); knobs.add(new Knob("0", false));
        knobsJSON.put("backHue", "0");knobsJSON.put("backSaturation", "0");knobsJSON.put("backBrightness", "0");
        noStroke();
        rect(0,0,w,h);
        hu=random(360); knobs.add(new Knob(Float.toString(hu), true));
        iter=0;
        max_iter=100; knobs.add(new Knob(Integer.toString(max_iter), false));
        textSize(4); knobs.add(new Knob(Float.toString(8),false));
        txt_x=vis_w;
        txt_y=3;
        txt_x_inc=21; knobs.add(new Knob(Float.toString(txt_x_inc),false)); 
        txt_y_inc=4; knobs.add(new Knob(Float.toString(txt_y_inc),false)); 
        rectAx1 = 400; rectAx2 = 600; rectAy1 = 400; rectAy2 = 600;
        knobs.add(new Knob(Float.toString(rectAx1), false));
        knobs.add(new Knob(Float.toString(rectAx2), false));
        knobs.add(new Knob(Float.toString(rectAy1), false));
        knobs.add(new Knob(Float.toString(rectAy2), false));
        rectBx1 = 11; rectBx2 = 111; rectBy1 = 777; rectAy2 = 888;
        knobs.add(new Knob(Float.toString(rectBx1), false));
        knobs.add(new Knob(Float.toString(rectBx2), false));
        knobs.add(new Knob(Float.toString(rectBy1), false));
        knobs.add(new Knob(Float.toString(rectBy2), false));
        triAx1 = 600; triAx2 = 400; triAx3 = 800; triAy1 = 400; triAy2 = 100; triAy3 = 250;
        knobs.add(new Knob(Float.toString(triAx1), false));
        knobs.add(new Knob(Float.toString(triAx2), false));
        knobs.add(new Knob(Float.toString(triAx3), false));
        knobs.add(new Knob(Float.toString(triAy1), false));
        knobs.add(new Knob(Float.toString(triAy2), false));
        knobs.add(new Knob(Float.toString(triAy3), false));
    }

    @Override
    public void draw() {
        if (iter<max_iter){
            Map m1 = new LinkedHashMap(); 
        x=rand.nextInt(vis_w); knobs.add(new Knob(Integer.toString(x), true)); m1.put("x",Integer.toString(x));
        y=rand.nextInt(h); knobs.add(new Knob(Integer.toString(y), true)); m1.put("y",Integer.toString(y));
        drawPoint(x, y);
        String key = "iter"+iter;
        knobsJSON.put(key, m1);
        writeIter();
        iter++;
        }
        else{
            noLoop();
            print_knobs();
            saveKnobs();
            save("SL004.png");
        }
    }

    public void drawPoint(float x, float y){
        if (!isIN(x,y)){
            not=random(40); knobs.add(new Knob(Float.toString(not), true));
            boring=random(90,100); knobs.add(new Knob(Float.toString(boring), true));
            fill(hu,not,boring);
            float len = random(1,3); knobs.add(new Knob(Float.toString(len), true));
            float hei = random(1,3); knobs.add(new Knob(Float.toString(hei), true));
            rect(x,y,len,hei);
        }
    }

    public boolean isIN(float x, float y){
        //first check if the point is in square between (400,400) and (600,600), or in rectangle between (11,777) and (111,888)
        if ((x>=rectAx1 & x<rectAx2 & y>=rectAy1 & y<rectAy2)||(x>=rectBx1 & x<rectBx2 & y>=rectBy1 & y<rectBy2)){
            return true;
        }
        //second check if the point is in triangle 
        else{
            if (inTri(x,y)){
                return true;
            }
            else{
                return false;
            }
        }
    }

    //check if the point (x,y) is in triangle (triAx1, triAy1) (triAx2, triAy2) (triAx3, triAy3)
    public boolean inTri(float x, float y){
        float triangleSurf = surfTri(triAx1, triAy1, triAx2, triAy2, triAx3, triAy3);
        float tri1 = surfTri(x,y,triAx1,triAy1,triAx2,triAy2);
        float tri2 = surfTri(x,y,triAx2,triAy2,triAx3,triAy3);
        float tri3 = surfTri(x,y,triAx1,triAy1,triAx3,triAy3);
        return(triangleSurf == tri1+tri2+tri3);
    }

    //computes the surface of a triangl (x1,y1) (x2,y2) (x3,y3)
    private float surfTri(float x1, float y1, float x2, float y2,float x3, float y3){
        return (float)Math.abs((x1*(y2-y3) + x2*(y3-y1)+ x3*(y1-y2))/2.0);
    }

    private void writeIter(){
        fill(hu,42,100);
        noStroke();
        rect(vis_w,0,txt_w,h);
        fill(hu,0,0);
        text(Integer.toString(iter),vis_w+txt_w/2,h/2);
    }

    public void print_knobs(){
        fill(hu,42,100);
        noStroke();
        rect(vis_w,0,txt_w,h);
        noStroke();
        float localx=vis_w; // start printing at x out of the viz width
        float localy=txt_y; // start printing at y init value for text
        localy+=txt_y_inc;
        fill(0,0,0);
        float txt_hu=(hu*2)%360;
        text("Generative art is about drawing and tuning knobs. Some knob values are tuned by the artist. Some knob values are chosen randomly. Here are all the knob values for this piece", localx, localy);
        localy+=txt_y_inc;
        for (int i=0; i<knobs.size();i++){
            Knob k = knobs.get(i);
            if (k.getrand()){fill(0,0,0);}
            else {fill(txt_hu,100,100);}
            if (localx<w-txt_x_inc){
                text(k.getValue(), localx, localy);
                localx+=txt_x_inc;
            }
            else{
                localx=vis_w;
                localy+=txt_y_inc;
                text(k.getValue(), localx, localy);
                localx+=txt_x_inc;
            }
        }
        noFill();
    }

    private void saveKnobs(){
        try {
            FileWriter file = new FileWriter("SL004Knobs.json");
            file.write(knobsJSON.toJSONString());
            file.close();
         } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
         }
         System.out.println("JSON file created: "+knobsJSON);
    }

    public static void main(String[] args) {
        String[] processingArgs = { "SL004" };
        SL004 mySketch = new SL004();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
