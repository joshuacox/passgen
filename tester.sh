#!/bin/bash
TEST_FILE=$1
THRESH=$2
IFS=','
while read zoro Filebytes Entropy ChiSquare Mean MonteCarloPi SerialCorrelation; do
 # echo "$zoro $Filebytes $Entropy $ChiSquare $Mean $MonteCarloPi $SerialCorrelation"
 if ! [[ $(echo "$Entropy > $THRESH" | bc) -gt "0" ]] ; then
   echo $Entropy
   echo Entropy too low
   exit 1
 else
    echo Entropy is high enough
    exit 0
 fi
done < $TEST_FILE
