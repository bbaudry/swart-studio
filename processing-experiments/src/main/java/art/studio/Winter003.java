/* Metadata {"endless":false, "BW": true, "knobs": false, "data": false, "interaction": false}*/

package art.studio;

import processing.core.PApplet;

import java.security.Provider;
import java.util.Random;

public class Winter003 extends PApplet {
  int w = 1000;
  int h = 1000;
  Random alea = new Random();


  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    colorMode(HSB,360,100,100);

  }

  @Override
  public void draw() {
    background(210,90,90);

    oneIceLayer();
    oneIceLayer();

noLoop();
  }
private void oneIceLayer(){
  int step =168;
  int off = 51;
  float i,j;
      noStroke();
  fill(0, 0, 100, 151);
  float vera,molnar;
  i=0;j=0;
  vera= random(step/10, step);
  molnar=random(step/10, step);
  
  while (i<w){
    while(j<h){
       vera= random(off, step);
       molnar=random(off, step);
      quad(i,j,i+molnar+random(-off,off),j+random(-off,off),i+molnar+random(-off,off),j+vera+random(-off,off),i+random(-off,off),j+vera+random(-off,off));
      j+=vera+random(-off,off);
    }
    i+=molnar+random(-off,off);
    j=random(-off,off);
  }
}


  public static void main(String[] args) {
    String[] processingArgs = { "Winter003" };
    Winter003 mySketch = new Winter003();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
