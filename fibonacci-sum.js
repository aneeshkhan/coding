function getEvenFibSum(threshold){
    
    let sum = 0;
    let previous = 1;
    let current = 2;
    
    while(sum+current <= threshold){
        
        if(current % 2 === 0){
            sum = sum+current
        }
        //console.log( current)
        
        const next = previous+current;
        previous = current;
        current = next;
    }
    return sum;
}
const result = getEvenFibSum(4000000);
console.log('result : ',result)
