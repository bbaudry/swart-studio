package art.studio;

import processing.core.PApplet;
import processing.core.PFont;
import java.util.ArrayList;

//practice having scrolling text
public class Practice012  extends PApplet {
    int w = 1000;
    int h = 1000;
    ArrayList<Float> knobs;
    int knobs_index;
    int fSize;
    int yInc;
    PFont f;  
    float y;  

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        knobs = new ArrayList<Float>();
        knobs_index=0;
        fSize = 16;
        yInc = fSize+2;
        f = createFont("Comfortaa",fSize,true);
        y=h-yInc;
    }

    @Override
    public void draw() {
        //fill(0,0,0);
        //rect(random(w),random(h),random(100),random(100));
        background(0,0,0);
        fill(0,0,100);

        knobs.add(knobs_index, random(100));
        knobs_index++;
      
        // Display headline at x  location
        textFont(f,fSize);
        textAlign(LEFT);
        for (int i=knobs.size()-1; i>0; i--){
            text(knobs.get(i).toString(),10,y+(i*yInc));
            System.out.println("print");
        }
        y=y-yInc;
    } 

    public static void main(String[] args) {
        String[] processingArgs = { "Practice012 011" };
        Practice012 mySketch = new Practice012();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
