from turtle import *
colors = ['orange', 'red', 'pink', 'yellow', 'blue', 'green'] 
for x in range(360):
	pencolor(colors[x % 6])
	width(x / 5 + 1)
	forward(x)
	left(20)
