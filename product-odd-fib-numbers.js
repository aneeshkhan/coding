function productOddFibNumber(limit){
    let previous = 1;
    let current = 1;
    let next = 2;
    let product = 1;
    while(product+current< limit){
        console.log(current)
        next = previous+current;
        if(current % 2 !== 0){
            product *= current;
        }
        
        previous = current
        current = next
    }
    return product;
}
console.log(productOddFibNumber(50))
