/* Metadata {"endless":true, "BW": true, "knobs": false, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;

import java.util.ArrayList;
import java.util.Random;

public class Sand002 extends PApplet {
  int w = 3000;//1920;
  int h = 3000;//1080;
  int steps = 10;
  int hu = 30;
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
    x=0;
    y=0;
    Float[] c = {x,y,(float)w};
    baldessari.add(c);
    background(220,100,35);
    frameRate(2);
  }

  @Override
  public void draw() {
    hu=hu+5;
    ArrayList<Float[]> whatTHEN = new ArrayList<>(); //array to store intermdiate values for coordinates of smaller squares
    int tall = baldessari.size(); 
    for (int i=0; i<tall; i++){
      Float[] glow = baldessari.get(i);
      dig(glow,whatTHEN);
    }
    baldessari.clear(); // remove all coordinates that have been managed
    baldessari.addAll(whatTHEN); // add all the coordinates that have been generated in the dig method
    if (baldessari.size()==0){
      save("Sand002.png");
      exit();
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
      fill(hu,100,100);
      float s=john[2];
      rect(john[0],john[1],s,s);
    }
    else{
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
  }

   public static void main(String[] args) {
    String[] processingArgs = { "Sand002" };
    Sand002 mySketch = new Sand002();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
