// ---------------------------------------
// EXERCISE : toCurrency()
//  (array of numbers to currency strings)
// ---------------------------------------
// Write a `toCurrency` function that takes an array of numbers
// and returns an array of currency strings. You should use the
// numeral library to convert the numbers to the appropriate
// currency format.

function toCurrency(){

}

let transactions = [8462.43224, 32192, 663.8, 3221.3222, 13.45]


console.assert( toCurrency(transactions)[0] === '$8,462.43' )
console.assert( toCurrency(transactions)[1] === '$32,192.00')
console.assert( toCurrency(transactions)[2] === '$663.80')
