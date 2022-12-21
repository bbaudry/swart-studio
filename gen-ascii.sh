#!/bin/bash
#this script generates a random, one-liner ascii art string and uses it as commit message
#in commit-bra, bra stands for bash random ascii (art)

#generate random string of nice ascii characters
chars=°.[]-{+}*
for ((i=0;i<4;i++)); do 
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
echo $ascii_arts
