/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;

public class Tshirt011 extends PApplet {
    int ratio = 1;
    int w = 1000 * ratio;
    int h = 1000 * ratio;
    Random alea;
    float x,y;
    float xratio,yratio;
    int ikeda = 42;
    int black = 7;
    int gray = 26;



    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100, 250);
        background(0, 0, 0);
        stroke(0,0,100); fill(0,0,100,7);// noFill();
        alea = new Random();
        x=0;y=0;
        xratio=w/12;yratio=h/12;
        noStroke();
    }

    @Override
    public void draw() {
        if(x<w){
            carre();
            bigquart();
            //demi();
            //quart();
            x+=xratio;
        }
        else{
            x=0;
            if(y<h){y+=yratio;}
            else{
                noLoop();
                save("tshirt011.png");
            }
        }
    }

    private void carre(){
        chooseFill();        
        rect(x,y,xratio,yratio);
    }

    private void demi(){
        int t = alea.nextInt(ikeda);
        float cx=x+xratio/2;
        float cy=y+yratio/2;
        float rad=xratio;
        chooseFill();
        if(t<ikeda/4){
            arc(cx,cy,rad,rad,(float)(1.5*PI),(float)(2.5*PI));
        }
        else{
            if(t<ikeda/2){
                arc(cx,cy,rad,rad,(float)(0.5*PI),(float)(1.5*PI));
            }
            else{
                if(t<3*ikeda/4){
                    arc(cx,cy,rad,rad,0,PI);
                }
                else{
                    arc(cx,cy,rad,rad,PI,2*PI);
                }
            }
        }
    }

    private void bigquart(){
        int t = alea.nextInt(ikeda);
        float rad=xratio*2;
        chooseFill();
        if(t<ikeda/4){
            arc(x,y,rad,rad,0,(float)(0.5*PI));
        }
        else{
            if(t<ikeda/2){
                arc(x+xratio,y,rad,rad,(float)(0.5*PI),PI);
            }
            else{
                if(t<3*ikeda/4){
                    arc(x+xratio,y+yratio,rad,rad,PI,(float)(1.5*PI));
                }
                else{
                    arc(x,y+yratio,rad,rad,(float)(1.5*PI),2*PI);
                }
            }
        }
    }
    private void quart(){
        int t = alea.nextInt(ikeda);
        float cx=x+xratio/2;
        float cy=y+yratio/2;
        float rad=xratio;
        chooseFill();
        if(t<ikeda/4){
            arc(cx,cy,rad,rad,0,(float)(0.5*PI));
        }
        else{
            if(t<ikeda/2){
                arc(cx,cy,rad,rad,(float)(0.5*PI),PI);
            }
            else{
                if(t<3*ikeda/4){
                    arc(cx,cy,rad,rad,PI,(float)(1.5*PI));
                }
                else{
                    arc(cx,cy,rad,rad,(float)(1.5*PI),2*PI);
                }
            }
        }
    }

    private void chooseFill(){
        int t = alea.nextInt(ikeda);
        if(t<black){
            fill(0,0,0);
        }
        else{
            if(t<gray){
                fill(0,0,50);
            }
            else{
                fill(0,0,100);
            }
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Tshirt011" };
        Tshirt011 mySketch = new Tshirt011();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
