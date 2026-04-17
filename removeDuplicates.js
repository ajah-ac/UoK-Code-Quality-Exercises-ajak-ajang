//Implement a JavaScript function to remove duplicate elements from an array.

const removeDuplicates=(array)=>{
return [...new Set (array)]
}
console.log(removeDuplicates([1,1,2,3,4,'a','a'])) //should return [ 1, 2, 3, 4, 'a' ]
