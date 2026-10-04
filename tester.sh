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

  export SerialCorrelation=$SerialCorrelation
  
  if command -v bc >/dev/null 2>&1; then
    is_high=$(echo "$Entropy > $THRESH" | bc 2>/dev/null)
  else
    is_high=$(awk -v e="$Entropy" -v t="$THRESH" 'BEGIN {print (e > t) ? 1 : 0}')
  fi

  if [[ "$is_high" -ne 1 ]]; then
    echo "Entropy too low at $Entropy (threshold: $THRESH)"
    exit 1
  else
    echo "Entropy is high enough at $Entropy (threshold: $THRESH)"
    exit 0
  fi
done < "$TEST_FILE"
