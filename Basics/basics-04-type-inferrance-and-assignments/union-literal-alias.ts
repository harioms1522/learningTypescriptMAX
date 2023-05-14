// ///////////// UNION TYPES /////////////

const combine = (input1: string | number, input2: number | string)=>{
    if(typeof input1 === "number" && typeof input2 === "number"){
        return input1 + input2
    }else{
        return input1.toString() + input2.toString()
    }
}

console.log(combine(10,10))
console.log(combine("hariom ", "sharma"))

// ////////////////////// LITERAL TYPES //////////////////////////////////
const name1 = "hariom"
// see here the name1 has a type of 'hariom' these types are called literal types that can be helpful in some cases 

function combine2 (
    input1: number | string,
    input2: number | string,
    returnAs: "as-number" | "as-string"
    //NOTE: Now this new param will only take these values and no else
    // typescript will also provdide the autocomplete for it
){
    let result : number | string
    if(typeof input1 === "number" && typeof input2 === "number"){
        result = input1 + input2
    }else{
        result = input1.toString() + input2.toString()
    }

    if(returnAs==="as-number"){
        return +result
    }else{
        return result+""
    }

}

console.log(combine2(1,2,"as-string"))
console.log(combine2(1,2,"as-number"))
console.log(combine2("hariom","sharma", "as-number"))

// ERRORS Supported
combine2("hario","hda","string")

// //////////////////////////////// Type Aliases //////////////////////////////
// suppose we need some union type for many cases 
// or we have a certain type that we use at certain places

type CombinableStrAndNum = number | string
type CombinationResultShow = "as-number" | "as-string"

function combine3 (
    input1: CombinableStrAndNum,
    input2: CombinableStrAndNum,
    returnAs: CombinationResultShow
    //NOTE: Now this new param will only take these values and no else
    // typescript will also provdide the autocomplete for it
){
    let result : number | string
    if(typeof input1 === "number" && typeof input2 === "number"){
        result = input1 + input2
    }else{
        result = input1.toString() + input2.toString()
    }
    if(returnAs==="as-number"){
        return +result
    }else{
        return result+""
    }
}

// Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

// For example:
type User1 = { name: string; age: number };
const u1: User1 = { name: 'Max', age: 30 };

// This allows you to avoid unnecessary repetition and manage types centrally.

function greet1(user: { name: string; age: number }) {
    console.log('Hi, I am ' + user.name);
}

function isOlder1(user: { name: string; age: number }, checkAge: number) {
    return checkAge > user.age;
}

// The code written above cam ne rewritten as this
type User = { name: string; age: number };
 
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}

greet({name:"hariom", age:23})

//////////////////// UNKNOWN TYPE /////////////////////////
let nameIn: unknown

// we can assign any type of variable to it
nameIn = "harry"
console.log(nameIn)

nameIn = 12
console.log(nameIn)


const otherName = "hello"
nameIn = otherName
console.log(nameIn)


//////////////////////// NEVER TYPE ///////////////
// it can be used as the function return type, which thwors error or has an infinite loop
const generateError = (msg:string, code:number) : never =>{
    throw new Error(msg + code)
    // while (true){} an infinite loop also never returns anything
}