#!/bin/bash
TEST_FILE=$1
THRESH=$2
IFS=','

# Fallback in case awk is missing, but it's POSIX so it shouldn't be.
while read zoro Filebytes Entropy ChiSquare Mean MonteCarloPi SerialCorrelation; do
  export zoro=$zoro
  export Filebytes=$Filebytes
  export Entropy=$Entropy
  export ChiSquare=$ChiSquare
  export Mean=$Mean
  export MonteCarloPi=$MonteCarloPi
  export SerialCorrelation=$SerialCorrelation
  
  is_high=$(awk -v e="$Entropy" -v t="$THRESH" 'BEGIN {print (e > t) ? 1 : 0}')

  if [[ "$is_high" -ne 1 ]]; then
    echo "Entropy too low at $Entropy (threshold: $THRESH)"
    exit 1
  else
    echo "Entropy is high enough at $Entropy (threshold: $THRESH)"
    exit 0
  fi
done < "$TEST_FILE"
