
function changeCoin(primeArray, number){
    
    const dp = new Array(number+1).fill(0);
    dp[0] = 1;
    
    for(let i = 0; i< primeArray.length; i++){
        
        for(let j = primeArray[i]; j<= number; j++){
            
            dp[j] += dp[j- primeArray[i]]
        }
    }
    
    return dp;
}

function isPrime(number){
    if(number === 2){
        return true
    }
    const sqrt = Math.sqrt(number)
    
    for(let i=2; i<= sqrt; i++){
        if(number % i ===0){
            return false;
        }
    }
    return true;
}

function getPrimeNumbers(limit){
    const primeNumbers = [];
    for(let i = 2; i<limit; i++){
        if(isPrime(i)){
            primeNumbers.push(i)
        }
    }
    return primeNumbers;
}
const limit = 10
const primeNumbers = getPrimeNumbers(limit)
console.log("prime numbers: ", primeNumbers)
const dpResult = changeCoin(primeNumbers,limit);

console.log(dpResult)
