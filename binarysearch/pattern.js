/**
 * 1. Pattern#
This is a unique form of binary search. It uses the current index and its immediate left and right neighbors’ indices in the array.

Let’s list the essential points of the algorithm and understand each one of them.
 * 
 */

// Pseudocode 

left = 0
right = size of array

while (left + 1 < right)
  mid = (left + right) / 2

  if (array[mid] == target)
    return mid
  else if (array[mid] < target)  
    continue search in right side  
  else  
    continue search in left side

if (array[left] == target)
  return left

return -1