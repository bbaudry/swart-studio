/* Metadata {"endless":false, "BW": false, "knobs": "false", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.ArrayList;
import java.util.Random;

public class Birth012 extends PApplet {
    //A2:420 × 594
    //pixel = dpi * mm / 25.4 mm
    //w=300*420/25.4=4961
    //h=300*594/25.4=7016
    int w = 4961;
    int h = 7016;
    int lou = 69;
    int[] palettef = { 35,215 };
    float cx = w/2;
    float cy = h/2;
    float radius =  (float)0.98*w;
    int rick = 200; //resolution for the different radii
    float astley = radius/rick; //one step in the circle
    ArrayList<ArrayList<Float[]>> coords;
    Random hasard = new Random();


    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        background(palettef[1],0,100);
        coords=new ArrayList<>();
        first();
        /*stroke(0,0,0);
        rect(coords.get(0).get(0)[0],coords.get(0).get(0)[1],w-(2*coords.get(0).get(0)[0]),w-(2*coords.get(0).get(0)[0]));
        noLoop();
        save("test12.png");
        exit();*/
    }

    private void first(){
        float x = w/17;
        float y = (h-(w-(2*x)))/2;// h/17;
        float stepx = (w-2*x)/6;
        float stepy = (h-2*y)/9;
        for(int i=0; i<6;i++){
            ArrayList<Float[]> cc = new ArrayList<>();
            for(int j=0; j<10; j++){
                Float[] john = {x+i*stepx,y+j*stepy};
                cc.add(john);
                fill(0,0,0);
                //ellipse(john[0],john[1],100,100);
            }
            coords.add(cc);
        }
        x = x+6*stepx;
        ArrayList<Float[]> cc = new ArrayList<>();
        for(int j=0; j<9; j++){
            Float[] john = {x,y+j*stepy};
            cc.add(john);
            fill(0,0,0);
            //ellipse(john[0],john[1],100,100);
        }
        coords.add(cc);
    }

    @Override
    public void draw() {
        if (frameCount<lou*17){
            rays();
        }
        else{
            end();
            save("birth12.png");
            exit();
        }
    }

    private void rays(){
        int c = hasard.nextInt(coords.size());
        int r = hasard.nextInt(coords.get(c).size());
        float x1 = coords.get(c).get(r)[0];
        float y1 = coords.get(c).get(r)[1];
        float x2 = x1;
        float y2 = y1;
        int r2;
        if (c>0 && c<coords.size()-1){
            if (hasard.nextBoolean()){
                r2=hasard.nextInt(coords.get(c-1).size());
                x2=coords.get(c-1).get(r2)[0];
                y2=coords.get(c-1).get(r2)[1];
            }
            else{
                r2=hasard.nextInt(coords.get(c+1).size());
                x2=coords.get(c+1).get(r2)[0];
                y2=coords.get(c+1).get(r2)[1];
            }
        }
        if(x2!=x1 && y2!=y1){
            stroke(random(palettef[0]-30,palettef[0]+30),100,100);//random(80,100),random(80,100));
            strokeWeight(random(lou/6,lou/3));
            line(x1,y1,x2,y2);
        }
    }

    private void end(){
        noStroke();
        float ybri = (float)0.2;
        for (int j = 0; j<coords.size();j++){
        for (int i=0; i<coords.get(j).size(); i++){
            float br;
            if (i<coords.get(j).size()/2){br=100-(i*ybri*100);}
            else {br=(((i+1)-coords.get(j).size()/2)*ybri*100);}
            fill(palettef[0],br,100);
            ellipse(coords.get(j).get(i)[0],coords.get(j).get(i)[1],lou,lou);    
        }
    }

    }

    public static void main(String[] args) {
        String[] processingArgs = {"Birth012"};
        Birth012 mySketch = new Birth012();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
