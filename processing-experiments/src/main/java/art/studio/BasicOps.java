/* Metadata {"endless":true, "BW": true, "knobs": false, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;
import processing.core.PFont;


public class BasicOps extends PApplet {
  int w = 1000;//1920;
  int h = 1000;//1080;
  int steps = 10;
  Random alea = new Random();
  float x;
  float y;
  int asciioffset = 30;
  int testoffset = 140;
  String comment;

  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    colorMode(HSB,360,100,100);
    x=0;
    y=10;
    background(220,100,35);
    noLoop();
  }

  @Override
  public void draw() {
    
    //write text
    int fSize=17;
    PFont f = createFont("FreeMono", fSize, true);
    textFont(f);
    comment = rAA(21);
    fill(50,100,100);
    text(comment+"><"+revert(comment), 10, y);

    y=y+asciioffset;
    fill(50,0,100);
    comment = "To write text, you can choose the size, font, and position";
    text(comment, 10, y);

    y=y+testoffset;
    comment = rAA(21);
    fill(50,100,100);
    text(comment+"><"+revert(comment), 10, y);

    //determine the coordinates of a point along a segment between (x1,y1) and (x2,y2)
    y=y+asciioffset;
    fill(50,0,100);
    comment = "determine the coordinates of a point along a segment between (x1,y1) and (x2,y2)";
    text(comment, 10, y);

    y=y+testoffset;
    float x1,x2,y1,y2,px,py;
    x1=10;x2=w-10;y1=y;y2=y-90;
    stroke(30,100,100);
    strokeWeight(5);
    line(x1,y1,x2,y2);
    float t=random(1);
    px = (1 - t) * x1 + (t * x2);
    py = (1 - t) * y1 + (t * y2);
    fill(110,100,100);noStroke();
    ellipse(px,py,11,11);

    y=y+asciioffset;
    comment = rAA(21);
    fill(50,100,100);
    text(comment+"><"+revert(comment), 10,y);

    //determine the coordinates of a point on a circle centered on (cx,cy) and of radius rad
    y=y+asciioffset;
    fill(110,0,100);
    comment = "determine the coordinates of a point on a circle centered on (cx,cy) and of radius rad";
    text(comment, 10, y);

    y=y+testoffset;
    x1=500;y1=y-testoffset/2;
    stroke(30,100,100);
    strokeWeight(5);
    noFill();
    float rad=90;
    ellipse(x1,y1,rad,rad);
    px=x1 + rad/2 * cos(PI/17);
    py=y1 + rad/2 * sin(PI/17);
    fill(110,100,100);noStroke();
    ellipse(px,py,11,11);


    
    //save and serialize the random numbers that have been generated
    
  }

  char[] symb = {'*',':','.','°'};
  
  private String rAA(int size){
    String r = "";
    int numberSymb = symb.length;
    for (int i = 0; i < size; i++){
      int ind = alea.nextInt(numberSymb-1);
      r=r+symb[ind];
    }
    return r;
  }
  private String revert(String str){
    String r="";
    char[] ch = str.toCharArray();
    for(int i=ch.length-1;i>=0;i--){
      r=r+ch[i];
    }
    return r;
  }
   public static void main(String[] args) {
    String[] processingArgs = { "BasicOps" };
    BasicOps mySketch = new BasicOps();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
