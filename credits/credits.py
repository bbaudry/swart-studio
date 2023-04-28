import glob
import os
import sys

crewfile = open(sys.argv[1],'r')

for line in crewfile:
    l = line.strip()
    x=l.rpartition(",")
    print(x[0].rjust(42)+"::::"+x[2].ljust(42))


