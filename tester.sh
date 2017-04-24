#!/bin/bash
THRESH=$2
IFS=','
while read zoro Filebytes Entropy ChiSquare Mean MonteCarloPi SerialCorrelation; do
 # echo "$zoro $Filebytes $Entropy $ChiSquare $Mean $MonteCarloPi $SerialCorrelation"
 if ! [[ $(echo "$Entropy > $THRESH" | bc) -gt "0" ]] ; then
   echo $Entropy
   echo Entropy too low
 # else
   # echo Entropy is high enough
 fi
done < $1
