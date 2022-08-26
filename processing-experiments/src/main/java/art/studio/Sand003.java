/* Metadata {"endless":false, "BW": false, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;

import java.util.ArrayList;
import java.util.Random;

public class Sand003 extends PApplet {
/* This piece assumes a square canvas */
  int w = 3000;//1920;
  int h = 3000;//1080;
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
    Float[] no = { (float)0, (float)0, s };
    Float[] more = {  s, (float)0, s };
    Float[] boring = { (float)0, s, s };
    Float[] code = { s, s, s };
    baldessari.add(no);
    baldessari.add(more);
    baldessari.add(boring);
    baldessari.add(code); 
    background(hu+180,100,35);
    frameRate(2);
  }

  @Override
  public void draw() {
    ArrayList<Float[]> whatTHEN = new ArrayList<>(); //array to store intermdiate values for coordinates of smaller squares
    int tall = baldessari.size(); 
    for (int i=0; i<tall; i++){
      Float[] glow = baldessari.get(i);
      dig(glow,whatTHEN);
    }
    baldessari.clear(); // remove all coordinates that have been managed
    baldessari.addAll(whatTHEN); // add all the coordinates that have been generated in the dig method
    if (baldessari.size()==0){
      save("Sand003.png");
      exit();
    }
    //hu=hu+2;
    sa=sa-10;
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
    String[] processingArgs = { "Sand003" };
    Sand003 mySketch = new Sand003();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
