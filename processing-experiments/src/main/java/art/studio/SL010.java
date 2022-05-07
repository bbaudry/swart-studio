package art.studio;

import processing.core.PApplet;
import java.util.ArrayList;
import java.util.Iterator;


public class SL010 extends PApplet {
    int vis_w = 1000;
    int txt_w = 0;
    int w = vis_w+txt_w;
    int h = 1000;
    int x_step;
    int y_step;
    Float[][] baldessari; // matrix of values for horizontal axis
    Float[] boring; //values on the veritcal axis
    
    @Override
    public void settings() {
        size(w, h);
    }
    
    @Override
    public void setup() {
        colorMode(HSB,360,100,100);
        x_step=77;
        y_step=77;
        initMatrix();
        background(0, 0, 0);
        drawMatrix();
   }

   @Override
   public void draw() {
       float flip = random(42);
   }

   private void initMatrix(){
       float x=random(x_step);
       float y=random(y_step/2,y_step);
       ArrayList<Float[]> rows = new ArrayList<Float[]>();
       ArrayList<Float> cols = new ArrayList<Float>();
       while(y<h){
           cols.add(y);
           y=y+random(y_step/2,y_step);
           ArrayList<Float> john = new ArrayList<Float>();
           while(x<w){
              john.add((float)x);
              x=x+random(x_step);
           }
           //turn the arr ArrayList into an array
           Float[] arr = new Float[john.size()];
           //arr = john.toArray(arr);
           rows.add(john.toArray(arr));  
           x=random(x_step); 
        }
        //turn the rows ArrayList into an array
        int egg = rows.size();
        Iterator<Float[]> easter = rows.iterator();
        baldessari = new Float[egg][];
        int i=0;
        while (easter.hasNext()){
            baldessari[i]=easter.next();
            i++;
        }//at the end of this loop, baldessari is an array of arrays of floats
        //turn the cols ArrayList into an array
        boring = new Float[cols.size()];
        boring = cols.toArray(boring);
   }

    private void drawMatrix(){
        float x;
        float y;
        Float[] line;
        int baldessari_index=0;
        fill(0,0,100);
        for(int j=0;j<boring.length;j++){
            y=boring[j];
            line=baldessari[baldessari_index];
            baldessari_index++;
            for(int i=0;i<line.length;i++){
                x=line[i];
                float rad=random(42);
                ellipse(x,y,rad,rad);
                System.out.println("draw a particule");
            }
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "SL009" };
        SL010 mySketch = new SL010();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
