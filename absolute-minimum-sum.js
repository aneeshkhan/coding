function minimumAbsoluteSum(input){
    
    let a = 0; 
    let b= 1;
    let sum = Math.abs(input[a] + input[b]);
     
    for(let i= 0; i< input.length-1; i++){
        for(let j=i+1; j<input.length;j++){
            
            if(Math.abs(input[i] + input[j]) < sum){
                a= i;
                b= j;
                sum = Math.abs(input[i] + input[j])
            }
        }
    }
    return [input[a] , input[b]]
}
console.log(minimumAbsoluteSum([-6, -5, -3, 0, 2, 4, 9]))
