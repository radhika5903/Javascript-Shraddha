//printing 
console.log("hello");
console.log('My name is Radhika');
console.log("nice to meet you")

//declaring variables
name = 'Radhika';
//console.log(name);
age = 24;
price = 11.34;
name = 34
console.log(name);//output=34 , updated value
isFollow = true;
x = null
console.log(x)
y = undefined;
console.log(y)

//variables rules
// r1i=123;
// console.log(i1i) //output error
// $$arr = 67;
// console.log($$arr)//output 67

// //keywords let var const
// var a = 56;
// var a = 560;
// var a = 5612;
// console.log(a); //output 5612

// let a = 45; 
// console.log(a)  //output 45
//  let a;
// console.log(a)  //output undefined
// let a = 67;
// console.log(a) //output error
// {
//     let a = 67;
//     console.log(a) //output 67
// }
// {
//     let a = 6798;
//     console.log(a) //output 6798
// }

// const a = 23;
// console.log(a)  //output 23
// const a;
// const a = 2378;
// console.log(a) //output error

{
    const a = 67;
    console.log(a) //output 67
}
{
    const a = 6798;
    console.log(a) //output 6798
}

//Data types 
//PRIMITIVE
let b = 45.34;
console.log(typeof b)
isFollow = true;
console.log(typeof isFollow)
name = 'Radhika';
console.log(typeof name)
x = null
console.log(typeof x)
 let a;
console.log(typeof a)
let c = Symbol("hi!");
console.log(typeof c)
let d = BigInt("123");
console.log(typeof d)

//NON PRIMITIVE
const student = {
    name : "Sangeeta",
    age : 60,
    status : "married", 
};
console.log(student)
console.log(typeof student)
console.log(student.age)
console.log(student["name"])
student["age"] = student["age"] +1;
console.log(student.age)
student["name"] = "Radhika";
console.log(student["name"])



