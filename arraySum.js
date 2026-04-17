//Implement a JavaScript function to find the sum of all elements in an array recursively.
const add=(number)=> {
  if(number.length===0) return 0
  return number[0]+ add(number.slice(1))
}
