from turtle import *
import random

setup(1000,1000)

def line(x,y,size,level):
    if level==0:
        if random.random() < 0.5:
            # generate a vertical line
            penup()
            goto(x,y-size)
            pendown()
            goto(x,y+size)
        else:
            # generate a horizontal line
            penup()
            goto(x-size,y)
            pendown()
            goto(x+size,y)
    else:
        size /= 2
        level -= 1
        line(x-size,y+size,size,level)
        line(x+size,y+size,size,level)
        line(x-size,y-size,size,level)
        line(x+size,y-size,size,level)

width(4)
hideturtle()
tracer(False)
line(0,0,400,5)
tracer(True)
exitonclick()