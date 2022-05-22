/* Metadata {"endless":true, "BW": false, "knobs": false, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.ArrayList;
import java.util.Iterator;

public class SL010 extends PApplet {
    int w = 1800;
    int h = 1000;
    int x_step;
    int y_step;
    float hu;
    float max_hu;
    float min_hu;
    boolean grow;
    int count;
    int max_iter;
    Float[][] john; // matrix of values for horizontal axis
    Float[] baldessari; // values on the veritcal axis

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        x_step = 19;
        y_step = 49;
        min_hu = 50;
        max_hu = 250;
        hu = min_hu;
        grow=true;
        count=0;
        max_iter = 8888;
        initMatrix();
        background(0, 0, 0);
//        drawMatrix();
    }

    @Override
    public void draw() {
        int not = (int)random(baldessari.length); //select a random index for row
        int boring = (int)random(john[not].length); //select a random index for a cell in the row
        repaint(john[not][boring],baldessari[not]); //paint at the selected point
        count++;
        if(count==max_iter){
            noLoop();
            System.out.println("completed");
            save("SL010.png");
        }
    }

    private void initMatrix() {
        float x = random(x_step);
        float y = random(y_step / 2, y_step);
        ArrayList<Float[]> rows = new ArrayList<Float[]>();
        ArrayList<Float> cols = new ArrayList<Float>();
        while (y < h) {
            cols.add(y);
            y = y + random(y_step / 2, y_step);
            ArrayList<Float> horizon = new ArrayList<Float>();
            while (x < w) {
                horizon.add((float) x);
                x = x + random(x_step);
            }
            // turn the horizon ArrayList into an array
            Float[] arr = new Float[horizon.size()];
            rows.add(horizon.toArray(arr));
            x = random(x_step);
        }
        // turn the rows ArrayList into an array
        int egg = rows.size();
        Iterator<Float[]> easter = rows.iterator();
        john = new Float[egg][];
        int i = 0;
        while (easter.hasNext()) {
            john[i] = easter.next();
            i++;
        } // at the end of this loop, baldessari is an array of arrays of floats
          // turn the cols ArrayList into an array
        baldessari = new Float[cols.size()];
        baldessari = cols.toArray(baldessari);
    }

    //draw the whole matrix in one shot, with whie particules
    private void drawMatrix() {
        float x;
        float y;
        Float[] line;
        int baldessari_index = 0;
        fill(0, 0, 100);
        for (int j = 0; j < baldessari.length; j++) {
            y = baldessari[j];
            line = john[baldessari_index];
            baldessari_index++;
            for (int i = 0; i < line.length; i++) {
                x = line[i];
                float rad = 33;//random(42);
                ellipse(x, y, rad, rad);
            }
        }
    }

    private void repaint(float x, float y){
        fill(90,0,0);
        float rad = x_step/2;
        ellipse(x, y, rad, rad);
        if (grow && hu<max_hu){hu=hu+(float)0.1;}
        else {grow=false;}
        if(!grow && hu>min_hu){hu=hu-(float)0.1;}
        else {grow=true;}
        //fill(random(50,190),100,100);
        fill(hu,100,100);    
        rad = random((float)0.2*x_step,(float)0.7*x_step);
        ellipse(x, y, rad, rad);
    }
    public static void main(String[] args) {
        String[] processingArgs = { "SL009" };
        SL010 mySketch = new SL010();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
