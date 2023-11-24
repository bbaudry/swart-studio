#!/usr/bin/python3
"""
computes the max dimension of gcode

usage: ./max-dimension.py file.gcode
"""
from gcodeparser import GcodeParser
import sys, tty, termios

def max_x(fname):
  with open(fname, 'r') as f:
    gcode = f.read()
  data = GcodeParser(gcode)
  return max(x.params["X"] if "X" in x.params else 0 for x in GcodeParser(gcode).lines )

def max_y(fname):
  with open(fname, 'r') as f:
    gcode = f.read()
  data = GcodeParser(gcode)
  return max(x.params["Y"] if "Y" in x.params else 0 for x in GcodeParser(gcode).lines )

print("max x", max_x(sys.argv[1]))
print("max y", max_y(sys.argv[1]))
