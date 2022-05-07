package art.studio;

import processing.core.PApplet;
import java.util.ArrayList;
import java.util.Iterator;

public class SL010 extends PApplet {
    int vis_w = 1000;
    int txt_w = 0;
    int w = vis_w + txt_w;
    int h = 1000;
    int x_step;
    int y_step;
    Float[][] john; // matrix of values for horizontal axis
    Float[] baldessari; // values on the veritcal axis

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100);
        x_step = 42;
        y_step = 42;
        initMatrix();
        background(0, 0, 0);
//        drawMatrix();
    }

    @Override
    public void draw() {
        int not = (int)random(baldessari.length);
        int boring = (int)random(john[not].length);
        repaint(john[not][boring],baldessari[not]);
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
                System.out.println("draw a particule");
            }
        }
    }

    private void repaint(float x, float y){
        fill(90,0,0);
        float rad = 33;
        //ellipse(x, y, rad, rad);
        fill(random(50,190),100,100);
        rad = random(x_step);
        ellipse(x, y, rad, rad);
    }
    public static void main(String[] args) {
        String[] processingArgs = { "SL009" };
        SL010 mySketch = new SL010();
        PApplet.runSketch(processingArgs, mySketch);
    }

}
