#!/bin/bash
#this script generates a random, one-liner ascii art string
#BRA stands for bash random ascii (art)

#if you pass a number as argument, it is half the size of the generated string; 
#else default is 4
if [ -z "$1" ]; then size=4;
else size=$1;
fi

#generate random string of nice ascii characters
chars=°.[]-{+}*
for ((i=0;i<$size;i++)); do 
	rand_str="${chars:RANDOM%${#chars}:1}"$rand_str
done

#get the string with characters in reverse order
copy=$rand_str
len=${#copy}
for ((i=$len-1;i>=0;i--)); do 
	if [ "${copy:$i:1}" = '[' ]; then rev_str="$rev_str]"; 
	elif [ "${copy:$i:1}" = ']' ]; then rev_str="$rev_str["; 
	elif [ "${copy:$i:1}" = '{' ]; then rev_str="$rev_str}"; 
	elif [ "${copy:$i:1}" = '}' ]; then rev_str="$rev_str{"; 
	else
	rev_str="$rev_str${copy:$i:1}";
	fi
done

#compose the final ascii art string
ascii_art="$rand_str><$rev_str"
echo  $ascii_art
