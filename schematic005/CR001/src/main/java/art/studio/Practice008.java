package art.studio;

import java.util.function.DoubleToIntFunction;

import processing.core.PApplet;
import processing.core.PShape;

//practice drawing parts of circles circles
public class Practice008  extends PApplet {
    int w = 1000;
    int h = 1000;
    float x;
    float y;
    float shape_w;
    float shape_h;
    int[] deps = {37,42,27,22,12,6};
    int layer;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        frameRate(1);
        colorMode(HSB, 360, 100, 100);
        //color(HSB,360,100,100);
        layer=deps.length-1;
        System.out.println(layer);
    }

    //Double newData = new Double(data);
    //int value = newData.intValue();

    @Override
    public void draw() {
        shape_w=random(77,99);
        shape_h=random(77,99);
        if (layer>=0){
            float hu = random(120);
            fill(hu,100,100);
            int nb_deps = deps[layer]; 
            int baldessari = Double.valueOf(Math.sqrt(nb_deps)).intValue()+1; //sqrt of nb of deps: nb of shapes per row
            float epsilon = random(-33,33);
            int x_count = 1;
            float init_x = (w-(baldessari*shape_w))/(baldessari+1); 
            x=init_x+ epsilon;
            float init_y = (h-(baldessari*shape_h))/(baldessari+1); 
            y=init_y+ epsilon;
            for(int i=0; i<nb_deps; i++){
                rect(x,y,shape_w,shape_h);
                epsilon = random(-19,19);
                if (x_count < baldessari){
                    x_count++;
                    x = x + init_x + shape_w + epsilon;
                }
                else{
                    x = init_x + epsilon;
                    y = y + init_y + shape_h + epsilon;
                    x_count = 1;
                }
            }
            layer--;
        }
        else{
            noLoop();
        }

    } 

    public void with_rand(){
        if (layer>=0){
            float hu = random(360);
            fill(hu,100,100);
            int nb_deps = deps[layer]; 
            int dep_w;
            if (nb_deps%2==0){dep_w=nb_deps/4;} 
            else {dep_w = (nb_deps/4) + 1;}
            int x_count = 1;
            float epsilon = random(w/nb_deps);
            float init_x=random(w/nb_deps/4)+epsilon;
            x=init_x;
            epsilon = random(h/nb_deps);
            float init_y=random(h/nb_deps/4)+epsilon;
            y=init_y;
            for(int i=0; i<nb_deps; i++){
                rect(x,y,shape_w,shape_h);
                if (x_count < dep_w){
                    x_count++;
                    x = x + init_x;
                }
                else{
                    x = init_x;
                    y = y + init_y;
                    x_count = 1;
                }
            }
            layer--;
        }
        else{
            noLoop();
        }

    }


    public static void main(String[] args) {
        String[] processingArgs = { "Practice 008" };
        Practice008 mySketch = new Practice008();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
