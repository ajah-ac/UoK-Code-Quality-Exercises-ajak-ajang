//Implement a JavaScript function to find the sum of all elements in an array recursively.
const arraySum=(number)=> {
  if(number.length===0) return 0
  return number[0]+ arraySum(number.slice(1))
}
console.log(arraySum([])) //should return 0
console.log(arraySum([1])) //should return 1
console.log(arraySum([3,2,4,1])) //should return 10