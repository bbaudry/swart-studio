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
    float x1,y1,x2,y2,x3,y3,x4,y4;
    for (int i=0;i<baldessari.size();i++){
      int ind1 = i%4; 
      int ind2 = (i+1)%4;
      x1=baldessari.get(ind1)[0];
      y1=baldessari.get(ind1)[1];
      x2=baldessari.get(ind2)[0];
      y2=baldessari.get(ind2)[1];
      float px = (1-t) * x1 + (t * x2);
      float py = (1-t) * y1 + (t * y2);
      if(px>x1){
        if(py<y1){x3=px+(px-x1);x4=px;y4=y1+(y1-py);y3=y1;}
        else {x4=x1-(px-x1);x3=x1;y3=py+(py-y1);y4=py;}
      }
      else{
        if(py>y1){x3=px-(x1-px);x4=px;y4=y1-(py-y1);y3=y1;}
        else{x4=x1+(x1-px);x3=x1;y3=py-(y1-py);y4=py;}
      }
      //stroke(0,0,100);
      //fill(50,100,100);
      //quad(x1, y1, x2, y2, x3, y3, x4, y4);
      fill(50,0,100);
      //ellipse(px,py,30,30);
      fill(i*80,100,100);
      quad(x1, y1, px, py, x3, y3, x4, y4);
      ellipse(x1,y1,20,20);
      ellipse(px,py,20,20);
      ellipse(x3,y3,20,20);
      ellipse(x4,y4,20,20);
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
