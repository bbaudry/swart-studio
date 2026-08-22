#!/bin/bash
# Script Name: renew.sh
# Description: this script generates two random numbers and saves them in a file
# Author: almyre

rs=$((1 + $RANDOM % 100000))
ns=$((1 + $RANDOM % 100000))
filewithdate="/home/benoit/Documents/Projets/swart-studio/p5-experiments/gen42/$(date).json"
fileseeds="/home/benoit/Documents/Projets/swart-studio/p5-experiments/gen42/seeds.json"
printf "{\"randomseed\": $rs,\"noiseseed\": $ns}" > "${filewithdate}"
printf "{\"randomseed\": $rs,\"noiseseed\": $ns}" > "${fileseeds}"