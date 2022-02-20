package art.studio;
import java.util.Random;
import processing.core.PApplet;

public class Schotter extends PApplet {

    int w = 42*21;
    int h = 42*21;
    int side = w/10; //assume that w can be divided by 10
    int x;
    int y;
    Random rd = new Random(); 

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        frameRate(1);
//        noLoop();
    }

    @Override
    public void draw() {
        y=0;
        x=0;
        background(0xffffff);
        stroke(0x000000);
        strokeWeight(6);
        noFill();
        while(x<w){
            rect(x,y,x+side,y+side);
            x=x+side;
        }
        float seed = 5;
        for (int i=0;i<9;i++){
            x=0;
            y=y+side+i;
            row(seed);
            seed=seed+10;
        }
    }

    public void row(float seed){
        float r;
        boolean orientation;
        while(x<w){
            orientation=rd.nextBoolean();
            r = random(seed);
            if (orientation){
                quad(x, y, x+side, y-r, x+side+r, y+side-r, x+r, y+side);
            }
            else{
                quad(x, y, x+side, y+r, x+side-r, y+side+r, x-r, y+side);
            }
            x=x+side;
        }
    }

    public static void main(String[] args) {
        String[] processingArgs = { "Schotter" };
        Schotter mySketch = new Schotter();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
