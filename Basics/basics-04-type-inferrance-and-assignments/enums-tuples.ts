//////// Tuple
//  tupe is a fixed length array that has sll sprcifiv type elements
// This type is not inferrred by typescript automatically

// tuples are defined by using the below mentioned syntax
// array wihth only two elements first elem a number and the second elem as a string

const person : {
    name: string,
    age:number,
    hobbies: string[]
    roles: [number, string]
}  = {
    name:"harry",
    age:10,
    hobbies:["cycling", "reading"],
    roles:[2,"author"]
}

// // Errors caught
person.roles[0] = "str"
person.roles = [1,"d"]
person.roles = [1,"d",5]

// // But error with the push is not caught
person.roles.push("Hello")

console.log(person)


// ////////////////////// ENUMS ////////////////////////////
const person : {
    name: string,
    age:number,
    hobbies: string[]
    roles: [number, string]
}  = {
    name:"harry",
    age:10,
    hobbies:["cycling", "reading"],
    roles:[2,"author"]
}

// Suppose we have some role codes lets say ADMIN is 1 CUSTOMER is 2 and SUPER_ADMIN is 0 there are two problems we face
// 1) If we are useing these strings directly eg admin customer and super_admin then we have to remember all the types of the login person and no spelling mistakes are allowed anywhere in the code for that we can use
const ADMIN = 1
const CUSTOMER = 2
const SUPER_ADMIN = 0
// 2) But if we mistakenly take 4 for some type that doesnt exists
// Its is a custom type so for convention we use First letter capital
// semicolor is important
// we can have any type of values asssigned to the enums 
// automatically form 0 to length-1 are provided as the vaues

enum Role {
    SUPER_ADMIN, ADMIN, CUSTOMER=1000, READ_ONLY
};

person.roles = [Role.SUPER_ADMIN, "dhoulf r"]

console.log(person)