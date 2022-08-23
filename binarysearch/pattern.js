/**

1. Pattern

This is a unique form of binary search. It uses the current index and its immediate left and right neighbors’ indices in the array.

Let’s list the essential points of the algorithm and understand each one of them.

**/

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

/**

Let’s list the essential points of the algorithm and understand each one of them.

Line 1: We take 0 as our left index.

Line 2: We will take the size of the array as our right index. Hence, we will need to be careful with the right one when we check the item on this index.

Line 4: The while loop finishes when there is no element between the left and right ones. Thus, if there is one element in the array, we will skip the loop.

Line 14: We must check the element on the left index outside the loop because if we skip the loop, it can become the target.

**/