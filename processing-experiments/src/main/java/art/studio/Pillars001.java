package art.studio;

import processing.core.PApplet;

public class Pillars001 extends PApplet {
    int w = 1500;
    int h = 1000;
    int john;//number of rows on each pillar
    int baldessari;//number of columns on each pillar
    int not;//number of pillars
    float boring;//max size a 'pixel' on a pillar
    float x_offset;
    float y_offset;
    float x;
    float y;
    int[] depths;
    int max_depth;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        john = 87;
        colorMode(HSB,360,100,100);
        background(0,0,0);
        x_offset=11;
        y_offset=21;
        not=8;
        boring=6;
        john=178;
        float a=(w-(not+1)*x_offset)/(not*boring);
        baldessari=(int)a;
        depths = new int[not];
        max_depth=5;
        for (int i=0; i<not; i++){
            depths[i]=(int)random(max_depth);
        }
    }

    @Override
    public void draw() {
        x=x_offset;
        y=y_offset;
        int depth;
        for (int i=0; i<not; i++){
            depth=depths[i];
            y=y_offset*(depth+1);    
            column(x,y,boring-depth);
            x=x+baldessari*boring-depth+x_offset;
        }
    }

    private void column(float x, float y, float w){
        float red;
        stroke(0,0,0);
        strokeWeight(1);
        for (int i=0;i<john;i++){
            for (int j=0;j<baldessari;j++){
                red=random(42);
                if (red<1){fill(0,100,100);}
                else{
                    if(red<20){fill(220, 0, 0);}
                    else{fill(220,0,100);}
                }
                rect(x+j*w,y+i*w,w,w);

            }
        }
    }

   
    public static void main(String[] args) {
        String[] processingArgs = { "Pillars001" };
        Pillars001 mySketch = new Pillars001();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
