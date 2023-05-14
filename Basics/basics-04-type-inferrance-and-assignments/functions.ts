// ///////// FUNCTIONS ////////////////////
// 1) every function also has a return type 
// 2) this type can be set ecplicitly and ts also can infer the return type by itself

const add = (in1:number, in2:number): number=>{
    return in1+in2
}

// If we dont add the return type explicitly then ts infers it from the code
const add1 = (in1:number, in2:number)=>{
    return in1+in2
}

console.log(add(1,10))

// ////////////////////// VOID TYPE ////////////////////////////
// We can not set the return type of a functon to undefined which is returned by js when function doesnt retyr anything
//  If function not returns anything you can not set the type to undefined because nothing is returned
const add3 = (in1:number, in2:number): undefined=>{
    console.log(in1+in2)
}

const add4 = (in1:number, in2:number): undefined=>{
    // if we have some returns then return can be set as undefined
    return in1+in2
}

const add5 = (in1:number, in2:number): undefined=>{
    return
}

const add6 = (in1:number, in2:number): void=>{
    return
}

// So basically always use a void if nothing is to be returned

// and undefined is a valid type in TS
let num : undefined


///////////////////////////////////////////////////////////////////////////////////
// ///////////////////////// FUNCTION AS A TYPE /////////////////////////////////

let combineValues;
combineValues = add
// We can use it as a function now
//1) but still the type is any and if we assign it some str
combineValues = "harry"
// Then no error is detected not even in compilation

console.log(combineValues(1,9))

// We can have a Function type assined to any value
let combineValues1 : Function
combineValues1 = add
// NOw it will give the error needed
combineValues1 = 7

// 2) Still we can assign it any function and not every functions receive the same parameters
//  we want thet combineValues1 takes two numbers and then return a number 
//  we can use function type notations with that

let combineValues2: (a:number, b:number)=>number
combineValues2 = add
// Now we can not assign it some other functions
combineValues2 = console.log



// ///// CALLBACK FUNCTION //////

const addAndHandle = (n1: number, n2:number, cb:( a:number ) => void )=>{
    const result = n1+n2
    cb(result)
}

// Now we are defining that the callback must have one param of type number and will return void 
// however we can return any value from this callback being passed
//  but the type signifies that the function wont do anything with it

// Here in tthe function typescript already knows that the num will be of type number
addAndHandle(10,20,(num) => console.log(num))
