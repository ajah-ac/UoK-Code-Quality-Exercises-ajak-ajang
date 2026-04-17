//Implement a JavaScript function to remove duplicate elements from an array.
const removeDuplicates=(array)=>{
return [...new Set (array)]
}
console.log(removeDuplicates([20,1,4,4,5,6]))
