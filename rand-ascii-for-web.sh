#!/bin/bash
chars=_-.:  
for ((i=0;i<32;i++)); 
do 
rand_str="${chars:RANDOM%${#chars}:1}"$rand_str 
rond_str="${chars:RANDOM%${#chars}:1}"$rond_str 
done 
ascii_art="$rand_str\n$rond_str\n$rond_str\n$rand_str"
echo -e $ascii_art
