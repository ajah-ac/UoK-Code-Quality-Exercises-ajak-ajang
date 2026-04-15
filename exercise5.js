function calculateFactorial(n) {if (n === 0 || n ===1)return 1
return Array.from({length:n},(_,i)=>i+1).reduce((a,c)=>a*c,1)
  }
