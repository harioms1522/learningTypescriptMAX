const person = {
    name: "Hariom",
    age: 20
}

// In the above case we can see that the type of the object is also inferred (Hover)
// const person: {
//     name: string;
//     age: number;
// }

// Nested types
const lead =  {
    id:"456",
    bonus:[1,2,3],
    bankDetails:{
        name:"PNB",
        creds:{
            id:12,
            notes:[12,23,34]
        }
    }
}

// This will be the type inferred from the initialization
// const lead: {
//     id: string;
//     bonus: number[];
//     bankDetails: {
//         name: string;
//         creds: {
//             id: number;
//             notes: number[];
//         };
//     };
// }

// suppose we assign the type object to the person then typescript only nows about the main obj var
const personGen : object = {
    name: "Hariom",
    age: 20
}
// This is still showing as error and will give error at compilation
console.log(personGen.name)


// defining the object type explicitly that can be used when we are not initializing the variable
let personExplicitType : {
    name:string, 
    age: number
};
personExplicitType = {name:"hariom", age:40}


//// Safety provided by TS
// 1) We get error for properties not available in object
console.log(person.lastName)

// 2) We can not add a new property to it without changing the type of the object
personExplicitType.firstName = "punni"

// 3) when initalizing an object we have to pass all the props according to the object type assigned
personExplicitType = {name:"kala"}
