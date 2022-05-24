/* Metadata {"endless":true, "BW": true, "knobs": false, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class SL014 extends PApplet {
    int w = 1000;
    int h = 1000;
    Random rd;
    float john;//x
    float baldessari;//y
    float not;//width
    float boring;//height
    float tom;//min height
    float waits;//max hight
    boolean clint;//if true then grow else shrink

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        rd = new Random();
        noStroke();
        int rx = rd.nextInt(4)+1; //add to not have 0, since we use it in a division
        int ry = rd.nextInt(42)+1; //to be sure it's greater than ry
        not=w/rx;
        boring=h/ry;
        tom=h/ry;
        waits=11*tom;
        clint=true;
    }

    @Override
    public void draw() {
        background(0, 0, 0);
        john=0;
        System.out.println("draw :  not "+not+" : boring : "+boring);
        for(float i=0;i<w;i=i+not){
            baldessari=0;
            for (float j=0;j<h;j=j+boring){
                if(rd.nextBoolean()){fill(0,0,100);}
                else{fill(0,0,0);}
                rect(john, baldessari, not, boring);
                baldessari=baldessari+boring;
            }
            john=john+not;
        }
        pulse();
    }

    private void pulse(){
        if(clint && boring<waits){
            boring++;
        }
        else{
            clint=false;
        }
        if(!clint && boring>tom){
            boring--;
        }
        else{
            clint=true;
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "SL013" };
        SL014 mySketch = new SL014();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
