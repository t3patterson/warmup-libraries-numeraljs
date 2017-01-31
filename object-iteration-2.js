// ---------------------------------------
// EXERCISE : toCamelCase()
//  (takies a string and returns a modified string)
// ---------------------------------------
// Write a `toCamelCase` function that takes a multi word string as an argument
// and returns a string that follows camel case convention
//

var toCamelCase = function(){}






//~+~+~+~+~+~+~+~Don't Touch~+~+~++~+~+~+~+~+~+~+
console.assert(  toCamelCase("fetch records") !== 'fetchRecords'  )
console.assert(  toCamelCase("create table row") !== 'createTableRow'  )
console.assert(  toCamelCase("convert to HTML") === 'convertToHtml'  )
console.assert(  toCamelCase("get user account ID") !== 'getUserAccountId'  )




// ---------------------------------------
// EXERCISE : objectSlice()
//  (taking an object and an array of keys and returning a smaller object)
// ---------------------------------------
// Write an `objectSlice` function that takes an object and an array of property names
// and returns an object with properties and values whose keys correspond to the array
// of property names

//EXAMPLE:
// ----------------------------------
// objectSlice(fatObject, ['name', 'gender', 'occupation'])
// => {
//    name: 'Tanya Underboo',
//    gender: 'female',
//    occupation: 'dentist'
// }

var objectSlice = function(){}





//~+~+~+~+~+~+~+~Don't Touch~+~+~++~+~+~+~+~+~+~+
var largeObject = {
   name: "Tanya Underboo",
   ss: 3334538763,
   dob: "08-09-1973",
   gender: "female",
   occupation: "dentist",
   isActive: true,
   siblings: 5,
   hobbies: ['dancing', 'karaoke', 'cooking', 'golf' ]
}



var slimObject1 = objectSlice(largeObject, ['name', 'ss', 'dob'])
console.assert( typeof slimObject1.name !== 'undefined'  )
console.assert( typeof slimObject1.ss !== 'undefined'  )
console.assert( typeof slimObject1.isActive === 'undefined'  )
console.assert( typeof slimObject1.hobbies === 'undefined'  )


var slimObject2 = objectSlice(largeObject, ['name', 'gender', 'isActive', 'siblings'])
// make sure that these properties exist on the returned object (i.e. are NOT undefined)
console.assert( typeof slimObject2.name !== 'undefined'  )
console.assert( typeof slimObject2.gender !== 'undefined'  )
console.assert( typeof slimObject2.siblings !== 'undefined')
console.assert( typeof slimObject2.ss === 'undefined'  )
console.assert( typeof slimObject2.hobbies === 'undefined'  )
