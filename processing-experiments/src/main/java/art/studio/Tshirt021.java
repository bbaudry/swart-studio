/* Metadata {"endless":false, "BW": false, "knobs": "true", "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;

import java.util.ArrayList;
import java.util.Random;

public class Tshirt021 extends PApplet {
    int ratio = 1;
    int w = 1000 * ratio;
    int h = 1000 * ratio;
    Random alea;
    int totalCells;
    int cellsCount;
    float minx,miny,maxx,maxy;
    float xoff,grain;

    float cx,cy,radius,angle;
    int nbsections,section;
    boolean drawing;

    @Override
    public void settings() {
        size(w, h);
    }

    @Override
    public void setup() {
        colorMode(HSB, 360, 100, 100, 250);
        background(0, 0, 0);
        stroke(0, 0, 0);
        alea = new Random();
        totalCells = alea.nextInt(5) + 5;
        cellsCount = 0;
        xoff = (float)0.0;
        grain = (float)0.05;
        minx = (float)(0.12*w); maxx = (float)(0.76*w);
        miny = (float)(0.12*h); maxy = (float)(0.76*h);
        drawing=false;
    }

    @Override
    public void draw() {
        if(drawing){
            //paintCell();
            //testB();
            oneCell();//noLoop();
        }
        else{
            if(cellsCount<totalCells){
                cx = randomInWidth();
                cy = randomInHeight();
                angle = 0;
                section = 0;
                radius = noise(xoff)*168; xoff+=grain;
                nbsections = 42 + alea.nextInt(42);
                drawing=true;
            }
            else{
                noLoop();
                save("tshirt021.png");
            }
        }
    }

    private void oneCell(){
        noFill();
        stroke(50,100,100);
        int cake = 17+alea.nextInt(17); 
        angle = 0;
        float a_inc = (2*PI)/cake;
        cx=w/2;cy=h/2;
        radius = noise(xoff)*w/2; xoff+=grain;
        float xinit = cx+radius*cos(angle);
        float yinit = cy+radius*sin(angle);
        float ix=xinit;
        float iy = yinit;
        float dx=0;
        float dy=0;
        for (int i=0;i<cake-1;i++){
            angle+=a_inc;
            radius = noise(xoff)*w/2; xoff+=grain;
            dx = cx + radius*cos(angle);
            dy = cy + radius*sin(angle);
            line(ix,iy,dx,dy);
            ix=dx;
            iy=dy;
        }
        line(ix,iy,xinit,yinit);
    }

    private void testB(){
        noFill();
        stroke(180,100,100);
beginShape();
vertex(120, 80);
bezierVertex(320, 0, 320, 300, 120, 300);
endShape();
noStroke();
fill(0,100,100);
ellipse(120,80,9,9);
ellipse(320,0,9,9);
ellipse(320,300,9,9);
ellipse(120,300,9,9);
    }

    private void paintCell(){
        if (section<nbsections){
            stroke(50,100,100);//,42+alea.nextFloat()
            radius = noise(xoff)*168; xoff+=grain;
            float dx = cx + radius*cos(angle);
            float dy = cy + radius*sin(angle);
            //line(cx,cy,dx,dy);
            edge(radius,dx,dy);
            angle += (2*PI)/nbsections;
            section++;
        }
        else{
            drawing=false;
            cellsCount++;
        }
    }

    private void edge(float r, float dx, float dy){
        float t,px,py;
        stroke(50,100,100);
        fill(50,100,100);
        for (int i=1; i<11; i++){
            t = (float)(i*0.1);
            px = (1-t) * cx + (t * dx);
            py = (1-t) * cy + (t * dy);
            ellipse(px,py,i,i);
        }
    }

    private float randomInWidth(){
        return minx + alea.nextFloat()*maxx;
    }   
    private float randomInHeight(){
        return miny + alea.nextFloat()*maxy;
    }   

    public static void main(String[] args) {
        String[] processingArgs = { "Tshirt021" };
        Tshirt021 mySketch = new Tshirt021();
        PApplet.runSketch(processingArgs, mySketch);
    }
}
