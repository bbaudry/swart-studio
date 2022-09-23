/* Metadata {"endless":true, "BW": true, "knobs": false, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;
import java.util.Random;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import processing.core.PFont;
import java.util.ArrayList;
import java.util.Iterator;
import art.Knob;

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
  int fSize=17;

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
    PFont f = createFont("FreeMono", fSize, true);
    textFont(f);
    comment = rAA(21);
    fill(50,100,100);
    text(comment+"><"+revert(comment), 252, y);

    y=y+asciioffset;
    fill(50,0,100);
    comment = "To write text, you can choose the size, font, and position";
    text(comment, 10, y);

    y=y+testoffset;
    comment = rAA(21);
    fill(50,100,100);
    text(comment+"><"+revert(comment), 252, y);

    //determine the coordinates of a point along a segment between (x1,y1) and (x2,y2)
    y=y+asciioffset;
    fill(50,0,100);
    comment = "determine the coordinates of a point along a segment between (x1,y1) and (x2,y2)";
    text(comment, 10, y);

    y=y+testoffset;
    float x1,x2,y1,y2,px,py;
    x1=10;x2=w-10;y1=y;y2=y-90;
    stroke(30,100,100);
    strokeWeight(4);
    line(x1,y1,x2,y2);
    float t=random(1);
    px = (1 - t) * x1 + (t * x2);
    py = (1 - t) * y1 + (t * y2);
    fill(110,100,100);noStroke();
    ellipse(px,py,13,13);

    y=y+asciioffset;
    comment = rAA(21);
    fill(50,100,100);
    text(comment+"><"+revert(comment), 252,y);

    //determine the coordinates of a point on a circle centered on (cx,cy) and of radius rad
    y=y+asciioffset;
    fill(110,0,100);
    comment = "determine the coordinates of a point on a circle centered on (cx,cy) and of radius rad";
    text(comment, 10, y);

    y=y+testoffset;
    float cx=500;float cy=y-testoffset/2;
    stroke(30,100,100);
    strokeWeight(4);
    noFill();
    float rad=90;
    ellipse(cx,cy,rad,rad);
    float angle = PI*random(2);
    float pcx=cx + rad/2 * cos(angle);
    float pcy=cy + rad/2 * sin(angle);
    fill(110,100,100);noStroke();
    ellipse(pcx,pcy,13,13);

    y=y+asciioffset;
    comment = rAA(21);
    fill(50,100,100);
    text(comment+"><"+revert(comment), 252, y);
    
    //save and serialize the random numbers that have been generated
    y=y+asciioffset;
    fill(110,0,100);
    comment = "save and serialize the random numbers that have been generated";
    text(comment, 10, y);

    /* x1,y1,x2,y2,px,py,pcx,pcy,cx,cy,angle
    /* import org.json.simple.*;
    /* import art.Knob;
    */
    ArrayList<Knob> knobs = new ArrayList<>();
    knobs.add(new Knob(x1,true));
    knobs.add(new Knob(y1,true));
    knobs.add(new Knob(x2,true));
    knobs.add(new Knob(y2,true));
    knobs.add(new Knob(px,true));
    knobs.add(new Knob(py,true));
    knobs.add(new Knob(pcx,true));
    knobs.add(new Knob(pcy,true));
    knobs.add(new Knob(cx,true));
    knobs.add(new Knob(cy,true));
    knobs.add(new Knob(angle,true));
    displayKnobs(knobs,10,y+asciioffset);
    Gson gson = new GsonBuilder().setPrettyPrinting().create();
    String jsonOutput = gson.toJson(knobs);
    System.out.println(jsonOutput);

    //automatic text scrolling
    y=y+asciioffset;
    fill(110,0,100);
    comment = "automatic text scrolling";
    text(comment, 10, y);

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

  private void displayKnobs(ArrayList<Knob> knobs, float x, float y){
    fill(30,100,100);
    float lx=x;
    float ly=y;
    Iterator<Knob> i = knobs.iterator();
    while(i.hasNext()){
      Knob k = i.next();
      text(k.getValueN(), lx, ly);
      if (lx<w-10+5*fSize){lx=lx+5*fSize;}
      else {lx=10;ly=ly+fSize;}
    }
  }

   public static void main(String[] args) {
    String[] processingArgs = { "BasicOps" };
    BasicOps mySketch = new BasicOps();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
