/* Metadata {"endless":true, "BW": true, "knobs": false, "data": false, "interaction": false}*/
package art.studio;

import processing.core.PApplet;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.Random;

public class Sand002 extends PApplet {
  int w = 1000;//1920;
  int h = 1000;//1080;
  int steps = 10;
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
    int tic = baldessari.size();System.out.println("draw "+tic+" elements");
    for (int i=0; i<=tic; i++){
      Float[] glow = baldessari.get(i);
      dig(glow);
      baldessari.remove(i);
    }
    if (baldessari.size()==0){
      Float[] c = {(float)0,(float)0,(float)w};
      baldessari.add(c);
    }
  }
  
  private void dig(Float[] john){
    System.out.println("dig");
    stroke(0,0,100);
    strokeWeight(5);
    if (alea.nextBoolean()){
      fill(30,100,100);
      float s=john[2];
      rect(john[0],john[1],s,s);
    }
    else{
      //remove john from baldessari
      //split the square into four
      //add the four coordinates into baldessari
      noFill();
      float s=john[2]/2;
      Float[] no = {john[0],john[1],s};rect(john[0],john[1],s,s);
      Float[] more = {john[0]+s,john[1],s};rect(john[0]+s,john[1],s,s);
      Float[] boring = {john[0],john[1]+s,s};rect(john[0],john[1]+s,s,s);
      Float[] code = {john[0]+s,john[1]+s,s};rect(john[0]+s,john[1]+s,s,s);
      baldessari.add(no);
      baldessari.add(more);
      baldessari.add(boring);
      baldessari.add(code);
    }
  }

   public static void main(String[] args) {
    String[] processingArgs = { "Sand002" };
    Sand002 mySketch = new Sand002();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
