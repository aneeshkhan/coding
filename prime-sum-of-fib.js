function isPrime(number){
    if(number === 2){
        return true;
    }
    const sqrt = Math.sqrt(number);
    for(let i=2; i<= sqrt; i++){
        if(number % i === 0 ){
            return false
        }
    }
    return true;
}
function sumOfPrimeFib(limit){
    
    let sum = 0;
    let previous = 1;
    let current = 1;
    let next =2;
    let bumberOfPrime = 0
    let primeNumber = []
    while(current<=limit){
        next = previous + current;
        previous = current;
        current = next;
        if(isPrime(current)){
            sum = sum + current;
            bumberOfPrime++
            primeNumber.push(current)
        }
    }
    
    return [bumberOfPrime,sum , primeNumber]
}

console.log(sumOfPrimeFib(20))
