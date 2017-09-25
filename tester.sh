#!/bin/bash
TEST_FILE=$1
THRESH=$2
IFS=','
while read zoro Filebytes Entropy ChiSquare Mean MonteCarloPi SerialCorrelation; do
 # echo "$zoro $Filebytes $Entropy $ChiSquare $Mean $MonteCarloPi $SerialCorrelation"
export zoro=$zoro
export Filebytes=$Filebytes
export Entropy=$Entropy
export ChiSquare=$ChiSquare
export Mean=$Mean
export MonteCarloPi=$MonteCarloPi

SerialCorrelation"
 if ! [[ $(echo "$Entropy > $THRESH" | bc) -gt "0" ]] ; then
   echo -n "Entropy too low at"
   echo $Entropy
   exit 1
 else
    echo Entropy is high enough at $Entropy
    exit 0
 fi
done < $TEST_FILE
