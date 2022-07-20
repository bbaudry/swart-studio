/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import java.util.Random;

import java.util.ArrayList;

import processing.core.PApplet;

public class Flow001 extends PApplet {

    @Override
    public void settings() {
        
    }

    @Override
    public void draw() {

    }

    public static void main(String[] args) {
        String[] processingArgs = { "Flow001 " };
        SL016 mySketch1 = new SL016();
        PApplet.runSketch(processingArgs, mySketch1);
        System.out.println(mySketch1.exitCalled());
        
        if(mySketch1.exitCalled()){
            System.out.print("new sketch");
            Birth010 mySketch2 = new Birth010();
            PApplet.runSketch(processingArgs, mySketch2);
        }
    }
}
