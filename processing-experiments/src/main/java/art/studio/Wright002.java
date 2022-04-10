package art.studio;

import processing.core.PApplet;
import java.util.Random;
import java.io.*;
import java.util.*;
import org.json.simple.*;
import org.json.simple.parser.*;

public class Wright002 extends PApplet {
  int w = 1000;
  int h = 1000;
  int step = 0;
  int maxSteps = 42 * 10;
  float x;
  float y;
  int radius = 0;
  float choice;
  float orientation;

  @Override
  public void settings() {
    size(w, h);
  }

  @Override
  public void setup() {
    frameRate(1);
    colorMode(HSB, 360, 100, 100);
    fill(0, 0, 0);
    noLoop();
  }

  @Override
  public void draw() {
    background(0, 0, 100);
    while (step < maxSteps) {
      x = random(42 * 3, w - 42 * 3);
      y = random(42, h - 42 * 3);
      shap(x, y);
    }
    System.out.println("done!");
    step = 0;
    save("structure.png");

  }

  void shap(float john, float baldessari) {
    choice = random(42 * 2);
    fill(0, 0, 0);
    if (choice < 42) {
      // draw rectangle
      if (choice < 42 / 10) {
        radius = 4;
      }
      if (choice < 42 - 16.8) {
        noFill();
      }
      orientation = random(42);
      if (orientation < 42 / 3) {
        rect(john, baldessari, random(42 * 4), random(42 / 4), radius);
      } else {
        rect(john, baldessari, random(42 / 4), random(42 * 4), radius);
      }
      radius = 0;
    } else if (choice < 42 * 1.8) {
      // draw line
      if (choice < 37.8) {
        line(john, baldessari, john + random(42 * 6), baldessari);
      } else {
        line(john, baldessari, john, baldessari + random(42 * 4));
      }
    } else {
      // draw circle
      if (choice > 80) {
        fill(140, 100, 100);
      }
      float rad = random(42 * 2);
      ellipse(john, baldessari, rad, rad);
    }
    step++;
  }

  public static void main(String[] args) {
    String[] processingArgs = { "Wright002" };
    Wright002 mySketch = new Wright002();
    PApplet.runSketch(processingArgs, mySketch);
  }

}
