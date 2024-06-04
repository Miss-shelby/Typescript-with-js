// console.log('hello world');
// let age:number = 20;
// if (age < 50)
//     age += 10;
// console.log(age);
let sales:number = 123_456_789;
let course:string = 'Typescript';
let is_published:boolean = true;
//any 
let level:any;
level = 1;
level ='beginner'

function render(document:any){
console.log(document);
}

//arrays
//we can expilicitly specify array accept only number
let numbers:number[]=[1,2,3,4]
//to use empty array we can state it below

let number :number[]=[]
number[0]=2
number[1]=4

numbers.forEach(n => n.toFixed)//brings out auto completion because it already knows that n type is number


//tuples:tuple is a fixed length array with different data types inside,always restrict your tuples to two values
let user :[number,string]=[23, 'Ammie'];
user[1].length;

//enums: its a list of related constants
// const small = 1;
// const medium = 2;
// const large =3;

//we can group the above using enum and pascal naming convention
const enum Size {Small=1,Medium,Large}
//when you give the small 1,the compiler gives the others 2,3 respectively,

// it works for numbers only when you give the first one a string you must specify for others 
// enum Size {Small='s',Medium ='m',Large='l'}

//to use our enum we can create a variable and assign its value to it

let mySize:Size = Size.Medium;
console.log(mySize);

//FUNCTIONS:always annotate your functions,if you dont specify whatit returns it becomes void 
// here the income accept number types and the function return type of number,you can use void if your function is nt returning a value 

// function calculateTax(income:number,taxYear?:number):number{
//  let x;
// if (taxYear < 2022)
//     return income *1.2;
// return income *1.3
// }
// calculateTax(10_000)
//add ? to make argument optional
function calculateTax(income:number,taxYear?:number):number{
    // let x;
   if ((taxYear || 2022) < 2022)
       return income *1.2;
   return income *1.3
   }
   calculateTax(10_000)


//OBJECTS
// declaring objects in typescript,we add readonly property to object property we dont want to modify
let employees:{
    readonly id:number,
    name:string,
    retire :(date:Date)=> void
} = {
    id:1,
     name:'cynthia',
     retire:(date:Date)=>{
    console.log(date);   
}}

//ADVANCED TYPES 
// we  use type alias to define a custome inorder to obey the dry principle
type Employee={
    readonly id:number,
    name:string,
    retire :(date:Date)=> void
}
let employee:Employee = {
    id:1,
     name:'cynthia',
     retire:(date:Date)=>{
    console.log(date);   
}}

type User={
    name:string,
    id:number,
    age:number,
    isDiligent:boolean,
    calculateBirthday:(dob:number)=>void
}
let worker:User={
    name:'cynthia',
    id:1,
    age:23,
    isDiligent:true,
    calculateBirthday:(dob)=>{
        console.log(dob);
        
    }
}
worker.calculateBirthday(1999)
//UNION TYPES: in union types a variable can have more than one type
function kgToLbs(weight:number | string):number{
    //narrowing:to naarow down the union type into a more specific type
if(typeof weight === 'number'){
   return  weight * 2.2
} else 
return parseInt(weight) * 2.2
    
}
kgToLbs(10)
kgToLbs('10kg')

//INTERSECTION: we use to combine to types

type Draggable={
    drag:()=> void
}
type Resizable ={
    resize:()=> void
}

type UIWidget = Draggable & Resizable;
let textBox: UIWidget ={
    drag:()=>{},
    resize: ()=> {}
   
}


//literal (exact,specific),if you out in another value it will throw error


type Quantity = 50|100;
let quantity:Quantity = 100

type Metric ='cm'| 'mm'
let measurement:Metric = 'cm'

//Nullable Types:we cant use nulls or undefined else we have to sepecify using the union type operator

// function greet(name:string ){
//     console.log(name.toUpperCase());
    
// }
// greet(null)
 //the above code will throw error,here is the revised code,so here we can either pass name value,undefined or null as the argument to the function
 //when we pass in what is not the name value we log holla which is our else statement

 function greetUser(name:string | null | undefined):any{
    if (name){
        console.log(name.toLowerCase());
        
    }else{
        console.log("Holla ");
        
    }
 }
 greetUser('dave')

 //optional chaining 
 type Customer = {
    birthday:Date
 }
 function getCustomer(id:number): Customer | null{
    return id === 0? null :{birthday:new Date()}
 }
 let customer = getCustomer(0)
 console.log(customer?.birthday);
 

//  In TypeScript, generics provide a way to create reusable components that work with a variety of data types. 
//They allow you to define functions, classes,
//Basically they allow us to create a custom data type rather than a specific one
// and interfaces that can work with any data type, rather than a specific one e.g

interface Car<T,U>{
    model:T;
    year:U;

}
const favouriteCars:Car<string,Number>={
model:'Benz',
year:2024
}
interface Cars<T>{
    model:T;
    years:T;

}
const favouriteCars2:Cars<string>={
model:'Benz',
years:'2024'
}