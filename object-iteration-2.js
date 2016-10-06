// ---------------------------------------
// EXERCISE : objectSlice()
//  (taking an object and an array of keys and returning a smaller object)
// ---------------------------------------
// Write an `objectSlice` function that takes an object and an array of property names
// and returns an object with properties and values whose keys correspond to the array
// of property names

var objectSlice = function(){}



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

//EXAMPLE:
// ----------------------------------
// objectSlice(fatObject, ['name', 'gender', 'occupation'])
// => {
//    name: 'Tanya Underboo',
//    gender: 'female',
//    occupation: 'dentist'
// }

var slimObject1 = objectSlice(largeObject, ['name', 'ss', 'dob'])
console.assert( typeof slimObject1.name !== 'undefined'  )
console.assert( typeof slimObject1.ss !== 'undefined'  )
console.assert( typeof slimObject1.isActive === 'undefined'  )

var slimObject2 = objectSlice(largeObject, ['name', 'gender', 'isActive', 'siblings'])
console.assert( typeof slimObject2.name !== 'undefined'  )
console.assert( typeof slimObject2.gender !== 'undefined'  )
console.assert( typeof slimObject2.siblings !== 'undefined')
console.assert( typeof slimObject2.ss === 'undefined'  )
console.assert( typeof slimObject2.hobbies === 'undefined'  )
