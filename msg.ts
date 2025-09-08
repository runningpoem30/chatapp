// people should be 
// upvote questions 
// most upvotes -> admins
// // we are building a real time chat
// // built using http 
// // simple websocktes server  , we dont need a distributed websocket server 


// connection
// websocket is a computer communications protocol








// this is called type inference , it gets the type
// ts doesnt understand your code ,it only understands the type
//create a function that takes another function as input and runs it after 1 seco



// this is how you give type to a function 
// passing an argument 
// things can be infered



//understanding interfaces 
// how can you assign types to objects ? 


// interfaces basically describe how you assign types to objects
//to create a type of an object
// combining multiple things in one object


interface User { 
    firstname : string ; 
    lastname : string ;
    email : string ;
    age : number
}




function isLegal(user: User){
  if(user.age > 18){
    return true; 
  }

  else {
    return false;
  }
}


const legal = isLegal({
    firstname : 'arya',
    lastname : 'fsdf',
    age : 32,
    email : 'dgffdgfdg'
})





if(legal){
    console.log("this legal nig")
}

interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

// class Employee implements Person {
//     name: string;
//     age: number;

//     constructor(n: string, a: number) {
//         this.name = n;
//         this.age = a;
//     }

//     greet(phrase: string): void {
//         console.log(`${phrase}, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// const a = new Employee("harkirat", 23);
// a.greet("Hello"); // Output: Hello, my name is harkirat and I am 23 years old.


// how do we do classes in js , like we dont need o write the name and age before contructor right , can oyu please explain everything

// interface User{
//   age : number
// }

// interface Manage extends User{
//   name : number;
// }

// interface Employee extends User{
//   name : string;
// }



function myFunction(cb1: () => void , cb2 : (number:string ) => number) : string {
  cb1();
  cb2("");

  return "1";
}


function first() : any{
  console.log("first")
}


function second() : any{
  console.log(
    'secnd'
  )
}

myFunction(first , second);


interface Manager {
  name : string
}

interface Techlead {

}




// what are types 

//very similar to interface ,it lets you aggegate data together

type User2 = {
  firstName : string;
  lastname : string;
}


interface User3 {
  firstname : string;
  lastname : string;
}


// unions 
type StringOrNumber = string | number;


type greetArg = number | string
function greet(id: greetArg){

}

greet(1);
greet("1")


// intersection
// every property of multiple ->

type Employee = {
    name : string ;
    startDate : Date;
  }

interface Manager{
  name : string;
  department : string;
}

type Techleadd = Employee & Manager

const te: Techleadd = {
  name : "har",
  startDate : new Date(),
  department : "rfs"
}
// 


// strongly typed vs loosely typed
// it is just a syntactical superset of javascript and its optional typing
// the tsc compiler -> ts code to js command 
// number , string , boolean
// unions and intersection 
// how to write array in ts 



// what are enums 
// ts feature that allows you to define a set of named constants
// up , down , right or left 



type keyInput = "up" | "down" | "left" | "right"

enum Direction{
  Up = 1, 
  Down ,
  Left  , 
  Right
}

function doSomething(keyPressed: Direction){
  // do something 

  if(keyPressed == Direction.Up){
    console.log("this is up button being pressed ")
  }
}


doSomething(Direction.Up);



// that you can do this in input 
// one way to get rid of the problem 


// its just a virtual concept , enums have no wajood



console.log(Direction.Up)
console.log(Direction.Down)
console.log(Direction.Left)
console.log(Direction.Right)



// what if you want to change the values 


const express = require("express")
const app = express()


enum ResponseStatus{
  Success = 200,
  NotFound = 404 , 
  Error = 500
}





/// most interesting and hard concept of generics
/// exist in c++ as well



function firstEl<T>(arr : T[] ) : T{
    return arr[0];
}
const value = firstEl<string>(["harkirat" , "singh"]);
console.log(value.toUpperCase())

// ideally this should not be an error
/// sending mixed bag in array - strings and numbers 
// should  take only one type of datatype 




// generics

function identity<T>(arg: T) : T{
  return arg;
}

//<T> => this means the function can be called with anything '
// this is a generic function 
// i am calling this with t set to something 
let output1 = identity<string>("mystring");
<string> here is a template ,which basically means what you are giving to the funciton as an input
let output2 = identity<number>(100);




output1.toUpperCase();




// ts folows es6 , 

import express from "express"



const a = 1;
export default a ; 

// import React , {useEffect , memo } from "react"