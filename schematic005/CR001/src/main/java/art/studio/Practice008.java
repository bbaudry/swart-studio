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
    int[] deps = {22,12,6};
    int layer;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        frameRate(1);
        color(HSB,360,100,100);
        shape_w=37;//random(4,7)*random(w/42);
        shape_h=37;//random(4,7)*random(h/42);
        layer=deps.length-1;
        System.out.println(layer);
    }

    //Double newData = new Double(data);
    //int value = newData.intValue();

    @Override
    public void draw() {
        if (layer>=0){
            float hu = random(360);
            fill(hu,100,100);
            int nb_deps = deps[layer]; 
            int dep_w = Double.valueOf(Math.sqrt(nb_deps)).intValue()+1;
//            if (nb_deps%2==0){dep_w=nb_deps/4;} 
//            else {dep_w = (nb_deps/4) + 1;}
            System.out.println("Draw "+nb_deps+" dependencies, "+dep_w+" dependencies per row");

            int x_count = 1;
            float init_x = (w-(dep_w*shape_w))/(dep_w+1); 
            x=init_x;
            float init_y = (h-(dep_w*shape_h))/(dep_w+1); 
            y=init_y;
            for(int i=0; i<nb_deps; i++){
                rect(x,y,shape_w,shape_h);
                if (x_count < dep_w){
                    x_count++;
                    x = x + init_x + shape_w;
                }
                else{
                    x = init_x;
                    y = y + init_y + shape_h;
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
