#!/bin/bash
# Script Name: renew.sh
# Description: this script generates two random numbers and saves them in a file
# Author: almyre

echo $((1 + $RANDOM % 100000))
rs=$((1 + $RANDOM % 100000))
ns=$((1 + $RANDOM % 100000))
filewithdate="$(date).json"
fileseeds="seeds.json"
printf "{\"randomseed\": $rs,\"noiseseed\": $ns}" > "${filewithdate}"
printf "{\"randomseed\": $rs,\"noiseseed\": $ns}" > "${fileseeds}"