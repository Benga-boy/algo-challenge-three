function extractEachKth(inputArray: number[], k: number): number[] {
  // let newArr = []

  // for (let i = 0; i < inputArray.length; i++) {
  //   if (inputArray[i] % k !== 0) {
  //     newArr.push(inputArray[i])
  //   }
  // }

  // return newArr

  return inputArray.filter(num => num % k !== 0)
  

}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));


export function factorializeANumber(num: number): number {

  const nums: number[] = []

  for (let i = 1; i <= num; i++) {
    nums.push(i)
  }

  return nums.reduce((acc, num) => acc * num)
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));

function sortByLength(inputArray: string[]): string[] {
  return inputArray.sort((a, b) => a.length - b.length)
}

console.log(sortByLength(["abc",
"",
"aaa",
"a",
"zz"]));


function evenDigitsOnly(n: number): boolean {
  return n.toString().split('').every(num => parseInt(num) % 2 === 0)
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));

function extractMatrixColumn(matrix: number[][], column: number): number[] {
  return matrix.map(arr => arr[column])
}

console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));


function houseNumbersSum(inputArray: number[]): number {
  const zeroIndex = inputArray.findIndex(num => num === 0)

  let total = inputArray.slice(0, zeroIndex)



  return total.reduce((a, b) => a + b)

}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));


function findEmailDomain(address: string): string {
  return address.split('@').filter(email => email.includes('example')).join('')
}

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org'));