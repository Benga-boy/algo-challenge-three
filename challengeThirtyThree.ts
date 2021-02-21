// Given a sorted integer array that does not contain any duplicates, return a summary of the number ranges it contains.

// Example

// For nums = [-1, 0, 1, 2, 6, 7, 9], the output should be composeRanges(nums) = ["-1->2", "6->7", "9"].
function composeRanges(nums: number[]): string[] {

  if (nums.length < 1) {
    return []
  }

  const newArr: any[] = [{start: nums[0], end: nums[0]}]

  for (let i = 1; i < nums.length; i++) {
    if (newArr[newArr.length - 1].end + 1 === nums[i]) {
      newArr[newArr.length - 1].end = nums[i]
    } else {
      newArr.push({start: nums[i], end: nums[i]})
    }
  }

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].start !== newArr[i].end) {
      newArr[i] = `${newArr[i].start}->${newArr[i].end}`
    } else {
      newArr[i] = newArr[i].start.toString()
    }
  }

  return newArr

}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));