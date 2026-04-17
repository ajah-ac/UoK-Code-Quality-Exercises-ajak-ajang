/// Write a function(s) that checks the level of nesting of an array. 
// Then, use that function to flatten the array into a single-dimensional array.
const  getLevel=(arr)=>{
    if (Array.isArray(arr)){
        let higherDepth = 0;
        for (const el of arr) {
            const depth = getLevel(el)
            if (depth > higherDepth)
                higherDepth = depth
        }
        return 1 + higherDepth
    }
    return 0
}
const flatten=(array)=> array.flat(getLevel(array))

console.log(flatten([[1, 2, 4], [1, 3, 4]]))
