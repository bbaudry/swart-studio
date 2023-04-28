import glob
import os
import sys
import random
import time

crewfile = open(sys.argv[1],'r')
asciiart =  [':',':',':',':',':']
asciichars = ['°','+','-','_','*','.']

def mutateart():
    i = random.randint(0,len(asciiart)-1)
    j = random.randint(0,len(asciichars)-1)
    asciiart[i] = asciichars[j]
    ''.join(asciiart)

for line in crewfile:
    l = line.strip()
    x=l.partition(",")
    if x[1]==",":
        print(x[0].rjust(42)+''.join(asciiart)+x[2].ljust(42))
    else:
        print(x[0])
    mutateart()
    time.sleep(0.42)