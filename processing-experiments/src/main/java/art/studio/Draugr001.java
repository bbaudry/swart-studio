/* Metadata {"endless":false, "BW": true, "knobs": true, "data": false, "interaction": false}*/
package art.studio;

import art.Knob;
import java.util.ArrayList;
import processing.core.PApplet;

//Draugr is an exoplanet https://en.wikipedia.org/wiki/PSR_B1257%2B12_A
//the Draugr series is about circular shapes and random black lines
public class Draugr001  extends PApplet {
    int vis_w = 1000;
    int txt_w = 1000;
    int h = 1000;
    int w = vis_w+txt_w;
    float x;
    float y;
    float txt_x;
    float txt_y;
    float txt_x_inc;
    float txt_y_inc;
    float cx;
    float cy;
    float radius;
    int iteration;
    int nb_iterations;
    ArrayList<Knob> knobs;

    @Override
    public void settings() {
        size(w, h);
        knobs = new ArrayList<Knob>();
    }

    @Override
    public void setup() {
        txt_x=vis_w;
        txt_y=7;
        txt_x_inc=111; add_knob(Float.toString(txt_x_inc),false); 
        txt_y_inc=18; add_knob(Float.toString(txt_y_inc),false); 
        textSize(15); add_knob("15",false); 
        frameRate(12); add_knob("12",false); //knobs.add(new Knob("12", random(vis_w,w),txt_y));// print
        cx=vis_w/2; add_knob(Float.toString(cx),false); //knobs.add(new Knob(Float.toString(cx),random(vis_w,w),txt_y));// print
        cy=h/2; add_knob(Float.toString(cy),false); //knobs.add(new Knob(Float.toString(cy),random(vis_w,w),7));// print
        radius = (float)(vis_w*0.9); add_knob(Float.toString(radius),false); //knobs.add(new Knob(Float.toString(radius),random(vis_w,w),txt_y));// print
        nb_iterations = 7; add_knob(Integer.toString(nb_iterations),false); //knobs.add(new Knob(Integer.toString(nb_iterations),random(vis_w,w),txt_y));// print
        iteration = 0;
        background(242,242,217);
        fill(233,233,211);
        noStroke();
        ellipse(cx,cy,radius,radius);
    }

    @Override
    public void draw() {
        stroke(0);
        noFill();
        if (radius>0){
            float nb_rays = random(3,8); add_knob(Float.toString(nb_rays),true);//print
            rays((int)(nb_rays));
            radius-=25;
        }
        else{
            if (iteration<nb_iterations){
                radius = (float)(vis_w*0.9); add_knob(Float.toString(radius),false);//print
                System.out.println("Iteration #"+iteration+" done.");
                iteration++;
            }
            else{
                noLoop();
                System.out.println("done drawing");
                print_knobs();
                System.out.println("done printing knobs");
                save("Draugr001_rays.png");
            }
        }
    }

    public void rays(int nb_rays){
        float angle1=random(0,2*PI); add_knob(Float.toString(angle1),true);//print
        float rand_angle = random(PI/50, 20*PI/50); add_knob(Float.toString(rand_angle),true);//print
        float angle2=angle1+rand_angle;
        for(int i=0;i<nb_rays;i++){
            radius=radius-i;
            strokeWeight(2);
            arc(cx,cy,radius,radius,angle1,angle2);
        }
    }

    public void print_knobs(){
        fill(242,242,217);
        noStroke();
        float localx=vis_w; // start printing at x out of the viz width
        float localy=txt_y; // start printing at y init value for text
        localy+=txt_y_inc;
        fill(0);
        text("Generative is about drawing and tuning knobs. Some knob values are tuned by the artist. Some knob values are chosen randomly. Here are all the knob values for this piece", localx, localy);
        localy+=txt_y_inc;
        for (int i=0; i<knobs.size();i++){
            Knob k = knobs.get(i);
            if (k.getrand()){fill(0);}
            else {fill(120,120,120);}
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
            //text(k.getValue(),k.getx(),k.gety());
            //float newy = k.gety() + txt_y_inc;
            //k.sety(newy);
        }
        noFill();
    }

    public void add_knob(String val, boolean rand){
        knobs.add(new Knob(val, txt_x,txt_y, rand)); 
        txt_x += txt_x_inc;
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Draugr001"};
        Draugr001 mySketch = new Draugr001();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
