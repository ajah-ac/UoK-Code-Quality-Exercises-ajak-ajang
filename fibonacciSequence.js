/* Implement a JavaScript function to calculate the Fibonacci sequence up to a given number. */
function fibonacci(n){
const fib=[0,1]
for(let i=2;i<=n;i++){
  let nums=fib[i-1] +fib[i-2];
  fib.push(nums)
  }
  return fib
}