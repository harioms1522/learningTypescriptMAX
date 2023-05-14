// can determine the array type for any variables
// and the types of the element can be dynamic or specifica as well

const person = {
    name:"hariom",
    hobbies:["sports","reading"]
}

// implicitly string array is determined for hobbies
// const person: {
//     name: string;
//     hobbies: string[];
// }

// Can also determine the array types  explicitly
let activities: string[]
// Safety provided
activities = 1
activities = 'hariom'
activities = [1,"haiom"]

activities = ["hario", "back"]
console.log(activities)

// We can use any[] type to determine that we can have an array of any types
// but that should not be used
let activities2 : any[]
activities2 = ["hariom", 1]
console.log(activities2)

let activitiesDetails : object[]
activitiesDetails= [{name:"singing"}]
console.log(activitiesDetails)

// Benefits of having an specific type of array items
// 1) we get to know the actula methods and other support inside the loops for items of an array
for(let hobby of person.hobbies){
    // st we get the autocomplete for string methods
    console.log(hobby.toUpperCase())
    // this will give error it we mistakenly 
    hobby.map()
}




