/* Metadata {"endless":false, "BW": false, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;

import java.util.ArrayList;
import java.util.Random;

public class Sand004 extends PApplet {
/* This piece assumes a square canvas */
  int w = 1000;//1920;
  int h = 1000;//1080;
  int steps = 10;
  int hu;
  int sa=100;
  int[] rain = {10,30,50,70,90,110};
  Random alea = new Random();
  float x;
  float y;
  ArrayList<Float[]> baldessari = new ArrayList<>();

  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    colorMode(HSB,360,100,100);
    hu = rain[alea.nextInt(rain.length-1)];    
    float s=w/2;
    Float[] no = { (float)0, s };
    Float[] more = {  s, (float)0 };
    Float[] boring = {2*s, s };
    Float[] code = { s, 2*s };
    baldessari.add(no);
    baldessari.add(more);
    baldessari.add(boring);
    baldessari.add(code); 
    background(hu+180,100,35);
    frameRate(2);
  }

  @Override
  public void draw() {
    fill(30,100,100);   
    float x1 = baldessari.get(0)[0];
    float y1 = baldessari.get(0)[1];
    float x2 = baldessari.get(1)[0];
    float y2 = baldessari.get(1)[1]; 
    quad(x1,y1,x2,y2,baldessari.get(2)[0],baldessari.get(2)[1],baldessari.get(3)[0],baldessari.get(3)[1]);
    prep();
    noLoop();
    //  save("Sand004.png");
  //  exit();
  }

  private void prep(){
    float t = (float)0.5;
    float x1,y1,x2,y2;
    for (int i=0;i<baldessari.size()-1;i++){
      int ind = i%4;
      x1=baldessari.get(ind)[0];
      y1=baldessari.get(ind)[1];
      x2=baldessari.get(ind+1)[0];
      y2=baldessari.get(ind+1)[1];
      float px = (1-t) * x1 + (t * x2);
      float py = (1-t) * y1 + (t * y2);
      fill(0,0,100);
      ellipse(px,py,10,10);
    }
  }
  
  /* Method receives an array that consists of coordinates (john[0],john[1]), and a width john[2]
   * Flip a coin:
   * - if true, draw a square at coordinates, which sides are of size 'width'
   * - if false, split width into 2, save the coordinates of the four squares and store them into the array experience
  */
  private void dig(Float[] john, ArrayList<Float[]> experience){
    noStroke();
    if (alea.nextBoolean()){
        sa=alea.nextInt(100);
      fill(hu,sa,100);
      float s=john[2];
      rect(john[0],john[1],s,s);
    }
    else{
        if(alea.nextBoolean()){
      //split the square into four
      //add the four coordinates into the experience array
      float s=john[2]/2;
      if(s>1){
        Float[] no = { john[0], john[1], s };
        Float[] more = { john[0] + s, john[1], s };
        Float[] boring = { john[0], john[1] + s, s };
        Float[] code = { john[0] + s, john[1] + s, s };
        experience.add(no);
        experience.add(more);
        experience.add(boring);
        experience.add(code);
      }
    }
    else{
        float s=john[2]/3;
        if(s>1){
          Float[] no = { john[0], john[1], s };
          Float[] more = { john[0] + s, john[1], s };
          Float[] more_more = { john[0] + 2*s, john[1], s };
          Float[] boring = { john[0], john[1] + s, s };
          Float[] boring_more = { john[0]+s, john[1] + s, s };
          Float[] boring_more_more = { john[0]+2*s, john[1] + s, s };
          Float[] code = { john[0] , john[1] + 2*s, s };
          Float[] code_more = { john[0] + s, john[1] + 2*s, s };
          Float[] code_more_more = { john[0] + 2*s, john[1] + 2*s, s };
          experience.add(no);
          experience.add(more);
          experience.add(more_more);
          experience.add(boring);
          experience.add(boring_more);
          experience.add(boring_more_more);
          experience.add(code);
          experience.add(code_more);
          experience.add(code_more_more);
        }
  
    }
    }
  }

   public static void main(String[] args) {
    String[] processingArgs = { "Sand004" };
    Sand004 mySketch = new Sand004();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
