const input =   [ 10, 68, 75, 7, 21, 12  ]

console.log(input)

const result = findLargetNumber(input)
console.log(result)
function findLargetNumber(input){
    stringInput = input.map((num)=>{
        return num.toString()
    })
    console.log(stringInput)
    const sortedNumber = stringInput.sort((a,b)=>{
        return ((b + a) - (a + b))
    })
    console.log(sortedNumber)
    return sortedNumber.join("")
}
