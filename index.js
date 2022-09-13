function hasTargetSum(array, target) {
  //iterate through each number one at a time starting with the first
//  const equals = (element) => {
//   console.log(element)
  const equals = () => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j]=== target) {
       return true
      }
    //  return array[i] + array[j] === target
  //   // look through the rest of the numbers
  //   let total = array[i] + array[j] === target
  //   // console.log(total)
    
    
  }
 
}
  }
 return array.some(equals)

}

// hasTargetSum([1, 2, 3], 6)

/*
 ```
PROBLEMS:
how to get single output 
how to iterate till true and only give single output at the end
 */




/* 
The function should return true if any pair of numbers in the array adds up to the target number

  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  if i + j === targer .some() should return true
  // or do a .forEach() 
  iterate through the numbers giving the first the value of i and the value of j should iterate 
  how to return false after iterator?  
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
